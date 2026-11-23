const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-32">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#222329] border-t-[#C6FF00]"></div>
      <p className="text-[#9296A1] text-sm">Loading…</p>
    </div>
  );
};

export default Loading;
