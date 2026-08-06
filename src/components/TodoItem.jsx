export default function TodoItem({
  todo,
  handleToggleComplete,
  handleDeleteTodo,
}) {
  return (
    <li>
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
  );
}
