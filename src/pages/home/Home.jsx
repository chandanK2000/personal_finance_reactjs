import React from "react";
import { Container, Row, Col, Button, Card, Badge, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

/* ===== Quick feature icons ===== */
const features = [
    {
        icon: "📊",
        title: "Track Expenses",
        desc: "Monitor every rupee you spend with smart categorization and real-time updates.",
    },
    {
        icon: "💰",
        title: "Budget Planning",
        desc: "Set monthly budgets and get alerts before you overspend. Stay in control.",
    },
    {
        icon: "📈",
        title: "Smart Analytics",
        desc: "Beautiful charts and insights to understand where your money goes.",
    },
    {
        icon: "🔔",
        title: "Bill Reminders",
        desc: "Never miss a payment again with automated reminders for all your bills.",
    },
    {
        icon: "🎯",
        title: "Savings Goals",
        desc: "Set financial goals and track your progress toward them effortlessly.",
    },
    {
        icon: "🔒",
        title: "Bank-Level Security",
        desc: "Your data is encrypted and protected with enterprise-grade security.",
    },
];

/* ===== Deep-dive feature blocks ===== */
const coreFeatures = [
    {
        id: "expenses",
        badge: "Expenses",
        icon: "📊",
        title: "Track Every Rupee — Automatically",
        desc: "Log expenses in seconds, categorize on autopilot, and see exactly where your money goes. Import from bank statements or add on the go.",
        bullets: [
            "Smart auto-categorization",
            "Receipt scanning & photo uploads",
            "Recurring expense detection",
        ],
        visual: "expenses",
    },
    {
        id: "budget",
        badge: "Budget",
        icon: "💰",
        title: "Budgets That Actually Work",
        desc: "Set monthly limits per category, get alerts before overspending, and roll over unused amounts. Budgeting has never been this smooth.",
        bullets: [
            "Category-wise budget limits",
            "Real-time overspend alerts",
            "Rollover unused budget",
        ],
        visual: "budget",
    },
    {
        id: "analytics",
        badge: "Analytics",
        icon: "📈",
        title: "Insights That Change Behavior",
        desc: "Beautiful charts reveal spending trends, income patterns, and savings rate. Understand your habits and improve them.",
        bullets: [
            "Monthly & yearly trend charts",
            "Category breakdowns",
            "Custom date-range reports",
        ],
        visual: "analytics",
    },
    {
        id: "goals",
        badge: "Goals",
        icon: "🎯",
        title: "Save Toward What Matters",
        desc: "Set savings goals — a new phone, vacation, or emergency fund — and track progress visually with auto-allocation from your income.",
        bullets: [
            "Multiple concurrent goals",
            "Auto-save allocations",
            "Progress milestones & reminders",
        ],
        visual: "goals",
    },
];

const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "₹120Cr+", label: "Tracked Monthly" },
    { value: "4.9★", label: "User Rating" },
    { value: "99.9%", label: "Uptime" },
];

/* ===== Testimonials ===== */
const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Software Engineer, Bengaluru",
        emoji: "👨‍💻",
        quote:
            "I used to dread checking my bank balance. Now I open Personal Finance every morning like it's Instagram. Saved ₹40K in 6 months!",
        rating: 5,
    },
    {
        name: "Sneha Kulkarni",
        role: "Freelance Designer, Pune",
        emoji: "👩‍🎨",
        quote:
            "As a freelancer, tracking irregular income was a nightmare. This app made it effortless. The analytics section is genuinely eye-opening.",
        rating: 5,
    },
    {
        name: "Arjun Nair",
        role: "MBA Student, Mumbai",
        emoji: "👨‍🎓",
        quote:
            "The budget alerts saved me multiple times from impulse buying. It's like having a financial advisor in my pocket, but free.",
        rating: 5,
    },
    {
        name: "Priya Singh",
        role: "Doctor, Delhi",
        emoji: "👩‍⚕️",
        quote:
            "Clean UI, fast, and secure. The savings goals feature helped me save for my dream vacation in just 8 months. Highly recommended!",
        rating: 5,
    },
];

