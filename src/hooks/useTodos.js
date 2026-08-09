import { useState, useEffect } from "react";

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos-database");
    try {
      const parsed = savedTodos ? JSON.parse(savedTodos) : [];

      return parsed.map((todo) => ({
        ...todo,
        category: todo.category || "General",
      }));
    } catch {
      return [];
    }
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos-database", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      category: "General",
    };
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

  const handleEditTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    handleEditTodo,
  };
}
