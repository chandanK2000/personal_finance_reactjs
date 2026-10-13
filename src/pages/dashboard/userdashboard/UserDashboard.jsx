// UserDashboard.jsx
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import axiosInstance from "../../../services/AxiousInstance";
import API from "../../../services/api";
import "./UserDashboard.css";

const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                // adjust endpoint to your API
                const res = await axiosInstance.get(API.profile_api);
                setUser(res.data);
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Unable to load dashboard."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <Container className="ud-loading text-center py-5">
                <Spinner animation="border" />
                <p className="mt-2 text-muted">Loading dashboard...</p>
            </Container>
        );
    }

    return (
        <Container className="ud-wrapper py-4">
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Welcome */}
            <div className="ud-welcome mb-4">
                <h4 className="mb-1">
                    Welcome back{user?.name ? `, ${user.name}` : ""} 👋
                </h4>
                <p className="text-muted mb-0">
                    Here's a quick overview of your account.
                </p>
            </div>

            {/* Stats */}
            <Row className="g-3 mb-4">
                <Col md={4}>
                    <Card className="ud-stat-card">
                        <Card.Body>
                            <div className="ud-stat-label">Opening Balance</div>
                            <div className="ud-stat-value">
                                ₹{Number(user?.openingBalance || 0).toFixed(2)}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="ud-stat-card">
                        <Card.Body>
                            <div className="ud-stat-label">Total Income</div>
                            <div className="ud-stat-value text-success">
                                ₹0.00
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="ud-stat-card">
                        <Card.Body>
                            <div className="ud-stat-label">Total Expenses</div>
                            <div className="ud-stat-value text-danger">
                                ₹0.00
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Quick actions */}
            <Card className="ud-actions mb-4">
                <Card.Body className="d-flex flex-wrap gap-2">
                    <Button size="sm" variant="success">+ Add Income</Button>
                    <Button size="sm" variant="danger">+ Add Expense</Button>
                    <Button size="sm" variant="primary">Transfer</Button>
                    <Button size="sm" variant="outline-secondary">
                        View Transactions
                    </Button>
                </Card.Body>
            </Card>

            {/* Recent transactions */}
            <Card className="ud-recent">
                <Card.Header className="fw-semibold">
                    Recent Transactions
                </Card.Header>
                <Card.Body>
                    <p className="text-muted mb-0 small">
                        No transactions yet.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserDashboard;