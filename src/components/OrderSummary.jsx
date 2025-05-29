import { COUNTRY_DATA } from '../data/countryData'
import { SKU_PRICING, RACK_COMPOSITION, generateSKU } from '../data/skuData'
import attachmentsData from '../data/attachments.json'

function OrderSummary({ 
  selectedCountry, 
  rackBreakdown, 
  attachments, 
  viewMode, 
  onViewModeChange 
}) {
  const calculateItemizedBreakdown = () => {
    const itemizedItems = {}

    // Process each rack in the breakdown
    rackBreakdown.forEach(rack => {
      const composition = RACK_COMPOSITION[rack.postType]
      
      composition.components.forEach(component => {
        let sku
        if (component.skuTemplate.includes('{height}') || component.skuTemplate.includes('{color}')) {
          sku = generateSKU(component.skuTemplate, rack.height, rack.color)
        } else {
          sku = component.skuTemplate
        }

        // Calculate quantity and round to ensure whole numbers
        const rawQuantity = rack.quantity * component.quantity
        const quantity = Math.round(rawQuantity)
        const unitPrice = SKU_PRICING[sku] || 0

        if (quantity > 0) {
          if (itemizedItems[sku]) {
            itemizedItems[sku].quantity += quantity
            itemizedItems[sku].totalPrice += quantity * unitPrice
          } else {
            itemizedItems[sku] = {
              sku,
              description: component.description,
              quantity,
              unitPrice,
              totalPrice: quantity * unitPrice
            }
          }
        }
      })
    })

    return Object.values(itemizedItems).sort((a, b) => a.sku.localeCompare(b.sku))
  }

  const calculateTotalCost = () => {
    const rackCost = rackBreakdown.reduce((sum, item) => sum + item.totalPrice, 0)
    const attachmentCost = Object.entries(attachments).reduce((sum, [id, qty]) => {
      const attachment = attachmentsData.find(a => a.id === id)
      return sum + (attachment ? attachment.price * qty : 0)
    }, 0)
    return rackCost + attachmentCost
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Order Summary</h2>
        
        {selectedCountry && rackBreakdown.length > 0 && (
          <div className="flex bg-white/5 rounded-lg p-1 border border-white/20">
            <button
              onClick={() => onViewModeChange('rack')}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                viewMode === 'rack' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              By Rack
            </button>
            <button
              onClick={() => onViewModeChange('itemized')}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                viewMode === 'itemized' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Itemized
            </button>
          </div>
        )}
      </div>
      
      {selectedCountry && rackBreakdown.length > 0 && (
        <>
          {viewMode === 'rack' ? (
            <div className="mb-4">
              <h3 className="font-medium text-blue-200 mb-2">Rack Distribution for {COUNTRY_DATA[selectedCountry]?.name}</h3>
              <div className="space-y-2">
                {rackBreakdown.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded p-3 text-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color === 'black' ? 'bg-gray-800 border border-gray-600' : 'bg-red-500'}`}></div>
                        <span className="text-white">
                          {item.quantity}x {item.postType.replace('_', '-')} {item.height}" {item.color}
                        </span>
                      </div>
                      <span className="text-green-400">${item.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-blue-200 text-xs ml-5">
                      ${item.unitPrice} each
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <h3 className="font-medium text-blue-200 mb-2">Itemized Components</h3>
              <div className="space-y-2">
                {calculateItemizedBreakdown().map((item, index) => (
                  <div key={index} className="bg-white/5 rounded p-3 text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-mono text-xs">{item.sku}</span>
                      <span className="text-green-400">${item.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200 text-xs">{item.description}</span>
                      <span className="text-blue-200 text-xs">
                        {item.quantity}x @ ${item.unitPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Object.entries(attachments).some(([_, qty]) => qty > 0) && (
            <div className="mb-4">
              <h3 className="font-medium text-blue-200 mb-2">Attachments</h3>
              <div className="space-y-2">
                {Object.entries(attachments)
                  .filter(([_, qty]) => qty > 0)
                  .map(([id, qty]) => {
                    const attachment = attachmentsData.find(a => a.id === id)
                    return (
                      <div key={id} className="bg-white/5 rounded p-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-white">{qty}x {attachment.name}</span>
                          <span className="text-green-400">${(attachment.price * qty).toLocaleString()}</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-white">Total Cost:</span>
              <span className="text-green-400">${calculateTotalCost().toLocaleString()}</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
            Request Quote
          </button>
        </>
      )}

      {!selectedCountry && (
        <p className="text-blue-200 text-center">Select a country to see order breakdown</p>
      )}
    </div>
  )
}

export default OrderSummary 