import React from "react";

function Card2({ id, color }) {
  return (
    <div>
      <button className={`m-2 p-2 ${color} rounded-md`}> {id}</button>
    </div>
  );
}

export default Card2;
