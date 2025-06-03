import { useState } from 'react';

function ColorSelector() {
  const [color, setColor] = useState('#ffffff');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <label htmlFor="colorPicker" style={{ marginRight: '10px' }}>Select Color:</label>
      <input
        id="colorPicker"
        type="color"
        value={color}
        onChange={handleChange}
      />
      <span style={{ marginLeft: '10px' }}>{color}</span>
    </div>
  );
}

export default ColorSelector;
