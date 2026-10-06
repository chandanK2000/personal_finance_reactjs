// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/common/navbar/Navbar";
// import Footer from "./components/common/footer/Footer";

// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import Privacy from "./pages/privacy/Privacy";
// import Terms from "./pages/terms/Terms";
// import Cookies from "./pages/cookies/Cookies";

// function App() {
//     return (
//         <>
//             <Navbar />

//             <main className="app-main">
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/privacy" element={<Privacy />} />
//                     <Route path="/terms" element={<Terms />} />
//                     <Route path="/cookies" element={<Cookies />} />
//                 </Routes>
//             </main>

//             <Footer />
//         </>
//     );
// }

// export default App;


import { Routes, Route } from "react-router-dom";

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

function App() {
    return (
        <Routes>

            {/* =========================
                PUBLIC PAGES
            ========================== */}

            <Route
                path="/"
                element={
                    <>
                        <Navbar />

                        <main className="app-main">
                            <Home />
                        </main>

                        <Footer />
                    </>
                }
            />

            <Route
                path="/about"
                element={
                    <>
                        <Navbar />

                        <main className="app-main">
                            <About />
                        </main>

                        <Footer />
                    </>
                }
            />

            <Route
                path="/contact"
                element={
                    <>
                        <Navbar />

                        <main className="app-main">
                            <Contact />
                        </main>

                        <Footer />
                    </>
                }
            />

            <Route
                path="/privacy"
                element={
                    <>
                        <Navbar />

                        <main className="app-main">
                            <Privacy />
                        </main>

                        <Footer />
                    </>
                }
            />

            <Route
                path="/terms"
                element={
                    <>
                        <Navbar />

                        <main className="app-main">
                            <Terms />
                        </main>

                        <Footer />
                    </>
                }
            />

            <Route
                path="/cookies"
                element={
                    <>
                        <Navbar />

                        <main className="app-main">
                            <Cookies />
                        </main>

                        <Footer />
                    </>
                }
            />


            {/* =========================
                AUTHENTICATED APP
            ========================== */}

            <Route element={<AppLayout role="USER" />}>

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

            </Route>

        </Routes>
    );
}

export default App;