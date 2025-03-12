import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";
import UserDetails from "./Components/UserDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" bg-zinc-600 ">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/User" element={<User />} />
        <Route path="/User/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
