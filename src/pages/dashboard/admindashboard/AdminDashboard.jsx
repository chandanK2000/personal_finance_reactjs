import { Container, Row, Col, Card, Button, Table, Badge } from "react-bootstrap";

const AdminDashboard = () => {
    // dummy data — replace with API later
    const stats = {
        totalUsers: 12,
        activeUsers: 8,
        totalBalance: 24500,
        transactions: 340
    };

    const users = [
        { id: 1, name: "Rahul Sharma", email: "rahul@example.com", balance: 5000, active: true },
        { id: 2, name: "Priya Verma", email: "priya@example.com", balance: 3200, active: true },
        { id: 3, name: "Amit Singh", email: "amit@example.com", balance: 1800, active: false }
    ];

    return (
        <Container className="py-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-1">Admin Dashboard</h4>
                    <p className="text-muted small mb-0">
                        Overview of users and activity
                    </p>
                </div>
                <Button size="sm" variant="primary">+ Add User</Button>
            </div>

            {/* Stats */}
            <Row className="g-3 mb-4">
                <Col md={3} sm={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <div className="text-muted small">Total Users</div>
                            <h4 className="fw-bold mb-0">{stats.totalUsers}</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <div className="text-muted small">Active Users</div>
                            <h4 className="fw-bold text-success mb-0">
                                {stats.activeUsers}
                            </h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <div className="text-muted small">Total Balance</div>
                            <h4 className="fw-bold mb-0">₹{stats.totalBalance}</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <div className="text-muted small">Transactions</div>
                            <h4 className="fw-bold mb-0">{stats.transactions}</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Users table */}
            <Card className="shadow-sm border-0">
                <Card.Header className="bg-white fw-semibold">
                    All Users
                </Card.Header>
                <Table hover responsive className="mb-0 align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th>Status</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, i) => (
                            <tr key={u.id}>
                                <td>{i + 1}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>₹{u.balance}</td>
                                <td>
                                    <Badge bg={u.active ? "success" : "secondary"}>
                                        {u.active ? "Active" : "Inactive"}
                                    </Badge>
                                </td>
                                <td className="text-end">
                                    <Button size="sm" variant="outline-primary">
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Container>
    );
};

export default AdminDashboard;