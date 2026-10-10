import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Badge,
    Form,
    Table,
    ProgressBar,
    Modal,
} from "react-bootstrap";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaVenusMars,
    FaBriefcase,
    FaEdit,
    FaCamera,
    FaCheckCircle,
    FaWallet,
    FaUniversity,
    FaCreditCard,
    FaMobileAlt,
    FaPiggyBank,
    FaBullseye,
    FaTrophy,
    FaMedal,
    FaStar,
    FaFire,
    FaFileAlt,
    FaIdCard,
    FaShieldAlt,
    FaDownload,
    FaUpload,
    FaEye,
    FaEyeSlash,
    FaShareAlt,
    FaUserPlus,
    FaHistory,
    FaArrowUp,
    FaArrowDown,
    FaRupeeSign,
    FaCalendarAlt,
    FaCheck,
    FaTimes,
    FaCog,
    FaKey,
} from "react-icons/fa";
import "./Profile.css";

/* =========================================================
   MAIN PROFILE COMPONENT
   ========================================================= */
const Profile = () => {
    const [showBalances, setShowBalances] = useState(true);
    const [activeTab, setActiveTab] = useState("overview");
    const [showEditModal, setShowEditModal] = useState(false);

    const tabs = [
        { id: "overview",     label: "Overview",       icon: <FaUser /> },
        { id: "accounts",     label: "Accounts",       icon: <FaUniversity /> },
        { id: "goals",        label: "Savings Goals",  icon: <FaBullseye /> },
        { id: "achievements", label: "Achievements",   icon: <FaTrophy /> },
        { id: "activity",     label: "Recent Activity",icon: <FaHistory /> },
        { id: "documents",    label: "Documents",      icon: <FaFileAlt /> },
        { id: "referral",     label: "Refer & Earn",   icon: <FaShareAlt /> },
    ];

    return (
        <div className="profile-page">
            <Container fluid className="profile-container">
                {/* ================= PROFILE HERO ================= */}
                <div className="profile-hero">
                    <div className="profile-hero-bg" />
                    <div className="profile-hero-content">
                        <div className="profile-avatar-wrap">
                            <div className="profile-avatar">
                                <span>R</span>
                                <button className="profile-avatar-edit" aria-label="Change photo">
                                    <FaCamera />
                                </button>
                            </div>
                            <Badge bg="success" className="profile-verified">
                                <FaCheckCircle /> Verified
                            </Badge>
                        </div>

                        <div className="profile-hero-info">
                            <h1 className="profile-name">Rahul Mehta</h1>
                            <p className="profile-role">
                                <FaBriefcase /> Software Engineer · Bengaluru, India
                            </p>

                            <div className="profile-hero-meta">
                                <span><FaEnvelope /> rahul@example.com</span>
                                <span><FaPhone /> +91 98765 43210</span>
                                <span><FaCalendarAlt /> Joined Mar 2023</span>
                            </div>

                            <div className="profile-hero-badges">
                                <Badge bg="primary">⭐ Pro Plan</Badge>
                                <Badge bg="warning" text="dark">🔥 180-day streak</Badge>
                                <Badge bg="info">🏆 Top 5% Saver</Badge>
                            </div>
                        </div>

                        <div className="profile-hero-actions">
                            <Button
                                variant="primary"
                                className="profile-edit-btn"
                                onClick={() => setShowEditModal(true)}
                            >
                                <FaEdit /> Edit Profile
                            </Button>
                            <Button
                                variant="outline-primary"
                                className="profile-settings-btn"
                            >
                                <FaCog /> Settings
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ================= QUICK STATS ================= */}
                <Row className="g-3 profile-stats-row">
                    <Col lg={3} sm={6}>
                        <StatCard
                            icon={<FaWallet />}
                            label="Total Balance"
                            value="₹1,24,850"
                            change="+8.2%"
                            trend="up"
                            color="blue"
                            hidden={!showBalances}
                        />
                    </Col>
                    <Col lg={3} sm={6}>
                        <StatCard
                            icon={<FaArrowUp />}
                            label="Total Income"
                            value="₹78,500"
                            change="+12.4%"
                            trend="up"
                            color="green"
                            hidden={!showBalances}
                        />
                    </Col>
                    <Col lg={3} sm={6}>
                        <StatCard
                            icon={<FaArrowDown />}
                            label="Total Expenses"
                            value="₹42,300"
                            change="-3.1%"
                            trend="down"
                            color="red"
                            hidden={!showBalances}
                        />
                    </Col>
                    <Col lg={3} sm={6}>
                        <StatCard
                            icon={<FaPiggyBank />}
                            label="Total Savings"
                            value="₹36,200"
                            change="+18.7%"
                            trend="up"
                            color="purple"
                            hidden={!showBalances}
                        />
                    </Col>
                </Row>

                {/* ================= TABS ================= */}
                <div className="profile-tabs-wrap">
                    <nav className="profile-tabs" aria-label="Profile sections">
                        {tabs.map((t) => (
                            <button
                                key={t.id}
                                type="button"
                                className={`profile-tab ${
                                    activeTab === t.id ? "active" : ""
                                }`}
                                onClick={() => setActiveTab(t.id)}
                            >
                                <span className="profile-tab-icon">{t.icon}</span>
                                <span className="profile-tab-label">{t.label}</span>
                            </button>
                        ))}
                    </nav>

                    <button
                        type="button"
                        className="balance-toggle"
                        onClick={() => setShowBalances((s) => !s)}
                        aria-label={showBalances ? "Hide balances" : "Show balances"}
                    >
                        {showBalances ? <FaEyeSlash /> : <FaEye />}
                        <span>{showBalances ? "Hide" : "Show"} balances</span>
                    </button>
                </div>

                {/* ================= TAB CONTENT ================= */}
                <div className="profile-content">
                    {activeTab === "overview" && <OverviewTab />}
                    {activeTab === "accounts" && <AccountsTab />}
                    {activeTab === "goals" && <GoalsTab />}
                    {activeTab === "achievements" && <AchievementsTab />}
                    {activeTab === "activity" && <ActivityTab />}
                    {activeTab === "documents" && <DocumentsTab />}
                    {activeTab === "referral" && <ReferralTab />}
                </div>
            </Container>

            {/* ================= EDIT MODAL ================= */}
            <EditProfileModal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
            />
        </div>
    );
};

