import { Link, useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import AuthPageLogo from "../components/AuthPageLogo";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setError("");
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  
  // form validation

  const validateForm = () => {
    const newErrors = {};
    const { username, email, password, confirmPassword } = credentials;
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Please confirm password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      // user account creation
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredentials.user;
      // passing to db via setDoc b/cos firebase auth only accepts email and passsword if you want to store additionally info.
      await setDoc(doc(db, "users", user.uid), {
        username: credentials.username,
        email: credentials.email,
      });

      setIsLoading(false);
      toast.success("Account created successfully!");
      setCredentials({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(
        () =>
          navigate("/signin", {
            state: { prefill: userCredentials.user.email },
          }),
        1000
      );
    } catch (error) {
      const errorMessages = {
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again!",
        "auth/invalid-email": "Invalid email format.",
        "auth/user-disabled": "This account has been disabled.",
        "auth/too-many-requests": "Too many failed attempts. Try again later.",
      };

      // Default to Firebase error message if no custom message is found
      const errorMessage = errorMessages[error.code] || error.message;

      setError({ global: errorMessage });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full border-2">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

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
            <form
              className="w-11/12"
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="  space-y-6">
                <div className="flex flex-col">
                  <label className="font-normal text-[15px] mb-4">
                    Username
                  </label>
                  <input
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Dylan Ray"
                    value={credentials.username}
                    onChange={handleChange}
                    className={`mb-2 px-4 py-4 rounded-md outline-blue-500 text-sm border ${error.username ? "border-red-500" : "border-gray-300"} `}
                  />
                  {error.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.username}
                    </p>
                  )}
                </div>
                <div className="flex flex-col mt-6">
                  {/* Email */}
                  <label className="font-normal text-[15px] mb-4">Email</label>
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={credentials.email}
                    id="email"
                    placeholder="ray@gmail.com"
                    className={`mb-2 px-4 py-4 rounded-md outline-blue-500 border ${error.email ? "border-red-500" : "border-gray-300"} text-sm`}
                  />
                  {error.email && (
                    <p className="text-red-500 text-sm mt-1">{error.email}</p>
                  )}
                </div>
                <div className="flex flex-col mt-6">
                  {/* password */}
                  <label className="font-normal text-[15px] mb-4">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Minimum 8 characters"
                    onChange={handleChange}
                    value={credentials.password}
                    className={`mb-2 px-4 py-4 rounded-md outline-blue-500 border ${error.password ? "border-red-500" : "border-gray-300"} text-sm`}
                  />
                  {error.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.password}
                    </p>
                  )}
                </div>
                <div className="flex flex-col mt-6">
                  <label className="font-normal text-[15px] mb-4">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Re-enter password"
                    className={`mb-2 px-4 py-4 rounded-md outline-blue-500 border ${error.confirmPassword ? "border-red-500" : " border-gray-300 "} text-sm`}
                  />
                  {error.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.confirmPassword}
                    </p>
                  )}
                </div>
                {error.global && (
                  <p className="text-red-500 text-sm mt-1 text-center">
                    {error.global}
                  </p>
                )}
              </div>
              {/* submit button section below */}
              <div className="flex flex-col justify-center items-center mt-6 ">
                <button
                  type="submit"
                  className="bg-[#5788FA] text-white w-1/2 py-2 px-4 font-medium tracking-wide rounded-md mb-4 hover:bg-blue-600 transition-colors duration-300 focus:outline-none cursor-pointer "
                >
                  {isLoading ? <span className="animate-pulse">Processing...</span> : " Sign Up"}
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
