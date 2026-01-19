import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");

  // 🔐 Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 🔒 Role not allowed
  if (allowedRoles.length > 0 && !allowedRoles.some(r => roles.includes(r))) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
