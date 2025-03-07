import React from "react";
import Navbar from "../Components/Navbar";
import Second from "../Components/Second";
import Hero from "../Components/Hero";

function App() {
  // it returns only single React component. thats why we use () instead of {}.
  return (
    <div>
      <Navbar />
      <Second />
      <Hero />
    </div>
  );
}
export default App;