/* =========================================================
   1. OVERVIEW TAB
   ========================================================= */
const OverviewTab = () => (
    <Row className="g-4">
        {/* Personal Information */}
        <Col lg={6}>
            <Panel title="Personal Information" icon={<FaUser />}>
                <InfoRow icon={<FaUser />} label="Full Name" value="Rahul Mehta" />
                <InfoRow icon={<FaEnvelope />} label="Email Address" value="rahul@example.com" verified />
                <InfoRow icon={<FaPhone />} label="Phone Number" value="+91 98765 43210" verified />
                <InfoRow icon={<FaBirthdayCake />} label="Date of Birth" value="15 Aug 1995" />
                <InfoRow icon={<FaVenusMars />} label="Gender" value="Male" />
                <InfoRow icon={<FaMapMarkerAlt />} label="Location" value="Bengaluru, Karnataka, India" />
                <InfoRow icon={<FaBriefcase />} label="Occupation" value="Software Engineer" />
            </Panel>
        </Col>

        {/* About */}
        <Col lg={6}>
            <Panel title="About Me" icon={<FaEdit />}>
                <p className="about-text">
                    Passionate software engineer with a love for personal finance and
                    investing. On a journey to achieve financial independence by 2035.
                    Track every rupee, invest consistently, and live below my means.
                </p>

                <div className="about-tags">
                    <Badge bg="light" text="dark" className="about-tag">💰 FIRE Movement</Badge>
                    <Badge bg="light" text="dark" className="about-tag">📈 Index Investing</Badge>
                    <Badge bg="light" text="dark" className="about-tag">🎯 Goal-Driven</Badge>
                    <Badge bg="light" text="dark" className="about-tag">✈️ Traveler</Badge>
                </div>
            </Panel>

            {/* Financial Profile */}
            <Panel title="Financial Profile" icon={<FaWallet />}>
                <InfoRow label="Risk Appetite" value="Moderate" />
                <InfoRow label="Investment Horizon" value="10+ years" />
                <InfoRow label="Primary Goal" value="Early Retirement" />
                <InfoRow label="Monthly Savings Rate" value="46%" highlight />
            </Panel>
        </Col>

        {/* Preferences summary */}
        <Col lg={12}>
            <Panel title="Account Preferences" icon={<FaCog />}>
                <Row className="g-3">
                    <Col md={3} sm={6}>
                        <PrefCard label="Currency" value="₹ INR" />
                    </Col>
                    <Col md={3} sm={6}>
                        <PrefCard label="Language" value="English" />
                    </Col>
                    <Col md={3} sm={6}>
                        <PrefCard label="Theme" value="Light Mode" />
                    </Col>
                    <Col md={3} sm={6}>
                        <PrefCard label="Notifications" value="Enabled" />
                    </Col>
                </Row>
            </Panel>
        </Col>
    </Row>
);

