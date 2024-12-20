import React from 'react';

export function ColorSelect({ selectedColor, onChange }) {
  // Define available colors
  const colors = ['green', 'blue', 'orange', 'purple', 'red'];

  return (
    <div style={{ margin: '10px 0' }}>
      <select
        value={selectedColor} // Set the current selected color 
        onChange={(e) => onChange(e.target.value)} // Handling color changing wala part
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '14px',
        }}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}
