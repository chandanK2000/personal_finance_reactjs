const FeatureVisual = ({ type }) => {
    if (type === "expenses") {
        return (
            <div className="fv-card fv-expenses">
                <div className="fv-title">Recent Transactions</div>
                <div className="fv-tx"><span>🍔 Zomato</span><span className="text-danger">-₹420</span></div>
                <div className="fv-tx"><span>🛒 BigBasket</span><span className="text-danger">-₹1,850</span></div>
                <div className="fv-tx"><span>⛽ Fuel</span><span className="text-danger">-₹2,000</span></div>
                <div className="fv-tx"><span>💼 Salary</span><span className="text-success">+₹65,000</span></div>
            </div>
        );
    }

    if (type === "budget") {
        const rows = [
            { cat: "Food", pct: 72, color: "#0d6efd" },
            { cat: "Transport", pct: 45, color: "#6610f2" },
            { cat: "Shopping", pct: 88, color: "#dc3545" },
            { cat: "Bills", pct: 60, color: "#198754" },
        ];
        return (
            <div className="fv-card fv-budget">
                <div className="fv-title">Monthly Budgets</div>
                {rows.map((r) => (
                    <div key={r.cat} className="fv-budget-row">
                        <div className="fv-budget-meta"><span>{r.cat}</span><span>{r.pct}%</span></div>
                        <div className="fv-bar-track">
                            <div className="fv-bar-fill" style={{ width: `${r.pct}%`, background: r.color }}></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "analytics") {
        return (
            <div className="fv-card fv-analytics">
                <div className="fv-title">Spending Trend</div>
                <div className="fv-chart">
                    {[40, 55, 35, 70, 50, 85, 65, 90, 75].map((h, i) => (
                        <div key={i} className="fv-chart-bar" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
                <div className="fv-chart-labels">
                    <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span>
                </div>
            </div>
        );
    }

    if (type === "goals") {
        return (
            <div className="fv-card fv-goals">
                <div className="fv-title">Savings Goals</div>
                <div className="fv-goal">
                    <div className="fv-goal-emoji">🏖️</div>
                    <div className="fv-goal-info">
                        <div className="fv-goal-name">Goa Trip</div>
                        <div className="fv-bar-track"><div className="fv-bar-fill" style={{ width: "82%", background: "#0d6efd" }}></div></div>
                        <div className="fv-goal-meta">₹41,000 / ₹50,000</div>
                    </div>
                </div>
                <div className="fv-goal">
                    <div className="fv-goal-emoji">📱</div>
                    <div className="fv-goal-info">
                        <div className="fv-goal-name">New iPhone</div>
                        <div className="fv-bar-track"><div className="fv-bar-fill" style={{ width: "45%", background: "#6610f2" }}></div></div>
                        <div className="fv-goal-meta">₹36,000 / ₹80,000</div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default FeatureVisual;