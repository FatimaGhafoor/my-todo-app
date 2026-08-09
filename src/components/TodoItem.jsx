import { Button } from "./ui/Button";

export default function TodoItem({
  todo,
  handleToggleComplete,
  handleDeleteTodo,
}) {
  return (
    <li
      className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-200 group ${
        todo.completed
          ? "bg-slate-50/50 border-slate-100 opacity-75"
          : "bg-white border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5"
      }`}
    >
      <div
        onClick={() => handleToggleComplete(todo.id)}
        className="flex items-center gap-3.5 flex-1 cursor-pointer select-none"
      >
        <div
          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
            todo.completed
              ? "bg-emerald-500 border-emerald-500 text-white scale-110"
              : "border-slate-300 group-hover:border-indigo-500 bg-slate-50"
          }`}
        >
          {todo.completed && <span className="text-[10px] font-bold">✓</span>}
        </div>

        <span
          className={`text-sm font-medium tracking-wide transition-all duration-200 ${
            todo.completed
              ? "line-through text-slate-400 font-normal"
              : "text-slate-700"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <Button
        onClick={() => handleDeleteTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
      >
        Delete
      </Button>
    </li>
  );
}
