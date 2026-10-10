import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { features } from "../../../data/homeData";
import "./Features.css";

const Features = () => (
    <section className="features-section">
        <Container>
            <div className="section-header text-center">
                <Badge bg="primary" className="section-pill mb-3">Features</Badge>
                <h2 className="section-title">Everything You Need to Manage Your Money</h2>
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
                                <Card.Title className="feature-title">{f.title}</Card.Title>
                                <Card.Text className="feature-desc">{f.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Features;