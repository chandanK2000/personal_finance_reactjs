import React from "react";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cookies.css";

const sections = [
    {
        id: "what-are-cookies",
        icon: "🍪",
        title: "1. What Are Cookies?",
        body: [
            "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, keep you signed in, and understand how you use the service.",
        ],
    },
    {
        id: "types",
        icon: "📋",
        title: "2. Types of Cookies We Use",
        body: ["Personal Finance uses only three types of cookies:"],
        list: [
            "Essential Cookies: required for login, security, and core functionality. Cannot be disabled.",
            "Functional Cookies: remember your preferences (language, theme, dashboard layout).",
            "Analytics Cookies: help us understand which features are used so we can improve them. Anonymous and aggregated.",
        ],
    },
    {
        id: "what-we-dont-do",
        icon: "🚫",
        title: "3. What We Don't Do",
        body: ["We want to be very clear about this:"],
        list: [
            "We never use advertising or tracking cookies.",
            "We never sell cookie data to third parties.",
            "We never track you across other websites.",
        ],
    },
    {
        id: "managing",
        icon: "⚙️",
        title: "4. Managing Cookies",
        body: [
            "You can control or delete cookies through your browser settings at any time. Note that disabling essential cookies may break parts of the app (like staying logged in).",
            "You can also clear all cookies from within the Personal Finance app under Settings → Privacy → Clear Cookies.",
        ],
    },
    {
        id: "third-party",
        icon: "🔗",
        title: "5. Third-Party Cookies",
        body: [
            "We use a small number of trusted third-party services (for analytics and payments). These providers may set their own cookies, governed by their respective privacy policies.",
        ],
    },
    {
        id: "updates",
        icon: "📝",
        title: "6. Updates to This Policy",
        body: [
            "We may update this Cookie Policy from time to time. Any changes will be reflected on this page with a new 'Last updated' date.",
        ],
    },
    {
        id: "contact",
        icon: "📬",
        title: "7. Contact Us",
        body: ["Questions about cookies? Reach out anytime:"],
        list: [
            "Email: privacy@personalfinance.com",
            "Phone: +91 98765 43210",
        ],
    },
];

const Cookies = () => {
    const lastUpdated = "October 5, 2026";

    return (
        <div className="cookies-page">
            {/* ===== HERO ===== */}
            <section className="cookies-hero">
                <Container>
                    <div className="text-center cookies-hero-content">
                        <Badge bg="light" text="primary" className="cookies-badge mb-3">
                            🍪 Legal
                        </Badge>
                        <h1 className="cookies-title">
                            Cookie <span>Policy</span>
                        </h1>
                        <p className="cookies-subtitle">
                            How we use cookies — kept simple and transparent.
                        </p>
                        <p className="cookies-updated">
                            Last updated: <strong>{lastUpdated}</strong>
                        </p>
                    </div>
                </Container>
            </section>

            {/* ===== CONTENT ===== */}
            <section className="cookies-content-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className="cookies-body">
                                {sections.map((s) => (
                                    <div className="cookies-block" id={s.id} key={s.id}>
                                        <h3 className="cookies-block-title">
                                            <span className="cookies-block-icon">{s.icon}</span>
                                            {s.title}
                                        </h3>

                                        {s.body.map((p, i) => (
                                            <p className="cookies-text" key={i}>
                                                {p}
                                            </p>
                                        ))}

                                        {s.list && (
                                            <ul className="cookies-list">
                                                {s.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}

                                {/* Note */}
                                <div className="cookies-note">
                                    <p>
                                        <strong>Note:</strong> By continuing to use Personal Finance,
                                        you consent to our use of cookies as described in this policy.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== CTA ===== */}
            <section className="cookies-cta-section">
                <Container>
                    <div className="cookies-cta-box text-center">
                        <h2 className="cta-title">Need More Clarity?</h2>
                        <p className="cta-subtitle">
                            Check out our Privacy Policy or reach out to us directly.
                        </p>
                        <div className="cta-buttons">
                            <Button
                                as={Link}
                                to="/privacy"
                                variant="light"
                                size="lg"
                                className="cta-btn-light"
                            >
                                Privacy Policy →
                            </Button>
                            <Button
                                as={Link}
                                to="/contact"
                                variant="outline-light"
                                size="lg"
                                className="cta-btn-outline"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Cookies;