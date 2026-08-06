import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import FilterButton from "./components/FilterButton";
import TodoStates from "./components/TodoStats";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos-database");
    try {
      return JSON.parse(savedTodos);
    } catch {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    localStorage.setItem("todos-database", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "active") return !todo.completed && matchSearch;
    if (filter === "completed") return todo.completed && matchSearch;
    return matchSearch;
  });

  return (
    <div className="main-container">
      <h1>My Tasks</h1>

      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <FilterButton setFilter={setFilter} />

      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleComplete={handleToggleComplete}
      />

      <TodoStates
        todos={todos}
        completedTasks={completedTasks}
        remainingTasks={remainingTasks}
      />
    </div>
  );
}
