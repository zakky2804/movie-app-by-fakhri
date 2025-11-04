const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-title-text">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-4 border-t-primary border-gray-700 rounded-full animate-spin"></div>
        <p className="text-lg font-semibold animate-pulse">Loading...</p>
        <p className="text-sm text-gray-400">Please wait a moment</p>
      </div>
    </div>
  );
};

export default LoadingPage;
