import React, { useState } from "react";

function App() {
  //let sr = true;

  let [score, setScore] = useState(54);

  let [banned, setBanned] = useState(true);

  let [val, setVal] = useState({ name: "Aman", isBanned: false });

  return (
    <div className="bg-zinc-500 min-h-screen  flex flex-col  justify-center items-center ">
      <h1 className="text-5xl font-bold text-white">Score: {score}</h1>
      <button
        onClick={() => setScore((prev) => prev + 1)}
        className=" bg-blue-600 m-3 p-2 ml-20 rounded-sm flex flex-row"
      >
        change
      </button>

      <h1 className="text-5xl font-bold text-white">
        Band: {banned.toString()}
      </h1>
      <button
        onClick={() => setBanned(!banned)}
        className=" bg-blue-600 m-3 p-2 ml-20 rounded-sm flex flex-row"
      >
        change
      </button>

      <h1 className="text-5xl font-bold text-white"> Name: {val.name}</h1>
      <h2 className="text-5xl font-bold text-white">
        {" "}
        Banned: {val.isBanned.toString()}
      </h2>
      <button
        onClick={() =>
          setVal({ ...val, isBanned: !val.isBanned, name: "Aman Kumar" })
        }
        className={` ${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        } m-3 p-2 ml-20 rounded-sm flex flex-row`}
      >
        change
      </button>
    </div>
  );
}

export default App;
