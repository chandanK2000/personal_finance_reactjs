import { useState } from "react";
// import RegisterModal from "../auth/register/RegisterModal";

// import Hero from "../../components/home/Hero/Hero";
// import Brands from "../../components/home/Brands/Brands";
// import Stats from "../../components/home/Stats/Stats";
// import Features from "../../components/home/Features/Features";
// import HowItWorks from "../../components/home/HowItWorks/HowItWorks";
// import CoreFeatures from "../../components/home/CoreFeatures/CoreFeatures";
// import Pricing from "../../components/home/Pricing/Pricing";
// import Testimonials from "../../components/home/Testimonials/Testimonials";
// import Faq from "../../components/home/Faq/Faq";
// import Newsletter from "../../components/home/Newsletter/Newsletter";
// import Cta from "../../components/home/Cta/Cta";

import "./Home.css";
import RegisterModal from "../../components/auth/register/RegisterModal";
import Brands from "../../components/home/Brands/Brands";
import Stats from "../../components/home/Stats/Stats";
import Features from "../../components/home/Features/Features";
import HowItWorks from "../../components/home/HowItWorks/HowItWorks";
import CoreFeatures from "../../components/home/CoreFeatures/CoreFeatures";
import Pricing from "../../components/home/Pricing/Pricing";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import Faq from "../../components/home/Faq/Faq";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import Cta from "../../components/home/Cta/Cta";
import Hero from "../../components/home/Hero/Hero";

const Home = () => {
    const [showRegister, setShowRegister] = useState(false);
    const openRegister = () => setShowRegister(true);

    return (
        <div className="home-page">
            <Hero onOpenRegister={openRegister} />
            <Brands />
            <Stats />
            <Features />
            <HowItWorks />
            <CoreFeatures/>
            <Pricing onOpenRegister={openRegister} />
            <Testimonials />
            <Faq />
            <Newsletter />
            <Cta onOpenRegister={openRegister} />

            <RegisterModal
                show={showRegister}
                onHide={() => setShowRegister(false)}
                onSwitchToLogin={() => console.log("Switch to login")}
            />
        </div>
    );
};

export default Home;