import TodoItem from "./TodoItem";
export default function TodoList({
  todos,
  filteredTodos,
  handleDeleteTodo,
  handleToggleComplete,
}) {
  return (
    <>
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add your first task! 🚀</p>
      ) : filteredTodos.length === 0 ? (
        <p>No matching tasks found. 🔍</p>
      ) : (
        <ul className="todos-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleComplete={handleToggleComplete}
            />
          ))}
        </ul>
      )}
    </>
  );
}
