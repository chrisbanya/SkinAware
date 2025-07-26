import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="text-center text-4xl animate-pulse">LOADING...</div>;
  }

  return user ? children : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
