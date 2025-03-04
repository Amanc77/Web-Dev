import React from "react";
import Hero from "../Components/Hero";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