/* =========================================================
   2. ACCOUNTS TAB
   ========================================================= */
const AccountsTab = () => (
    <Row className="g-4">
        <Col lg={12}>
            <Panel title="Linked Accounts" icon={<FaUniversity />}>
                <Row className="g-3">
                    <Col lg={4} md={6}>
                        <AccountCard
                            bank="HDFC Bank"
                            type="Savings Account"
                            number="•••• 4821"
                            balance="₹68,420"
                            color="#0d6efd"
                            icon={<FaUniversity />}
                        />
                    </Col>
                    <Col lg={4} md={6}>
                        <AccountCard
                            bank="ICICI Bank"
                            type="Current Account"
                            number="•••• 9034"
                            balance="₹32,180"
                            color="#6610f2"
                            icon={<FaUniversity />}
                        />
                    </Col>
                    <Col lg={4} md={6}>
                        <AccountCard
                            bank="SBI Credit Card"
                            type="Credit Card"
                            number="•••• 7712"
                            balance="₹24,250"
                            color="#e11d48"
                            icon={<FaCreditCard />}
                            negative
                        />
                    </Col>
                    <Col lg={4} md={6}>
                        <AccountCard
                            bank="Paytm Wallet"
                            type="Digital Wallet"
                            number="•••• 5588"
                            balance="₹2,400"
                            color="#10b981"
                            icon={<FaMobileAlt />}
                        />
                    </Col>
                    <Col lg={4} md={6}>
                        <AccountCard
                            bank="Zerodha"
                            type="Investment Account"
                            number="•••• 0092"
                            balance="₹1,45,600"
                            color="#f59e0b"
                            icon={<FaPiggyBank />}
                        />
                    </Col>
                    <Col lg={4} md={6}>
                        <AddAccountCard />
                    </Col>
                </Row>
            </Panel>
        </Col>

        {/* Account summary table */}
        <Col lg={12}>
            <Panel title="Account Summary" icon={<FaWallet />}>
                <Table borderless responsive className="profile-table">
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Type</th>
                            <th className="text-end">Balance</th>
                            <th className="text-end">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>HDFC Savings</strong></td>
                            <td>Bank</td>
                            <td className="text-end">₹68,420</td>
                            <td className="text-end text-success">+₹5,200</td>
                        </tr>
                        <tr>
                            <td><strong>ICICI Current</strong></td>
                            <td>Bank</td>
                            <td className="text-end">₹32,180</td>
                            <td className="text-end text-success">+₹2,100</td>
                        </tr>
                        <tr>
                            <td><strong>SBI Credit Card</strong></td>
                            <td>Credit</td>
                            <td className="text-end text-danger">-₹24,250</td>
                            <td className="text-end text-danger">-₹3,400</td>
                        </tr>
                        <tr>
                            <td><strong>Zerodha</strong></td>
                            <td>Investment</td>
                            <td className="text-end">₹1,45,600</td>
                            <td className="text-end text-success">+₹12,400</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        </Col>
    </Row>
);

/* =========================================================
   3. GOALS TAB
   ========================================================= */
