import attachmentsData from '../data/attachments.json'
import { CONTAINER_CLASSES, TEXT_CLASSES, INPUT_CLASSES, LAYOUT_CLASSES } from '../styles/classes'

function AttachmentsSection({ attachments, onAttachmentChange }) {
  return (
    <div className={CONTAINER_CLASSES.card}>
      <h2 className={TEXT_CLASSES.heading}>Add Attachments</h2>
      
      <div className={LAYOUT_CLASSES.spacingY}>
        {attachmentsData.map(attachment => (
          <div key={attachment.id} className={CONTAINER_CLASSES.subCard}>
            <div className={LAYOUT_CLASSES.flexStart}>
              <div className="flex-shrink-0">
                <img 
                  src={attachment.image} 
                  alt={attachment.name}
                  className="w-16 h-16 p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
                />
              </div>
              <div className="flex-1">
                <h3 className={`${TEXT_CLASSES.itemName} mb-1`}>{attachment.name}</h3>
                <p className={`${TEXT_CLASSES.description} mb-2`}>{attachment.description}</p>
                <p className={TEXT_CLASSES.price}>${attachment.price}</p>
              </div>
              <div className="flex-shrink-0">
                <input
                  type="number"
                  min="0"
                  placeholder="Qty"
                  value={attachments[attachment.id] || ''}
                  onChange={(e) => onAttachmentChange(attachment.id, e.target.value)}
                  className={INPUT_CLASSES.small}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AttachmentsSection 