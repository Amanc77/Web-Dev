import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";

// import Contacts from "./components/contacts/Contacts.jsx";
// Uncomment the line below if you want to use Contacts component
import Contacts from "./components/contacts/Contacts.jsx";

import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="user" element={<User />}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route
            loader={githubInfoLoader} // This will load the data before rendering the component
            path="github"
            element={<Github />}
          />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
