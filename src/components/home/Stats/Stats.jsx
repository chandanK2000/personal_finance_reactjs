import { Container, Row, Col } from "react-bootstrap";
import { stats } from "../../../data/homeData";
import "./Stats.css";

const Stats = () => (
    <section className="stats-section">
        <Container>
            <Row className="text-center g-4">
                {stats.map((s, i) => (
                    <Col md={3} sm={6} key={i} className="stat-item">
                        <h3 className="stat-value">{s.value}</h3>
                        <p className="stat-label">{s.label}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Stats;