import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? Children : <Navigate to="/login" />;
};

export default ProtectedRoute;
