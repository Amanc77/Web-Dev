import React from "react";

function Nav() {
  return (
    <div>
      <nav className=" max-w-screen-xl flex mx-auto  justify-between items-center bg-gray-900 p-4">
        <h1 className="text-2xl text-white">Refokus</h1>
        <ul className="flex">
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
