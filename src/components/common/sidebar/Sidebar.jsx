import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
    FaWallet,
    FaHome,
    FaUsers,
    FaMoneyBillWave,
    FaReceipt,
    FaChartBar,
    FaBell,
    FaStickyNote,
    FaFolderOpen,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ role, isOpen = false, onClose = () => {} }) => {
    /* ---------- Read user role ---------- */
    const getStoredUser = () => {
        try {
            return JSON.parse(localStorage.getItem("userDetails") || "{}");
        } catch {
            return {};
        }
    };

    const storedUser = getStoredUser();

    const userRole = String(
        role ??
            storedUser.role ??
            storedUser.roleName ??
            storedUser.RoleName ??
            (storedUser.role_id === 1 ? "ADMIN" : "") ??
            "USER"
    ).toUpperCase();

    const isAdmin = userRole === "ADMIN" || userRole === "1";

    const menuItems = [
        { title: "Dashboard", path: "/dashboard", icon: FaHome },
        { title: "Money In / Out", path: "/money", icon: FaMoneyBillWave },
        { title: "Expenses", path: "/expenses", icon: FaReceipt },
        { title: "Reports", path: "/reports", icon: FaChartBar },
        { title: "Documents", path: "/documents", icon: FaFolderOpen },
        { title: "Reminders", path: "/reminders", icon: FaBell },
        { title: "Notes", path: "/notes", icon: FaStickyNote },
    ];

    return (
        <>
            <aside
                className={`app-sidebar ${isOpen ? "open" : ""}`}
                aria-label="Main navigation"
            >
                {/* Brand */}
                <div className="sidebar-header">
                    <div className="sidebar-brand-icon">
                        <FaWallet />
                    </div>

                    <div className="sidebar-brand-text">
                        <h5>Personal Finance</h5>
                        <span>Manage your money</span>
                    </div>
                </div>

                

                <Nav className="sidebar-nav flex-column">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Nav.Link
                                key={item.path}
                                as={NavLink}
                                to={item.path}
                                end={item.path === "/dashboard"}
                                className="sidebar-link"
                                onClick={onClose}
                                title={item.title}
                            >
                                <Icon className="sidebar-icon" />
                                <span>{item.title}</span>
                            </Nav.Link>
                        );
                    })}

                    {/* Admin-only */}
                    {isAdmin && (
                        <>
                            <div
                                className="sidebar-divider"
                                aria-hidden="true"
                            />

                            <div className="sidebar-section-label admin-label">
                                ADMINISTRATION
                            </div>

                            <Nav.Link
                                as={NavLink}
                                to="/admin/users"
                                className="sidebar-link"
                                onClick={onClose}
                                title="User Management"
                            >
                                <FaUsers className="sidebar-icon" />
                                <span>User Management</span>
                            </Nav.Link>
                        </>
                    )}
                </Nav>

                {/* Footer */}
                <div className="sidebar-bottom">
                    <div className="sidebar-footer">
                        Personal Finance © 2026
                    </div>
                </div>
            </aside>

            {/* Backdrop — only on mobile/tablet when open */}
            {isOpen && (
                <div
                    className="sidebar-backdrop"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Sidebar;