const GoalsTab = () => (
    <Row className="g-4">
        <Col lg={12}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h3 className="panel-title-inline">Active Savings Goals</h3>
                    <p className="panel-desc-inline">Track your progress toward financial milestones.</p>
                </div>
                <Button variant="primary" className="settings-primary-btn">
                    + New Goal
                </Button>
            </div>

            <Row className="g-3">
                <Col lg={4} md={6}>
                    <GoalCard
                        emoji="🏖️"
                        name="Goa Trip"
                        current={41000}
                        target={50000}
                        deadline="Dec 2025"
                        color="#0d6efd"
                    />
                </Col>
                <Col lg={4} md={6}>
                    <GoalCard
                        emoji="📱"
                        name="New iPhone"
                        current={36000}
                        target={80000}
                        deadline="Mar 2026"
                        color="#6610f2"
                    />
                </Col>
                <Col lg={4} md={6}>
                    <GoalCard
                        emoji="🏠"
                        name="Home Down Payment"
                        current={280000}
                        target={1500000}
                        deadline="Dec 2027"
                        color="#10b981"
                    />
                </Col>
                <Col lg={4} md={6}>
                    <GoalCard
                        emoji="🚗"
                        name="New Car"
                        current={95000}
                        target={600000}
                        deadline="Jun 2026"
                        color="#f59e0b"
                    />
                </Col>
                <Col lg={4} md={6}>
                    <GoalCard
                        emoji="🛡️"
                        name="Emergency Fund"
                        current={180000}
                        target={300000}
                        deadline="Aug 2026"
                        color="#e11d48"
                    />
                </Col>
                <Col lg={4} md={6}>
                    <GoalCard
                        emoji="🎓"
                        name="MBA Fund"
                        current={220000}
                        target={800000}
                        deadline="Jan 2028"
                        color="#06b6d4"
                    />
                </Col>
            </Row>
        </Col>
    </Row>
);

/* =========================================================
   4. ACHIEVEMENTS TAB
   ========================================================= */
const AchievementsTab = () => (
    <Row className="g-4">
        <Col lg={12}>
            <Panel title="Your Achievements" icon={<FaTrophy />}>
                <p className="panel-desc-inline mb-4">
                    Unlock badges by hitting milestones on your financial journey.
                </p>

                <Row className="g-3">
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🔥" name="180-Day Streak" desc="Logged in 180 days straight" unlocked rarity="legendary" />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="💰" name="First ₹1L Saved" desc="Saved your first ₹1,00,000" unlocked rarity="epic" />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🎯" name="Goal Crusher" desc="Completed 5 savings goals" unlocked rarity="epic" />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="📊" name="Budget Master" desc="Stayed within budget 3 months" unlocked rarity="rare" />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🌟" name="Top 5% Saver" desc="Top 5% of all savers" unlocked rarity="legendary" />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="💎" name="Diamond Hands" desc="Held investments 2+ years" unlocked rarity="rare" />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🏆" name="Net Worth ₹5L" desc="Crossed ₹5,00,000 net worth" locked />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🚀" name="FIRE Starter" desc="Save 40%+ for 6 months" locked />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🧠" name="Smart Investor" desc="Made 50+ investments" locked />
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <BadgeCard emoji="🌍" name="Globetrotter" desc="Tracked travel in 5 countries" locked />
                    </Col>
                </Row>
            </Panel>
        </Col>

        {/* Progress toward next badge */}
        <Col lg={12}>
            <Panel title="Progress to Next Badge" icon={<FaStar />}>
                <div className="achievement-progress">
                    <div className="achievement-progress-icon">🏆</div>
                    <div className="achievement-progress-info">
                        <div className="d-flex justify-content-between mb-1">
                            <span className="fw-bold">Net Worth ₹5L</span>
                            <span className="text-muted">₹4,20,000 / ₹5,00,000</span>
                        </div>
                        <ProgressBar now={84} className="achievement-bar" />
                        <small className="text-muted">₹80,000 to go — you're 84% there!</small>
                    </div>
                </div>
            </Panel>
        </Col>
    </Row>
);

/* =========================================================
   5. ACTIVITY TAB
   ========================================================= */
