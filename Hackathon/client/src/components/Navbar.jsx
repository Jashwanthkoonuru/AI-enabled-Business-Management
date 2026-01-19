import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Home from "../components/home/Home";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="nav-container h-20  fixed top-0 left-0 right-0 z-50 bg-gradient-to-tr from-blue-900 to-indigo-400 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
              <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0 max-w-full overflow-hidden">
                  <div className="text-white font-bold text-2xl mt-3 whitespace-nowrap text-ellipsis">
                    AI-enabled Business Management
                  </div>
                </div>
                <div className="flex items-center ml-auto">
                  <div className="hidden md:flex md:space-x-8 items-center text-2xl">
                    <Link to="/" className="text-white hover:text-black">Home</Link>
                    <Link to="/about" className="text-white hover:text-black">About Us</Link>
                    <Link to="/contact" className="text-white hover:text-black">Contact Us</Link>
                  </div>
                  <div className="hidden md:flex md:space-x-4 items-center text-2xl ml-6">
                    <Link to="/signup" className="px-3 py-1.5 rounded-md text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700"> Signup</Link>
                    <Link to="/login" className="px-3 py-1.5 rounded-md text-sm font-1xl text-white bg-green-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"> Login</Link>
                  </div>
                  <div className="flex md:hidden items-center ml-2">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-white text-2xl focus:outline-none"
                    >
                      {isOpen ? "✖" : "☰"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-[#032B44]">
              <Link to="/"className="block text-white hover:text-black">Home</Link>
              <Link to="/about"className="block text-white hover:text-black">About Us</Link>
              <Link to="/contact"className="block text-white hover:text-black">Contact Us</Link>
            <div className="flex items-center md:flex md:space-x-4 mt-2 cursor-pointer">
              <Link to="/login" className="px-3 py-1.5 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_14px_#3b82f6] transition duration-300 sm:block">Login </Link>
              <Link to="/signup" className="px-3 py-1.5 rounded-md text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 shadow-[0_0_8px_#ec4899] hover:shadow-[0_0_14px_#ec4899] transition duration-300 sm:block">Signup</Link>
            </div>
          </div>
        )}
      </nav>
      <Home/>
    </>
  );
}

export default Navbar;
