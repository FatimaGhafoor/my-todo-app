import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function TodoForm({
  newTodo,
  setNewTodo,
  handleAddTodo,
  selectedCategory,
  selectedPriority,
  setSelectedPriority,
  setSelectedCategory,
}) {
  const categories = ["General", "Learning", "Development", "UI/UX"];
  const priorities = ["Low", "Medium", "High"];
  return (
    <form onSubmit={handleAddTodo} className="flex gap-2 w-full mb-4">
      <Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What needs to be done?"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
        className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
      >
        {priorities.map((pri) => (
          <option key={pri} value={pri}>
            {pri}
          </option>
        ))}
      </select>
      <Button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5"
      >
        Add Task
      </Button>
    </form>
  );
}
