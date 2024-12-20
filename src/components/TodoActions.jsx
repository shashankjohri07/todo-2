import React from 'react';

export function TodoActions({ remainingCount, onMarkAllCompleted, onClearCompleted }) {
  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
      {/* Display the count of remaining items */}
      <div>
        <p style={{ color: '#555' }}>
          {remainingCount} {remainingCount === 1 ? 'item' : 'items'} left
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={onMarkAllCompleted}
          style={{
            padding: '8px 12px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Mark All Completed
        </button>
        <button
          onClick={onClearCompleted}
          style={{
            padding: '8px 12px',
            backgroundColor: '#E0E0E0',
            color: '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}
