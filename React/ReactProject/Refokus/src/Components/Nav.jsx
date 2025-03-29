import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="max-w-screen-xl flex mx-auto justify-between items-center bg-gray-900 p-5 rounded-md border-b-[1px] border-zinc-600">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl text-white font-medium">Refokus</h3>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Services", "Contact"].map((elem, index) => (
            <a key={index} className="text-sm text-white" href="#">
              {elem}
            </a>
          ))}
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
