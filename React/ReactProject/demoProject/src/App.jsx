import React, { useState } from "react";

function App() {
  let [score, setScore] = useState(500);

  setScore(300);
  return (
    <div className="bg-zinc-500 min-h-screen  flex   justify-center items-center ">
      <h1 className="text-5xl font-bold text-white">{score}</h1>
      <button
        onClick={() => {
          setScore(5);
        }}
        className=" bg-blue-600 m-3 p-2 ml-20 rounded-sm flex flex-row"
      >
        change
      </button>
    </div>
  );
}

export default App;
