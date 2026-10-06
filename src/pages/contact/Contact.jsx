import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Badge,
    Form,
    Accordion,
    Alert,
} from "react-bootstrap";
import "./Contact.css";

const contactInfo = [
    {
        icon: "📧",
        title: "Email Us",
        value: "support@personalfinance.com",
        link: "mailto:support@personalfinance.com",
        desc: "We reply within 24 hours",
    },
    {
        icon: "📞",
        title: "Call Us",
        value: "+91 98765 43210",
        link: "tel:+919876543210",
        desc: "Mon–Fri, 9 AM – 6 PM IST",
    },
    {
        icon: "📍",
        title: "Visit Us",
        value: "Bengaluru, Karnataka, India",
        link: "#map",
        desc: "By appointment only",
    },
];

const faqs = [
    {
        q: "Is Personal Finance really free to use?",
        a: "Yes! Our core features — expense tracking, budgeting, and basic analytics — are 100% free forever. Premium features are available on our Pro plan.",
    },
    {
        q: "How secure is my financial data?",
        a: "We use bank-level AES-256 encryption both in transit and at rest. Your data is never sold or shared with third parties. We also support two-factor authentication.",
    },
    {
        q: "Can I import data from other apps?",
        a: "Yes, you can import CSV files from most banking apps and competitors. We're also working on direct bank sync for supported banks in India.",
    },
    {
        q: "Do you offer support for businesses?",
        a: "Absolutely! We have a Teams plan for small businesses and startups. Contact us via the form and mention 'Business' in your message.",
    },
    {
        q: "How do I cancel my subscription?",
        a: "You can cancel anytime from Settings → Billing. No questions asked, no hidden fees. Your data remains accessible on the free plan.",
    },
];

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-page">
            {/* ===== HERO ===== */}
            <section className="contact-hero">
                <Container>
                    <div className="text-center contact-hero-content">
                        <Badge bg="light" text="primary" className="contact-badge mb-3">
                            💬 Get in Touch
                        </Badge>
                        <h1 className="contact-title">
                            We'd Love to <span>Hear From You</span>
                        </h1>
                        <p className="contact-subtitle">
                            Have a question, feedback, or need help? Our team is here to
                            assist you every step of the way.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ===== CONTACT INFO CARDS ===== */}
            <section className="contact-info-section">
                <Container>
                    <Row className="g-4">
                        {contactInfo.map((c, i) => (
                            <Col lg={4} md={6} key={i}>
                                <a href={c.link} className="contact-info-link">
                                    <Card className="contact-info-card h-100">
                                        <Card.Body className="text-center">
                                            <div className="contact-info-icon">{c.icon}</div>
                                            <h5 className="contact-info-title">{c.title}</h5>
                                            <p className="contact-info-value">{c.value}</p>
                                            <p className="contact-info-desc">{c.desc}</p>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== FORM + MAP ===== */}
            <section className="contact-form-section">
                <Container>
                    <Row className="gy-5">
                        {/* Form */}
                        <Col lg={7}>
                            <Badge bg="primary" className="mb-3">Send a Message</Badge>
                            <h2 className="section-title">Let's Talk</h2>
                            <p className="section-text mb-4">
                                Fill in the form below and we'll get back to you within 24 hours.
                            </p>

                            {submitted && (
                                <Alert variant="success" className="contact-alert">
                                    ✅ Thanks! Your message has been sent. We'll reply soon.
                                </Alert>
                            )}

                            <Form className="contact-form" onSubmit={handleSubmit}>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="contactName">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="contactEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group controlId="contactSubject">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="subject"
                                                placeholder="How can we help?"
                                                value={form.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group controlId="contactMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                placeholder="Write your message here..."
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            className="contact-submit-btn"
                                        >
                                            Send Message →
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                        {/* Side info / Map */}
                        <Col lg={5}>
                            <div className="contact-side">
                                <div className="contact-map" id="map">
                                    <div className="map-overlay">
                                        <span className="map-pin">📍</span>
                                        <p className="map-label">Personal Finance HQ</p>
                                        <p className="map-sub">Bengaluru, India</p>
                                    </div>
                                </div>

                                <div className="contact-hours mt-4">
                                    <h5 className="hours-title">🕒 Support Hours</h5>
                                    <div className="hours-row">
                                        <span>Monday – Friday</span>
                                        <span>9:00 AM – 6:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span>Saturday</span>
                                        <span>10:00 AM – 4:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span>Sunday</span>
                                        <span className="text-muted">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== FAQ ===== */}
            <section className="faq-section">
                <Container>
                    <div className="text-center section-header">
                        <Badge bg="primary" className="mb-3">FAQ</Badge>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Quick answers to questions you may have.
                        </p>
                    </div>

                    <Accordion className="faq-accordion mt-4" defaultActiveKey="0">
                        {faqs.map((f, i) => (
                            <Accordion.Item eventKey={String(i)} key={i} className="faq-item">
                                <Accordion.Header>{f.q}</Accordion.Header>
                                <Accordion.Body>{f.a}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Container>
            </section>

            {/* ===== CTA ===== */}
            <section className="contact-cta-section">
                <Container>
                    <div className="contact-cta-box text-center">
                        <h2 className="cta-title">Still Have Questions?</h2>
                        <p className="cta-subtitle">
                            Our team is always happy to help. Reach out anytime.
                        </p>
                        <Button
                            href="mailto:support@personalfinance.com"
                            variant="light"
                            size="lg"
                            className="cta-btn-light"
                        >
                            Email Support →
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact;