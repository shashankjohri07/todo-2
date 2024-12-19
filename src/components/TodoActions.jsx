import React from 'react';

export function TodoActions({remainingCount, onMarkAllCompleted,onClearCompleted,}) {


  
  return (
    <div className="flex flex-wrap gap-4 pt-4 border-t">
      <div className="flex-1">
        <p className="text-gray-600">
          {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
        </p>
      </div>

      <div className="space-x-2">
        <button
          onClick={onMarkAllCompleted}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Mark All Completed
        </button>
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}