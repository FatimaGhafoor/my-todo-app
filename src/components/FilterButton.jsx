export default function FilterButton({
  filter,
  setFilter,
  todos,
  completedTasks,
  remainingTasks,
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
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {BUTTONS_CONFIG.map((btn) => {
        const isActive = filter === btn.id;

        return (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 group ${isActive ? btn.activeStyles : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50"}`}
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
  );
}
