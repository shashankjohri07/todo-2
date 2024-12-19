export const filterTodosByStatus = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const filterTodosByColors = (todos, colorFilter) => {
  if (colorFilter.size === 0) return todos;
  return todos.filter(todo => colorFilter.has(todo.color));
};