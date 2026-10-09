import React from "react";
import {
    FaWallet,
    FaArrowUp,
    FaArrowDown,
    FaPiggyBank,
    FaPlus,
    FaChartPie,
    FaFileInvoiceDollar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Dashboard.css";

const Dashboard = () => {
    /* Read the logged-in user for the greeting */
    const getUser = () => {
        try {
            return JSON.parse(localStorage.getItem("userDetails") || "{}");
        } catch {
            return {};
        }
    };

    const user = getUser();
    const userName =
        user.name || user.fullName || user.Name || "there";

    /* Sample data — replace with real values from your API */
    const stats = [
        {
            title: "Total Balance",
            value: "₹ 1,24,500",
            change: "+12.5%",
            trend: "up",
            icon: FaWallet,
            color: "indigo",
        },
        {
            title: "Income (This Month)",
            value: "₹ 52,000",
            change: "+8.2%",
            trend: "up",
            icon: FaArrowUp,
            color: "green",
        },
        {
            title: "Expenses (This Month)",
            value: "₹ 27,300",
            change: "-3.1%",
            trend: "down",
            icon: FaArrowDown,
            color: "red",
        },
        {
            title: "Savings Goal",
            value: "₹ 45,000",
            change: "68%",
            trend: "up",
            icon: FaPiggyBank,
            color: "amber",
        },
    ];

    const recent = [
        {
            id: 1,
            title: "Grocery — DMart",
            category: "Food",
            amount: "- ₹ 2,150",
            type: "expense",
            date: "Today",
        },
        {
            id: 2,
            title: "Salary Credit",
            category: "Income",
            amount: "+ ₹ 52,000",
            type: "income",
            date: "Yesterday",
        },
        {
            id: 3,
            title: "Electricity Bill",
            category: "Utilities",
            amount: "- ₹ 1,840",
            type: "expense",
            date: "2 days ago",
        },
        {
            id: 4,
            title: "Freelance Project",
            category: "Income",
            amount: "+ ₹ 8,500",
            type: "income",
            date: "5 days ago",
        },
    ];

    return (
        <div className="dashboard-page">
            {/* ---------- Welcome header ---------- */}
            <div className="dashboard-header">
                <div className="dashboard-header-text">
                    <h2>
                        Hi, <span>{userName}</span> 👋
                    </h2>
                    <p>Here’s what’s happening with your money today.</p>
                </div>

                <div className="dashboard-header-actions">
                    <Link
                        to="/money"
                        className="dashboard-btn dashboard-btn-primary"
                    >
                        <FaPlus />
                        <span>Add Transaction</span>
                    </Link>

                    <Link
                        to="/reports"
                        className="dashboard-btn dashboard-btn-ghost"
                    >
                        <FaChartPie />
                        <span>View Reports</span>
                    </Link>
                </div>
            </div>

            {/* ---------- Stats grid ---------- */}
            <div className="dashboard-stats">
                {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.title}
                            className={`stat-card stat-${item.color}`}
                        >
                            <div className="stat-icon">
                                <Icon />
                            </div>

                            <div className="stat-body">
                                <span className="stat-title">
                                    {item.title}
                                </span>
                                <span className="stat-value">
                                    {item.value}
                                </span>
                                <span
                                    className={`stat-change ${
                                        item.trend === "down"
                                            ? "down"
                                            : "up"
                                    }`}
                                >
                                    {item.change} vs last month
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ---------- Two column area ---------- */}
            <div className="dashboard-grid">
                {/* Recent activity */}
                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>Recent Activity</h3>
                        <Link to="/money" className="dashboard-card-link">
                            View all
                        </Link>
                    </div>

                    <ul className="activity-list">
                        {recent.map((tx) => (
                            <li key={tx.id} className="activity-item">
                                <span
                                    className={`activity-dot ${tx.type}`}
                                    aria-hidden="true"
                                />

                                <div className="activity-info">
                                    <span className="activity-title">
                                        {tx.title}
                                    </span>
                                    <span className="activity-meta">
                                        {tx.category} • {tx.date}
                                    </span>
                                </div>

                                <span
                                    className={`activity-amount ${tx.type}`}
                                >
                                    {tx.amount}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick insights */}
                <div className="dashboard-card">
                    <div className="dashboard-card-header">
                        <h3>Quick Insights</h3>
                        <FaFileInvoiceDollar className="dashboard-card-icon" />
                    </div>

                    <div className="insight-block">
                        <span className="insight-label">
                            Top spending category
                        </span>
                        <span className="insight-value">
                            Food & Dining
                        </span>
                        <div className="insight-bar">
                            <div
                                className="insight-bar-fill"
                                style={{ width: "62%" }}
                            />
                        </div>
                        <span className="insight-hint">
                            62% of your monthly budget
                        </span>
                    </div>

                    <div className="insight-block">
                        <span className="insight-label">
                            Monthly savings progress
                        </span>
                        <span className="insight-value">₹ 45,000</span>
                        <div className="insight-bar">
                            <div
                                className="insight-bar-fill success"
                                style={{ width: "68%" }}
                            />
                        </div>
                        <span className="insight-hint">
                            68% of ₹ 66,000 goal
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;