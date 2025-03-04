import React from "react";
import data from "./Data";

function Card() {
  return (
    <div className="container h-full grid grid-cols-3 justify-center items-center gap-10 p-20 bg-zinc-700">
      {data.map((ele, index) => (
        <div className="imageContainer flex flex-col w-full max-w-sm rounded-lg shadow-md bg-black-400 shadow-cyan-400">
          <img
            className="w-full object-cover h-60 rounded-t-lg "
            src={ele.image}
            alt="Image"
          />
          <div className="px-6 py-4">
            <h2 className="text-xl mb-2 text-white">{ele.name}</h2>
            <p className="text-base text-white">{ele.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
