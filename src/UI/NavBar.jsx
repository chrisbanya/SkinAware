import { useRef, useEffect, useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { IoLogOutOutline } from "react-icons/io5";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isLandingPage = location.pathname === "/";

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
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <>
      <header className="sticky w-full top-0 z-50 bg-white">
        <nav className="flex justify-between items-center mx-auto w-11/12 lg:w-10/12 max-w-screen-lg rounded-2xl border border-gray-50 shadow ">
          <Link to="/">
            <div className="flex items-center -space-x-3 sm:space-x-[unset] pl-4">
              <Logo />
              <span>SkinAware</span>
            </div>
          </Link>

          {user ? (
            isLandingPage ? (
              <>
                {/* safeguard incase already signed in user jailbreaks to LandingPage */}
                <div className="pr-2">
                  <div className="flex space-x-2 xs:space-x-4 sm:space-x-4">
                    <Link to="/signup">
                      <button className="bg-blue-600 text-white text-center rounded-lg px-1 xs:px-1.5 sm:px-2 py-2 text-xs sm:text-sm md:text-base ">
                        Get Started
                      </button>
                    </Link>
                    <Link to="/home">
                      <button className="text-gray-700 border-[#74094D] hover:text-white hover:bg-[#74094D] border-1 text-center rounded-lg px-1 xs:px-1.5 sm:px-2 py-2 text-xs sm:text-sm md:text-base ">
                        Back to home
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Authenicated user Desktop screen menu */}
                <ul className="hidden md:flex space-x-6 lg:space-x-12">
                  <li>
                    <NavLink
                      to="/home"
                      className=" hover:text-gray-800"
                      style={({ isActive, isPending }) => ({
                        color: isActive
                          ? "#74094D"
                          : isPending
                            ? "#FBBF24"
                            : "",
                        fontWeight: isActive ? "bold" : "",
                      })}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/myUploads"
                      className="hover:text-gray-800"
                      style={({ isActive, isPending }) => ({
                        color: isActive
                          ? "#74094D"
                          : isPending
                            ? "#FBBF24"
                            : "",
                        fontWeight: isActive ? "bold" : "",
                      })}
                    >
                      My Uploads
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/resources"
                      className=" hover:text-gray-800"
                      style={({ isActive, isPending }) => ({
                        color: isActive
                          ? "#74094D"
                          : isPending
                            ? "#FBBF24"
                            : "",
                        fontWeight: isActive ? "bold" : "",
                      })}
                    >
                      Resources
                    </NavLink>
                  </li>
                </ul>
                <div className="flex space-x-4 items-center">
                  <button
                    onClick={handleSignOut}
                    className="flex items-center text-gray-700 border border-[#74094D] hover:text-white hover:bg-[#74094D] text-center rounded-lg px-2 py-1.5 transition-colors duration-300 ease-in-out"
                  >
                    <span>
                      <IoLogOutOutline className="inline-block mr-1 text-2xl text-[#9A9090] hover:text-white " />
                    </span>
                    <span className="font-semibold text-[#9A9090] hover:text-white">
                      Log Out
                    </span>
                  </button>
                  <button
                    className="md:hidden"
                    ref={buttonRef}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? (
                      <MdOutlineClose className="text-3xl text-[#9A9090]" />
                    ) : (
                      <GiHamburgerMenu className="text-3xl  text-[#9A9090]" />
                    )}
                  </button>
                </div>
              </>
            )
          ) : (
            <>
              {/* unAuthenicated user menu */}
              <div>
                <div className="flex space-x-2 xs:space-x-4 sm:space-x-4 items-center pr-4 ">
                  <Link to="/signup">
                    <button className="bg-blue-600 text-white text-center rounded-lg px-1 xs:px-4 sm:px-2 py-2 text-xs sm:text-sm md:text-base transition-colors duration-300 ease-in-out">
                      Get Started
                    </button>
                  </Link>
                  <Link to="/signin">
                    <button className="text-gray-700  border border-[#74094D] hover:text-white hover:bg-[#74094D] text-center rounded-lg px-3.5 xs:px-5 sm:px-5 md:px-6 py-2 text-xs sm:text-sm md:text-base transition-colors duration-300 ease-in-out">
                      Log In
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}

          {/* Desktop Screen Menu */}

          {/* <div className="hidden md:flex space-x-4">
            <Link to="/signup">
              <button className="bg-blue-600 text-white px-4 py-1.5 text-center rounded-lg">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button className="text-bold text-gray-700 border-gray-200  px-4 py-1.5 border-1 text-center rounded-lg">
                Log In
              </button>
            </Link>
          </div> */}
        </nav>

        {/* mobile menu dropdown */}

        {isMobileMenuOpen && (
          <ul
            ref={menuRef}
            className="fixed z-50 md:hidden flex flex-col items-center w-full space-y-4 p-4 bg-white"
          >
            <li className="border-b hover:scale-110 transition-transform duration-300">
              <NavLink
                to="/Home"
                style={({ isActive, isPending }) => ({
                  color: isActive ? "#74094D" : isPending ? "#FBBF24" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                Home
              </NavLink>
            </li>

            <li className="border-b hover:scale-110 transition-transform duration-300">
              <NavLink
                to="/myUploads"
                style={({ isActive, isPending }) => ({
                  color: isActive ? "#74094D" : isPending ? "#FBBF24" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                My Uploads
              </NavLink>
            </li>

            <li className="border-b hover:scale-110 transition-transform duration-300">
              <NavLink
                to="/resources"
                style={({ isActive, isPending }) => ({
                  color: isActive ? "#74094D" : isPending ? "#FBBF24" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                Resources
              </NavLink>
            </li>

            {/* <button className="border-b hover:scale-110 transition-transform duration-300">
              <a href="#">Login</a>
            </button> */}

            <button
              onClick={handleSignOut}
              className="border-b hover:scale-110 transition-colors duration-300 ease-in-out"
            >
              Log Out
            </button>
            <div className="w-1/2 border-b-4 border-b-[#FAFCFF]"></div>
          </ul>
        )}
      </header>
    </>
  );
};
export default NavBar;
