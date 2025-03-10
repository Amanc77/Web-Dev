import React from "react";
import Home from "./Components/Home";
import User from "./Components/User";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Routes, Route, Outlet } from "react-router-dom";
import UserDetails from "./Components/UserDetails";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />}></Route>
        <Route path="/User/:name" element={<UserDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default Routing;
