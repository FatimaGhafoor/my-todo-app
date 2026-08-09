import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function TodoItem({
  todo,
  handleToggleComplete,
  handleDeleteTodo,
  handleEditTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") return;
    handleEditTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const categoryColors = {
    General: "bg-slate-100 text-slate-700",
    Learning: "bg-blue-100 text-blue-700",
    Development: "bg-purple-100 text-purple-700",
    "UI/UX": "bg-pink-100 text-pink-700",
  };

  if (isEditing) {
    return (
      <li className="w-full flex items-center gap-2 px-5 py-4 rounded-xl border bg-blue-50 border-blue-200">
        <Input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Edit task..."
        />
        <Button
          onClick={handleSave}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Save
        </Button>
        <Button
          onClick={handleCancel}
          className="bg-slate-300 hover:bg-slate-400 text-slate-700 font-semibold px-4 py-2 rounded-lg"
        >
          Cancel
        </Button>
      </li>
    );
  }

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

        <div className="flex flex-col gap-1">
          <span
            className={`text-sm font-medium tracking-wide transition-all duration-200 ${
              todo.completed
                ? "line-through text-slate-400 font-normal"
                : "text-slate-700"
            }`}
          >
            {todo.text}
          </span>
          {/* ← CATEGORY BADGE ADD KARA */}
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-md w-fit ${categoryColors[todo.category] || categoryColors.General}`}
          >
            {todo.category || "General"}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => setIsEditing(true)}
          className="opacity-0 group-hover:opacity-100 bg-blue-50 text-blue-600 hover:bg-blue-500 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteTodo(todo.id)}
          className="opacity-0 group-hover:opacity-100 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
