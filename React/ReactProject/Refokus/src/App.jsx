import React from "react";
import Nav from "./Components/Nav";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";

function App() {
  return (
    <div className=" bg-gray-950 min-h-screen ">
      <Nav />
      <Work />
      <Stripes />
    </div>
  );
}

export default App;
