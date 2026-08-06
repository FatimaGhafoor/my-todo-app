export default function TodoStats({ todos, completedTasks, remainingTasks }) {
  return (
    <div className="todos-stats">
      <p>Total Tasks: {todos.length}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Remaining Tasks: {remainingTasks}</p>
    </div>
  );
}
