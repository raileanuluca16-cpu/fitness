export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gradient-bg">
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary text-glow mb-2 animate-pulse">
          ELITE<span className="text-secondary">FIT</span>
        </h2>
        <p className="text-muted-foreground animate-pulse">Loading your transformation...</p>
      </div>
    </div>
  )
}
