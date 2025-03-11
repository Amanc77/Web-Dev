import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gray-800 h-16 flex items-center justify-between text-white px-10 py-4">
      <h2 className="text-2xl font-bold">Routing</h2>
      <div className="flex gap-x-10">
        {["Home", "User", "Contact", "About"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item}`}
            end={item === "Home"}
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive ? "text-yellow-400 font-semibold" : "text-white"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
