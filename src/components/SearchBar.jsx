export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      className="w-full mb-5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-2.5 text-sm focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50/50 transition-all duration-200"
      type="text"
      placeholder="Search your task..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
