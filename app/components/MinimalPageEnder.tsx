export function MinimalPageEnder() {
  return (
    <div className="w-full">
      {/* Main Footer Area */}
      <div className="flex items-center justify-between bg-bg-primary px-4 py-3">
        {/* Left Icon - Code Symbol */}
        <div className="font-mono text-lg text-gray-400/50">{`{ / }`}</div>

        {/* Right Button with Inner Shadow */}
        <button className="h-3 w-8 rounded-sm border border-gray-300/50 bg-white/50 shadow-inner transition-colors duration-200 hover:bg-gray-50/50"></button>
      </div>
    </div>
  );
}
