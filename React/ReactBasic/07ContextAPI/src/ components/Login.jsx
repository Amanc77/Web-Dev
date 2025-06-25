import React from "react";

import { useState, useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Please fill in both fields.");
      return;
    }
    setUser({ userName, password });
  };

  return (
    <div className="flex flex-col items-center justify-center text-white bg-gray-800">
      <h1 className="flex flex-col items-center justify-center m-4 text-3xl text-yellow-200">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-white"
      >
        <input
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2 mb-4 border border-gray-300"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 border border-gray-300"
        />
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
