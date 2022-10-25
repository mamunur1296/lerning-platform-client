import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvaider";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return <p>loding...</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