const ActivityTab = () => (
    <Row className="g-4">
        <Col lg={12}>
            <Panel title="Recent Activity" icon={<FaHistory />}>
                <div className="activity-list">
                    <ActivityItem
                        icon={<FaArrowUp />}
                        type="income"
                        title="Salary Credited"
                        desc="HDFC Savings · Monthly salary"
                        amount="+₹65,000"
                        time="2 hours ago"
                    />
                    <ActivityItem
                        icon={<FaArrowDown />}
                        type="expense"
                        title="Zomato Order"
                        desc="Food & Dining · Paid via UPI"
                        amount="-₹420"
                        time="5 hours ago"
                    />
                    <ActivityItem
                        icon={<FaBullseye />}
                        type="goal"
                        title="Goal Contribution"
                        desc="Goa Trip · Auto-save"
                        amount="-₹5,000"
                        time="Yesterday"
                    />
                    <ActivityItem
                        icon={<FaArrowDown />}
                        type="expense"
                        title="BigBasket"
                        desc="Groceries · Paid via Card"
                        amount="-₹1,850"
                        time="Yesterday"
                    />
                    <ActivityItem
                        icon={<FaUniversity />}
                        type="account"
                        title="Bank Sync"
                        desc="ICICI Bank · 12 new transactions"
                        amount=""
                        time="2 days ago"
                    />
                    <ActivityItem
                        icon={<FaArrowDown />}
                        type="expense"
                        title="Gym Membership"
                        desc="Health & Fitness · Monthly"
                        amount="-₹1,500"
                        time="3 days ago"
                    />
                    <ActivityItem
                        icon={<FaTrophy />}
                        type="achievement"
                        title="Badge Unlocked!"
                        desc="Top 5% Saver · Legendary"
                        amount=""
                        time="5 days ago"
                    />
                </div>
            </Panel>
        </Col>

        <Col lg={12}>
            <Panel title="Monthly Summary" icon={<FaRupeeSign />}>
                <Row className="g-3">
                    <Col md={3} sm={6}>
                        <SummaryCard label="Income" value="₹78,500" color="green" />
                    </Col>
                    <Col md={3} sm={6}>
                        <SummaryCard label="Expenses" value="₹42,300" color="red" />
                    </Col>
                    <Col md={3} sm={6}>
                        <SummaryCard label="Savings" value="₹36,200" color="blue" />
                    </Col>
                    <Col md={3} sm={6}>
                        <SummaryCard label="Investments" value="₹15,000" color="purple" />
                    </Col>
                </Row>
            </Panel>
        </Col>
    </Row>
);

/* =========================================================
   6. DOCUMENTS TAB
   ========================================================= */
const DocumentsTab = () => (
    <Row className="g-4">
        <Col lg={6}>
            <Panel title="KYC Documents" icon={<FaIdCard />}>
                <DocRow
                    icon={<FaIdCard />}
                    name="PAN Card"
                    number="ABCDE••••F"
                    status="verified"
                />
                <DocRow
                    icon={<FaIdCard />}
                    name="Aadhaar Card"
                    number="•••• •••• 4821"
                    status="verified"
                />
                <DocRow
                    icon={<FaFileAlt />}
                    name="Passport"
                    number="••••• 9012"
                    status="pending"
                />
                <Button variant="outline-primary" size="sm" className="mt-3">
                    <FaUpload className="me-2" /> Upload Document
                </Button>
            </Panel>
        </Col>

        <Col lg={6}>
            <Panel title="Financial Documents" icon={<FaFileAlt />}>
                <DocRow
                    icon={<FaFileAlt />}
                    name="Tax Returns FY 2023-24"
                    number="1.2 MB · PDF"
                    status="verified"
                    downloadable
                />
                <DocRow
                    icon={<FaFileAlt />}
                    name="Salary Slip - Sep 2025"
                    number="480 KB · PDF"
                    status="verified"
                    downloadable
                />
                <DocRow
                    icon={<FaFileAlt />}
                    name="Investment Statement"
                    number="860 KB · PDF"
                    status="verified"
                    downloadable
                />
                <DocRow
                    icon={<FaFileAlt />}
                    name="Bank Statement - Q2"
                    number="2.1 MB · PDF"
                    status="verified"
                    downloadable
                />
            </Panel>
        </Col>

        <Col lg={12}>
            <Panel title="Security" icon={<FaShieldAlt />}>
                <div className="security-grid">
                    <SecurityCard
                        icon={<FaKey />}
                        title="Password"
                        status="Last changed 45 days ago"
                        action="Change"
                    />
                    <SecurityCard
                        icon={<FaShieldAlt />}
                        title="Two-Factor Auth"
                        status="Enabled · Authenticator app"
                        action="Manage"
                        success
                    />
                    <SecurityCard
                        icon={<FaMobileAlt />}
                        title="Biometric Login"
                        status="Enabled on 1 device"
                        action="Manage"
                        success
                    />
                </div>
            </Panel>
        </Col>
    </Row>
);

/* =========================================================
   7. REFERRAL TAB
   ========================================================= */
