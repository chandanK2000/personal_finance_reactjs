import React from "react";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Terms.css";

const sections = [
    {
        id: "acceptance",
        icon: "✅",
        title: "1. Acceptance of Terms",
        body: [
            "Welcome to Personal Finance. By accessing or using our website, mobile application, or any related services (collectively, the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\").",
            "If you do not agree with any part of these Terms, you must not use the Service. These Terms apply to all visitors, users, and others who access the Service.",
        ],
    },
    {
        id: "eligibility",
        icon: "🎂",
        title: "2. Eligibility",
        body: ["To use Personal Finance, you must:"],
        list: [
            "Be at least 18 years of age.",
            "Have the legal capacity to enter into a binding agreement.",
            "Not be prohibited from using the Service under applicable laws.",
            "Provide accurate, current, and complete information during registration.",
        ],
    },
    {
        id: "accounts",
        icon: "👤",
        title: "3. Your Account",
        body: [
            "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        ],
        list: [
            "You must notify us immediately of any unauthorized use of your account.",
            "You may not share your account with others or use another user's account.",
            "We reserve the right to suspend or terminate accounts that violate these Terms.",
            "You are responsible for keeping your email address and contact info up to date.",
        ],
    },
    {
        id: "acceptable-use",
        icon: "🚫",
        title: "4. Acceptable Use",
        body: ["You agree NOT to use the Service to:"],
        list: [
            "Violate any applicable law, regulation, or third-party rights.",
            "Upload or transmit malicious code, viruses, or harmful content.",
            "Attempt to gain unauthorized access to our systems or other users' data.",
            "Use automated tools (bots, scrapers) to access the Service without permission.",
            "Impersonate any person or entity, or misrepresent your affiliation.",
            "Interfere with or disrupt the integrity or performance of the Service.",
            "Use the Service for fraudulent or illegal financial activities.",
        ],
    },
    {
        id: "subscriptions",
        icon: "💳",
        title: "5. Subscriptions & Payments",
        body: [
            "Personal Finance offers both free and paid plans. Paid subscriptions are billed on a recurring basis (monthly or annually) until cancelled.",
        ],
        list: [
            "All fees are quoted in Indian Rupees (INR) and inclusive of applicable taxes.",
            "Payments are processed securely through our third-party payment partners.",
            "Subscriptions auto-renew unless cancelled before the renewal date.",
            "Refunds are provided at our discretion, generally within 7 days of purchase.",
            "We reserve the right to change pricing with 30 days' prior notice.",
        ],
    },
    {
        id: "intellectual-property",
        icon: "©️",
        title: "6. Intellectual Property",
        body: [
            "All content, features, and functionality of the Service — including but not limited to text, graphics, logos, icons, software, and design — are owned by Personal Finance and protected by Indian and international copyright, trademark, and other intellectual property laws.",
            "You may not copy, modify, distribute, sell, or lease any part of our Service without our prior written permission.",
            "You retain ownership of any data you enter into the Service. You grant us a limited license to store, process, and display it solely to provide the Service.",
        ],
    },
    {
        id: "disclaimer",
        icon: "⚠️",
        title: "7. Disclaimer of Warranties",
        body: [
            "The Service is provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied.",
            "Personal Finance is a personal finance tracking tool — it does NOT provide financial, investment, tax, or legal advice. Any decisions you make based on information in the Service are your sole responsibility.",
            "We do not guarantee that the Service will be uninterrupted, error-free, or completely secure.",
        ],
    },
    {
        id: "limitation",
        icon: "🛡️",
        title: "8. Limitation of Liability",
        body: [
            "To the maximum extent permitted by law, Personal Finance and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.",
            "This includes, without limitation, loss of profits, data, use, or goodwill, even if we have been advised of the possibility of such damages.",
            "Our total aggregate liability shall not exceed the amount you paid us in the 12 months preceding the claim.",
        ],
    },
    {
        id: "termination",
        icon: "🔚",
        title: "9. Termination",
        body: [
            "We may suspend or terminate your access to the Service at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
            "You may terminate your account at any time from Settings → Account → Delete Account. Upon termination, your right to use the Service ceases immediately.",
            "Sections that by their nature should survive termination (e.g., intellectual property, disclaimers, limitation of liability) will survive.",
        ],
    },
    {
        id: "governing-law",
        icon: "⚖️",
        title: "10. Governing Law",
        body: [
            "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
            "Any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.",
        ],
    },
    {
        id: "changes",
        icon: "📝",
        title: "11. Changes to Terms",
        body: [
            "We reserve the right to modify or replace these Terms at any time. If we make material changes, we will notify you via email or in-app notification at least 14 days before the new Terms take effect.",
            "By continuing to use the Service after changes take effect, you agree to be bound by the revised Terms.",
        ],
    },
    {
        id: "contact",
        icon: "📬",
        title: "12. Contact Us",
        body: [
            "If you have any questions about these Terms of Service, please contact us:",
        ],
        list: [
            "Email: legal@personalfinance.com",
            "Phone: +91 98765 43210",
            "Address: Personal Finance HQ, Bengaluru, Karnataka, India",
        ],
    },
];

const Terms = () => {
    const lastUpdated = "October 5, 2026";

    return (
        <div className="terms-page">
            {/* ===== HERO ===== */}
            <section className="terms-hero">
                <Container>
                    <div className="text-center terms-hero-content">
                        <Badge bg="light" text="primary" className="terms-badge mb-3">
                            ⚖️ Legal
                        </Badge>
                        <h1 className="terms-title">
                            Terms of <span>Service</span>
                        </h1>
                        <p className="terms-subtitle">
                            The rules of the road for using Personal Finance. Clear, fair, and
                            easy to understand.
                        </p>
                        <p className="terms-updated">
                            Last updated: <strong>{lastUpdated}</strong>
                        </p>
                    </div>
                </Container>
            </section>

            {/* ===== CONTENT ===== */}
            <section className="terms-content-section">
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
                                        <h6 className="mb-2">📖 Related</h6>
                                        <p className="toc-contact-text">
                                            Read how we handle your data.
                                        </p>
                                        <Button
                                            as={Link}
                                            to="/privacy"
                                            variant="primary"
                                            size="sm"
                                            className="w-100"
                                        >
                                            Privacy Policy
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>

                        {/* Sections */}
                        <Col lg={9}>
                            <div className="terms-body">
                                {sections.map((s) => (
                                    <div className="terms-block" id={s.id} key={s.id}>
                                        <h3 className="terms-block-title">
                                            <span className="terms-block-icon">{s.icon}</span>
                                            {s.title}
                                        </h3>

                                        {s.body.map((p, i) => (
                                            <p className="terms-text" key={i}>
                                                {p}
                                            </p>
                                        ))}

                                        {s.list && (
                                            <ul className="terms-list">
                                                {s.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}

                                {/* Bottom note */}
                                <div className="terms-note">
                                    <p>
                                        <strong>Note:</strong> By using Personal Finance, you
                                        acknowledge that you have read, understood, and agree to be
                                        bound by these Terms of Service. If you do not agree, please
                                        discontinue use of the Service.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== CTA ===== */}
            <section className="terms-cta-section">
                <Container>
                    <div className="terms-cta-box text-center">
                        <h2 className="cta-title">Questions About Our Terms?</h2>
                        <p className="cta-subtitle">
                            Our legal team is happy to clarify anything you're unsure about.
                        </p>
                        <div className="cta-buttons">
                            <Button
                                href="mailto:legal@personalfinance.com"
                                variant="light"
                                size="lg"
                                className="cta-btn-light"
                            >
                                Email Legal Team →
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

export default Terms;