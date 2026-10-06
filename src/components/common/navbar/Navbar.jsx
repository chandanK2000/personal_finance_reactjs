import { useEffect, useState } from "react";
import {
    Container,
    Nav,
    Navbar as BootstrapNavbar,
    Button
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import LoginModal from "../../auth/login/LoginModal";
import RegisterModal from "../../auth/register/RegisterModal";

import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("accessToken")
    );

    const [userDetails, setUserDetails] = useState(
        JSON.parse(localStorage.getItem("userDetails") || "null")
    );

    const handleShowLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const handleShowRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    useEffect(() => {

        const handleLoginSuccess = () => {

            const token = localStorage.getItem("accessToken");

            const user = JSON.parse(
                localStorage.getItem("userDetails") || "null"
            );

            setIsLoggedIn(!!token);
            setUserDetails(user);
        };

        window.addEventListener(
            "loginSuccess",
            handleLoginSuccess
        );

        return () => {
            window.removeEventListener(
                "loginSuccess",
                handleLoginSuccess
            );
        };

    }, []);

    const handleLogout = () => {

        localStorage.removeItem("accessToken");
        localStorage.removeItem("userDetails");

        setIsLoggedIn(false);
        setUserDetails(null);

        navigate("/");
    };

    return (
        <>
            <BootstrapNavbar
                expand="lg"
                className="app-navbar"
                collapseOnSelect
                sticky="top"
                bg="info"
            >

                <Container>

                    {/* Brand */}
                    <BootstrapNavbar.Brand
                        as={Link}
                        to={isLoggedIn ? "/dashboard" : "/"}
                        className="app-brand"
                    >
                        💰 Personal Finance
                    </BootstrapNavbar.Brand>

                    {/* Toggle button */}
                    <BootstrapNavbar.Toggle
                        aria-controls="main-navbar"
                        className="app-toggle"
                    />

                    {/* Collapsible area */}
                    <BootstrapNavbar.Collapse id="main-navbar">

                        <Nav className="ms-auto align-items-lg-center">

                            {!isLoggedIn && (
                                <>
                                    <Button
                                        variant="outline-primary"
                                        className="nav-btn ms-lg-3 mt-2 mt-lg-0"
                                        onClick={handleShowLogin}
                                    >
                                        Login
                                    </Button>

                                    <Button
                                        variant="primary"
                                        className="nav-btn ms-lg-2 mt-2 mt-lg-0"
                                        onClick={handleShowRegister}
                                    >
                                        Register
                                    </Button>
                                </>
                            )}

                            {isLoggedIn && (
                                <>
                                    <span className="me-3 fw-semibold">
                                            {userDetails?.roleName || "User"}
                                    </span>

                                    <Button
                                        variant="outline-danger"
                                        className="nav-btn"
                                        onClick={handleLogout}
                                    >
                                        Logout From Here
                                    </Button>
                                </>
                            )}

                        </Nav>

                    </BootstrapNavbar.Collapse>

                </Container>

            </BootstrapNavbar>

            {/* Login Modal */}
            <LoginModal
                show={showLogin}
                onHide={() => setShowLogin(false)}
                onSwitchToRegister={handleShowRegister}
            />

            {/* Register Modal */}
            <RegisterModal
                show={showRegister}
                onHide={() => setShowRegister(false)}
                onSwitchToLogin={handleShowLogin}
            />

        </>
    );
}

export default Navbar;