const ReferralTab = () => (
    <Row className="g-4">
        <Col lg={12}>
            <div className="referral-hero">
                <div className="referral-hero-content">
                    <div className="referral-hero-icon">🎁</div>
                    <h2 className="referral-hero-title">Refer & Earn ₹500</h2>
                    <p className="referral-hero-desc">
                        Invite friends to Personal Finance. When they sign up and add their
                        first transaction, you both get ₹500 in rewards.
                    </p>

                    <div className="referral-code-box">
                        <div className="referral-code-label">Your Referral Code</div>
                        <div className="referral-code">RAHUL500</div>
                        <Button variant="light" size="sm" className="referral-copy-btn">
                            Copy Code
                        </Button>
                    </div>
                </div>
            </div>
        </Col>

        <Col lg={4} md={6}>
            <StatMiniCard
                icon={<FaUserPlus />}
                label="Total Invited"
                value="12"
                color="blue"
            />
        </Col>
        <Col lg={4} md={6}>
            <StatMiniCard
                icon={<FaCheck />}
                label="Signed Up"
                value="8"
                color="green"
            />
        </Col>
        <Col lg={4} md={6}>
            <StatMiniCard
                icon={<FaRupeeSign />}
                label="Rewards Earned"
                value="₹4,000"
                color="purple"
            />
        </Col>

        <Col lg={12}>
            <Panel title="Referral History" icon={<FaHistory />}>
                <Table borderless responsive className="profile-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th className="text-end">Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Priya Singh</td>
                            <td><Badge bg="success">Completed</Badge></td>
                            <td>12 Sep 2025</td>
                            <td className="text-end text-success">+₹500</td>
                        </tr>
                        <tr>
                            <td>Arjun Nair</td>
                            <td><Badge bg="success">Completed</Badge></td>
                            <td>05 Sep 2025</td>
                            <td className="text-end text-success">+₹500</td>
                        </tr>
                        <tr>
                            <td>Kavya Iyer</td>
                            <td><Badge bg="warning" text="dark">Pending</Badge></td>
                            <td>28 Aug 2025</td>
                            <td className="text-end text-muted">—</td>
                        </tr>
                        <tr>
                            <td>Rohan Desai</td>
                            <td><Badge bg="success">Completed</Badge></td>
                            <td>20 Aug 2025</td>
                            <td className="text-end text-success">+₹500</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        </Col>
    </Row>
);

/* =========================================================
   REUSABLE SUB-COMPONENTS
   ========================================================= */

const Panel = ({ title, icon, children }) => (
    <div className="profile-panel">
        {title && (
            <div className="profile-panel-head">
                {icon && <span className="profile-panel-icon">{icon}</span>}
                <h3 className="profile-panel-title">{title}</h3>
            </div>
        )}
        <div className="profile-panel-body">{children}</div>
    </div>
);

const InfoRow = ({ icon, label, value, verified, highlight }) => (
    <div className="info-row">
        <div className="info-label">
            {icon && <span className="info-icon">{icon}</span>}
            {label}
        </div>
        <div className={`info-value ${highlight ? "highlight" : ""}`}>
            {value}
            {verified && (
                <span className="info-verified" title="Verified">
                    <FaCheckCircle />
                </span>
            )}
        </div>
    </div>
);

const StatCard = ({ icon, label, value, change, trend, color, hidden }) => (
    <div className={`stat-card stat-${color}`}>
        <div className="stat-card-head">
            <span className="stat-card-icon">{icon}</span>
            <span className={`stat-card-change ${trend}`}>{change}</span>
        </div>
        <div className="stat-card-value">{hidden ? "••••••" : value}</div>
        <div className="stat-card-label">{label}</div>
    </div>
);

const PrefCard = ({ label, value }) => (
    <div className="pref-card">
        <div className="pref-card-label">{label}</div>
        <div className="pref-card-value">{value}</div>
    </div>
);

const AccountCard = ({ bank, type, number, balance, color, icon, negative }) => (
    <div className="account-card" style={{ "--accent": color }}>
        <div className="account-card-head">
            <span className="account-card-icon">{icon}</span>
            <div className="account-card-titles">
                <div className="account-card-bank">{bank}</div>
                <div className="account-card-type">{type}</div>
            </div>
        </div>
        <div className="account-card-number">{number}</div>
        <div className={`account-card-balance ${negative ? "negative" : ""}`}>
            {balance}
        </div>
    </div>
);

