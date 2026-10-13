import { useState } from "react";
import {
    Modal,
    Button,
    Form,
    Row,
    Col,
    InputGroup,
    Alert,
    Spinner
} from "react-bootstrap";

import "./RegisterModal.css";
import API from "../../../services/Api";
import axiosInstance from "../../../services/AxiousInstance";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    openingBalance: "0"
};

const RegisterModal = ({ show, onHide, onSwitchToLogin }) => {
    const [form, setForm] = useState(initialForm);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("danger");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        setMessage("");
    };

    const handleClose = () => {
        if (loading) return;

        setForm(initialForm);
        setShowPassword(false);
        setShowConfirmPassword(false);
        setMessage("");
        onHide();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        const email = form.email.trim();

        if (!form.name.trim() || !email || !form.password) {
            setMessageType("danger");
            setMessage("Please fill in all required fields.");
            return;
        }

        if (form.password.length < 8) {
            setMessageType("danger");
            setMessage("Password must contain at least 8 characters.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setMessageType("danger");
            setMessage("Passwords do not match.");
            return;
        }

        const openingBalance = Number(form.openingBalance);

        if (
            form.openingBalance.trim() === "" ||
            !Number.isFinite(openingBalance) ||
            openingBalance < 0
        ) {
            setMessageType("danger");
            setMessage("Please enter a valid, non-negative opening balance.");
            return;
        }



        const payload = {
            name: form.name.trim(),
            email,
            phone: form.phone.trim() || null,
            password: form.password,
            address: form.address.trim() || null,
            city: form.city.trim() || null,
            state: form.state.trim() || null,
            country: form.country.trim() || null,
            openingBalance
        };

                console.log("API object:", API);
console.log("Registration URL:", API.register_api);
console.log("Payload:", payload);


        try {
            setLoading(true);

            const response = await axiosInstance.post(
                API.register_api,
                payload
            );

            const data = response.data;

            setMessageType("success");
            setMessage(
                data.message || "Registration completed successfully."
            );

            setForm(initialForm);
            setShowPassword(false);
            setShowConfirmPassword(false);
        } catch (error) {
            setMessageType("danger");

            setMessage(
                error.response?.data?.message ||
                "Unable to register. Please try again."
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
            backdrop={loading ? "static" : true}
            keyboard={!loading}
            scrollable
            size="lg"
            dialogClassName="register-modal-dialog"
            className="auth-modal register-modal"
        >
            <Modal.Header
                closeButton={!loading}
                className="register-modal__header"
            >
                <div>
                    <Modal.Title className="register-modal__title">
                        Create Account
                    </Modal.Title>

                    <p className="register-modal__subtitle">
                        Enter your details to get started.
                    </p>
                </div>
            </Modal.Header>

            <Form onSubmit={handleSubmit} className="register-modal__form">
                <Modal.Body className="register-modal__body">
                    {message && (
                        <Alert
                            variant={messageType}
                            dismissible
                            onClose={() => setMessage("")}
                            className="register-modal__alert"
                        >
                            {message}
                        </Alert>
                    )}

                    {/* ---------- Personal Information ---------- */}
                    <div className="rm-section">Personal Information</div>

                    <Row className="g-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    Full Name <span className="rm-req">*</span>
                                </Form.Label>

                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    maxLength={100}
                                    autoComplete="name"
                                    required
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    Email Address <span className="rm-req">*</span>
                                </Form.Label>

                                <Form.Control
                                    size="sm"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    maxLength={254}
                                    autoComplete="email"
                                    required
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Phone Number</Form.Label>

                                <Form.Control
                                    size="sm"
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter phone number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Opening Balance</Form.Label>

                                <Form.Control
                                    size="sm"
                                    type="number"
                                    name="openingBalance"
                                    min="0"
                                    step="0.01"
                                    value={form.openingBalance}
                                    onChange={handleChange}
                                    disabled={loading}
                                />

                                <Form.Text className="text-muted">
                                    Starting balance, or leave it at zero.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <hr className="rm-divider" />

                    {/* ---------- Account Security ---------- */}
                    <div className="rm-section">Account Security</div>

                    <Row className="g-2">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    Password <span className="rm-req">*</span>
                                </Form.Label>

                                <InputGroup size="sm">
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Minimum 8 characters"
                                        value={form.password}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        disabled={loading}
                                    />

                                    <Button
                                        type="button"
                                        variant="outline-secondary"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        disabled={loading}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    Confirm Password{" "}
                                    <span className="rm-req">*</span>
                                </Form.Label>

                                <InputGroup size="sm">
                                    <Form.Control
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="confirmPassword"
                                        placeholder="Re-enter password"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        disabled={loading}
                                    />

                                    <Button
                                        type="button"
                                        variant="outline-secondary"
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide confirm password"
                                                : "Show confirm password"
                                        }
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (prev) => !prev
                                            )
                                        }
                                        disabled={loading}
                                    >
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>

                    <hr className="rm-divider" />

                    {/* ---------- Address Information ---------- */}
                    <div className="rm-section">Address Information</div>

                    <Row className="g-2">
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>

                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    rows={2}
                                    name="address"
                                    placeholder="Enter your address"
                                    value={form.address}
                                    onChange={handleChange}
                                    autoComplete="street-address"
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>City</Form.Label>

                                <Form.Control
                                    size="sm"
                                    name="city"
                                    placeholder="City"
                                    value={form.city}
                                    onChange={handleChange}
                                    autoComplete="address-level2"
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>State</Form.Label>

                                <Form.Control
                                    size="sm"
                                    name="state"
                                    placeholder="State"
                                    value={form.state}
                                    onChange={handleChange}
                                    autoComplete="address-level1"
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Country</Form.Label>

                                <Form.Control
                                    size="sm"
                                    name="country"
                                    placeholder="Country"
                                    value={form.country}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    disabled={loading}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer className="register-modal__footer">
                    <div className="register-modal__switch">
                        Already have an account?{" "}
                        <button
                            type="button"
                            className="btn btn-link register-modal__link"
                            onClick={onSwitchToLogin}
                            disabled={loading}
                        >
                            Login
                        </button>
                    </div>

                    <div className="d-flex gap-2">
                        <Button
                            size="sm"
                            variant="outline-secondary"
                            onClick={handleClose}
                            disabled={loading}
                        >
                            Cancel
                        </Button>

                        <Button
                            size="sm"
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
                                    Registering...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </Button>
                    </div>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default RegisterModal;