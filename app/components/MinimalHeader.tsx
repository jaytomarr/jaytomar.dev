export function MinimalPageEnder() {
  return (
    <div className="w-full">
      {/* Main Footer Area */}
      <div className="flex items-center justify-between bg-white px-4 py-3">
        {/* Left Icon - Code Symbol */}
        <div className="font-mono text-lg text-gray-400">{`{ / }`}</div>

        {/* Right Button with Inner Shadow */}
        <button className="h-6 w-8 rounded-sm border border-gray-300 bg-white shadow-inner transition-colors duration-200 hover:bg-gray-50"></button>
      </div>

      {/* Bottom Bar */}
      <div className="h-1 w-full bg-gray-800"></div>
    </div>
  );
}
