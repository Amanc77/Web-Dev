import React from "react";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState(
    "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  );

  return (
    <div>
      <div
        className={`min-h-screen flex flex-col gap-y-80 items-center justify-center ${bgColor}`}
      >
        <div className="text-white text-center">
          <h1 className=" text-4xl flex items-center justify-center">
            Background Changer
          </h1>
        </div>

        <div className=" flex flex-wrap gap-4 justify-center gap-x-22">
          <button
            onClick={() => setBgColor("bg-red-500")}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
          >
            red
          </button>
          <button
            onClick={() => setBgColor("bg-yellow-200")}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
          >
            yellow
          </button>
          <button
            onClick={() => setBgColor("bg-blue-500")}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
          >
            blue
          </button>
          <button
            onClick={() => setBgColor("bg-white")}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
          >
            white
          </button>
          <button
            onClick={() => {
              setBgColor("bg-green-500");
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
