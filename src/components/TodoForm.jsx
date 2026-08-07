export default function TodoForm({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo} className="flex gap-2 w-full mb-4">
      <input
        className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all"
        type="text"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-indigo-100"
      >
        Add Task
      </button>
    </form>
  );
}
