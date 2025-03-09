import React from "react";
import Styles from "./Styles.module.css";
function Navbar({ data }) {
  return (
    <div className=" w-full px-10 py-3 h-15 bg-zinc-300 flex justify-between items-center   ">
      <h3 className={`text-3xl  text-center font-bold`}>MySong</h3>
      <div className=" flex gap-2 bg-orange-600  rounded-md text-sm p-2">
        <h3 className=" "> Favourites </h3>
        <h4>{data.filter((item) => item.added === true).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;
