import React, { useState } from "react";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicePage from "../components/services.jsx";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import { Footer, ConnectWithUs, FooterBottom } from "../components/Footer";

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <div className={`relative ${overlayVisible ? "overflow-hidden" : ""}`}>

      {/* Header */}
      <Header setOverlayVisible={setOverlayVisible} />

      {/* Dark Overlay */}
      {overlayVisible && (
        <div
          className="fixed inset-0 bg-secondary bg-opacity-50 z-40 pointer-events-none"
        ></div>
      )}


      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="services">
          <ServicePage />
        </section>

        <section id="about-us">
          <AboutUs />
        </section>

        <section id="blogs">
          <Blogs />
        </section>
      </main>


      <footer>
        <ConnectWithUs />
        <Footer />
        <FooterBottom />
      </footer>
    </div>
  );
}
