import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-gray-950");

  const changeBgColor = (color) => {
    setBgColor(`bg-${color}`);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
      <div
        className={`flex flex-col justify-between w-[98%] h-[98%] p-4 shadow-xl ${bgColor}`}
      >
        <p className="text-white text-center text-xl">
          Click a button to change background
        </p>
        <div className="flex justify-center gap-4 flex-wrap p-4 shadow-xl">
          <button
            onClick={() => changeBgColor("red-600")}
            className="bg-red-600 text-white p-4 shadow-xl rounded-md font-bold"
          >
            Red
          </button>
          <button
            onClick={() => changeBgColor("green-600")}
            className="bg-green-600 text-white p-4 shadow-xl rounded-md font-bold"
          >
            Green
          </button>
          <button
            onClick={() => changeBgColor("blue-600")}
            className="bg-blue-600 text-white p-4 shadow-xl rounded-md font-bold"
          >
            Blue
          </button>
          <button
            onClick={() => changeBgColor("yellow-500")}
            className="bg-yellow-500 text-black p-4 shadow-xl rounded-md font-bold"
          >
            Yellow
          </button>
          <button
            onClick={() => changeBgColor("purple-600")}
            className="bg-purple-600 text-white p-4 shadow-xl rounded-md font-bold"
          >
            Purple
          </button>
          <button
            onClick={() => changeBgColor("indigo-600")}
            className="bg-indigo-600 text-white p-4 shadow-xl rounded-md font-bold"
          >
            Indigo
          </button>
          <button
            onClick={() => changeBgColor("pink-500")}
            className="bg-pink-500 text-white p-4 shadow-xl rounded-md font-bold"
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
