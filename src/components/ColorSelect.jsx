import React from 'react';

export function ColorSelect({ selectedColor, onChange }) {
  const colors = ['green', 'blue', 'orange', 'purple', 'red'];

  return (
    <select
      value={selectedColor}
      onChange={(e) => onChange(e.target.value)}
      className="px-2 py-1 rounded border border-gray-300 text-sm"
    >
      {colors.map((color) => (
        <option key={color} value={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </option>
      ))}
    </select>
  );
}