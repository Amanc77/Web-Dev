import React from "react";

import Card from "./Card";

function Cards() {
  return (
    <div className=" flex max-w-screen-xl mx-auto py-4 gap-2 ">
      <Card width={"basis-1/3"} start={"false"} para={"true"} />
      <Card
        width={"basis-2/3"}
        start={"true"}
        para={"false"}
        hover={"bg-violet-500"}
      />
    </div>
  );
}

export default Cards;
