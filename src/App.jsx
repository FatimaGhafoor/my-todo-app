import { useState, useEffect } from "react";
import { useTodos } from "./hooks/useTodos";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import FilterButton from "./components/FilterButton";
import TodoStats from "./components/TodoStats";

export default function App() {
  const {
    todos,
    newTodo,
    selectedCategory,
    setSelectedCategory,
    setNewTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    handleEditTodo,
  } = useTodos();

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("todo-theme");
    return savedTheme === "dark";
  });

  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = todos.filter((todo) => !todo.completed).length;

  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "active") return !todo.completed && matchSearch;
    if (filter === "completed") return todo.completed && matchSearch;
    return matchSearch;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("todo-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen w-full flex items-stretch transition-colors duration-300 ${isDarkMode ? "bg-[#0B0F19] text-white" : "bg-[#F4F6FA] text-slate-800"}`}
    >
      <aside
        className={`w-64 border-r p-6 flex flex-col justify-between md:flex ${isDarkMode ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"}`}
      >
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-200">
              <span className="font-bold text-lg">✓</span>
            </div>
            <span className="font-black text-xl tracking-tight text-indigo-600">
              TodoApp
            </span>
          </div>

          <FilterButton
            filter={filter}
            setFilter={setFilter}
            todos={todos}
            completedTasks={completedTasks}
            remainingTasks={remainingTasks}
          />
        </div>

        <div
          className={`p-4 rounded-2xl flex items-center justify-between ${isDarkMode ? "bg-slate-800/40" : "bg-slate-50"}`}
        >
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:scale-110 transition-transform"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
        <header className="mb-8">
          <h1
            className={`text-3xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            My Tasks
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">
            Stay organized, stay productive ✨
          </p>
        </header>

        <section
          className={`p-6 rounded-2xl border mb-6 ${isDarkMode ? "bg-[#111827] border-slate-800" : "bg-white border-slate-100 shadow-sm"}`}
        >
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
            Add a new task
          </h3>
          <TodoForm
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            handleAddTodo={handleAddTodo}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>

        <TodoStats
          todos={todos}
          completedTasks={completedTasks}
          remainingTasks={remainingTasks}
        />

        <div className="mb-6">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <section
          className={`p-6 rounded-2xl border ${isDarkMode ? "bg-[#111827] border-slate-800" : "bg-white border-slate-100 shadow-sm"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold tracking-tight">All Tasks</h2>
          </div>

          <TodoList
            todos={todos}
            filteredTodos={filteredTodos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleComplete={handleToggleComplete}
            handleEditTodo={handleEditTodo}
          />
        </section>
      </main>
    </div>
  );
}
