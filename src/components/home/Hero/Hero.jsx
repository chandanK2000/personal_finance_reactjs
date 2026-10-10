import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ onOpenRegister }) => (
    <section className="hero-section">
        <Container>
            <Row className="align-items-center gy-5">
                <Col lg={6} className="hero-text">
                    <Badge bg="primary" className="hero-badge mb-3">
                        🚀 #1 Personal Finance Tracker
                    </Badge>

                    <h1 className="hero-title">
                        Take Control of Your <span>Money</span> Today
                    </h1>

                    <p className="hero-subtitle">
                        Track expenses, plan budgets, and grow your savings — all in one
                        beautiful, easy-to-use app. No spreadsheets. No stress.
                    </p>

                    <div className="hero-buttons">
                        <Button
                            variant="primary"
                            size="lg"
                            className="hero-btn-primary"
                            onClick={onOpenRegister}
                        >
                            Get Started Free
                        </Button>
                        <Button
                            as={Link}
                            to="/about"
                            variant="outline-primary"
                            size="lg"
                            className="hero-btn-secondary"
                        >
                            Learn More →
                        </Button>
                    </div>

                    <div className="hero-trust mt-4">
                        <span>✅ No credit card required</span>
                        <span>✅ Free forever plan</span>
                    </div>
                </Col>

                <Col lg={6} className="hero-visual">
                    <div className="hero-card">
                        <div className="hero-card-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="hero-card-title">This Month</span>
                        </div>

                        <div className="hero-card-body">
                            <h3 className="balance">₹42,850</h3>
                            <p className="balance-label">Total Balance</p>

                            <div className="mini-chart">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} className="bar" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>

                            <div className="tx-row">
                                <span>🍔 Food</span>
                                <span className="text-danger">-₹2,400</span>
                            </div>
                            <div className="tx-row">
                                <span>💼 Salary</span>
                                <span className="text-success">+₹35,000</span>
                            </div>
                            <div className="tx-row">
                                <span>🏠 Rent</span>
                                <span className="text-danger">-₹12,000</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Hero;