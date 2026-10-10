import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Badge,
    Table,
    ProgressBar,
    Modal,
} from "react-bootstrap";
import {
    FaPalette,
    FaGlobe,
    FaBell,
    FaLock,
    FaWallet,
    FaChartPie,
    FaUniversalAccess,
    FaPlug,
    FaDatabase,
    FaUserCircle,
    FaExclamationTriangle,
    FaSun,
    FaMoon,
    FaDesktop,
    FaMobileAlt,
    FaLaptop,
    FaKey,
    FaFingerprint,
    FaShieldAlt,
    FaEye,
    FaEyeSlash,
    FaDownload,
    FaUpload,
    FaTrash,
    FaSync,
    FaGoogle,
    FaUniversity,
    FaCalendarAlt,
    FaFileExcel,
    FaCog,
} from "react-icons/fa";
import "./Settings.css";

/* =========================================================
   MAIN SETTINGS COMPONENT
   ========================================================= */
const Settings = () => {
    const [activeTab, setActiveTab] = useState("appearance");

    const tabs = [
        { id: "appearance",    label: "Appearance",           icon: <FaPalette /> },
        { id: "language",      label: "Language & Region",    icon: <FaGlobe /> },
        { id: "notifications", label: "Notifications",        icon: <FaBell /> },
        { id: "security",      label: "Security & Privacy",   icon: <FaLock /> },
        { id: "finance",       label: "Finance Preferences",  icon: <FaWallet /> },
        { id: "dashboard",     label: "Dashboard & Reports",  icon: <FaChartPie /> },
        { id: "accessibility", label: "Accessibility",        icon: <FaUniversalAccess /> },
        { id: "integrations",  label: "Integrations",         icon: <FaPlug /> },
        { id: "data",          label: "Data & Backup",        icon: <FaDatabase /> },
        { id: "account",       label: "Account",              icon: <FaUserCircle /> },
        { id: "danger",        label: "Danger Zone",          icon: <FaExclamationTriangle /> },
    ];

    const renderSection = () => {
        switch (activeTab) {
            case "appearance":    return <AppearanceSection />;
            case "language":      return <LanguageSection />;
            case "notifications": return <NotificationsSection />;
            case "security":      return <SecuritySection />;
            case "finance":       return <FinanceSection />;
            case "dashboard":     return <DashboardSection />;
            case "accessibility": return <AccessibilitySection />;
            case "integrations":  return <IntegrationsSection />;
            case "data":          return <DataSection />;
            case "account":       return <AccountSection />;
            case "danger":        return <DangerZoneSection />;
            default:              return null;
        }
    };

    return (
        <div className="settings-page">
            <Container fluid className="settings-container">
                {/* ================= HEADER ================= */}
                <div className="settings-header">
                    <div>
                        <h1 className="settings-title">Settings</h1>
                        <p className="settings-subtitle">
                            Personalize your experience, secure your account, and manage your data.
                        </p>
                    </div>
                    <Badge bg="warning" text="dark" className="settings-beta-badge">
                        🚧 UI Preview — Features Coming Soon
                    </Badge>
                </div>

                <Row className="g-4">
                    {/* ================= SIDEBAR ================= */}
                    <Col lg={3} md={4}>
                        <nav className="settings-sidebar" aria-label="Settings sections">
                            {tabs.map((t) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    className={`settings-tab ${
                                        activeTab === t.id ? "active" : ""
                                    } ${t.id === "danger" ? "settings-tab-danger" : ""}`}
                                    onClick={() => setActiveTab(t.id)}
                                >
                                    <span className="settings-tab-icon">{t.icon}</span>
                                    <span className="settings-tab-label">{t.label}</span>
                                </button>
                            ))}
                        </nav>
                    </Col>

                    {/* ================= CONTENT ================= */}
                    <Col lg={9} md={8}>
                        <div className="settings-content">{renderSection()}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

/* =========================================================
   1. APPEARANCE
   ========================================================= */
const AppearanceSection = () => (
    <Section title="Appearance" desc="Customize how Personal Finance looks and feels.">
        {/* Theme */}
        <SettingRow title="Theme Mode" desc="Choose between light, dark, or system default.">
            <div className="theme-picker">
                <button type="button" className="theme-card active">
                    <FaSun className="theme-icon" />
                    <span>Light</span>
                </button>
                <button type="button" className="theme-card">
                    <FaMoon className="theme-icon" />
                    <span>Dark</span>
                </button>
                <button type="button" className="theme-card">
                    <FaDesktop className="theme-icon" />
                    <span>System</span>
                </button>
            </div>
        </SettingRow>

        {/* Accent */}
        <SettingRow title="Accent Color" desc="Used for buttons, links, and highlights.">
            <div className="accent-picker">
                <span className="accent-dot active" style={{ background: "#0d6efd" }} />
                <span className="accent-dot" style={{ background: "#6610f2" }} />
                <span className="accent-dot" style={{ background: "#10b981" }} />
                <span className="accent-dot" style={{ background: "#e11d48" }} />
                <span className="accent-dot" style={{ background: "#f59e0b" }} />
                <span className="accent-dot" style={{ background: "#06b6d4" }} />
            </div>
        </SettingRow>

        {/* Font size */}
        <OptionRow
            label="Font Size"
            desc="Affects all text across the app."
            options={["Small", "Medium", "Large", "XL"]}
            active="Medium"
        />

        {/* Font family */}
        <SettingRow title="Font Family" desc="Choose your preferred reading font.">
            <Form.Select className="settings-select" defaultValue="inter">
                <option value="inter">Inter (Default)</option>
                <option value="poppins">Poppins</option>
                <option value="roboto">Roboto</option>
                <option value="system">System Default</option>
            </Form.Select>
        </SettingRow>

        {/* Density */}
        <OptionRow
            label="Density"
            desc="How much data fits on the screen."
            options={["Compact", "Cozy", "Comfortable"]}
            active="Cozy"
        />

        {/* Corner radius */}
        <OptionRow
            label="Corner Radius"
            desc="Shape of cards, buttons, and inputs."
            options={["Sharp", "Rounded", "Pill"]}
            active="Rounded"
        />

        {/* Sidebar style */}
        <OptionRow
            label="Sidebar Style"
            desc="How the navigation sidebar appears."
            options={["Expanded", "Collapsed", "Icons Only"]}
            active="Expanded"
        />

        {/* Toggles */}
        <ToggleRow title="Reduce Motion" desc="Minimize animations across the app." />
        <ToggleRow title="High Contrast Mode" desc="Boost contrast for better visibility." />
        <ToggleRow title="Compact Cards" desc="Show less whitespace inside cards." />
    </Section>
);

/* =========================================================
   2. LANGUAGE & REGION
   ========================================================= */
const LanguageSection = () => (
    <Section title="Language & Region" desc="Set your language, currency, and format preferences.">
        <SettingRow title="App Language" desc="Interface language across the app.">
            <Form.Select className="settings-select" defaultValue="en">
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="bn">বাংলা (Bengali)</option>
                <option value="gu">ગુજરાતી (Gujarati)</option>
            </Form.Select>
        </SettingRow>

        <SettingRow title="Default Currency" desc="Used for all accounts and reports.">
            <Form.Select className="settings-select" defaultValue="INR">
                <option value="INR">₹ Indian Rupee (INR)</option>
                <option value="USD">$ US Dollar (USD)</option>
                <option value="EUR">€ Euro (EUR)</option>
                <option value="GBP">£ British Pound (GBP)</option>
                <option value="AED">د.إ UAE Dirham (AED)</option>
                <option value="JPY">¥ Japanese Yen (JPY)</option>
            </Form.Select>
        </SettingRow>

        <SettingRow title="Number Format" desc="How large numbers are grouped.">
            <Form.Select className="settings-select" defaultValue="indian">
                <option value="indian">Indian — 1,00,000</option>
                <option value="western">Western — 100,000</option>
            </Form.Select>
        </SettingRow>

        <SettingRow title="Date Format" desc="How dates appear across the app.">
            <Form.Select className="settings-select" defaultValue="dd-mm-yyyy">
                <option value="dd-mm-yyyy">DD/MM/YYYY</option>
                <option value="mm-dd-yyyy">MM/DD/YYYY</option>
                <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </Form.Select>
        </SettingRow>

        <SettingRow title="Time Zone" desc="Used for reminders and reports.">
            <Form.Select className="settings-select" defaultValue="auto">
                <option value="auto">Auto-detect (IST)</option>
                <option value="ist">Asia/Kolkata (IST)</option>
                <option value="utc">UTC</option>
                <option value="est">America/New_York (EST)</option>
            </Form.Select>
        </SettingRow>

        <OptionRow
            label="First Day of Week"
            options={["Sunday", "Monday"]}
            active="Monday"
        />

        <OptionRow
            label="Financial Year Starts"
            desc="Used for yearly reports and tax summaries."
            options={["April", "January"]}
            active="April"
        />
    </Section>
);

/* =========================================================
   3. NOTIFICATIONS
   ========================================================= */
const NotificationsSection = () => (
    <Section title="Notifications" desc="Control what alerts you receive and where.">
        <ToggleRow title="Bill Reminders" desc="Get notified before bills are due." />
        <ToggleRow title="Budget Overspend Alerts" desc="Alert when you cross a budget limit." />
        <ToggleRow title="Large Transaction Alerts" desc="Notify for transactions above a threshold." />
        <ToggleRow title="Goal Milestones" desc="Celebrate when you hit savings milestones." />
        <ToggleRow title="Recurring Transaction Reminders" desc="Reminders for scheduled payments." />
        <ToggleRow title="Weekly Summary Email" desc="A weekly recap of your spending." />
        <ToggleRow title="Monthly Report Email" desc="Detailed monthly income & expense report." />
        <ToggleRow title="Product Updates" desc="News about new features and improvements." />
        <ToggleRow title="Marketing & Promotions" desc="Offers, tips, and partner deals." />

        <Divider label="Delivery Channels" />

        <ToggleRow title="Push Notifications" desc="In-browser and mobile push alerts." />
        <ToggleRow title="Email Notifications" desc="Alerts sent to your registered email." />
        <ToggleRow title="SMS Notifications" desc="Text alerts to your phone number." />
        <ToggleRow title="In-App Notifications" desc="Bell icon alerts inside the app." />

        <Divider label="Advanced" />

        <SettingRow title="Bill Reminder Days" desc="How many days before a due date to alert.">
            <Form.Select className="settings-select" defaultValue="3">
                <option value="1">1 day before</option>
                <option value="3">3 days before</option>
                <option value="7">7 days before</option>
                <option value="14">14 days before</option>
            </Form.Select>
        </SettingRow>

        <SettingRow title="Large Transaction Threshold" desc="Alert for transactions above this amount.">
            <Form.Control type="number" defaultValue="10000" className="settings-input" />
        </SettingRow>

        <SettingRow title="Quiet Hours" desc="Pause notifications during these hours.">
            <div className="time-range">
                <Form.Control type="time" defaultValue="22:00" className="settings-time" />
                <span>to</span>
                <Form.Control type="time" defaultValue="07:00" className="settings-time" />
            </div>
        </SettingRow>
    </Section>
);

/* =========================================================
   4. SECURITY & PRIVACY
   ========================================================= */
const SecuritySection = () => (
    <Section title="Security & Privacy" desc="Protect your account and personal financial data.">
        {/* Password */}
        <Panel title="Change Password">
            <Form className="pwd-form">
                <Form.Group className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter current password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Min 8 characters" />
                    <Form.Text className="text-muted">
                        Use 8+ characters with a mix of letters, numbers & symbols.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat new password" />
                </Form.Group>
                <Button className="settings-primary-btn">Update Password</Button>
            </Form>
        </Panel>

        {/* 2FA */}
        <ToggleRow title="Two-Factor Authentication (2FA)" desc="Extra layer of security using OTP or authenticator app." />
        <ToggleRow title="App Lock" desc="Require PIN or biometric to open the app." />
        <ToggleRow title="Hide Balances by Default" desc="Show dots instead of amounts until tapped." />
        <ToggleRow title="Require Password for Sensitive Actions" desc="Ask for password before deleting or exporting." />
        <ToggleRow title="Login Alerts" desc="Notify me when a new device signs in." />

        <OptionRow
            label="Auto-Lock After"
            options={["1 min", "5 min", "15 min", "Never"]}
            active="5 min"
        />

        <Divider label="Active Sessions" />

        <Panel>
            <SessionRow
                device="Windows · Chrome"
                meta="Mumbai, India · 2 minutes ago"
                current
            />
            <SessionRow
                device="Android · App"
                meta="Pune, India · 3 hours ago"
            />
            <SessionRow
                device="MacBook · Safari"
                meta="Bengaluru, India · Yesterday"
            />
            <div className="session-actions">
                <Button variant="outline-danger" size="sm">
                    <FaTrash /> Sign Out From All Other Devices
                </Button>
            </div>
        </Panel>

        <Divider label="Login History" />

        <Panel>
            <Table borderless responsive className="settings-table">
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FaLaptop className="me-2" /> Windows · Chrome</td>
                        <td>Mumbai, IN</td>
                        <td>103.xx.xx.12</td>
                        <td>2 min ago</td>
                    </tr>
                    <tr>
                        <td><FaMobileAlt className="me-2" /> Android · App</td>
                        <td>Pune, IN</td>
                        <td>49.xx.xx.88</td>
                        <td>3 hrs ago</td>
                    </tr>
                    <tr>
                        <td><FaLaptop className="me-2" /> MacBook · Safari</td>
                        <td>Bengaluru, IN</td>
                        <td>157.xx.xx.45</td>
                        <td>Yesterday</td>
                    </tr>
                </tbody>
            </Table>
        </Panel>
    </Section>
);

/* =========================================================
   5. FINANCE PREFERENCES
   ========================================================= */
const FinanceSection = () => (
    <Section title="Finance Preferences" desc="Configure how your money is tracked and organized.">
        <SettingRow title="Default Account" desc="The account used for new transactions.">
            <Form.Select className="settings-select" defaultValue="savings">
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
                <option value="credit">Credit Card</option>
                <option value="cash">Cash Wallet</option>
            </Form.Select>
        </SettingRow>

        <OptionRow
            label="Budget Cycle"
            desc="How often your budgets reset."
            options={["Weekly", "Monthly", "Custom"]}
            active="Monthly"
        />

        <ToggleRow title="Round-Up Savings" desc="Round up each transaction and save the difference." />
        <ToggleRow title="Auto-Categorization" desc="Automatically assign categories based on rules." />
        <ToggleRow title="Show Paise" desc="Display decimals in amounts (₹1,250.50)." />

        <Divider label="Categories" />

        <Panel>
            <CategoryRow name="Food & Dining" count={42} color="#0d6efd" />
            <CategoryRow name="Transport" count={18} color="#6610f2" />
            <CategoryRow name="Shopping" count={27} color="#e11d48" />
            <CategoryRow name="Bills & Utilities" count={12} color="#10b981" />
            <Button variant="outline-primary" size="sm" className="mt-3">
                + Add New Category
            </Button>
        </Panel>

        <Divider label="Tags" />

        <Panel>
            <div className="tag-list">
                <Badge bg="light" text="dark" className="tag-chip">#work</Badge>
                <Badge bg="light" text="dark" className="tag-chip">#personal</Badge>
                <Badge bg="light" text="dark" className="tag-chip">#family</Badge>
                <Badge bg="light" text="dark" className="tag-chip">#travel</Badge>
                <Badge bg="light" text="dark" className="tag-chip">#emergency</Badge>
                <Button variant="outline-primary" size="sm">+ Add Tag</Button>
            </div>
        </Panel>

        <Divider label="Recurring Transactions" />

        <Panel>
            <Table borderless responsive className="settings-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Frequency</th>
                        <th>Next Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Netflix</td><td>₹649</td><td>Monthly</td><td>5 Oct 2025</td></tr>
                    <tr><td>Rent</td><td>₹12,000</td><td>Monthly</td><td>1 Oct 2025</td></tr>
                    <tr><td>Gym</td><td>₹1,500</td><td>Monthly</td><td>10 Oct 2025</td></tr>
                </tbody>
            </Table>
        </Panel>
    </Section>
);

/* =========================================================
   6. DASHBOARD & REPORTS
   ========================================================= */
const DashboardSection = () => (
    <Section title="Dashboard & Reports" desc="Control what you see first and how data is visualized.">
        <SettingRow title="Default Landing Page" desc="Where the app opens after login.">
            <Form.Select className="settings-select" defaultValue="dashboard">
                <option value="dashboard">Dashboard</option>
                <option value="transactions">Transactions</option>
                <option value="reports">Reports</option>
                <option value="budgets">Budgets</option>
            </Form.Select>
        </SettingRow>

        <OptionRow
            label="Default Chart Type"
            desc="Preferred visualization for reports."
            options={["Bar", "Line", "Pie", "Donut"]}
            active="Bar"
        />

        <OptionRow
            label="Report Frequency"
            desc="How often you get report emails."
            options={["Weekly", "Monthly", "Quarterly"]}
            active="Monthly"
        />

        <Divider label="Dashboard Widgets" />

        <ToggleRow title="Total Balance Card" desc="Show current net worth at the top." />
        <ToggleRow title="Monthly Spending Chart" desc="A quick trend of this month's spend." />
        <ToggleRow title="Budget Progress Bars" desc="Progress of each active budget." />
        <ToggleRow title="Recent Transactions" desc="Latest 5-10 transactions." />
        <ToggleRow title="Savings Goals Widget" desc="Progress on active savings goals." />
        <ToggleRow title="Upcoming Bills" desc="Bills due in the next 7 days." />
        <ToggleRow title="Income vs Expense Chart" desc="Monthly comparison chart." />
        <ToggleRow title="Category Breakdown" desc="Pie chart of top spending categories." />
    </Section>
);

/* =========================================================
   7. ACCESSIBILITY
   ========================================================= */
const AccessibilitySection = () => (
    <Section title="Accessibility" desc="Make the app comfortable for everyone.">
        <ToggleRow title="High Contrast Mode" desc="Boost text and border contrast." />
        <ToggleRow title="Screen Reader Hints" desc="Extra labels for assistive tech." />
        <ToggleRow title="Color-Blind Friendly Palette" desc="Use a color-safe chart palette." />
        <ToggleRow title="Text-to-Speech for Balances" desc="Read amounts aloud on hover." />
        <ToggleRow title="Larger Touch Targets" desc="Increase tap area on buttons." />
        <ToggleRow title="Underline All Links" desc="Help distinguish links from plain text." />

        <Divider label="Keyboard Navigation" />

        <ToggleRow title="Enable Keyboard Shortcuts" desc="Navigate the app using only your keyboard." />

        <Panel>
            <Table borderless responsive className="settings-table">
                <thead>
                    <tr><th>Shortcut</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td><kbd>Ctrl</kbd> + <kbd>K</kbd></td><td>Open search</td></tr>
                    <tr><td><kbd>Ctrl</kbd> + <kbd>N</kbd></td><td>Add transaction</td></tr>
                    <tr><td><kbd>Ctrl</kbd> + <kbd>B</kbd></td><td>Open budgets</td></tr>
                    <tr><td><kbd>Ctrl</kbd> + <kbd>R</kbd></td><td>Open reports</td></tr>
                    <tr><td><kbd>Esc</kbd></td><td>Close modal / dialog</td></tr>
                </tbody>
            </Table>
        </Panel>
    </Section>
);

/* =========================================================
   8. INTEGRATIONS
   ========================================================= */
const IntegrationsSection = () => (
    <Section title="Integrations" desc="Connect your favorite tools and services.">
        <IntegrationCard
            icon={<FaUniversity />}
            name="Bank Accounts"
            desc="Auto-sync transactions from your bank."
            status="2 connected"
            statusType="success"
        />
        <IntegrationCard
            icon={<FaMobileAlt />}
            name="UPI & Payment Apps"
            desc="Import from Google Pay, PhonePe, Paytm."
            status="Not connected"
            statusType="muted"
        />
        <IntegrationCard
            icon={<FaFileExcel />}
            name="Google Sheets"
            desc="Sync your data to a spreadsheet automatically."
            status="Connected"
            statusType="success"
        />
        <IntegrationCard
            icon={<FaCalendarAlt />}
            name="Google Calendar"
            desc="Add bill reminders to your calendar."
            status="Not connected"
            statusType="muted"
        />
        <IntegrationCard
            icon={<FaGoogle />}
            name="Gmail Receipt Import"
            desc="Auto-scan receipts from Gmail inbox."
            status="Beta"
            statusType="warning"
        />
        <IntegrationCard
            icon={<FaPlug />}
            name="Zapier / API Access"
            desc="Connect with 5,000+ apps via API."
            status="Upgrade to Pro"
            statusType="primary"
        />
    </Section>
);

/* =========================================================
   9. DATA & BACKUP
   ========================================================= */
const DataSection = () => (
    <Section title="Data & Backup" desc="Keep your data safe and portable.">
        <ToggleRow title="Auto-Backup" desc="Automatically back up your data to the cloud." />

        <SettingRow title="Backup Frequency" desc="How often backups run.">
            <Form.Select className="settings-select" defaultValue="daily">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
            </Form.Select>
        </SettingRow>

        <SettingRow title="Last Backup" desc="Your most recent backup.">
            <div className="text-end">
                <div className="fw-bold">Today, 3:42 PM</div>
                <small className="text-muted">2.4 MB · Google Drive</small>
            </div>
        </SettingRow>

        <Divider label="Export Data" />

        <div className="export-grid">
            <ExportCard label="CSV" desc="Spreadsheet-friendly" icon={<FaFileExcel />} />
            <ExportCard label="JSON" desc="Full raw data" icon={<FaDatabase />} />
            <ExportCard label="PDF" desc="Formatted report" icon={<FaDownload />} />
            <ExportCard label="Excel" desc="Advanced workbook" icon={<FaFileExcel />} />
        </div>

        <Divider label="Import Data" />

        <Panel>
            <div className="import-box">
                <FaUpload className="import-icon" />
                <div>
                    <div className="fw-bold">Import from file</div>
                    <small className="text-muted">
                        Upload CSV, JSON, or Excel exported from another app.
                    </small>
                </div>
                <Button variant="outline-primary" size="sm">Choose File</Button>
            </div>
        </Panel>

        <Divider label="Storage" />

        <Panel>
            <div className="storage-row">
                <span>Storage Used</span>
                <span className="fw-bold">42 MB / 500 MB</span>
            </div>
            <ProgressBar now={8} className="storage-bar" />
            <small className="text-muted">
                Includes transactions, receipts, and backups.
            </small>
        </Panel>

        <Button variant="outline-secondary" className="w-100 mt-3">
            <FaSync className="me-2" /> Clear Cache
        </Button>
    </Section>
);

/* =========================================================
   10. ACCOUNT
   ========================================================= */
const AccountSection = () => (
    <Section title="Account" desc="Manage your profile, plan, and billing.">
        {/* Profile card */}
        <Panel>
            <div className="account-profile">
                <div className="account-avatar">R</div>
                <div className="account-info">
                    <div className="account-name">Rahul Mehta</div>
                    <div className="account-email">rahul@example.com</div>
                    <Badge bg="primary" className="mt-1">Pro Plan</Badge>
                </div>
                <Button variant="outline-primary" size="sm">Edit Profile</Button>
            </div>
        </Panel>

        <SettingRow title="Full Name" desc="Shown across the app.">
            <Form.Control defaultValue="Rahul Mehta" className="settings-input" />
        </SettingRow>

        <SettingRow title="Email Address" desc="Used for login and notifications.">
            <Form.Control defaultValue="rahul@example.com" className="settings-input" />
        </SettingRow>

        <SettingRow title="Phone Number" desc="For SMS alerts and 2FA.">
            <Form.Control defaultValue="+91 98765 43210" className="settings-input" />
        </SettingRow>

        <Divider label="Subscription" />

        <Panel>
            <div className="plan-card">
                <div>
                    <div className="plan-name">Pro Plan</div>
                    <div className="plan-price">₹149/month · billed yearly</div>
                    <div className="plan-renew">Renews on 15 Jan 2026</div>
                </div>
                <Badge bg="success">Active</Badge>
            </div>
            <div className="d-flex gap-2 mt-3">
                <Button variant="primary" size="sm">Upgrade Plan</Button>
                <Button variant="outline-secondary" size="sm">Cancel Subscription</Button>
            </div>
        </Panel>

        <Divider label="Billing History" />

        <Panel>
            <Table borderless responsive className="settings-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15 Jan 2025</td>
                        <td>Pro Plan · Yearly</td>
                        <td>₹1,788</td>
                        <td><Badge bg="success">Paid</Badge></td>
                    </tr>
                    <tr>
                        <td>15 Jan 2024</td>
                        <td>Pro Plan · Yearly</td>
                        <td>₹1,788</td>
                        <td><Badge bg="success">Paid</Badge></td>
                    </tr>
                </tbody>
            </Table>
        </Panel>

        <Divider label="Preferences" />

        <ToggleRow title="Email me product updates" desc="Stay informed about new features." />
        <ToggleRow title="Enable referral program" desc="Get rewards for inviting friends." />
        <ToggleRow title="Join beta features" desc="Try new features before release." />
    </Section>
);

/* =========================================================
   11. DANGER ZONE
   ========================================================= */
const DangerZoneSection = () => (
    <Section
        title="Danger Zone"
        desc="These actions are permanent. Please proceed with caution."
        danger
    >
        <DangerCard
            title="Deactivate Account"
            desc="Temporarily disable your account. You can reactivate anytime by logging back in."
            buttonText="Deactivate"
            variant="warning"
        />

        <DangerCard
            title="Delete All Transactions"
            desc="Permanently delete every transaction record. Your account remains active."
            buttonText="Delete All Transactions"
            variant="danger"
        />

        <DangerCard
            title="Reset All Settings"
            desc="Restore all settings to their default values. Your data is not affected."
            buttonText="Reset Settings"
            variant="outline-danger"
        />

        <DangerCard
            title="Delete Account"
            desc="Permanently delete your account and all associated data. This cannot be undone."
            buttonText="Delete My Account"
            variant="danger"
        />

        <DangerCard
            title="Sign Out From All Devices"
            desc="Log out of every device where you're currently signed in."
            buttonText="Sign Out Everywhere"
            variant="outline-danger"
        />
    </Section>
);

/* =========================================================
   REUSABLE SUB-COMPONENTS
   ========================================================= */

const Section = ({ title, desc, children, danger }) => (
    <div className={`settings-section ${danger ? "settings-section-danger" : ""}`}>
        <h2 className="settings-section-title">{title}</h2>
        <p className="settings-section-desc">{desc}</p>
        <div className="settings-section-body">{children}</div>
    </div>
);

const Panel = ({ title, children }) => (
    <div className="settings-panel">
        {title && <h3 className="settings-panel-title">{title}</h3>}
        {children}
    </div>
);

const SettingRow = ({ title, desc, children }) => (
    <div className="setting-row">
        <div className="setting-text">
            <div className="setting-title">{title}</div>
            {desc && <div className="setting-desc">{desc}</div>}
        </div>
        <div className="setting-control">{children}</div>
    </div>
);

const ToggleRow = ({ title, desc }) => (
    <div className="setting-row">
        <div className="setting-text">
            <div className="setting-title">{title}</div>
            {desc && <div className="setting-desc">{desc}</div>}
        </div>
        <Form.Check type="switch" className="setting-switch" />
    </div>
);

const OptionRow = ({ label, desc, options, active }) => (
    <div className="setting-row">
        <div className="setting-text">
            <div className="setting-title">{label}</div>
            {desc && <div className="setting-desc">{desc}</div>}
        </div>
        <div className="option-group">
            {options.map((o) => (
                <button
                    key={o}
                    type="button"
                    className={`option-btn ${active === o ? "active" : ""}`}
                >
                    {o}
                </button>
            ))}
        </div>
    </div>
);

const Divider = ({ label }) => (
    <div className="settings-divider">
        <span>{label}</span>
    </div>
);

const SessionRow = ({ device, meta, current }) => (
    <div className="session-row">
        <div>
            <div className="session-device">
                {device} {current && <Badge bg="success">This device</Badge>}
            </div>
            <div className="session-meta">{meta}</div>
        </div>
        <Button
            variant={current ? "outline-secondary" : "outline-danger"}
            size="sm"
            disabled={current}
        >
            {current ? "Current" : "Revoke"}
        </Button>
    </div>
);

const CategoryRow = ({ name, count, color }) => (
    <div className="category-row">
        <div className="category-left">
            <span className="category-dot" style={{ background: color }} />
            <span className="category-name">{name}</span>
        </div>
        <div className="category-right">
            <span className="category-count">{count} transactions</span>
            <Button variant="link" size="sm" className="category-edit">Edit</Button>
        </div>
    </div>
);

const IntegrationCard = ({ icon, name, desc, status, statusType }) => (
    <div className="integration-card">
        <div className="integration-icon">{icon}</div>
        <div className="integration-info">
            <div className="integration-name">{name}</div>
            <div className="integration-desc">{desc}</div>
        </div>
        <div className="integration-action">
            <Badge bg={statusType} className="me-2">{status}</Badge>
            <Button variant="outline-primary" size="sm">Connect</Button>
        </div>
    </div>
);

const ExportCard = ({ label, desc, icon }) => (
    <button type="button" className="export-card">
        <span className="export-icon">{icon}</span>
        <span className="export-label">{label}</span>
        <span className="export-desc">{desc}</span>
    </button>
);

const DangerCard = ({ title, desc, buttonText, variant }) => (
    <div className="danger-card">
        <div className="danger-text">
            <div className="danger-title">{title}</div>
            <div className="danger-desc">{desc}</div>
        </div>
        <Button variant={variant} size="sm">{buttonText}</Button>
    </div>
);

export default Settings;