import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ onRegisterClick }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <Container>
                {/* ===== TOP: Brand + Links ===== */}
                <Row className="footer-top gy-4">
                    {/* Brand Column */}
                    <Col lg={5} md={6}>
                        <Link to="/" className="footer-brand">
                            💰 Personal Finance
                        </Link>
                        <p className="footer-tagline">
                            Take control of your money with smart budgeting, expense tracking,
                            and savings goals — all in one place.
                        </p>

                        {/* Social Icons */}
                        <div className="footer-social">
                            <a href="#facebook" aria-label="Facebook" className="social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                                </svg>
                            </a>
                            <a href="#twitter" aria-label="Twitter" className="social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-7-6.2 7H1.3l8.2-9.3L1 2h7.1l4.9 6.4L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
                                </svg>
                            </a>
                            <a href="#instagram" aria-label="Instagram" className="social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 .1 5.7.2 4.9.4 4.1.7c-.8.3-1.5.7-2.2 1.4C1.2 2.8.8 3.5.5 4.3.2 5.1 0 5.9 0 7.2.1 8.5 0 8.9 0 12s0 3.5.1 4.8c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.6C8.5 24 8.9 24 12 24s3.5 0 4.8-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.6-2.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.6-.5-2.9-.6C15.5 0 15.1 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.8-10.4a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0z" />
                                </svg>
                            </a>
                            <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8.3 18.4H5.4V9.4h2.9v9zM6.9 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm12 10.2h-2.9v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.8h-2.9V9.4h2.8v1.2h.1c.4-.7 1.4-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5v4.8z" />
                                </svg>
                            </a>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={3} md={6} sm={6}>
                        <h6 className="footer-heading">Quick Links</h6>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>

                    {/* Newsletter */}
                    <Col lg={4} md={6}>
                        <h6 className="footer-heading">Stay Updated</h6>
                        <p className="footer-newsletter-text">
                            Get money tips and product updates delivered to your inbox.
                        </p>

                        <Form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="footer-input"
                                required
                            />
                            <Button type="submit" variant="primary" className="footer-subscribe-btn">
                                Subscribe
                            </Button>
                        </Form>

                        <Button
                            variant="outline-light"
                            className="footer-cta-btn mt-3"
                            onClick={onRegisterClick}
                        >
                            Create Free Account →
                        </Button>
                    </Col>
                </Row>

                {/* ===== BOTTOM: Copyright ===== */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {currentYear} <strong>Personal Finance</strong>. All rights reserved.
                    </p>

                    <ul className="footer-legal">
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/cookies">Cookies</Link></li>

                        
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;