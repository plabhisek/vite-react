import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Hello, TypeScript + React!</h1>
      <p className="text-lg">Count: {count}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
