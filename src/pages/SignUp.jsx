import { Link } from "react-router-dom";
import Footer from "../UI/Footer";
import AuthPageLogo from "../components/AuthPageLogo";

const SignUp = () => {
  return (
    <div className="w-full border-2">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto flex ">
        <div className="hidden md:block md:w-1/2  ">
          <img
            src="/signUpImg.png"
            alt="Sign up Img"
            loading="lazy"
            className="object-cover mx-auto"
          />
        </div>
        <div className="md:w-1/2 flex justify-center relative mx-auto md:mx-0">
          <div className="w-11/12 md:h-[96%] border border-gray-300 rounded-2xl md:absolute md:bottom-0 flex flex-col justify-center items-center mt-10 md:mt-0 ">
            <div className=" flex flex-col justify-center items-center">
              <AuthPageLogo />
              <h2 className="font-semibold text-2xl my-4 text-center">
                Create Your SkinAware Account
              </h2>
              <p className="font-normal text-xs text-[#9A9090] mb-4">
                Unlock your personalized skin care journey
              </p>
            </div>
            {/* input section below */}
            <form className="w-11/12">
              <div className="  space-y-6">
                <div className="flex flex-col">
                  <label className="font-normal text-[15px] mb-4">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    placeholder="Dylan Ray"
                    className="mb-2 px-4 py-4 rounded-md outline-blue-500 border border-gray-300 text-sm"
                  />
                </div>
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
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Minimum 8 characters"
                    className="mb-2 px-4 py-4 rounded-md outline-blue-500 border border-gray-300 text-sm"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="font-normal text-[15px] mb-4">
                    Confirm Password
                  </label>
                  <input
                    name="cpassword"
                    type="password"
                    required
                    placeholder="Re-enter password"
                    className="mb-2 px-4 py-4 rounded-md outline-blue-500 border border-gray-300 text-sm"
                  />
                </div>
              </div>
              {/* submit button section below */}
              <div className="flex flex-col justify-center items-center mt-6 ">
                <button className="bg-[#5788FA] text-white w-1/2 py-2 px-4 font-medium tracking-wide rounded-md mb-4 hover:bg-blue-600 transition-colors duration-300 focus:outline-none cursor-pointer">
                  Sign Up
                </button>

                <p className="text-sm text-[#9A9090] mb-4 lg:mb-0">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-[#5788FA] font-medium cursor-pointer"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-[71%] max-w-screen-lg mx-auto mt-20 ">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
