import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const values = [
    {
        icon: "🎯",
        title: "Simplicity First",
        desc: "Finance doesn't have to be complicated. We design tools that anyone can use.",
    },
    {
        icon: "🔒",
        title: "Privacy & Trust",
        desc: "Your data belongs to you. We never sell or share it. Bank-level encryption always.",
    },
    {
        icon: "🚀",
        title: "Constant Innovation",
        desc: "We ship updates weekly, always improving based on real user feedback.",
    },
    {
        icon: "💙",
        title: "User Obsessed",
        desc: "Every feature we build starts with a real problem our users face.",
    },
];

const team = [
    { name: "Aarav Sharma", role: "Founder & CEO", emoji: "👨‍💼" },
    { name: "Priya Patel", role: "Head of Product", emoji: "👩‍💻" },
    { name: "Rohan Verma", role: "Lead Engineer", emoji: "👨‍🔧" },
    { name: "Ananya Iyer", role: "Head of Design", emoji: "👩‍🎨" },
];

const milestones = [
    { year: "2021", title: "Idea Born", desc: "Frustrated by spreadsheets, we started building." },
    { year: "2022", title: "First Launch", desc: "Launched beta with 500 users in 3 months." },
    { year: "2023", title: "10K Users", desc: "Crossed 10,000 active users milestone." },
    { year: "2024", title: "50K+ Users", desc: "Now trusted by 50,000+ families across India." },
];

const About = () => {
    return (
        <div className="about-page">
            {/* ===== HERO ===== */}
            <section className="about-hero">
                <Container>
                    <div className="text-center about-hero-content">
                        <Badge bg="light" text="primary" className="about-badge mb-3">
                            ✨ About Us
                        </Badge>
                        <h1 className="about-title">
                            We're on a Mission to Make <span>Money Simple</span>
                        </h1>
                        <p className="about-subtitle">
                            Personal Finance was born from a simple frustration — managing money
                            shouldn't require a degree in accounting. We're building the tools
                            we wish we'd had.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ===== MISSION ===== */}
            <section className="mission-section">
                <Container>
                    <Row className="align-items-center gy-5">
                        <Col lg={6}>
                            <Badge bg="primary" className="mb-3">Our Mission</Badge>
                            <h2 className="section-title">
                                Empowering Every Indian to Take Control of Their Finances
                            </h2>
                            <p className="section-text">
                                We believe that financial freedom shouldn't be a privilege — it
                                should be accessible to everyone. Whether you're a student
                                tracking your first salary or a family planning for the future,
                                our tools are designed to grow with you.
                            </p>
                            <p className="section-text">
                                From smart budgeting to real-time expense tracking and
                                personalized savings goals, we give you everything you need in
                                one beautiful, easy-to-use platform.
                            </p>

                            <div className="mission-stats">
                                <div className="mission-stat">
                                    <h4>50K+</h4>
                                    <p>Happy Users</p>
                                </div>
                                <div className="mission-stat">
                                    <h4>₹120Cr+</h4>
                                    <p>Tracked Monthly</p>
                                </div>
                                <div className="mission-stat">
                                    <h4>4.9★</h4>
                                    <p>User Rating</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="mission-visual">
                                <div className="floating-card card-1">
                                    <span className="fc-icon">💰</span>
                                    <div>
                                        <p className="fc-label">Total Savings</p>
                                        <h5 className="fc-value">₹1,45,000</h5>
                                    </div>
                                </div>
                                <div className="floating-card card-2">
                                    <span className="fc-icon">📈</span>
                                    <div>
                                        <p className="fc-label">This Month</p>
                                        <h5 className="fc-value text-success">+18.4%</h5>
                                    </div>
                                </div>
                                <div className="floating-card card-3">
                                    <span className="fc-icon">🎯</span>
                                    <div>
                                        <p className="fc-label">Goal Progress</p>
                                        <h5 className="fc-value">82%</h5>
                                    </div>
                                </div>
                                <div className="blob"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== VALUES ===== */}
            <section className="values-section">
                <Container>
                    <div className="text-center section-header">
                        <Badge bg="primary" className="mb-3">Our Values</Badge>
                        <h2 className="section-title">What We Stand For</h2>
                        <p className="section-subtitle">
                            These principles guide every decision we make.
                        </p>
                    </div>

                    <Row className="g-4 mt-4">
                        {values.map((v, i) => (
                            <Col lg={3} md={6} key={i}>
                                <Card className="value-card h-100">
                                    <Card.Body>
                                        <div className="value-icon">{v.icon}</div>
                                        <Card.Title className="value-title">{v.title}</Card.Title>
                                        <Card.Text className="value-desc">{v.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== JOURNEY / TIMELINE ===== */}
            <section className="journey-section">
                <Container>
                    <div className="text-center section-header">
                        <Badge bg="primary" className="mb-3">Our Journey</Badge>
                        <h2 className="section-title">Milestones That Matter</h2>
                        <p className="section-subtitle">
                            From a weekend project to a product loved by thousands.
                        </p>
                    </div>

                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div className="timeline-item" key={i}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{m.year}</span>
                                    <h5 className="timeline-title">{m.title}</h5>
                                    <p className="timeline-desc">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ===== TEAM ===== */}
            <section className="team-section">
                <Container>
                    <div className="text-center section-header">
                        <Badge bg="primary" className="mb-3">Our Team</Badge>
                        <h2 className="section-title">Meet the People Behind It</h2>
                        <p className="section-subtitle">
                            A small, passionate team building big things.
                        </p>
                    </div>

                    <Row className="g-4 mt-4 justify-content-center">
                        {team.map((t, i) => (
                            <Col lg={3} md={6} sm={6} key={i}>
                                <div className="team-card text-center">
                                    <div className="team-avatar">{t.emoji}</div>
                                    <h5 className="team-name">{t.name}</h5>
                                    <p className="team-role">{t.role}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== CTA ===== */}
            <section className="about-cta-section">
                <Container>
                    <div className="about-cta-box text-center">
                        <h2 className="cta-title">Join Us on This Journey</h2>
                        <p className="cta-subtitle">
                            Whether you're here to save, plan, or grow — we're glad you're here.
                        </p>
                        <div className="cta-buttons">
                            <Button
                                as={Link}
                                to="/"
                                variant="light"
                                size="lg"
                                className="cta-btn-light"
                            >
                                Get Started →
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

export default About;