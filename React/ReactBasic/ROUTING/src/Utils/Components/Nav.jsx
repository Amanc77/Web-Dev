import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  function getNavLinkClass({ isActive }) {
    return isActive
      ? "text-blue-400 font-bold"
      : "text-gray-300 hover:text-white";
  }

  return (
    <nav className="bg-gray-800 h-15 flex items-center justify-between gap-x-10 text-white  px-10 text-1.5xl py-4">
      <h2 className="text-2xl font-bold">Routing</h2>
      <div className="flex text-white px-10 gap-x-11">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/User" className={getNavLinkClass}>
          User
        </NavLink>
        <NavLink to="/Contact" className={getNavLinkClass}>
          Contact
        </NavLink>
        <NavLink to="/About" className={getNavLinkClass}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
