import React, { useState } from 'react';
import { ListChecks } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import { TodoActions } from './components/TodoActions';
import {
  createTodo,
  toggleTodoStatus,
  updateTodoColor,
  deleteTodoById,
  markAllTodosCompleted,
  clearCompletedTodos,
} from './utils/todoActions';
import {
  filterTodosByStatus,
  filterTodosByColors,
} from './utils/todoFilters';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [colorFilter, setColorFilter] = useState(new Set());

  const addTodo = (text) => {
    setTodos([...todos, createTodo(text)]);
  };

  const toggleTodo = (id) => {
    setTodos(toggleTodoStatus(todos, id));
  };

  const deleteTodo = (id) => {
    setTodos(deleteTodoById(todos, id));
  };

  const changeColor = (id, color) => {
    setTodos(updateTodoColor(todos, id, color));
  };

  const handleMarkAllCompleted = () => {
    setTodos(markAllTodosCompleted(todos));
  };

  const handleClearCompleted = () => {
    setTodos(clearCompletedTodos(todos));
  };

  const filteredTodos = filterTodosByColors(
    filterTodosByStatus(todos, filter),
    colorFilter
  );

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <ListChecks size={32} className="text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">Todos</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <TodoInput onAdd={addTodo} />

          <div className="space-y-3">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onColorChange={changeColor}
              />
            ))}
          </div>

          <TodoActions
            remainingCount={remainingTodos}
            onMarkAllCompleted={handleMarkAllCompleted}
            onClearCompleted={handleClearCompleted}
          />

          <TodoFilters
            currentFilter={filter}
            onFilterChange={setFilter}
            colorFilter={colorFilter}
            onColorFilterChange={setColorFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;