import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-75"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  );
};

export default Loader;
