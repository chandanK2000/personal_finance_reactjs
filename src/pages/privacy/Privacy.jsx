import React from "react";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Privacy.css";

const sections = [
    {
        id: "introduction",
        icon: "👋",
        title: "1. Introduction",
        body: [
            "Welcome to Personal Finance. We are committed to protecting your privacy and being transparent about how we collect, use, and safeguard your information.",
            "This Privacy Policy explains what data we collect when you use our website and mobile application, why we collect it, and the choices you have. By using our services, you agree to the practices described here.",
        ],
    },
    {
        id: "information-we-collect",
        icon: "📥",
        title: "2. Information We Collect",
        body: [
            "We collect information you provide directly, information collected automatically, and information from third-party services you connect.",
        ],
        list: [
            "Account details: name, email address, phone number, and password (encrypted).",
            "Financial data: transactions, budgets, categories, and goals you enter manually or import.",
            "Usage data: pages visited, features used, device and browser information.",
            "Payment information: handled securely by our payment partners (we never store card details).",
            "Cookies and similar technologies: to remember preferences and improve experience.",
        ],
    },
    {
        id: "how-we-use",
        icon: "🎯",
        title: "3. How We Use Your Information",
        body: ["We use your information strictly to deliver and improve our services:"],
        list: [
            "Provide, maintain, and personalize the Personal Finance app.",
            "Process transactions and send related notifications.",
            "Send product updates, security alerts, and support messages.",
            "Analyze usage patterns to improve features and user experience.",
            "Comply with legal obligations and prevent fraud or abuse.",
        ],
    },
    {
        id: "sharing",
        icon: "🤝",
        title: "4. Information Sharing",
        body: [
            "We do NOT sell your personal or financial data. Ever. We only share information in the following limited scenarios:",
        ],
        list: [
            "With trusted service providers who help us operate the app (hosting, analytics, email).",
            "When required by law, regulation, or valid legal process.",
            "In connection with a merger, acquisition, or sale of assets — with prior notice.",
            "With your explicit consent for any other purpose.",
        ],
    },
    {
        id: "security",
        icon: "🔐",
        title: "5. How We Protect Your Data",
        body: [
            "Security is at the heart of what we do. We use industry-standard practices to protect your data:",
        ],
        list: [
            "AES-256 encryption at rest and TLS 1.3 in transit.",
            "Two-factor authentication (2FA) available on all accounts.",
            "Regular third-party security audits and penetration testing.",
            "Strict internal access controls — only authorized staff can access systems.",
            "Automatic session timeouts and device management features.",
        ],
    },
    {
        id: "your-rights",
        icon: "⚖️",
        title: "6. Your Rights",
        body: [
            "You have full control over your data. Depending on your region, you may have the following rights:",
        ],
        list: [
            "Access: request a copy of the personal data we hold about you.",
            "Correction: update or fix inaccurate information at any time.",
            "Deletion: request deletion of your account and associated data.",
            "Portability: export your data in a standard format (CSV/JSON).",
            "Opt-out: unsubscribe from marketing emails with one click.",
        ],
    },
    {
        id: "cookies",
        icon: "🍪",
        title: "7. Cookies & Tracking",
        body: [
            "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the app is used. You can control cookies through your browser settings.",
            "We use only essential, functional, and analytics cookies — never advertising trackers.",
        ],
    },
    {
        id: "children",
        icon: "👶",
        title: "8. Children's Privacy",
        body: [
            "Personal Finance is not intended for users under 18. We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will promptly delete it.",
        ],
    },
    {
        id: "changes",
        icon: "📝",
        title: "9. Changes to This Policy",
        body: [
            "We may update this Privacy Policy from time to time. When we do, we will revise the 'Last updated' date and, for significant changes, notify you via email or in-app notification.",
            "We encourage you to review this page periodically to stay informed.",
        ],
    },
    {
        id: "contact",
        icon: "📬",
        title: "10. Contact Us",
        body: [
            "If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our Data Protection Officer:",
        ],
        list: [
            "Email: privacy@personalfinance.com",
            "Phone: +91 98765 43210",
            "Address: Personal Finance HQ, Bengaluru, Karnataka, India",
        ],
    },
];

const Privacy = () => {
    const lastUpdated = "October 5, 2026";

    return (
        <div className="privacy-page">
            {/* ===== HERO ===== */}
            <section className="privacy-hero">
                <Container>
                    <div className="text-center privacy-hero-content">
                        <Badge bg="light" text="primary" className="privacy-badge mb-3">
                            🔒 Legal
                        </Badge>
                        <h1 className="privacy-title">
                            Privacy <span>Policy</span>
                        </h1>
                        <p className="privacy-subtitle">
                            Your privacy matters to us. Here's exactly how we handle your data —
                            in plain, honest language.
                        </p>
                        <p className="privacy-updated">
                            Last updated: <strong>{lastUpdated}</strong>
                        </p>
                    </div>
                </Container>
            </section>

            {/* ===== CONTENT ===== */}
            <section className="privacy-content-section">
                <Container>
                    <Row className="gy-5">
                        {/* Sidebar TOC */}
                        <Col lg={3}>
                            <div className="toc-sidebar">
                                <h6 className="toc-heading">📑 On This Page</h6>
                                <ul className="toc-list">
                                    {sections.map((s) => (
                                        <li key={s.id}>
                                            <a href={`#${s.id}`}>
                                                <span className="toc-icon">{s.icon}</span>
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <Card className="toc-contact-card mt-4">
                                    <Card.Body>
                                        <h6 className="mb-2">❓ Have Questions?</h6>
                                        <p className="toc-contact-text">
                                            Reach out to our privacy team anytime.
                                        </p>
                                        <Button
                                            as={Link}
                                            to="/contact"
                                            variant="primary"
                                            size="sm"
                                            className="w-100"
                                        >
                                            Contact Us
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        {/* Sections */}
                        <Col lg={9}>
                            <div className="privacy-body">
                                {sections.map((s) => (
                                    <div className="privacy-block" id={s.id} key={s.id}>
                                        <h3 className="privacy-block-title">
                                            <span className="privacy-block-icon">{s.icon}</span>
                                            {s.title}
                                        </h3>

                                        {s.body.map((p, i) => (
                                            <p className="privacy-text" key={i}>
                                                {p}
                                            </p>
                                        ))}

                                        {s.list && (
                                            <ul className="privacy-list">
                                                {s.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}

                                {/* Bottom note */}
                                <div className="privacy-note">
                                    <p>
                                        <strong>Note:</strong> This policy applies to the Personal
                                        Finance website and mobile application. By continuing to use
                                        our services, you acknowledge that you have read and
                                        understood this Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== CTA ===== */}
            <section className="privacy-cta-section">
                <Container>
                    <div className="privacy-cta-box text-center">
                        <h2 className="cta-title">Your Trust Is Our Priority</h2>
                        <p className="cta-subtitle">
                            Questions about your data? We're an email away.
                        </p>
                        <div className="cta-buttons">
                            <Button
                                href="mailto:privacy@personalfinance.com"
                                variant="light"
                                size="lg"
                                className="cta-btn-light"
                            >
                                Email Privacy Team →
                            </Button>
                            <Button
                                as={Link}
                                to="/contact"
                                variant="outline-light"
                                size="lg"
                                className="cta-btn-outline"
                            >
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Privacy;