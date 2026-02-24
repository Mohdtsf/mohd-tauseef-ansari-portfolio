export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border border-neon-blue/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-neon-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-r-electric-purple border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <div className="text-neon-blue font-mono tracking-widest text-sm animate-pulse">
          INITIALIZING...
        </div>
      </div>
    </div>
  );
}
