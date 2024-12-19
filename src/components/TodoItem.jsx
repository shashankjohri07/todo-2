import React from 'react';
import { Check, X } from 'lucide-react';
import { ColorSelect } from './ColorSelect';

export function TodoItem({ todo, onToggle, onDelete, onColorChange }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
          ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>
      
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>

      <ColorSelect
        selectedColor={todo.color}
        onChange={(color) => onColorChange(todo.id, color)}
      />

      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-500 hover:text-red-500"
      >
        <X size={20} />
      </button>
    </div>
  );
}