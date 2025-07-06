import { useRef, useEffect, useState } from "react";
import Logo from "./Logo";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky w-full top-0 z-50 bg-white mt-1 ">
        <nav className="flex justify-between items-center w-5/6 mx-auto ">
          <div className="flex items-center space-x-4">
            <Logo />
            <a href="#">SkinAware</a>
          </div>
          <button
            className="md:hidden"
            ref={buttonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            menu
          </button>

          {/* Desktop Screen Menu */}

          <ul className="hidden md:flex space-x-6 lg:space-x-12">
            <li>
              <a href="#" className=" hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-800">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-800">
                Resources
              </a>
            </li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-1.5 text-center rounded-lg">
              <a href="#">Sign Up</a>
            </button>
            <button className=" text-gray-700 border-gray-200  px-4 py-1.5 border-1 text-center rounded-lg">
              <a href="#" className="text-bold">
                Log In
              </a>
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <ul
            ref={menuRef}
            className="md:hidden flex flex-col items-center w-full  space-y-4  p-4 border border-gray-700 bg-gray-100"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <button>
              <a href="#">Login</a>
            </button>
            <button>
              <a href="#">SignUp</a>
            </button>
          </ul>
        )}
      </header>
    </>
  );
};
export default NavBar;
