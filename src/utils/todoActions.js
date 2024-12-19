export const createTodo = (text) => ({
  id: Date.now().toString(),
  text,
  completed: false,
  color: 'blue',
});

export const toggleTodoStatus = (todos, id) =>
  todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

export const updateTodoColor = (todos, id, color) =>
  todos.map(todo =>
    todo.id === id ? { ...todo, color } : todo
  );

export const deleteTodoById = (todos, id) =>
  todos.filter(todo => todo.id !== id);

export const markAllTodosCompleted = (todos) =>
  todos.map(todo => ({ ...todo, completed: true }));

export const clearCompletedTodos = (todos) =>
  todos.filter(todo => !todo.completed);