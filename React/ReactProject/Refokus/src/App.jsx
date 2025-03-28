import React from "react";
import Nav from "./Components/Nav";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
function App() {
  return (
    <div className=" bg-gray-950 min-h-screen ">
      <Nav />
      <Work />
      <Stripes />
      <Products />
    </div>
  );
}

export default App;
