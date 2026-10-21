const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500 border-r-violet-500"></div>

        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 opacity-80 blur-md"></div>

        <div className="absolute h-3 w-3 rounded-full bg-white shadow-lg shadow-blue-400"></div>
      </div>

      {/* Loading Text */}
      <div className="mt-7 flex items-center gap-1">
        <p className="text-lg font-semibold tracking-wide text-white">
          Loading
        </p>

        <div className="flex gap-1">
          <span className="animate-bounce text-blue-400">.</span>
          <span className="animate-bounce text-violet-400 [animation-delay:150ms]">
            .
          </span>
          <span className="animate-bounce text-blue-400 [animation-delay:300ms]">
            .
          </span>
        </div>
      </div>

      <p className="mt-2 text-sm text-slate-400">
        Please wait while we prepare everything
      </p>
    </div>
  );
};

export default Loading;
