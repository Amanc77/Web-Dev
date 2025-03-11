import React from "react";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-3xl w-full mx-4 p-10 text-white shadow-lg rounded-lg  shadow-blue-400 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg  mb-6 text-white">
          Discover amazing content and explore our features. We aim to provide
          the best experience for our users.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
