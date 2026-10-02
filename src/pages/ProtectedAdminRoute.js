import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {

  const isLoggedIn =
    sessionStorage.getItem("jeplAdminLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedAdminRoute;