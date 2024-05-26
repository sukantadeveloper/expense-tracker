import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("token");

  if (!isAuthenticated) {
    alert("Please login first")
    return <Navigate to={"/login"} />;
  }
  return <> {children}</>;
};

export default PrivateRoute;
