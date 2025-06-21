import { useState } from "react";
import Cards from "./Components/Cards";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards />
    </>
  );
}

export default App;
