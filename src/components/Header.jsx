import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/images/Logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowHeader(lastScrollY > currentScrollY || currentScrollY <= 0);
    setLastScrollY(currentScrollY);

    const sections = ["home", "services", "about-us", "blogs"];
    let foundActiveSection = false;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { top, height } = sectionElement.getBoundingClientRect();
        if (top <= 100 && top + height > 100 && !foundActiveSection) {
          setActiveSection(section);
          foundActiveSection = true;
        }
      }
    });

    if (!foundActiveSection) {
      setActiveSection(""); // Fallback for no active section
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about-us" },
    { name: "Blog", id: "blogs" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 bg-transparent ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center w-[100px]">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Nav for Desktop */}
        <div className="hidden md:flex-1 md:flex justify-center mt-2 md:mr-24">
          <div className="bg-white shadow-md rounded-full flex items-center justify-center px-4 pt-2 pb-3">
            <ul className="flex flex-wrap justify-center gap-6 px-6">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)} // Manually update active section
                    className={`relative font-medium transition ${
                      activeSection === link.id
                        ? "font-semibold text-secondary"
                        : "text-secondary hover:font-semibold"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[0.4rem] h-[0.4rem] rounded-full bg-secondary"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <MdOutlineClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 px-6 py-4 bg-white shadow-lg">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveSection(link.id);
              }}
              className={`font-medium transition ${
                activeSection === link.id
                  ? "font-semibold text-secondary"
                  : "text-secondary hover:font-semibold"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
