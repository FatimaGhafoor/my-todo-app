import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTask = { id: Date.now(), text: inputValue, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTask]);

    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const todoList = todos.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  ));

  return (
    <div className="main-container">
      <h1>My Tasks</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul className="todos-list">{todoList}</ul>
      <p>Total Tasks Added: {todos.length}</p>
    </div>
  );
}
