import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-blue-600">User Page</h1>
      <p className="text-white flex flex-col  text-center  mt-5">
        <Link
          to="/User/Aman"
          className=" text-xl  bg-amber-500 p-3  rounded-md mt-3.5"
        >
          Aman
        </Link>
        <Link
          to="/User/Mohan"
          className=" text-xl  bg-amber-500 p-3  rounded-md mt-3.5"
        >
          Mohan
        </Link>
        <Link
          to="/User/Kamal"
          className=" text-xl  bg-amber-500 p-3  rounded-md mt-3.5"
        >
          Kamal
        </Link>
        <Link
          to="/User/John"
          className=" text-xl  bg-amber-500 p-3  rounded-md mt-3.5"
        >
          John
        </Link>
      </p>
    </div>
  );
}

export default User;
