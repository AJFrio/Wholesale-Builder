function RackConfiguration({ 
  rackQuantity, 
  postType, 
  height, 
  color, 
  onQuantityChange, 
  onPostTypeChange, 
  onHeightChange, 
  onColorChange 
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h2 className="text-xl font-semibold text-white mb-4">Rack Configuration</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            value={rackQuantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">Post Type</label>
          <select
            value={postType}
            onChange={(e) => onPostTypeChange(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="4_post" className="bg-slate-800">4 Post Only</option>
            <option value="6_post" className="bg-slate-800">6 Post Only</option>
            <option value="both" className="bg-slate-800">Both (Auto-distribute)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">Height</label>
          <select
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="80" className="bg-slate-800">80 inches</option>
            <option value="93" className="bg-slate-800">93 inches</option>
            <option value="both" className="bg-slate-800">Both (Auto-distribute)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">Color</label>
          <select
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="black" className="bg-slate-800">Black</option>
            <option value="red" className="bg-slate-800">Red</option>
            <option value="both" className="bg-slate-800">Both (Auto-distribute)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default RackConfiguration 