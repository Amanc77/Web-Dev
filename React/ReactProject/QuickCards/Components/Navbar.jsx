import React from "react";
function Navbar({ total }) {
  return (
    <div className=" w-full px-10 py-3 h-15  flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900">
      <h3 className={`text-3xl text-white text-center font-bold`}>
        QuickCards
      </h3>
      <div className=" flex gap-2 bg-orange-600  rounded-md text-sm p-2">
        <h3 className=" "> Total </h3>
        <h4>{total}</h4>
      </div>
    </div>
  );
}

export default Navbar;
