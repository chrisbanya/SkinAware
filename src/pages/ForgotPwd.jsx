import { Link, useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import AuthPageLogo from "../components/AuthPageLogo";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ForgotPwd = () => {
  const [credential, setCredential] = useState({ email: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setError("");
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }
  const validateEmail = () => {
    const emailErrors = {};
    const { email } = credential;
    if (!email.trim()) {
      emailErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailErrors.email = "Email is invalid";
    }
    return emailErrors;
  };

  function handlePwdReset(e) {
    e.preventDefault();
    const emailErrors = validateEmail();
    if (Object.keys(emailErrors).length > 0) {
      setError(emailErrors);
      return;
    }
    setIsLoading(true);

    sendPasswordResetEmail(auth, credential.email)
      .then(() => {
        toast.success(
          "If this email is registered, a reset link has been sent."
        );

        setTimeout(() => navigate("/signin"), 4000);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorMessages = {
          "auth/user-not-found": "No account found with this email.",
          "auth/wrong-password": "Incorrect password. Try again!",
          "auth/invalid-email": "Invalid email format.",
          "auth/user-disabled": "This account has been disabled.",
          "auth/too-many-requests":
            "Too many failed attempts. Try again later.",
        };

        // Default to Firebase error message if no custom message is found
        const errorMessage = errorMessages[error.code] || error.message;
        setError({ firebaseError: errorMessage });
        setIsLoading(false);
      });
  }
  return (
    <div className="w-full">
      <Toaster position="top-right" />
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
            <form
              noValidate
              autoComplete="off"
              onSubmit={handlePwdReset}
              className="w-11/12"
            >
              <div className="space-y-6">
                <div className="flex flex-col mt-6">
                  <label className="font-normal text-[15px] mb-4">Email</label>
                  <input
                    name="email"
                    type="text"
                    value={credential.email}
                    onChange={handleEmailChange}
                    placeholder="ray@gmail.com"
                    className="mb-2 px-4 py-4 rounded-md outline-blue-500 border border-gray-300 text-sm"
                  />
                  {error.email && (
                    <p className="text-xs text-red-500">{error.email}</p>
                  )}
                  {error.firebaseError && (
                    <p className="text-xs text-red-500">
                      {error.firebaseError}
                    </p>
                  )}
                </div>
              </div>
              {/* submit button section below */}
              <div className=" flex flex-col justify-center items-center mt-6">
                <button
                  type="submit"
                  className="bg-[#74094D] text-white w-1/2 py-2 px-4 font-medium tracking-wide rounded-md mb-4  transition-colors duration-300 focus:outline-none cursor-pointer"
                >
                  {isLoading ? (
                    <span className="animate-pulse"> Processing...</span>
                  ) : (
                    "Send Reset Link"
                  )}
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
