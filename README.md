# TodoApp - React Task Management

A fully-featured task management application demonstrating React fundamentals, component composition, and real-world state management patterns.

**[Live Demo](https://cosmic-capybara-3dc836.netlify.app/)** | **[GitHub](https://github.com/FatimaGhafoor/my-todo-app)**

---

## Features

- ✅ **CRUD Operations** - Add, edit, delete, complete tasks
- 🏷️ **Categories** - Learning, Development, UI/UX, General
- 🔴 **Priority Levels** - High, Medium, Low with visual indicators
- 📅 **Due Dates** - Track deadlines with smart status (Overdue/Today/Upcoming)
- 🔍 **Smart Filtering** - Filter by status, category, priority, due date simultaneously
- 🌓 **Dark Mode** - Theme toggle with persistence
- 💾 **Data Persistence** - All data saved to localStorage
- 📱 **Responsive Design** - Works on all devices

---

## Tech Stack

**Frontend:** React 18 • Vite • Tailwind CSS  
**State Management:** Custom Hooks • localStorage  
**Deployment:** Netlify

---

## Quick Start

```bash
git clone https://github.com/FatimaGhafoor/my-todo-app.git
cd my-todo-app
npm install
npm run dev
```

---

## What I Built

### Custom Hook for State Management
Centralized all todo logic (CRUD operations, filtering, localStorage sync) into a reusable `useTodos` hook—keeping components clean and focused on UI.

### Reusable UI Components
Created `Button` and `Input` components following the DRY principle, reducing code repetition and improving maintainability.

### Advanced Filtering System
Implemented multi-criteria filtering where 5 independent filters (status, category, priority, due date, search) work seamlessly together.

### Smart Date Handling
Built timezone-safe date comparison logic to properly track and display overdue tasks, today's tasks, and upcoming deadlines.

---

## React Concepts Demonstrated

- **Hooks:** useState, useEffect for state and side effects
- **Custom Hooks:** useTodos for reusable logic
- **Component Composition:** Breaking UI into small, reusable pieces
- **Props & Events:** Parent-child communication
- **Array Methods:** map, filter for list manipulation
- **Immutable Updates:** Using spread operator for state changes
- **Conditional Rendering:** Dynamic UI based on state

---

## Key Code Examples

**Custom Hook:**
```javascript
export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos-database");
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("todos-database", JSON.stringify(todos));
  }, [todos]);
  
  return { todos, handleAddTodo, handleDeleteTodo, handleEditTodo };
}
```

**Reusable Component:**
```javascript
export function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg font-medium transition-all ${className}`}>
      {children}
    </button>
  );
}
```

**Multi-Criteria Filtering:**
```javascript
const filteredTodos = todos.filter((todo) => {
  const matchSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase());
  const matchCategory = categoryFilter === "all" || todo.category === categoryFilter;
  const matchPriority = priorityFilter === "all" || todo.priority === priorityFilter;
  
  return matchSearch && matchCategory && matchPriority;
});
```

---

## Learning Highlights

- Learned to extract component logic into custom hooks for better code organization
- Mastered immutable state updates using spread operator
- Implemented complex filtering logic coordinating multiple independent states
- Handled edge cases like corrupted localStorage data and timezone issues
- Practiced Git workflow (commits, pushes, conflict resolution)
- Deployed live application on Netlify

---

## Files & Structure

```
src/
├── hooks/useTodos.js              # Custom hook - state management
├── components/
│   ├── ui/Button.jsx, Input.jsx   # Reusable UI components
│   ├── TodoForm.jsx               # Add new task
│   ├── TodoItem.jsx               # Individual task with edit
│   ├── TodoList.jsx               # Task list container
│   ├── FilterButton.jsx           # Filter controls
│   └── App.jsx                    # Main component
└── App.css
```

---

## What's Next

- Add Drag & Drop to reorder tasks
- Implement recurring tasks
- Add browser notifications for due dates
- Write unit tests with Jest & React Testing Library
- Learn TypeScript for type safety

---

Made with focus on clean code, component design, and real-world patterns.