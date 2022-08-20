import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { userSelector } from "../../User/slices/userSlice";

function Admin() {
  const location = useLocation();
  const user = useSelector(userSelector);

  // 判断用户是否已登录状态
  if (user && !user.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default Admin;