/* ===== Helper: right-side visuals per feature ===== */
const FeatureVisual = ({ type }) => {
    if (type === "expenses") {
        return (
            <div className="fv-card fv-expenses">
                <div className="fv-title">Recent Transactions</div>
                <div className="fv-tx">
                    <span>🍔 Zomato</span>
                    <span className="text-danger">-₹420</span>
                </div>
                <div className="fv-tx">
                    <span>🛒 BigBasket</span>
                    <span className="text-danger">-₹1,850</span>
                </div>
                <div className="fv-tx">
                    <span>⛽ Fuel</span>
                    <span className="text-danger">-₹2,000</span>
                </div>
                <div className="fv-tx">
                    <span>💼 Salary</span>
                    <span className="text-success">+₹65,000</span>
                </div>
            </div>
        );
    }

    if (type === "budget") {
        const rows = [
            { cat: "Food", pct: 72, color: "#0d6efd" },
            { cat: "Transport", pct: 45, color: "#6610f2" },
            { cat: "Shopping", pct: 88, color: "#dc3545" },
            { cat: "Bills", pct: 60, color: "#198754" },
        ];
        return (
            <div className="fv-card fv-budget">
                <div className="fv-title">Monthly Budgets</div>
                {rows.map((r) => (
                    <div key={r.cat} className="fv-budget-row">
                        <div className="fv-budget-meta">
                            <span>{r.cat}</span>
                            <span>{r.pct}%</span>
                        </div>
                        <div className="fv-bar-track">
                            <div
                                className="fv-bar-fill"
                                style={{ width: `${r.pct}%`, background: r.color }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "analytics") {
        return (
            <div className="fv-card fv-analytics">
                <div className="fv-title">Spending Trend</div>
                <div className="fv-chart">
                    {[40, 55, 35, 70, 50, 85, 65, 90, 75].map((h, i) => (
                        <div key={i} className="fv-chart-bar" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="fv-chart-labels">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                </div>
            </div>
        );
    }

    if (type === "goals") {
        return (
            <div className="fv-card fv-goals">
                <div className="fv-title">Savings Goals</div>
                <div className="fv-goal">
                    <div className="fv-goal-emoji">🏖️</div>
                    <div className="fv-goal-info">
                        <div className="fv-goal-name">Goa Trip</div>
                        <div className="fv-bar-track">
                            <div className="fv-bar-fill" style={{ width: "82%", background: "#0d6efd" }}></div>
                        </div>
                        <div className="fv-goal-meta">₹41,000 / ₹50,000</div>
                    </div>
                </div>
                <div className="fv-goal">
                    <div className="fv-goal-emoji">📱</div>
                    <div className="fv-goal-info">
                        <div className="fv-goal-name">New iPhone</div>
                        <div className="fv-bar-track">
                            <div className="fv-bar-fill" style={{ width: "45%", background: "#6610f2" }}></div>
                        </div>
                        <div className="fv-goal-meta">₹36,000 / ₹80,000</div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

const Home = () => {
    return (
        <div className="home-page">
            {/* ===== HERO SECTION ===== */}
            <section className="hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="hero-text">
                            <Badge bg="light" text="primary" className="hero-badge mb-3">
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
                                    as={Link}
                                    to="/register"
                                    variant="primary"
                                    size="lg"
                                    className="hero-btn-primary"
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
                                            <div
                                                key={i}
                                                className="bar"
                                                style={{ height: `${h}%` }}
                                            ></div>
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

            {/* ===== STATS ===== */}
            <section className="stats-section">
                <Container>
                    <Row className="text-center">
                        {stats.map((s, i) => (
                            <Col md={3} sm={6} key={i} className="stat-item">
                                <h3 className="stat-value">{s.value}</h3>
                                <p className="stat-label">{s.label}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== QUICK FEATURES ===== */}
            <section className="features-section">
                <Container>
                    <div className="section-header text-center">
                        <Badge bg="primary" className="mb-3">Features</Badge>
                        <h2 className="section-title">
                            Everything You Need to Manage Your Money
                        </h2>
                        <p className="section-subtitle">
                            Powerful tools designed to make personal finance simple and stress-free.
                        </p>
                    </div>

                    <Row className="g-4 mt-4">
                        {features.map((f, i) => (
                            <Col lg={4} md={6} key={i}>
                                <Card className="feature-card h-100">
                                    <Card.Body>
                                        <div className="feature-icon">{f.icon}</div>
                                        <Card.Title className="feature-title">
                                            {f.title}
                                        </Card.Title>
                                        <Card.Text className="feature-desc">
                                            {f.desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* ===== DEEP-DIVE CORE FEATURES ===== */}
            <section className="core-features-section">
                <Container>
                    <div className="section-header text-center mb-5">
                        <Badge bg="primary" className="mb-3">Deep Dive</Badge>
                        <h2 className="section-title">Built Around What You Actually Need</h2>
                        <p className="section-subtitle">
                            Four core pillars that turn chaos into clarity.
                        </p>
                    </div>

                    {coreFeatures.map((f, i) => (
                        <Row
                            key={f.id}
                            id={f.id}
                            className={`align-items-center core-feature-row gy-4 ${
                                i % 2 === 1 ? "flex-row-reverse" : ""
                            }`}
                        >
                            <Col lg={6}>
                                <div className="core-feature-text">
                                    <Badge bg="primary" className="mb-3">
                                        {f.icon} {f.badge}
                                    </Badge>
                                    <h3 className="core-feature-title">{f.title}</h3>
                                    <p className="core-feature-desc">{f.desc}</p>
                                    <ul className="core-feature-list">
                                        {f.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="core-feature-visual">
                                    <FeatureVisual type={f.visual} />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </section>

            {/* ===== TESTIMONIALS CAROUSEL ===== */}
            <section className="testimonials-section">
                <Container>
                    <div className="section-header text-center mb-5">
                        <Badge bg="primary" className="mb-3">Testimonials</Badge>
                        <h2 className="section-title">Loved by 50,000+ Users</h2>
                        <p className="section-subtitle">
                            Real people. Real savings. Real experiences.
                        </p>
                    </div>

                    <Carousel
                        className="testimonials-carousel"
                        indicators
                        controls
                        interval={5000}
                        pause="hover"
                    >
                        {testimonials.map((t, i) => (
                            <Carousel.Item key={i}>
                                <div className="testimonial-card">
                                    <div className="testimonial-quote-icon">❝</div>
                                    <p className="testimonial-quote">{t.quote}</p>
                                    <div className="testimonial-rating">
                                        {"⭐".repeat(t.rating)}
                                    </div>
                                    <div className="testimonial-author">
                                        <div className="testimonial-avatar">{t.emoji}</div>
                                        <div>
                                            <h6 className="testimonial-name">{t.name}</h6>
                                            <p className="testimonial-role">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </section>

            {/* ===== CTA ===== */}
            <section className="cta-section">
                <Container>
                    <div className="cta-box text-center">
                        <h2 className="cta-title">Ready to Take Control?</h2>
                        <p className="cta-subtitle">
                            Join thousands of users who are already saving smarter with Personal Finance.
                        </p>
                        <Button
                            as={Link}
                            to="/register"
                            variant="light"
                            size="lg"
                            className="cta-btn"
                        >
                            Create Free Account →
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;