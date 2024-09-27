import { useContext } from "react";
import { AuthContent } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContent);
  const location = useLocation(); // Get the current location

  if (loading) return <div>Loading...</div>; // Show loading indicator if authentication is in progress

  if (user) return children; // If the user is authenticated, render the child components

  // If the user is not authenticated, redirect to the login page
  // Pass the current location to the login page using the state prop
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
