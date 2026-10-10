import { Container, Row, Col, Badge } from "react-bootstrap";
import { coreFeatures } from "../../../data/homeData";
import FeatureVisual from "./FeatureVisual";
import "./CoreFeatures.css";

const CoreFeatures = () => (
    <section className="core-features-section">
        <Container>
            <div className="section-header text-center mb-5">
                <Badge bg="primary" className="section-pill mb-3">Deep Dive</Badge>
                <h2 className="section-title">Built Around What You Actually Need</h2>
                <p className="section-subtitle">Four core pillars that turn chaos into clarity.</p>
            </div>

            {coreFeatures.map((f, i) => {
                const flipped = i % 2 === 1;
                return (
                    <Row key={f.id} id={f.id} className="align-items-center core-feature-row gy-4">
                        <Col lg={6} className={`order-1 ${flipped ? "order-lg-2" : "order-lg-1"}`}>
                            <div className="core-feature-text">
                                <Badge bg="primary" className="section-pill mb-3">
                                    {f.icon} {f.badge}
                                </Badge>
                                <h3 className="core-feature-title">{f.title}</h3>
                                <p className="core-feature-desc">{f.desc}</p>
                                <ul className="core-feature-list">
                                    {f.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} className={`order-2 ${flipped ? "order-lg-1" : "order-lg-2"}`}>
                            <div className="core-feature-visual">
                                <FeatureVisual type={f.visual} />
                            </div>
                        </Col>
                    </Row>
                );
            })}
        </Container>
    </section>
);

export default CoreFeatures;