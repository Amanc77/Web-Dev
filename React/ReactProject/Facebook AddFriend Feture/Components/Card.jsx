import React from "react";

function Card(props, color) {
  return (
    <div className=" ">
      <button className=" m-2 p-2 bg-blue-600 rounded-md">{props.id}</button>
    </div>
  );
}

export default Card;
