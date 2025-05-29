import attachmentsData from '../data/attachments.json'

function AttachmentsSection({ attachments, onAttachmentChange }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold text-white mb-4">Add Attachments</h2>
      
      <div className="space-y-4">
        {attachmentsData.map(attachment => (
          <div key={attachment.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img 
                  src={attachment.image} 
                  alt={attachment.name}
                  className="w-16 h-16 p-2 bg-white/10 rounded-lg border border-white/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white mb-1">{attachment.name}</h3>
                <p className="text-sm text-blue-200 mb-2">{attachment.description}</p>
                <p className="text-green-400 font-medium">${attachment.price}</p>
              </div>
              <div className="flex-shrink-0">
                <input
                  type="number"
                  min="0"
                  placeholder="Qty"
                  value={attachments[attachment.id] || ''}
                  onChange={(e) => onAttachmentChange(attachment.id, e.target.value)}
                  className="w-16 bg-white/5 border border-white/20 rounded px-2 py-1 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder-blue-300"
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