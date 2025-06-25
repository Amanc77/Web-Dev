import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom"; // Import useLoaderData to access loader data

function Github() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Amanc77")
      .then((res) => res.json())
      .then((data) => setUser(data));
  });

  //console.log(user);

  //   const user = useLoaderData(); // Use useLoaderData to get the data loaded by the loader function
  //   console.log(user); // This will log the data fetched by the loader function

  return (
    <>
      <div className=" bg-gray-600 text-3xl m-4 p-2 text-white text-center">
        Github
      </div>
      <div className=" flex flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full"
          />
          <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
          <p className="text-gray-500">@{user.login}</p>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Github Page</h1>
          <p className="text-lg text-gray-600">UserName = {user.name}</p>
          <p className="text-lg text-gray-600">Follower = {user.followers}.</p>
          <p className="text-lg text-gray-600">
            userId = {user.id} <br />
            userLogin = {user.login}
          </p>
          <p className="text-lg text-gray-600">
            useLocation = {user.location} <br />
            userBio = {user.bio}
          </p>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Amanc77");
  return res.json();
};
