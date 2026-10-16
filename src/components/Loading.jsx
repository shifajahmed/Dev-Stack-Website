
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <span className="loading loading-spinner loading-lg text-purple-600"></span>

      <p className="mt-4 text-lg font-medium text-gray-600">
        Loading technologies...
      </p>
    </div>
  );
};

export default Loading;
