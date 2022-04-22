import React from "react";
import { useLocation, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import RootSelector from "../pages/Root/selectors";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { userProfile } = useSelector(RootSelector);
  if (!userProfile?.id) {
    console.log("route", userProfile);
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
