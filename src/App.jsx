import { useState, useEffect } from 'react'
import { COUNTRY_DATA, RACK_PRICING } from './data/countryData'
import { SKU_PRICING, RACK_COMPOSITION, generateSKU } from './data/skuData'
import CountrySelector from './components/CountrySelector'
import RackConfiguration from './components/RackConfiguration'
import AttachmentsSection from './components/AttachmentsSection'
import OrderSummary from './components/OrderSummary'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [rackQuantity, setRackQuantity] = useState(1)
  const [postType, setPostType] = useState('both') // '4_post', '6_post', 'both'
  const [height, setHeight] = useState('both') // '80', '93', 'both'
  const [color, setColor] = useState('both') // 'black', 'red', 'both'
  const [attachments, setAttachments] = useState({})
  const [rackBreakdown, setRackBreakdown] = useState([])
  const [viewMode, setViewMode] = useState('rack') // 'rack' or 'itemized'

  // Calculate rack distribution based on country preferences
  useEffect(() => {
    if (!selectedCountry || !COUNTRY_DATA[selectedCountry]) {
      setRackBreakdown([])
      return
    }

    const countryData = COUNTRY_DATA[selectedCountry]
    const breakdown = []

    // Determine post types to include
    const postTypes = postType === 'both' ? ['4_post', '6_post'] : [postType]
    
    // Determine heights to include
    const heights = height === 'both' ? ['80', '93'] : [height]

    // Determine colors to include
    const colors = color === 'both' ? ['black', 'red'] : [color]

    // Calculate distribution with fractional values first
    const fractionalBreakdown = []
    postTypes.forEach(post => {
      heights.forEach(h => {
        colors.forEach(c => {
          let quantity = rackQuantity
          
          // Apply post distribution if both types selected
          if (postType === 'both') {
            quantity = quantity * countryData.POST_DIST[post]
          }
          
          // Apply height distribution if both heights selected
          if (height === 'both') {
            quantity = quantity * countryData.HEIGHT_DIST[h]
          }

          // Apply color distribution if both colors selected
          if (color === 'both') {
            quantity = quantity * countryData.COLOR_DIST[c]
          }

          fractionalBreakdown.push({
            postType: post,
            height: h,
            color: c,
            fractionalQuantity: quantity,
            quantity: 0 // Will be set later
          })
        })
      })
    })

    // Smart rounding: ensure we don't lose racks due to rounding
    let totalAllocated = 0
    
    // First pass: round all quantities
    fractionalBreakdown.forEach(item => {
      item.quantity = Math.round(item.fractionalQuantity)
      totalAllocated += item.quantity
    })

    // If no racks were allocated but we should have some, allocate to the largest fractional value
    if (totalAllocated === 0 && rackQuantity > 0) {
      const largestFractional = fractionalBreakdown.reduce((max, item) => 
        item.fractionalQuantity > max.fractionalQuantity ? item : max, fractionalBreakdown[0])
      largestFractional.quantity = 1
      totalAllocated = 1
    }

    // Adjust to match exact total if needed
    const difference = rackQuantity - totalAllocated
    if (difference !== 0 && fractionalBreakdown.length > 0) {
      if (difference > 0) {
        // Need to add racks - add to items with largest fractional remainders
        const sortedByRemainder = fractionalBreakdown
          .filter(item => item.quantity >= 0)
          .sort((a, b) => (b.fractionalQuantity - b.quantity) - (a.fractionalQuantity - a.quantity))
        
        for (let i = 0; i < difference && i < sortedByRemainder.length; i++) {
          sortedByRemainder[i].quantity += 1
        }
      } else {
        // Need to remove racks - remove from largest quantities first
        const sortedByQuantity = fractionalBreakdown
          .filter(item => item.quantity > 0)
          .sort((a, b) => b.quantity - a.quantity)
        
        let toRemove = Math.abs(difference)
        for (const item of sortedByQuantity) {
          if (toRemove <= 0) break
          const canRemove = Math.min(item.quantity, toRemove)
          item.quantity -= canRemove
          toRemove -= canRemove
        }
      }
    }

    // Build final breakdown with only positive quantities
    fractionalBreakdown.forEach(item => {
      if (item.quantity > 0) {
        breakdown.push({
          postType: item.postType,
          height: item.height,
          color: item.color,
          quantity: item.quantity,
          unitPrice: RACK_PRICING[item.postType][item.height][item.color],
          totalPrice: item.quantity * RACK_PRICING[item.postType][item.height][item.color]
        })
      }
    })

    setRackBreakdown(breakdown)
  }, [selectedCountry, rackQuantity, postType, height, color])

  const handleAttachmentChange = (attachmentId, quantity) => {
    setAttachments(prev => ({
      ...prev,
      [attachmentId]: parseInt(quantity) || 0
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">International Rack Builder</h1>
          <p className="text-blue-200">Configure your rack order for wholesale distribution</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <CountrySelector 
              selectedCountry={selectedCountry}
              onCountryChange={setSelectedCountry}
            />

            <RackConfiguration
              rackQuantity={rackQuantity}
              postType={postType}
              height={height}
              color={color}
              onQuantityChange={setRackQuantity}
              onPostTypeChange={setPostType}
              onHeightChange={setHeight}
              onColorChange={setColor}
            />

            <AttachmentsSection
              attachments={attachments}
              onAttachmentChange={handleAttachmentChange}
            />
          </div>

          <OrderSummary
            selectedCountry={selectedCountry}
            rackBreakdown={rackBreakdown}
            attachments={attachments}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </div>
    </div>
  )
}

export default App
