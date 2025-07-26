import { Link } from "react-router-dom";
import { LiaEyeSlash } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import AuthPageLogo from "../components/AuthPageLogo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.prefill) {
      setCredentials((prev) => ({
        ...prev,
        email: location.state.prefill,
        password: "",
      }));
    }
  }, [location.state]);
  function handleChange(e) {
    setErrors("");
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  const validateForm = () => {
    const newErrors = {};
    const { email, password } = credentials;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password.trim()) {
      newErrors.password = "Passwoed is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    return newErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const signInValidationErrors = validateForm();
    if (Object.keys(signInValidationErrors).length > 0) {
      setErrors(signInValidationErrors);
      return;
    }
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      toast.success("Login Successful");
      setTimeout(() => navigate("/home"), 1000);
    } catch (error) {
      const errorMessages = {
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again!",
        "auth/invalid-email": "Invalid email format.",
        "auth/user-disabled": "This account has been disabled.",
        "auth/too-many-requests": "Too many failed attempts. Try again later.",
        "auth/invalid-credential":
          "Invalid email or password. Please check your credentials.",
      };

      // Defaults to Firebase error message if no custom message is found
      const errorMessage = errorMessages[error.code] || error.message;
      toast.error(errorMessage);
      setErrors({ firebaseError: errorMessage });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full border-2">
      <Toaster position="top-right" />"
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
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              className="w-11/12"
            >
              <div className="space-y-6">
                <div className="flex flex-col mt-6">
                  <label className="font-normal text-[15px] mb-4">Email</label>
                  <input
                    name="email"
                    type="text"
                    required
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="ray@gmail.com"
                    className={`mb-2 px-4 py-4 rounded-md outline-blue-500 border ${errors.email ? "border-red-500" : " border-gray-300"} text-sm`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
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
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className={`mb-2 px-4 py-4 rounded-md outline-blue-500 border ${errors.password ? "border-red-500" : " border-gray-300"} text-sm w-full`}
                    />
                    <button
                      type="button"
                      onClick={() => setPwdVisible(!pwdVisible)}
                      className="flex items-center"
                    >
                      {pwdVisible ? (
                        <LiaEyeSolid className="w-6 h-6 absolute right-4" />
                      ) : (
                        <LiaEyeSlash className="w-6 h-6 absolute right-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>
                <Link to="/forgot-password">
                  <div className="flex justify-end">
                    <p className="font-normal text-[#74094d]">
                      Forgot password?
                    </p>
                  </div>
                </Link>
                {errors.firebaseError && (
                  <p className="text-red-500 text-sm mt-1 text-center">
                    {errors.firebaseError}
                  </p>
                )}
              </div>
              {/* submit button section below */}
              <div className=" flex flex-col justify-center items-center mt-6">
                <button
                  type="submit"
                  className="bg-[#74094D] text-white w-1/2 py-2 px-4 font-medium tracking-wide rounded-md mb-4  transition-colors duration-300 focus:outline-none cursor-pointer"
                >
                  {isLoading ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    "Sign In"
                  )}
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
