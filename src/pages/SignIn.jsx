import { Link } from "react-router-dom";
import { LiaEyeSlash } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from "react";
import Footer from "../UI/Footer";
import AuthPageLogo from "../components/AuthPageLogo";

const SignIn = () => {
  const [pwdVisible, setPwdVisible] = useState(false);
  return (
    <div className="w-full border-2">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto flex">
        <div className="md:w-1/2 mx-auto md:mx-0  flex justify-center relative">
          <div className="w-11/12 md:h-[96%] border border-gray-300 rounded-2xl md:absolute md:bottom-0 flex flex-col justify-center items-center mt-10 md:mt-0 ">
            <div className=" flex flex-col justify-center items-center">
              <AuthPageLogo />
              <p className="font-semibold text-2xl my-4">Welcome Back!</p>
              <p className="font-normal text-xs text-[#9A9090] mb-4 text-wrap text-center">
                Sign in to your account and explore a world of possibilities.
              </p>
              <h2 className="font-semibold text-2xl my-4">Sign In</h2>
              <p className="font-normal text-xs text-[#9A9090] mb-4 text-wrap">
                {" "}
                Your journey begins here.
              </p>
            </div>
            {/* input section below */}
            <form noValidate autoComplete="off" className="w-11/12">
              <div className="space-y-6">
                <div className="flex flex-col mt-6">
                  <label className="font-normal text-[15px] mb-4">Email</label>
                  <input
                    name="email"
                    type="text"
                    required
                    placeholder="ray@gmail.com"
                    className="mb-2 px-4 py-4 rounded-md outline-blue-500 border border-gray-300 text-sm"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="font-normal text-[15px] mb-4">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={pwdVisible ? "text" : "password"}
                      required
                      placeholder="Enter password"
                      className="mb-2 px-4 py-4 rounded-md outline-blue-500 border border-gray-300 text-sm w-full"
                    />
                    <button onClick={() => setPwdVisible(!pwdVisible)} className="flex items-center">
                      {pwdVisible ? (
                        <LiaEyeSolid className="w-6 h-6 absolute right-4" />
                      ) : (
                        <LiaEyeSlash className="w-6 h-6 absolute right-4" />
                      )}
                    </button>
                  </div>
                </div>
                <Link to="/forgot-password">
                  <div className="flex justify-end">
                    <p className="font-normal text-[#74094d]">
                      Forgot password?
                    </p>
                  </div>
                </Link>
              </div>
              {/* submit button section below */}
              <div className=" flex flex-col justify-center items-center mt-6">
                <button className="bg-[#74094D] text-white w-1/2 py-2 px-4 font-medium tracking-wide rounded-md mb-4  transition-colors duration-300 focus:outline-none cursor-pointer">
                  Sign In
                </button>

                <p className="text-sm text-[#9A9090] mb-4 lg:mb-0">
                  Already have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-[#5788FA] font-medium cursor-pointer"
                  >
                    Create One
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 border-blue-600">
          <img
            src="/signInImg.png"
            alt="signInImg"
            loading="lazy"
            className="object-cover mx-auto"
          />
        </div>
      </div>
      <div className="w-11/12 lg:w-[71%] max-w-screen-lg mx-auto mt-20 ">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
