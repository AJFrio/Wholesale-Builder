import { CONTAINER_CLASSES, TEXT_CLASSES, INPUT_CLASSES, SELECT_CLASSES, LAYOUT_CLASSES } from '../styles/classes'

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
    <div className={CONTAINER_CLASSES.card}>
      <h2 className={TEXT_CLASSES.heading}>Rack Configuration</h2>
      
      <div className={LAYOUT_CLASSES.formGrid}>
        <div>
          <label className={TEXT_CLASSES.label}>Quantity</label>
          <input
            type="number"
            min="1"
            value={rackQuantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
            className={INPUT_CLASSES.base}
          />
        </div>

        <div>
          <label className={TEXT_CLASSES.label}>Post Type</label>
          <select
            value={postType}
            onChange={(e) => onPostTypeChange(e.target.value)}
            className={SELECT_CLASSES.base}
          >
            <option value="4_post">4 Post Only</option>
            <option value="6_post">6 Post Only</option>
            <option value="both">Both (Auto-distribute)</option>
          </select>
        </div>

        <div>
          <label className={TEXT_CLASSES.label}>Height</label>
          <select
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
            className={SELECT_CLASSES.base}
          >
            <option value="80">80 inches</option>
            <option value="93">93 inches</option>
            <option value="both">Both (Auto-distribute)</option>
          </select>
        </div>

        <div>
          <label className={TEXT_CLASSES.label}>Color</label>
          <select
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className={SELECT_CLASSES.base}
          >
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="both">Both (Auto-distribute)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default RackConfiguration 