const AddAccountCard = () => (
    <button type="button" className="add-account-card">
        <span className="add-account-plus">+</span>
        <span className="add-account-text">Add New Account</span>
        <span className="add-account-desc">Connect a bank, card, or wallet</span>
    </button>
);

const GoalCard = ({ emoji, name, current, target, deadline, color }) => {
    const pct = Math.round((current / target) * 100);
    return (
        <div className="goal-card" style={{ "--accent": color }}>
            <div className="goal-card-head">
                <span className="goal-card-emoji">{emoji}</span>
                <span className="goal-card-pct">{pct}%</span>
            </div>
            <div className="goal-card-name">{name}</div>
            <div className="goal-card-amounts">
                ₹{current.toLocaleString("en-IN")} /{" "}
                <span className="text-muted">₹{target.toLocaleString("en-IN")}</span>
            </div>
            <ProgressBar now={pct} className="goal-card-bar" />
            <div className="goal-card-deadline">
                <FaCalendarAlt /> Target: {deadline}
            </div>
        </div>
    );
};

const BadgeCard = ({ emoji, name, desc, unlocked, locked, rarity }) => (
    <div className={`badge-card ${unlocked ? "unlocked" : ""} ${locked ? "locked" : ""}`}>
        {unlocked && <span className={`badge-rarity rarity-${rarity}`}>{rarity}</span>}
        <div className="badge-card-emoji">{locked ? "🔒" : emoji}</div>
        <div className="badge-card-name">{name}</div>
        <div className="badge-card-desc">{desc}</div>
    </div>
);

const ActivityItem = ({ icon, type, title, desc, amount, time }) => (
    <div className="activity-item">
        <div className={`activity-icon activity-icon-${type}`}>{icon}</div>
        <div className="activity-info">
            <div className="activity-title">{title}</div>
            <div className="activity-desc">{desc}</div>
        </div>
        <div className="activity-right">
            {amount && (
                <div className={`activity-amount ${amount.startsWith("+") ? "positive" : "negative"}`}>
                    {amount}
                </div>
            )}
            <div className="activity-time">{time}</div>
        </div>
    </div>
);

const SummaryCard = ({ label, value, color }) => (
    <div className={`summary-card summary-${color}`}>
        <div className="summary-card-value">{value}</div>
        <div className="summary-card-label">{label}</div>
    </div>
);

const DocRow = ({ icon, name, number, status, downloadable }) => (
    <div className="doc-row">
        <span className="doc-icon">{icon}</span>
        <div className="doc-info">
            <div className="doc-name">{name}</div>
            <div className="doc-number">{number}</div>
        </div>
        <div className="doc-actions">
            {status === "verified" && <Badge bg="success">Verified</Badge>}
            {status === "pending" && <Badge bg="warning" text="dark">Pending</Badge>}
            {downloadable && (
                <Button variant="link" size="sm" className="doc-download">
                    <FaDownload />
                </Button>
            )}
        </div>
    </div>
);

const SecurityCard = ({ icon, title, status, action, success }) => (
    <div className="security-card">
        <div className="security-icon">{icon}</div>
        <div className="security-info">
            <div className="security-title">{title}</div>
            <div className={`security-status ${success ? "success" : ""}`}>{status}</div>
        </div>
        <Button variant="outline-primary" size="sm">{action}</Button>
    </div>
);

const StatMiniCard = ({ icon, label, value, color }) => (
    <div className={`stat-mini stat-mini-${color}`}>
        <span className="stat-mini-icon">{icon}</span>
        <div>
            <div className="stat-mini-value">{value}</div>
            <div className="stat-mini-label">{label}</div>
        </div>
    </div>
);

/* =========================================================
   EDIT PROFILE MODAL
   ========================================================= */
const EditProfileModal = ({ show, onHide }) => (
    <Modal show={show} onHide={onHide} centered size="lg" className="edit-profile-modal">
        <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Row className="g-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control defaultValue="Rahul Mehta" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue="rahul@example.com" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control defaultValue="+91 98765 43210" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" defaultValue="1995-08-15" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select defaultValue="male">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                <option value="na">Prefer not to say</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control defaultValue="Software Engineer" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control defaultValue="Bengaluru, Karnataka, India" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label>About</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                defaultValue="Passionate software engineer with a love for personal finance and investing."
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cancel</Button>
            <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
    </Modal>
);

export default Profile;