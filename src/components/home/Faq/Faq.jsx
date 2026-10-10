import { Container, Row, Col, Badge, Accordion } from "react-bootstrap";
import { faqs } from "../../../data/homeData";
import "./Faq.css";

const Faq = () => (
    <section className="faq-section">
        <Container>
            <div className="section-header text-center mb-5">
                <Badge bg="primary" className="section-pill mb-3">FAQ</Badge>
                <h2 className="section-title">Questions? Answered.</h2>
                <p className="section-subtitle">Everything you need to know before you get started.</p>
            </div>

            <Row className="justify-content-center">
                <Col lg={9}>
                    <Accordion defaultActiveKey="0" flush>
                        {faqs.map((f, i) => (
                            <Accordion.Item eventKey={String(i)} key={i}>
                                <Accordion.Header>{f.q}</Accordion.Header>
                                <Accordion.Body>{f.a}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Faq;