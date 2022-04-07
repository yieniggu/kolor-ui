import React from "react";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children, role }) => {
  return role === "admin" ? children : <Navigate to="/marketplace" />;
};
