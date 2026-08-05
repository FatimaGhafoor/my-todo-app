import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const newTask = { id: Date.now(), text: newTodo, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTask]);

    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="main-container">
      <h1>My Tasks</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="filter-section">
        <button className="filter-btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => setFilter("active")}>
          Active
        </button>
        <button className="filter-btn" onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>

      {todos.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
      ) : (
        <ul className="todos-list">
          {todos.map((todo) => (
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

      <div className="todos-stats">
        <p>Total Tasks: {todos.length}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Remaining Tasks: {remainingTasks}</p>
      </div>
    </div>
  );
}
