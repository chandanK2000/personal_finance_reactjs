import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import {
    FaHome,
    FaUsers,
    FaMoneyBillWave,
    FaReceipt,
    FaChartBar,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ role = "USER" }) => {

    const navigate = useNavigate();

    const isAdmin = role === "ADMIN";

    const handleLogout = () => {

        // Remove login information
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userDetails");

        // Go to home page
        navigate("/");
    };

    return (
        <aside className="app-sidebar">

            {/* Sidebar Header */}
            <div className="sidebar-header">
                <h5>💰 Personal Finance</h5>
            </div>

            {/* Navigation */}
            <Nav className="sidebar-nav flex-column">

                {/* Dashboard */}
                <Nav.Link
                    as={NavLink}
                    to="/dashboard"
                    className="sidebar-link"
                >
                    <FaHome className="sidebar-icon" />
                    <span>Dashboard</span>
                </Nav.Link>

                {/* Admin Only */}
                {isAdmin && (
                    <Nav.Link
                        as={NavLink}
                        to="/admin/users"
                        className="sidebar-link"
                    >
                        <FaUsers className="sidebar-icon" />
                        <span>User Management</span>
                    </Nav.Link>
                )}

                {/* Money In / Out */}
                <Nav.Link
                    as={NavLink}
                    to="/money"
                    className="sidebar-link"
                >
                    <FaMoneyBillWave className="sidebar-icon" />
                    <span>Money In / Out</span>
                </Nav.Link>

                {/* Expenses */}
                <Nav.Link
                    as={NavLink}
                    to="/expenses"
                    className="sidebar-link"
                >
                    <FaReceipt className="sidebar-icon" />
                    <span>Expenses</span>
                </Nav.Link>

                {/* Reports */}
                <Nav.Link
                    as={NavLink}
                    to="/reports"
                    className="sidebar-link"
                >
                    <FaChartBar className="sidebar-icon" />
                    <span>Reports</span>
                </Nav.Link>

                {/* Profile */}
                <Nav.Link
                    as={NavLink}
                    to="/profile"
                    className="sidebar-link"
                >
                    <FaUser className="sidebar-icon" />
                    <span>Profile</span>
                </Nav.Link>

            </Nav>

            {/* Logout */}
            <div className="sidebar-bottom">

                <button
                    type="button"
                    className="sidebar-logout"
                    onClick={handleLogout}
                >
                    <FaSignOutAlt className="sidebar-icon" />
                    <span>Logout</span>
                </button>

            </div>

        </aside>
    );
};

export default Sidebar;