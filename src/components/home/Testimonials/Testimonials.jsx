import { Container, Carousel, Badge } from "react-bootstrap";
import { testimonials } from "../../../data/homeData";
import "./Testimonials.css";

const Testimonials = () => (
    <section className="testimonials-section">
        <Container>
            <div className="section-header text-center mb-5">
                <Badge bg="primary" className="section-pill mb-3">Testimonials</Badge>
                <h2 className="section-title">Loved by 50,000+ Users</h2>
                <p className="section-subtitle">Real people. Real savings. Real experiences.</p>
            </div>

            <Carousel className="testimonials-carousel" indicators controls interval={5000} pause="hover">
                {testimonials.map((t, i) => (
                    <Carousel.Item key={i}>
                        <div className="testimonial-card">
                            <div className="testimonial-quote-icon">❝</div>
                            <p className="testimonial-quote">{t.quote}</p>
                            <div className="testimonial-rating">{"⭐".repeat(t.rating)}</div>
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
);

export default Testimonials;