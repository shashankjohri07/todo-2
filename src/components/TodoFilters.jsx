import React from 'react';

export function TodoFilters({currentFilter,onFilterChange,colorFilter,onColorFilterChange,}) {
  
  const filters = ['all', 'active', 'completed'];
  const colors = ['green', 'blue', 'orange', 'purple', 'red'];

  return (
    <div className="flex flex-wrap gap-4 pt-4 border-t">
      <div className="space-x-2">
        <span className="text-gray-700">Filter:</span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1 rounded ${
              currentFilter === filter
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-gray-700">Colors:</span>
        {colors.map((color) => (
          <label key={color} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={colorFilter.has(color)}
              onChange={(e) => {
                const newFilter = new Set(colorFilter);
                if (e.target.checked) {
                  newFilter.add(color);
                } else {
                  newFilter.delete(color);
                }
                onColorFilterChange(newFilter);
              }}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <span className="capitalize">{color}</span>
          </label>
        ))}
      </div>
    </div>
  );
}