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
            <li key={todo.id}>
              <span
                onClick={() => handleToggleComplete(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
