import { Link } from "react-router-dom";
import Footer from "../UI/Footer";
import AuthPageLogo from "../components/AuthPageLogo";

export const ForgotPwd = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 lg:w-10/12 max-w-screen-lg mx-auto flex">
        <div className="md:w-1/2 mx-auto md:mx-0  flex justify-center relative">
          <div className="w-11/12 md:h-[80%] border border-gray-300 rounded-2xl mt-10  flex flex-col justify-center items-center ">
            <div className=" flex flex-col justify-center items-center">
              <AuthPageLogo />
              <p className="font-semibold text-2xl my-4">Forgot Password?</p>
              <p className="font-normal text-xs text-[#9A9090] mb-4 text-wrap text-center">
                Enter your email address below, we’ll send you a link to reset
                your password
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
              </div>
              {/* submit button section below */}
              <div className=" flex flex-col justify-center items-center mt-6">
                <button className="bg-[#74094D] text-white w-1/2 py-2 px-4 font-medium tracking-wide rounded-md mb-4  transition-colors duration-300 focus:outline-none cursor-pointer">
                  Send Reset Link
                </button>

                <Link to="/signin" className=" cursor-pointer">
                  <p className="text-sm text-[#9A9090] hover:text-[#5788FA] mb-4 lg:mb-0">
                    Back to Sign In
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 ">
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
export default ForgotPwd;
