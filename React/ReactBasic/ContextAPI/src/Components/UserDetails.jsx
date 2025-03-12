import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const handelGoBack = (e) => {
    navigate("/User");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-blue-600">UserDetails</h1>
      <p className="text-white text-2xl mt-2 text-center max-w-xl">
        <h2> User Name is: {name} </h2>
      </p>
      <button
        onClick={handelGoBack}
        className=" bg-yellow-400 text-black p-2 rounded-md mt-4"
      >
        {" "}
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
