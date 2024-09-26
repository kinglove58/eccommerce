import { useContext } from "react";
import { AuthContent } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContent);
  const location = useLocation();
  if (loading) return <div>Loading...</div>;
  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
