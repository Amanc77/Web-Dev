import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);
  // variable and function (method) to manage the state of the counter
  // useState is a React Hook that allows you to add state to functional components
  // count is the current state value, and setCount is the function to update it
  // Initial value of count is set to 15
  // You can change the initial value to any number you like
  const resetCount = () => setCount(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6">
      <h1 className="bg-red-500 text-white p-4 text-3xl rounded shadow-md">
        A Counter Demo
      </h1>

      <div className="bg-gray-800 text-4xl font-bold p-6 rounded shadow">
        Counter Value: {count}
      </div>

      <div className="flex space-x-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-xl shadow transition"
        >
          Add 1 Value
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-xl shadow transition"
        >
          Remove 1 Value
        </button>
      </div>

      <button
        onClick={resetCount}
        className="bg-yellow-400 hover:bg-yellow-700 text-black px-6 py-2 rounded-full text-xl mt-4 shadow transition"
      >
        Make Counter Zero
      </button>
    </div>
  );
}

export default App;
