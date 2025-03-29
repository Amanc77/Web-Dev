import React from "react";

function Card({ width, start, para, hover = "none" }) {
  //console.log(start);
  return (
    <div
      className={`  bg-gray-800 p-5 rounded-xl ${width} min-h-88 flex flex-col justify-between hover:${hover} `}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="font-light">heading</h3>
          {/* <IoIosArrowRoundForward /> */}
        </div>

        <h1 className="text-3xl font-normal mt-5">text</h1>
      </div>
      <div className="w-full ">
        {start === "true" && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 border border-zinc-50 py-2 px-5 font-semibold">
              Contact Us
            </button>
          </>
        )}
        {para === "true" && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
