import { Container, Row, Col, Badge } from "react-bootstrap";
import { steps } from "../../../data/homeData";
import "./HowItWorks.css";

const HowItWorks = () => (
    <section className="how-section">
        <Container>
            <div className="section-header text-center mb-5">
                <Badge bg="primary" className="section-pill mb-3">How It Works</Badge>
                <h2 className="section-title">Up and Running in 3 Simple Steps</h2>
                <p className="section-subtitle">
                    From sign-up to your first insight in less than five minutes.
                </p>
            </div>

            <Row className="g-4 steps-wrap">
                {steps.map((s, i) => (
                    <Col lg={4} md={6} key={i}>
                        <div className="step-card">
                            <span className="step-num">{s.num}</span>
                            <span className="step-icon">{s.icon}</span>
                            <h3 className="step-title">{s.title}</h3>
                            <p className="step-desc">{s.desc}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default HowItWorks;