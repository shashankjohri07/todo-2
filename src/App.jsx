import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = { id: Date.now(), text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        
        <div className="flex items-center gap-2 mb-4">
          <input
            className="border border-gray-300 rounded-lg p-2 flex-1"
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center p-2 border rounded-lg ${
                todo.completed ? "bg-green-100 line-through" : "bg-gray-50"
              }`}
            >
              <span
                className="cursor-pointer"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-lg"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
