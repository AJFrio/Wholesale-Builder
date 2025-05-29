import { COUNTRY_DATA } from '../data/countryData'
import { SKU_PRICING, RACK_COMPOSITION, generateSKU } from '../data/skuData'
import attachmentsData from '../data/attachments.json'
import { CONTAINER_CLASSES, TEXT_CLASSES, BUTTON_CLASSES, LAYOUT_CLASSES } from '../styles/classes'

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
    <div className={`${CONTAINER_CLASSES.card} h-fit`}>
      <div className={`${LAYOUT_CLASSES.flexBetween} mb-4`}>
        <h2 className={TEXT_CLASSES.heading.replace(' mb-4', '')}>Order Summary</h2>
        
        {selectedCountry && rackBreakdown.length > 0 && (
          <div className={CONTAINER_CLASSES.toggleContainer}>
            <button
              onClick={() => onViewModeChange('rack')}
              className={viewMode === 'rack' ? BUTTON_CLASSES.toggleActive : BUTTON_CLASSES.toggle}
            >
              By Rack
            </button>
            <button
              onClick={() => onViewModeChange('itemized')}
              className={viewMode === 'itemized' ? BUTTON_CLASSES.toggleActive : BUTTON_CLASSES.toggle}
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
              <h3 className={TEXT_CLASSES.subHeading}>Rack Distribution for {COUNTRY_DATA[selectedCountry]?.name}</h3>
              <div className={LAYOUT_CLASSES.spacingY2}>
                {rackBreakdown.map((item, index) => (
                  <div key={index} className={CONTAINER_CLASSES.item}>
                    <div className={LAYOUT_CLASSES.flexBetween}>
                      <div className={LAYOUT_CLASSES.flexCenter}>
                        <div className={`w-3 h-3 rounded-full ${item.color === 'black' ? 'bg-gray-800 border border-gray-600' : 'bg-red-500'}`}></div>
                        <span className={TEXT_CLASSES.itemName}>
                          {item.quantity}x {item.postType.replace('_', '-')} {item.height}" {item.color}
                        </span>
                      </div>
                      <span className={TEXT_CLASSES.price}>${item.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className={`${TEXT_CLASSES.detail} ml-5`}>
                      ${item.unitPrice} each
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <h3 className={TEXT_CLASSES.subHeading}>Itemized Components</h3>
              <div className={LAYOUT_CLASSES.spacingY2}>
                {calculateItemizedBreakdown().map((item, index) => (
                  <div key={index} className={CONTAINER_CLASSES.item}>
                    <div className={`${LAYOUT_CLASSES.flexBetween} mb-1`}>
                      <span className={TEXT_CLASSES.sku}>{item.sku}</span>
                      <span className={TEXT_CLASSES.price}>${item.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className={LAYOUT_CLASSES.flexBetween}>
                      <span className={TEXT_CLASSES.detail}>{item.description}</span>
                      <span className={TEXT_CLASSES.detail}>
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
              <h3 className={TEXT_CLASSES.subHeading}>Attachments</h3>
              <div className={LAYOUT_CLASSES.spacingY2}>
                {Object.entries(attachments)
                  .filter(([_, qty]) => qty > 0)
                  .map(([id, qty]) => {
                    const attachment = attachmentsData.find(a => a.id === id)
                    return (
                      <div key={id} className={CONTAINER_CLASSES.item}>
                        <div className={LAYOUT_CLASSES.flexBetween}>
                          <span className={TEXT_CLASSES.itemName}>{qty}x {attachment.name}</span>
                          <span className={TEXT_CLASSES.price}>${(attachment.price * qty).toLocaleString()}</span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-4">
            <div className={`${LAYOUT_CLASSES.flexBetween} text-lg font-semibold`}>
              <span className="text-gray-900">Total Cost:</span>
              <span className="text-black">${calculateTotalCost().toLocaleString()}</span>
            </div>
          </div>

          <button className={`${BUTTON_CLASSES.primary} mt-4`}>
            Request Quote
          </button>
        </>
      )}

      {!selectedCountry && (
        <p className={TEXT_CLASSES.placeholder}>Select a country to see order breakdown</p>
      )}
    </div>
  )
}

export default OrderSummary 