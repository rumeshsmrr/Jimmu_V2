import React from "react";
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicePage from "../components/services.jsx";
import Blogs from "../components/Blogs";
import {Footer, ConnectWithUs, FooterBottom } from "../components/Footer";
import AboutUs_Se01 from "../components/AboutUs_Se01.jsx";
import AboutUs_Se02 from "../components/AboutUs_Se02.jsx";
import AboutUs_Se03 from "../components/AboutUs_Se03.jsx";

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

      <section id="about-us">
      <AboutUs_Se01 />
      <AboutUs_Se02 />
      <AboutUs_Se03 />
      </section>

      <section id="blogs">
      <Blogs />
      </section>

      <ConnectWithUs />
      <Footer />
      <FooterBottom />
    </div>
  );
}
