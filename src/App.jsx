import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ForgotPwd } from "./pages/ForgotPwd";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import ProtectedRoutes from "./components/ProtectedRoutes";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPwd />} />
          <Route
            path="/Home"
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
