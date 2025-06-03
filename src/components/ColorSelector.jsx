import { useState } from 'react';
import { CONTAINER_CLASSES, TEXT_CLASSES, INPUT_CLASSES } from '../styles/classes';

function ColorSelector() {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={`${CONTAINER_CLASSES.card} mt-6`}> 
      <label htmlFor="colorPicker" className={`${TEXT_CLASSES.label} text-center block mb-2`}>Select Color</label>
      <div className="flex justify-center items-center">
        <input
          id="colorPicker"
          type="color"
          value={color}
          onChange={handleChange}
          className={INPUT_CLASSES.base + " w-16 p-1"}
        />
        <span className="ml-4">{color}</span>
      </div>
    </div>
  );
}

export default ColorSelector;
