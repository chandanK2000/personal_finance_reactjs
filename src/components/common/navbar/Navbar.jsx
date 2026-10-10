import { useEffect, useRef, useState } from "react";
import {
    Container,
    Nav,
    Navbar as BootstrapNavbar,
    Button,
    Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
    FaWallet,
    FaSignInAlt,
    FaUserPlus,
    FaSignOutAlt,
    FaSearch,
    FaTimes,
    FaBars,
    FaUser,
    FaCog,
} from "react-icons/fa";

import LoginModal from "../../auth/login/LoginModal";
import RegisterModal from "../../auth/register/RegisterModal";

import "./Navbar.css";

function Navbar({ hideBrand = false, onMenuClick = () => {} }) {
    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("accessToken")
    );

    const [userDetails, setUserDetails] = useState(
        JSON.parse(localStorage.getItem("userDetails") || "null")
    );

    const searchWrapRef = useRef(null);
    const searchInputRef = useRef(null);

    /* ---------- Modals ---------- */
    const handleShowLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const handleShowRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    /* ---------- Login event ---------- */
    useEffect(() => {
        const handleLoginSuccess = () => {
            const token = localStorage.getItem("accessToken");
            const user = JSON.parse(
                localStorage.getItem("userDetails") || "null"
            );
            setIsLoggedIn(!!token);
            setUserDetails(user);
        };

        window.addEventListener("loginSuccess", handleLoginSuccess);
        return () =>
            window.removeEventListener("loginSuccess", handleLoginSuccess);
    }, []);

    /* ---------- Autofocus when opening ---------- */
    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus({ preventScroll: true });
        }
    }, [searchOpen]);

    /* ---------- Close on outside click / Escape ---------- */
    useEffect(() => {
        if (!searchOpen) return;

        const handleClickOutside = (e) => {
            if (
                searchWrapRef.current &&
                !searchWrapRef.current.contains(e.target)
            ) {
                setSearchOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === "Escape") setSearchOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [searchOpen]);

    /* ---------- Handlers ---------- */
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userDetails");
        setIsLoggedIn(false);
        setUserDetails(null);
        navigate("/");
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const query = searchTerm.trim();
        if (query) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setSearchOpen(false);
            setSearchTerm("");
        }
    };

    const closeSearch = () => {
        setSearchOpen(false);
        setSearchTerm("");
    };

    const getUserInitial = () => {
        const name =
            userDetails?.name ||
            userDetails?.fullName ||
            userDetails?.email ||
            "U";
        return name.charAt(0).toUpperCase();
    };

    const displayName =
        userDetails?.name || userDetails?.fullName || "User";
    const displayEmail = userDetails?.email || "user@example.com";
    const displayRole =
        userDetails?.roleName || userDetails?.role || "User";

    const isCompact = hideBrand && isLoggedIn;

    /* ============================================================
       SEARCH BLOCK
       ============================================================ */
    const searchBlock = (
        <div
            ref={searchWrapRef}
            className={`navbar-search ${searchOpen ? "open" : ""}`}
        >
            {/* Toggle — only when closed */}
            <button
                type="button"
                className="navbar-search-toggle"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                aria-expanded={searchOpen}
            >
                <FaSearch />
            </button>

            {/* Form — visible only when open */}
            <form
                className="navbar-search-form"
                onSubmit={handleSearchSubmit}
                role="search"
            >
                <span className="navbar-search-prefix" aria-hidden="true">
                    <FaSearch />
                </span>

                <input
                    ref={searchInputRef}
                    type="search"
                    className="navbar-search-input"
                    placeholder="Search transactions, budgets, reports..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Global search"
                />

                <button
                    type="button"
                    className="navbar-search-close"
                    onClick={closeSearch}
                    aria-label="Close search"
                >
                    <FaTimes />
                </button>
            </form>
        </div>
    );

    /* ============================================================
       PROFILE DROPDOWN
       ============================================================ */
    const profileBlock = (
        <Dropdown align="end" className="profile-dropdown">
            <Dropdown.Toggle
                as="button"
                type="button"
                className="profile-toggle"
                id="profile-dropdown-toggle"
            >
                <span className="user-avatar">{getUserInitial()}</span>
                <span className="profile-toggle-text">Profile</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="profile-menu">
                <div className="profile-menu-header">
                    <span className="profile-menu-avatar">
                        {getUserInitial()}
                    </span>

                    <div className="profile-menu-info">
                        <span className="profile-menu-name">
                            {displayName}
                        </span>
                        <span className="profile-menu-email">
                            {displayEmail}
                        </span>
                        <span className="profile-menu-role">
                            {displayRole}
                        </span>
                    </div>
                </div>

                <Dropdown.Divider />

                <Dropdown.Item
                    as={Link}
                    to="/profile"
                    className="profile-menu-item"
                >
                    <FaUser className="profile-menu-icon" />
                    <span>My Profile</span>
                </Dropdown.Item>

                <Dropdown.Item
                    as={Link}
                    to="/settings"
                    className="profile-menu-item"
                >
                    <FaCog className="profile-menu-icon" />
                    <span>Settings</span>
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item
                    as="button"
                    type="button"
                    className="profile-menu-item profile-menu-logout"
                    onClick={handleLogout}
                >
                    <FaSignOutAlt className="profile-menu-icon" />
                    <span>Logout</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    /* ============================================================
       COMPACT NAVBAR — inside AppLayout (logged in)
       ============================================================ */
    if (isCompact) {
        return (
            <>
                <header className="app-navbar app-navbar-compact">
                    <div className="navbar-container">
                        <Link
                            to="/dashboard"
                            className="app-brand brand-compact d-lg-none"
                        >
                            <span className="brand-icon">
                                <FaWallet />
                            </span>
                            <span className="brand-text">
                                Personal&nbsp;<span>Finance</span>
                            </span>
                        </Link>

                        <div className="navbar-right-group">
                            {searchBlock}

                            <button
                                type="button"
                                className="navbar-icon-btn d-lg-none"
                                onClick={onMenuClick}
                                aria-label="Open menu"
                            >
                                <FaBars />
                            </button>

                            {profileBlock}
                        </div>
                    </div>
                </header>

                <LoginModal
                    show={showLogin}
                    onHide={() => setShowLogin(false)}
                    onSwitchToRegister={handleShowRegister}
                />
                <RegisterModal
                    show={showRegister}
                    onHide={() => setShowRegister(false)}
                    onSwitchToLogin={handleShowLogin}
                />
            </>
        );
    }

    /* ============================================================
       FULL NAVBAR — public pages / not logged in
       ============================================================ */
    return (
        <>
            <BootstrapNavbar
                expand="lg"
                className="app-navbar"
                collapseOnSelect
            >
                <Container fluid className="navbar-container">
                    <BootstrapNavbar.Brand
                        as={Link}
                        to={isLoggedIn ? "/dashboard" : "/"}
                        className="app-brand"
                    >
                        <span className="brand-icon">
                            <FaWallet />
                        </span>
                        <span className="brand-text">
                            Personal&nbsp;<span>Finance</span>
                        </span>
                    </BootstrapNavbar.Brand>

                    <BootstrapNavbar.Toggle
                        aria-controls="main-navbar"
                        className="app-toggle"
                        aria-label="Toggle navigation"
                    />

                    <BootstrapNavbar.Collapse id="main-navbar">
                        <Nav className="ms-auto align-items-lg-center navbar-actions">
                            <Button
                                variant="link"
                                className="nav-login-btn"
                                onClick={handleShowLogin}
                            >
                                <FaSignInAlt />
                                <span>Login</span>
                            </Button>

                            <Button
                                className="nav-register-btn"
                                onClick={handleShowRegister}
                            >
                                <FaUserPlus />
                                <span>Get Started</span>
                            </Button>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>

            <LoginModal
                show={showLogin}
                onHide={() => setShowLogin(false)}
                onSwitchToRegister={handleShowRegister}
            />
            <RegisterModal
                show={showRegister}
                onHide={() => setShowRegister(false)}
                onSwitchToLogin={handleShowLogin}
            />
        </>
    );
}

export default Navbar;