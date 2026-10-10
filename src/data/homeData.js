/* ===== Quick features ===== */
export const features = [
    { icon: "📊", title: "Track Expenses", desc: "Monitor every rupee you spend with smart categorization and real-time updates." },
    { icon: "💰", title: "Budget Planning", desc: "Set monthly budgets and get alerts before you overspend. Stay in control." },
    { icon: "📈", title: "Smart Analytics", desc: "Beautiful charts and insights to understand where your money goes." },
    { icon: "🔔", title: "Bill Reminders", desc: "Never miss a payment again with automated reminders for all your bills." },
    { icon: "🎯", title: "Savings Goals", desc: "Set financial goals and track your progress toward them effortlessly." },
    { icon: "🔒", title: "Bank-Level Security", desc: "Your data is encrypted and protected with enterprise-grade security." },
];

/* ===== How it works ===== */
export const steps = [
    { num: "01", icon: "📝", title: "Create Your Free Account", desc: "Sign up in under 30 seconds. No credit card, no hidden charges — just your email." },
    { num: "02", icon: "🔗", title: "Add Income & Expenses", desc: "Import bank statements, scan receipts, or add transactions manually on the go." },
    { num: "03", icon: "🚀", title: "Watch Your Savings Grow", desc: "Set budgets and goals, then let smart insights guide you toward financial freedom." },
];

/* ===== Deep-dive core features ===== */
export const coreFeatures = [
    {
        id: "expenses", badge: "Expenses", icon: "📊",
        title: "Track Every Rupee — Automatically",
        desc: "Log expenses in seconds, categorize on autopilot, and see exactly where your money goes. Import from bank statements or add on the go.",
        bullets: ["Smart auto-categorization", "Receipt scanning & photo uploads", "Recurring expense detection"],
        visual: "expenses",
    },
    {
        id: "budget", badge: "Budget", icon: "💰",
        title: "Budgets That Actually Work",
        desc: "Set monthly limits per category, get alerts before overspending, and roll over unused amounts. Budgeting has never been this smooth.",
        bullets: ["Category-wise budget limits", "Real-time overspend alerts", "Rollover unused budget"],
        visual: "budget",
    },
    {
        id: "analytics", badge: "Analytics", icon: "📈",
        title: "Insights That Change Behavior",
        desc: "Beautiful charts reveal spending trends, income patterns, and savings rate. Understand your habits and improve them.",
        bullets: ["Monthly & yearly trend charts", "Category breakdowns", "Custom date-range reports"],
        visual: "analytics",
    },
    {
        id: "goals", badge: "Goals", icon: "🎯",
        title: "Save Toward What Matters",
        desc: "Set savings goals — a new phone, vacation, or emergency fund — and track progress visually with auto-allocation from your income.",
        bullets: ["Multiple concurrent goals", "Auto-save allocations", "Progress milestones & reminders"],
        visual: "goals",
    },
];

/* ===== Stats ===== */
export const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "₹120Cr+", label: "Tracked Monthly" },
    { value: "4.9★", label: "User Rating" },
    { value: "99.9%", label: "Uptime" },
];

/* ===== Pricing ===== */
export const plans = [
    {
        name: "Starter", tagline: "For individuals just getting started",
        monthly: 0, yearly: 0, badge: null,
        features: ["Unlimited expense tracking", "2 budget categories", "Basic analytics dashboard", "Email support"],
        cta: "Get Started Free", featured: false,
    },
    {
        name: "Pro", tagline: "For serious savers who want it all",
        monthly: 199, yearly: 149, badge: "Most Popular",
        features: ["Everything in Starter", "Unlimited budgets & goals", "Advanced analytics & reports", "Bill reminders & alerts", "Receipt scanning", "Priority support"],
        cta: "Start 14-Day Free Trial", featured: true,
    },
    {
        name: "Family", tagline: "For households up to 5 members",
        monthly: 349, yearly: 279, badge: null,
        features: ["Everything in Pro", "Up to 5 member accounts", "Shared budgets & goals", "Family spending dashboard", "Dedicated account manager"],
        cta: "Choose Family", featured: false,
    },
];

/* ===== Testimonials ===== */
export const testimonials = [
    { name: "Rahul Mehta", role: "Software Engineer, Bengaluru", emoji: "👨‍💻", quote: "I used to dread checking my bank balance. Now I open Personal Finance every morning like it's Instagram. Saved ₹40K in 6 months!", rating: 5 },
    { name: "Sneha Kulkarni", role: "Freelance Designer, Pune", emoji: "👩‍🎨", quote: "As a freelancer, tracking irregular income was a nightmare. This app made it effortless. The analytics section is genuinely eye-opening.", rating: 5 },
    { name: "Arjun Nair", role: "MBA Student, Mumbai", emoji: "👨‍🎓", quote: "The budget alerts saved me multiple times from impulse buying. It's like having a financial advisor in my pocket, but free.", rating: 5 },
    { name: "Priya Singh", role: "Doctor, Delhi", emoji: "👩‍⚕️", quote: "Clean UI, fast, and secure. The savings goals feature helped me save for my dream vacation in just 8 months. Highly recommended!", rating: 5 },
];

/* ===== FAQ ===== */
export const faqs = [
    { q: "Is Personal Finance really free to use?", a: "Yes. The Starter plan is free forever — no credit card required, no trial expiry. You get unlimited expense tracking and basic analytics. Upgrade to Pro only if you need advanced reports, bill reminders, and unlimited budgets." },
    { q: "How secure is my financial data?", a: "We use 256-bit AES encryption at rest and TLS 1.3 in transit — the same standards used by leading banks. We never sell your data, and you can export or permanently delete everything from your account at any time." },
    { q: "Can I import transactions from my bank?", a: "Absolutely. You can import CSV/Excel statements from any Indian bank, or connect supported banks for automatic syncing. You can also scan receipts with your camera or add transactions manually in seconds." },
    { q: "Does it work on mobile?", a: "Yes. Personal Finance is fully responsive and works beautifully on phones, tablets, and desktops. Native Android and iOS apps are also available for Pro and Family users." },
    { q: "Can I track multiple currencies?", a: "Pro and Family plans support multi-currency accounts with automatic conversion to your base currency, which is perfect for freelancers and NRIs." },
    { q: "What happens if I cancel my subscription?", a: "You keep full access until the end of your billing period. After that, your account simply drops to the free Starter plan — your data stays safe and intact, nothing is deleted." },
];

/* ===== Brands ===== */
export const brands = ["TechCrunch", "YourStory", "Inc42", "Mint", "Product Hunt", "Forbes India"];