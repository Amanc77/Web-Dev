import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({ title = "Get Started" }) {
  return (
    <div className=" ">
      <button className=" w-40 bg-white rounded-full px-3 py-1 flex  justify-between items-center text-black ">
        <p className=" font-sm">{title}</p>
        <BsArrowReturnRight className="" />
      </button>
    </div>
  );
}

export default Button;
