import React from "react";

function Marquee({ imagesUrl }) {
  return (
    <div className=" flex py-7 w-full  gap-20  whitespace-nowrap overflow-hidden">
      {imagesUrl.map((url, urlIndex) => (
        <img
          key={urlIndex}
          src={url}
          alt="urlImage"
          className=" w-[6vw] shrink-0"
        />
      ))}{" "}
      {imagesUrl.map((url, urlIndex) => (
        <img key={urlIndex} src={url} alt="urlImage" className=" shrink-0" />
      ))}
    </div>
  );
}

export default Marquee;
