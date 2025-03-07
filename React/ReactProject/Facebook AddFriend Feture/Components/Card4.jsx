import React from "react";

function Card4({ values, handalBtnClick2, index }) {
  const { image, name, profession, addFriend } = values;
  return (
    <div className="flex flex-col items-center w-60 bg-white rounded-md shadow-lg">
      <div className="w-full h-40 overflow-hidden rounded-md">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className=" p-5">
        <h2 className="text-lg left-0 font-semibold">Name: {name}</h2>
        <h5 className="text-gray-600">Profession: {profession}</h5>
        <button
          onClick={() => {
            handalBtnClick2(index);
          }}
          className={`p-3 mt-2 ${
            addFriend ? "bg-green-600" : "bg-blue-600"
          } text-white rounded-md`}
        >
          {addFriend === true ? "Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Card4;
