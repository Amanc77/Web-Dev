import React from "react";
import Button from "./Button";

function Product({ val }) {
  return (
    <div className=" w-full py-20 text-white">
      <div className=" max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className=" text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="details  w-1/3">
          <p className=" mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus quasi rem blanditiis quod?
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Product;
