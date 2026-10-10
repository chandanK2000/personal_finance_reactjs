import { Container, Button } from "react-bootstrap";
import "./Cta.css";

const Cta = ({ onOpenRegister }) => (
    <section className="cta-section">
        <Container>
            <div className="cta-box text-center">
                <h2 className="cta-title">Ready to Take Control?</h2>
                <p className="cta-subtitle">
                    Join thousands of users who are already saving smarter with Personal Finance.
                </p>
                <Button variant="light" size="lg" className="cta-btn" onClick={onOpenRegister}>
                    Create Free Account →
                </Button>
                <p className="cta-note">Free forever plan · No credit card · Cancel anytime</p>
            </div>
        </Container>
    </section>
);

export default Cta;