import React from 'react';

export function TodoFilters({ currentFilter, onFilterChange, colorFilter, onColorFilterChange }) {
  // Define the available filters and colors
  const filters = ['all', 'active', 'completed'];
  const colors = ['green', 'blue', 'orange', 'purple', 'red'];

  return (
    <div>
      {/* Filter Buttons */}
      <div>
        <span>Filter: </span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)} // Call the handler with the selected filter
            style={{
              padding: '5px 10px',
              margin: '5px',
              border: '1px solid gray',
              borderRadius: '5px',
              backgroundColor: currentFilter === filter ? 'blue' : 'lightgray',
              color: currentFilter === filter ? 'white' : 'black',
            }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} {/* Capitalize filter names */}
          </button>
        ))}
      </div>

      {/* Color Filters */}
      <div>
        <span>Colors: </span>
        {colors.map((color) => (
          <label key={color} style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              checked={colorFilter.includes(color)} // Check if the color is in the current filter
              onChange={(e) => {
                const newFilter = [...colorFilter]; // Create a copy of the current filter
                if (e.target.checked) {
                  newFilter.push(color); // Add color if checked
                } else {
                  const index = newFilter.indexOf(color); // Find the index of the color
                  if (index > -1) {
                    newFilter.splice(index, 1); // Remove color if unchecked
                  }
                }
                onColorFilterChange(newFilter); // Update the filter
              }}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
}
