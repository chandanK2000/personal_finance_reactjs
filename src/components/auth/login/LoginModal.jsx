
import { useState } from "react";
import {
    Modal,
    Button,
    Form,
    Alert,
    Spinner
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import API from "../../../services/api";

const LoginModal = ({
    show,
    onHide,
    onSwitchToRegister
}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleClose = () => {
        if (loading) return;

        setError("");
        onHide();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await axios.post(
                API.login_api,
                {
                    email: email.trim(),
                    password
                }
            );

            const data = response.data;

            if (!data.success) {
                setError(data.message || "Login failed.");
                return;
            }

            if (!data.token || !data.user) {
                setError("Invalid login response from server.");
                return;
            }

            // Store authentication details
            localStorage.setItem(
                "accessToken",
                data.token
            );

            localStorage.setItem(
                "userDetails",
                JSON.stringify(data.user)
            );

            // Notify the Navbar and other listening components
            window.dispatchEvent(
                new Event("loginSuccess")
            );

            // Close modal and open authenticated area
            onHide();

            navigate("/dashboard", {
                replace: true
            });

        } catch (err) {
            console.error("Login error:", err);

            setError(
                err.response?.data?.message ||
                "Unable to login. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            keyboard={!loading}
            className="auth-modal"
        >
            <Modal.Header closeButton={!loading}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    {error && (
                        <Alert
                            variant="danger"
                            dismissible
                            onClose={() => setError("")}
                        >
                            {error}
                        </Alert>
                    )}

                    <Form.Group
                        className="mb-3"
                        controlId="loginEmail"
                    >
                        <Form.Label>
                            Email address
                        </Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            autoComplete="username"
                            required
                            disabled={loading}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="loginPassword"
                    >
                        <Form.Label>
                            Password
                        </Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            autoComplete="current-password"
                            required
                            disabled={loading}
                        />
                    </Form.Group>

                    <div className="text-end">
                        <button
                            type="button"
                            className="btn btn-link p-0 small text-decoration-none"
                            onClick={() =>
                                setError(
                                    "Forgot password functionality is not connected yet."
                                )
                            }
                        >
                            Forgot password?
                        </button>
                    </div>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-between">
                    <span className="small">
                        Don't have an account?{" "}

                        <button
                            type="button"
                            className="btn btn-link p-0 align-baseline"
                            onClick={onSwitchToRegister}
                            disabled={loading}
                        >
                            Register
                        </button>
                    </span>

                    <div>
                        <Button
                            variant="secondary"
                            onClick={handleClose}
                            className="me-2"
                            disabled={loading}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner
                                        size="sm"
                                        animation="border"
                                        className="me-2"
                                    />
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </div>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default LoginModal;