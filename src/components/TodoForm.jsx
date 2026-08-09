import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function TodoForm({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo} className="flex gap-2 w-full mb-4">
      <Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What needs to be done?"
      />
      <Button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5"
      >
        Add Task
      </Button>
    </form>
  );
}
