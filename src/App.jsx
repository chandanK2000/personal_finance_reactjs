
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";

import AppLayout from "./layouts/AppLayout/AppLayout";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Cookies from "./pages/cookies/Cookies";

import Dashboard from "./pages/dashboard/Dashboard";
import Money from "./pages/money/Money";
import Expenses from "./pages/expenses/Expenses";
import Reports from "./pages/reports/Reports";
import Reminders from "./pages/reminders/Reminders";
import Notes from "./pages/notes/Notes";
import Profile from "./pages/profile/Profile";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import ScrollToTop from "./components/ScrollToTop";
import Documents from "./pages/documents/Documents";

function PublicLayout() {
    return (
        <>
            <Navbar />

            <main className="app-main">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

function App() {
    return (
        <>
                    <ScrollToTop />

       
        <Routes>
            {/* PUBLIC PAGES */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
            </Route>

            {/* AUTHENTICATED APPLICATION */}
            <Route element={<AppLayout />}>
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/money"
                    element={<Money />}
                />

                <Route
                    path="/expenses"
                    element={<Expenses />}
                />

                <Route
                    path="/reports"
                    element={<Reports />}
                />

                  <Route
                    path="/documents"
                    element={<Documents />}
                />

                <Route
                    path="/reminders"
                    element={<Reminders />}
                />

                <Route
                    path="/notes"
                    element={<Notes />}
                />
 
                <Route
                    path="/profile"
                    element={<Profile />}
                /> 

                  <Route
                    path="/settings"
                    element={<Settings />}
                /> 

                {/* ADMIN PAGE */}
                 <Route
                    path="/admin/users"
                    element={<Users />}
                /> 
            </Route>
        </Routes>
         </>
    );
}

export default App;