export function Input({
  value,
  onChange,
  placeholder = "Enter text...",
  type = "text",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all"
    />
  );
}
