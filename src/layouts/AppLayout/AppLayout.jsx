import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/common/navbar/Navbar";
import Sidebar from "../../components/common/sidebar/Sidebar";

import "./AppLayout.css";

const AppLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => setSidebarOpen(true);
    const handleSidebarClose = () => setSidebarOpen(false);

    return (
        <div className="app-layout">
            <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

            <div className="app-layout-body">
                <Navbar hideBrand onMenuClick={handleMenuClick} />

                <main className="app-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;