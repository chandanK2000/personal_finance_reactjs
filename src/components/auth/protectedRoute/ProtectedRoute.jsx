import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ requiredRole }) => {
const location = useLocation();


const token = localStorage.getItem("accessToken");

let user = {};

try {
    user = JSON.parse(
        localStorage.getItem("userDetails") || "{}"
    );
} catch {
    user = {};
}

if (!token) {
    return <Navigate to="/" replace />;
}

const rawRole =
    user.role ??
    user.roleName ??
    user.RoleName ??
    (Number(user.role_id ?? user.roleId) === 1
        ? "ADMIN"
        : "USER");

const role = String(rawRole).toUpperCase();

if (
    requiredRole &&
    role !== requiredRole.toUpperCase() &&
    !(requiredRole === "ADMIN" && role === "1")
) {
    return <Navigate to="/dashboard" replace />;
}

return <Outlet />;


};

export default ProtectedRoute;
