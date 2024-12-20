import React from 'react';
import { ColorSelect } from './ColorSelect';

export function TodoItem({ todo, onToggle, onDelete, onColorChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
      {/* Toggle Completion */}
      <button
        onClick={() => onToggle(todo.id)}
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '2px solid',
          borderColor: todo.completed ? 'green' : 'gray',
          backgroundColor: todo.completed ? 'green' : 'transparent',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        {todo.completed && '✔'}
      </button>

      {/* Todo Text */}
      <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray' : 'black' }}>
        {todo.text}
      </span>

      {/* Color Selector */}
      <ColorSelect
        selectedColor={todo.color}
        onChange={(color) => onColorChange(todo.id, color)}
      />

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          background: 'none',
          border: 'none',
          color: 'red',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        ✖
      </button>
    </div>
  );
}
