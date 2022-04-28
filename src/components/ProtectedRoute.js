import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  console.log("Check user in private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute
