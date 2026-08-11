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

Status Filter → Category Filter → Priority Filter → Due Date Filter → Search Filter = Powerful queries

### Data Persistence

User Action → State Update → useEffect triggers → localStorage.setItem() → Data persisted → Page refresh → Data loaded from localStorage

---

## 📖 Documentation

### Features Deep Dive

#### Categories Feature

Organize todos by type with color-coded badges:

- **General** (Gray) - Default/Miscellaneous
- **Learning** (Blue) - Study/Course work
- **Development** (Purple) - Coding/Technical
- **UI/UX** (Pink) - Design/Frontend work

#### Priority System

Mark task urgency:

- **🔴 High** - Critical, do first (Red)
- **🟡 Medium** - Standard (Yellow) - Default
- **🟢 Low** - Can wait (Green)

#### Due Date Management

Smart deadline tracking:

- **📆 Upcoming** - Future dates (Cyan)
- **📍 Today** - Due today (Orange)
- **⏰ Overdue** - Past deadlines (Red) - Mark incomplete

---

## 🧪 Testing

### Manual Testing Checklist

**CRUD Operations**

- [ ] Add todo with all fields
- [ ] Edit todo text
- [ ] Delete todo
- [ ] Toggle complete/incomplete
- [ ] Mark overdue as done

**Filters Working**

- [ ] Status filter (All/Active/Completed)
- [ ] Category filter
- [ ] Priority filter
- [ ] Due date filter
- [ ] Combined filters work together

**Data Persistence**

- [ ] Page refresh → todos persist
- [ ] Category persist
- [ ] Priority persist
- [ ] Due date persist
- [ ] Dark mode preference persist

**User Experience**

- [ ] Dark mode toggle works
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Smooth transitions
- [ ] Touch-friendly on mobile

---

## 🎓 Learning Outcomes

This project demonstrates:

✅ **React Fundamentals**

- Functional components with Hooks
- useState for state management
- useEffect for side effects
- Custom hooks for logic reuse

✅ **JavaScript Skills**

- Array methods (map, filter)
- Object spread operator
- Date handling & timezone safety
- Event handling

✅ **UI/UX Principles**

- Component composition
- Reusable components
- Responsive design
- Color psychology
- Visual feedback

✅ **Best Practices**

- DRY principle
- Separation of concerns
- Immutable updates
- Error handling
- localStorage usage

---

## 🐛 Known Issues & Future Improvements

### Future Features

- [ ] **Drag & Drop** - Reorder todos
- [ ] **Recurring Tasks** - Daily/weekly tasks
- [ ] **Task Tags** - Multiple tags per task
- [ ] **Notifications** - Browser notifications for due dates
- [ ] **Export/Import** - Download/upload tasks
- [ ] **Sync** - Cloud sync across devices
- [ ] **Collaboration** - Share tasks with others
- [ ] **Analytics** - Productivity statistics

### Potential Optimizations

- Add React.memo for components
- useCallback for handlers
- useMemo for expensive calculations
- Virtual scrolling for large lists
- Service workers for offline support

---

## 🤝 Contributing

This is a personal learning project. Feel free to:

- Fork and modify for your own use
- Use as a learning reference
- Build upon this foundation

---

## 📄 License

This is a personal learning project created for educational and portfolio purposes.
Feel free to use this code as a reference for your own project

---

## 🔗 Links

- **GitHub Repository:** https://github.com/FatimaGhafoor/my-todo-app
- **Live Demo:** [Add Netlify/Vercel URL]
- **Developer:** [Fatima Ghafoor](https://github.com/FatimaGhafoor)

---

## 📧 Feedback

Found a bug? Have a suggestion?

- Open an issue on GitHub
- Submit a pull request
- Share your thoughts!

---

## 🎯 Quick Start Tips

**Tip 1: Try the Filters**
Click different filter combinations to see how powerful the system is!

**Tip 2: Explore Dark Mode**
Toggle dark/light mode to test theme persistence.

**Tip 3: Test Data Persistence**
Add a task, refresh the page - data persists!

**Tip 4: Try Complex Filtering**
Select High Priority + Learning Category + Overdue Due Date = Powerful!

---

**Made with ❤️ by Fatima Ghafoor**

_This TodoApp is a portfolio project showcasing React fundamentals, state management, and modern web development practices._
