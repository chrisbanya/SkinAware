import { useRef, useEffect, useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

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
      <header className="sticky w-full top-0 z-50 bg-white">
        <nav className="flex justify-between items-center mx-auto w-11/12 lg:w-10/12 max-w-screen-lg">
          <div className="flex items-center -space-x-3 sm:space-x-[unset]">
            <Logo />
            <a className="" href="#">
              SkinAware
            </a>
          </div>
          {/* Auth buttons mobile */}
          <div className="md:hidden  ">
            <div className="flex space-x-2 md:hidden  ">
              <button className="bg-blue-600 text-white text-center rounded-lg px-2 py-1.5">
                <a href="#">Sign Up</a>
              </button>
              <button className=" text-gray-700 border-gray-200 border-1 text-center rounded-lg px-2 py-1.5">
                <a href="#" className="text-bold">
                  Log In
                </a>
              </button>
            </div>
          </div>
          <button
            className="md:hidden"
            ref={buttonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <MdOutlineClose className="text-2xl text-[#9A9090]" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-[#9A9090]" />
            )}
          </button>

          {/* Desktop Screen Menu */}

          <ul className="hidden md:flex space-x-6 lg:space-x-12">
            <li>
              <a href="#" className=" hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 ">
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

        {/* mobile menu dropdown */}

        {isMobileMenuOpen && (
          <ul
            ref={menuRef}
            className="fixed z-50 md:hidden flex flex-col items-center w-full space-y-4 p-4 bg-white"
          >
            <li className="border-b hover:scale-110 transition-transform duration-300">
              <a href="#">Home</a>
            </li>

            <li className="border-b hover:scale-110 transition-transform duration-300">
              <a href="#">How it Works</a>
            </li>

            <li className="border-b hover:scale-110 transition-transform duration-300">
              <a href="#">Resources</a>
            </li>

            <button className="border-b hover:scale-110 transition-transform duration-300">
              <a href="#">Login</a>
            </button>

            <button className="border-b hover:scale-110 transition-transform duration-300">
              <a href="#">SignUp</a>
            </button>
            <div className="w-1/2 border-b-4 border-b-[#FAFCFF]"></div>
          </ul>
        )}
      </header>
    </>
  );
};
export default NavBar;
