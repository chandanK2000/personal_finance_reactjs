import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/common/navbar/Navbar";
import Sidebar from "../../components/common/sidebar/Sidebar";
import Footer from "../../components/common/footer/Footer";

import "./AppLayout.css";

const AppLayout = ({ role = "USER" }) => {
    return (
        <div className="app-layout">

            <Navbar />

            <div className="app-layout-body">

                <Sidebar role={role} />

                <main className="app-content">
                    <Outlet />
                </main>

            </div>

            <Footer />

        </div>
    );
};

export default AppLayout;