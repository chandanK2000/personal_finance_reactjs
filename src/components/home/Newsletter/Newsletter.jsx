import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
        setEmail("");
    };

    return (
        <section className="newsletter-section">
            <Container>
                <div className="newsletter-box">
                    <Row className="align-items-center gy-4">
                        <Col lg={6}>
                            <h3 className="newsletter-title">Get one money tip every week 📬</h3>
                            <p className="newsletter-subtitle">
                                Join 12,000+ readers getting practical budgeting advice, product updates,
                                and zero spam. Unsubscribe anytime.
                            </p>
                        </Col>

                        <Col lg={6}>
                            {subscribed ? (
                                <div className="newsletter-success">
                                    🎉 You're in! Check your inbox to confirm your subscription.
                                </div>
                            ) : (
                                <Form className="newsletter-form" onSubmit={handleSubscribe}>
                                    <Form.Control
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="newsletter-input"
                                        aria-label="Email address"
                                    />
                                    <Button type="submit" className="newsletter-btn">
                                        Subscribe
                                    </Button>
                                </Form>
                            )}
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;