import React from "react";

import { useParams } from "react-router-dom"; //

function User() {
  const { userId } = useParams(); // Extract userId from URL parameters
  return (
    <>
      <h1 className=" text-3xl"> userId = {userId}</h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">User Page</h1>

        <p className="text-lg text-gray-600">This is the user page content.</p>

        <p className="text-lg text-gray-600">
          You can add more user-specific information here.
        </p>

        <p className="text-lg text-gray-600">
          Feel free to customize this page as needed.
        </p>

        <p className="text-lg text-gray-600">Enjoy building your user page!</p>

        <p className="text-lg text-gray-600">
          This is a placeholder for user-related content.
        </p>
      </div>
    </>
  );
}

export default User;
