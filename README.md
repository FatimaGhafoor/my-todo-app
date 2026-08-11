# 📋 TodoApp - Advanced Task Management

A feature-rich Todo application built with **React 18** featuring intelligent task categorization, priority management, and deadline tracking.

**[🚀 Live Demo](#)** | **[📖 Documentation](#documentation)** | **[💼 Resume Value](#resume-value)**

---

## ✨ Features

### Core Functionality

- ✅ **CRUD Operations** - Create, Read, Update, Delete tasks
- ✅ **Edit Tasks** - Inline editing with Save/Cancel options
- ✅ **Task Completion** - Toggle tasks complete/incomplete
- ✅ **Persistent Storage** - Data saved in browser localStorage

### Task Organization

- 🏷️ **Categories** - Organize by type (Learning, Development, UI/UX, General)
- 🔴 **Priority Levels** - Mark urgency (High, Medium, Low)
- 📅 **Due Dates** - Set deadlines with smart status indicators
- 🔍 **Search** - Real-time task search by keywords

### Smart Filtering

- **Filter by Status** - All / Active / Completed
- **Filter by Category** - Learning / Development / UI/UX / General
- **Filter by Priority** - High / Medium / Low
- **Filter by Due Date** - Overdue / Today / Upcoming
- **Combined Filters** - All filters work independently + together!

### User Experience

- 🌓 **Dark/Light Mode** - Theme toggle with persistence
- 📱 **Responsive Design** - Works on desktop, tablet, mobile
- 🎨 **Visual Badges** - Color-coded priority & category indicators
- ⏰ **Smart Urgency Indicators** - Overdue (🔴) / Today (🟠) / Upcoming (🔵)

---

## 🏗️ Project Structure

my-todo-app/
├── src/
│ ├── hooks/
│ │ └── useTodos.js # Custom hook for state management
│ ├── components/
│ │ ├── ui/
│ │ │ ├── Button.jsx # Reusable button component
│ │ │ └── Input.jsx # Reusable input component
│ │ ├── App.jsx # Main app component
│ │ ├── TodoForm.jsx # Add new task form
│ │ ├── TodoList.jsx # Task list container
│ │ ├── TodoItem.jsx # Individual task item
│ │ ├── SearchBar.jsx # Search functionality
│ │ ├── FilterButton.jsx # Filter controls
│ │ └── TodoStats.jsx # Statistics display
│ ├── App.css # Styling
│ └── main.jsx
├── README.md # This file
├── package.json
└── vite.config.js

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/FatimaGhafoor/my-todo-app.git
cd my-todo-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 💻 Technology Stack

**Frontend:**

- **React 18** - UI library with Hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **JavaScript ES6+** - Modern JavaScript

**State Management:**

- **React Hooks** (useState, useEffect)
- **Custom Hooks** (useTodos)
- **localStorage** - Browser storage API

---

## 📚 Core Concepts Implemented

### Custom Hooks

```javascript
useTodos() - Centralized state management
  ├── todos state
  ├── selectedCategory, selectedPriority, selectedDueDate
  ├── Handlers (add, delete, toggle, edit)
  └── localStorage sync
```

### Reusable Components

- `<Button>` - Flexible button with variants & sizes
- `<Input>` - Consistent input styling

### Multi-Criteria Filtering
