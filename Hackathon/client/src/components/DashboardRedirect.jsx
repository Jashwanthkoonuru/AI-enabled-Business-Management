import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const DashboardRedirect = () => {
  const { role } = useSelector((state) => state.auth);

  if (role === "admin") return <Navigate to="/admindashboard" />;
  if (role === "manager") return <Navigate to="/managerdashboard" />;
  if (role === "user") return <Navigate to="/userdashboard" />;

  return <Navigate to="/login" />;
};

export default DashboardRedirect;
