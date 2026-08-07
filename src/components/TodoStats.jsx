export default function TodoStats({ todos, completedTasks, remainingTasks }) {
  const progressPercentage =
    todos.length > 0 ? Math.round((completedTasks / todos.length) * 100) : 0;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Tasks
          </span>
          <span className="text-xl">📊</span>
        </div>
        <h3 className="text-2xl font-black text-slate-800">{todos.length}</h3>
      </div>

      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Completed
          </span>
          <span className="text-xl">✅</span>
        </div>
        <h3 className="text-2xl font-black text-emerald-600">
          {completedTasks}
        </h3>
      </div>

      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Remaining
          </span>
          <span className="">⏳</span>
        </div>
        <h3 className="text-2xl font-black text-amber-500">{remainingTasks}</h3>
      </div>

      <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Progress
          </span>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
            {progressPercentage}%
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-3">
          <div
            className="bg-indigo-600 h-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
