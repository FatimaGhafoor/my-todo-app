export default function FilterButton({
  filter,
  setFilter,
  todos,
  completedTasks,
  remainingTasks,
  categoryFilter,
  setCategoryFilter,
  priorityFilter,
  setPriorityFilter,
  dueDateFilter,
  setDueDateFilter,
}) {
  const BUTTONS_CONFIG = [
    {
      id: "all",
      label: "All Tasks",
      emoji: "📁",
      count: todos.length,
      activeStyles:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400",
      badgeStyles: "bg-indigo-200/60 text-indigo-700 dark:bg-indigo-900",
    },
    {
      id: "active",
      label: "Active",
      emoji: "⚡",
      count: remainingTasks,
      activeStyles:
        "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
      badgeStyles: "bg-amber-200/60 text-amber-700 dark:bg-amber-900",
    },
    {
      id: "completed",
      label: "Completed",
      emoji: "✨",
      count: completedTasks,
      activeStyles:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
      badgeStyles: "bg-emerald-200/60 text-emerald-700 dark:bg-emerald-900",
    },
  ];

  const CATEGORY_CONFIG = [
    { id: "all", label: "All Categories", emoji: "📂" },
    { id: "General", label: "General", emoji: "📝" },
    { id: "Learning", label: "Learning", emoji: "📚" },
    { id: "Development", label: "Development", emoji: "💻" },
    { id: "UI/UX", label: "UI/UX", emoji: "🎨" },
  ];

  const PRIORITY_CONFIG = [
    { id: "all", label: "All Priorities", emoji: "⭐" },
    { id: "High", label: "High", emoji: "🔴" },
    { id: "Medium", label: "Medium", emoji: "🟡" },
    { id: "Low", label: "Low", emoji: "🟢" },
  ];

  const DUE_DATE_CONFIG = [
    { id: "all", label: "All Dates", emoji: "📅" },
    { id: "overdue", label: "Overdue", emoji: "⏰" },
    { id: "today", label: "Today", emoji: "📍" },
    { id: "upcoming", label: "Upcoming", emoji: "📆" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1.5">
        {BUTTONS_CONFIG.map((btn) => {
          const isActive = filter === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 group ${
                isActive
                  ? btn.activeStyles
                  : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-base group-hover:scale-110 transition-transform">
                  {btn.emoji}
                </span>
                <span>{btn.label}</span>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-md font-bold ${
                  isActive
                    ? btn.badgeStyles
                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                }`}
              >
                {btn.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <p className="text-xs font-bold text-slate-400 uppercase mb-2 px-1">
          Categories
        </p>
        <div className="flex flex-col gap-1.5">
          {CATEGORY_CONFIG.map((cat) => {
            const isActive = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`w-full flex items-center justify-start px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50"
                }`}
              >
                <span className="text-base mr-2 group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <p className="text-xs font-bold text-slate-400 uppercase mb-2 px-1">
          Priorities
        </p>
        <div className="flex flex-col gap-1.5">
          {PRIORITY_CONFIG.map((pri) => {
            const isActive = priorityFilter === pri.id;
            return (
              <button
                key={pri.id}
                onClick={() => setPriorityFilter(pri.id)}
                className={`w-full flex items-center justify-start px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50"
                }`}
              >
                <span className="text-base mr-2 group-hover:scale-110 transition-transform">
                  {pri.emoji}
                </span>
                <span>{pri.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <p className="text-xs font-bold text-slate-400 uppercase mb-2 px-1">
          Due Dates
        </p>
        <div className="flex flex-col gap-1.5">
          {DUE_DATE_CONFIG.map((date) => {
            const isActive = dueDateFilter === date.id;
            return (
              <button
                key={date.id}
                onClick={() => setDueDateFilter(date.id)}
                className={`w-full flex items-center justify-start px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50"
                }`}
              >
                <span className="text-base mr-2 group-hover:scale-110 transition-transform">
                  {date.emoji}
                </span>
                <span>{date.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
