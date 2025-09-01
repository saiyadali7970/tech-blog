export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin" style={{ animationDelay: '0.15s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDelay: '0.3s' }}></div>
      </div>
    </div>
  );
}