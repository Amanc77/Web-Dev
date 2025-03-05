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
            <div className=" grid grid-cols-2">
              <h3 className="  text-white w-1/2 bg-zinc-500 text-center rounded-2xl mt-2 px-3 py-2">
                {ele.price}
              </h3>
              <button
                className={` ${
                  ele.inStock ? "bg-yellow-400" : "bg-red-500"
                }  text-black rounded-2xl mt-2 px-3 py-2`}
              >
                {ele.inStock ? "Add to Cart" : "Out of Stock "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
