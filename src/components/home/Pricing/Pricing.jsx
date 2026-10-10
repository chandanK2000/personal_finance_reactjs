import { useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { plans } from "../../../data/homeData";
import "./Pricing.css";

const Pricing = ({ onOpenRegister }) => {
    const [yearly, setYearly] = useState(true);

    return (
        <section className="pricing-section">
            <Container>
                <div className="section-header text-center mb-4">
                    <Badge bg="primary" className="section-pill mb-3">Pricing</Badge>
                    <h2 className="section-title">Simple, Honest Pricing</h2>
                    <p className="section-subtitle">Start free. Upgrade only when you need more power.</p>
                </div>

                <div className="text-center mb-5">
                    <div className="billing-toggle" role="group">
                        <button type="button" className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>Monthly</button>
                        <button type="button" className={yearly ? "active" : ""} onClick={() => setYearly(true)}>
                            Yearly <span className="save-tag">Save 25%</span>
                        </button>
                    </div>
                </div>

                <Row className="g-4 align-items-stretch">
                    {plans.map((p, i) => {
                        const price = yearly ? p.yearly : p.monthly;
                        return (
                            <Col lg={4} md={6} key={i}>
                                <div className={`price-card ${p.featured ? "featured" : ""}`}>
                                    {p.badge && <span className="price-badge">{p.badge}</span>}
                                    <h3 className="price-name">{p.name}</h3>
                                    <p className="price-tagline">{p.tagline}</p>

                                    <div className="price-amount">
                                        <span className="price-currency">₹</span>
                                        <span className="price-value">{price}</span>
                                        <span className="price-period">{price === 0 ? "/ forever" : "/ month"}</span>
                                    </div>

                                    {price !== 0 && yearly && <p className="price-note">Billed annually · ₹{price * 12}/year</p>}
                                    {price !== 0 && !yearly && <p className="price-note">Billed monthly · cancel anytime</p>}
                                    {price === 0 && <p className="price-note">No credit card required</p>}

                                    <ul className="price-features">
                                        {p.features.map((f, j) => (<li key={j}>{f}</li>))}
                                    </ul>

                                    <Button
                                        variant={p.featured ? "primary" : "outline-primary"}
                                        className={`price-cta ${p.featured ? "price-cta-primary" : ""}`}
                                        onClick={onOpenRegister}
                                    >
                                        {p.cta}
                                    </Button>
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                <p className="pricing-footnote text-center">
                    All prices in INR. GST applicable. 30-day money-back guarantee on paid plans.
                </p>
            </Container>
        </section>
    );
};

export default Pricing;