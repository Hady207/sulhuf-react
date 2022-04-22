import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";
import UploadFile from "../pages/UploadFile";
import CreateItem from "../pages/CreateItem";
import Orders from "../pages/Orders";
import ViewOrder from "../pages/ViewOrder";
import ViewItem from "../pages/ViewItem";
import EditItem from "../pages/EditItem";
import ProtectedRoute from "./ProtectedRoute";
import rootSelectors from "../pages/Root/selectors";

// Handle navigational routes using react-router-dom
const AppRoute = () => {
  const { userProfile } = useSelector(rootSelectors);
  return (
    <Routes>
      <Route path="/Login" element={<Auth />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/upload"
        element={
          <ProtectedRoute>
            <UploadFile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/item/:id"
        element={
          <ProtectedRoute>
            <ViewItem />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <ViewOrder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-item"
        element={
          <ProtectedRoute>
            <CreateItem />
          </ProtectedRoute>
        }
      />
      <Route
        path="/update-item"
        element={
          <ProtectedRoute>
            <EditItem />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoute;
