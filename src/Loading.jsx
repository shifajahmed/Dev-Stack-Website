
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <span className="loading loading-spinner loading-lg text-primary"></span>

      <p className="mt-4 text-lg font-semibold text-gray-600">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
