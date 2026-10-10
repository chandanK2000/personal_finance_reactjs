import { Container } from "react-bootstrap";
import { brands } from "../../../data/homeData";
import "./Brands.css";

const Brands = () => (
    <section className="brands-section">
        <Container>
            <p className="brands-label">As featured in</p>
            <div className="brands-track">
                {brands.map((b, i) => (
                    <span key={i} className="brand-item">{b}</span>
                ))}
            </div>
        </Container>
    </section>
);

export default Brands;