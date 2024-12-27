import React from "react";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicePage from "../components/services.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicePage />
      </section>
    </div>
  );
}
