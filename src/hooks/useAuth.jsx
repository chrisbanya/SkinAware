import { useContext } from "react";
import { AuthContext } from "../contexts/useAuth.context";

export const useAuth = () => useContext(AuthContext);
