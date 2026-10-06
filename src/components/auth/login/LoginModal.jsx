// import { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const LoginModal = ({ show, onHide, onSwitchToRegister }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Login:", { email, password });
//         // TODO: call your API
//         onHide();
//     };

//     return (
//         <Modal
//             show={show}
//             onHide={onHide}
//             centered
//             backdrop="static"
//             className="auth-modal"
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title>Login</Modal.Title>
//             </Modal.Header>

//             <Form onSubmit={handleSubmit}>
//                 <Modal.Body>
//                     <Form.Group className="mb-3" controlId="loginEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="Enter email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="loginPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </Form.Group>

//                     <div className="text-end">
//                         <a href="#forgot" className="small text-decoration-none">
//                             Forgot password?
//                         </a>
//                     </div>
//                 </Modal.Body>

//                 <Modal.Footer className="d-flex justify-content-between">
//                     <span className="small">
//                         Don't have an account?{" "}
//                         <button
//                             type="button"
//                             className="btn btn-link p-0 align-baseline"
//                             onClick={onSwitchToRegister}
//                         >
//                             Register
//                         </button>
//                     </span>

//                     <div>
//                         <Button variant="secondary" onClick={onHide} className="me-2">
//                             Cancel
//                         </Button>
//                         <Button variant="primary" type="submit">
//                             Login
//                         </Button>
//                     </div>
//                 </Modal.Footer>
//             </Form>
//         </Modal>
//     );
// };

// export default LoginModal;


import { useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import API from "../../../services/api";

const LoginModal = ({ show, onHide, onSwitchToRegister }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const response = await axios.post(
                API.login_api,
                {
                    email,
                    password
                }
            );

            console.log("Login response:", response.data);

            if (response.data.success) {

                console.log("Login successful");

                localStorage.setItem(
                    "accessToken",
                    response.data.token
                );

                localStorage.setItem(
                    "userDetails",
                    JSON.stringify(response.data.user)
                );

                // Tell Navbar that login was successful
                window.dispatchEvent(new Event("loginSuccess"));

                onHide();

                navigate("/dashboard");

            } else {

                setError(
                    response.data.message || "Login failed"
                );

            }

        } catch (error) {

            console.error("Login error:", error);

            setError(
                error.response?.data?.message ||
                "Unable to login. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            className="auth-modal"
        >

            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>

                <Modal.Body>

                    {error && (
                        <Alert variant="danger">
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
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
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
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </Form.Group>

                    <div className="text-end">
                        <a
                            href="#forgot"
                            className="small text-decoration-none"
                        >
                            Forgot password?
                        </a>
                    </div>

                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-between">

                    <span className="small">
                        Don't have an account?{" "}

                        <button
                            type="button"
                            className="btn btn-link p-0 align-baseline"
                            onClick={onSwitchToRegister}
                        >
                            Register
                        </button>
                    </span>

                    <div>

                        <Button
                            variant="secondary"
                            onClick={onHide}
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