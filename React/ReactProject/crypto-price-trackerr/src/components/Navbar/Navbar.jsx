import React, { useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "try":
        setCurrency({ name: "try", symbol: "₺" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex flex-col border-b-2 border-[#3c3c3c] bg-[#0b004e] text-gray-300">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-[10%] py-2">
        <Link to="/">
          <img className="w-[min(12vw,120px)]" src={logo} alt="Logo" />
        </Link>
        <ul className="hidden md:flex gap-6 lg:gap-10 list-none">
          <Link to="/">
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Home
            </li>
          </Link>
          <Link to="/features">
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Features
            </li>
          </Link>
          <Link to="/pricing">
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Pricing
            </li>
          </Link>
          <Link to="/blog">
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Blog
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <select
            onChange={currencyHandler}
            className="px-2 py-1 rounded-md border-2 border-white bg-transparent text-white cursor-pointer transition duration-300 hover:bg-[#00aaff33] hover:border-[#00aaff] hover:text-[#00aaff] text-sm sm:text-base"
          >
            <option className="bg-[#09005c] text-white" value="usd">
              USD
            </option>
            <option className="bg-[#09005c] text-white" value="eur">
              EUR
            </option>
            <option className="bg-[#09005c] text-white" value="try">
              TRY
            </option>
            <option className="bg-[#09005c] text-white" value="inr">
              INR
            </option>
          </select>
          <button className="flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-[15px] font-medium text-[#393939] bg-white border-none cursor-pointer transition duration-300 hover:bg-[#00aaff] hover:text-white hover:scale-105">
            Sign Up
            <img className="w-3 sm:w-[13px]" src={arrow_icon} alt="" />
          </button>
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#0b004e] border-t border-[#3c3c3c] list-none text-sm">
          <Link to="/" onClick={toggleMenu}>
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Home
            </li>
          </Link>
          <Link to="/features" onClick={toggleMenu}>
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Features
            </li>
          </Link>
          <Link to="/pricing" onClick={toggleMenu}>
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Pricing
            </li>
          </Link>
          <Link to="/blog" onClick={toggleMenu}>
            <li className="cursor-pointer hover:text-[#00aaff] transition-colors">
              Blog
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
