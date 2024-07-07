import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/home/index";
import Register from "../views/auth/register";
import Login from "../views/auth/login";
import Dashboard from "../views/admin/dashboard";
import UsersIndex from "../views/admin/users/index.jsx";
import UsersCreate from "../views/admin/users/create.jsx";
import UsersEdit from "../views/admin/users/edit.jsx";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      {/* route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/users" */}
      <Route
        path="/admin/users"
        element={
          isAuthenticated ? <UsersIndex /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/users/create" */}
      <Route
        path="/admin/users/create"
        element={
          isAuthenticated ? <UsersCreate /> : <Navigate to="/login" replace />
        }
      />

      {/* route "/admin/users/edit/:id" */}
      <Route
        path="/admin/users/edit/:id"
        element={
          isAuthenticated ? <UsersEdit /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}
