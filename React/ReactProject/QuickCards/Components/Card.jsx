import React from "react";

function Card({ users, handleRemoveUser, index }) {
  return (
    <div className="bg-emerald-400 h-62 rounded-2xl shadow-md p-4 text-center w-62">
      <img
        src={users.image}
        className="w-20 h-20 mx-auto rounded-full border-4 border-gray-200"
      />
      <h2 className="text-lg  font-bold mt-2">{users.name}</h2>
      <p className="text-sm pt-1 text-zinc-800">{users.email}</p>
      <p className="text-xs pt-1 text-zinc-700 mt-1">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <button
        onClick={() => handleRemoveUser(index)}
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
      >
        Remove It
      </button>
    </div>
  );
}
export default Card;
