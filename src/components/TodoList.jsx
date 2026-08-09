// src/components/TodoList.jsx
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filteredTodos,
  handleDeleteTodo,
  handleToggleComplete,
  handleEditTodo,
}) {
  return (
    <div className="w-full">
      {todos.length === 0 ? (
        <div className="text-center py-10 px-4">
          <span className="text-4xl block mb-3">🚀</span>
          <p className="text-sm font-semibold text-slate-400 tracking-wide uppercase">
            No tasks yet
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Add your first task above to get started!
          </p>
        </div>
      ) : filteredTodos.length === 0 ? (
        <div className="text-center py-10 px-4">
          <span className="text-4xl block mb-3">🔍</span>
          <p className="text-sm font-semibold text-slate-400 tracking-wide uppercase">
            No matching tasks
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Try resetting your filters or search keywords.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3 w-full">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleComplete={handleToggleComplete}
              handleEditTodo={handleEditTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
