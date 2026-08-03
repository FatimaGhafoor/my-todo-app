import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

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
      <p>Total Tasks Added: {todos.length}</p>
    </div>
  );
}
