import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="scroll-smooth">
      {/* Section 1: About Us */}
      <motion.section
        className="relative min-h-screen bg-[#FDF9F3] flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 p-4 sm:p-8 z-10">
          <h1
            className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#2D2D2D]"
            style={{ fontFamily: "SF_Bold" }}
          >
            About Us
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 p-4 sm:p-8 z-10">
          <h2
            className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#2D2D2D]"
            style={{ fontFamily: "SF_Regular" }}
          >
            Our Mission
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 p-4 sm:p-8 text-right z-10">
          <h2
            className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-[#2D2D2D]"
            style={{ fontFamily: "SF_Regular" }}
          >
            Expert guidance <br /> for life’s challenges
          </h2>
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#FFAA29] rounded-full z-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.section>

      {/* Section 2: Insights and Guidance */}
      <motion.section
        className="relative min-h-screen bg-[#FDF9F3] flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full sm:w-1/2 flex items-center justify-center mb-6 sm:mb-0">
          <motion.div
            className="absolute w-2/3 h-2/3 bg-[#FFAA29] rounded-full z-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="w-full sm:w-1/2 z-10">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF_Medium" }}
          >
            Providing expert insights and practical guidance to support you every step of the way.
          </h2>
          <p
            className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#2D2D2D] mt-4"
            style={{ fontFamily: "SF_Regular" }}
          >
            At Jimmu Global Trusted Resources, our BLOGS section is your go-to destination for expert insights,
            practical tips, and thought-provoking content. Explore a wealth of resources designed to inform,
            inspire, and support you.
          </p>
        </div>
      </motion.section>

      {/* Section 3: Cards */}
      <motion.section
        className="relative min-h-screen bg-[#FDF9F3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          {
            title: "Comprehensive Support",
            text: "We provide customized strategies to navigate the complexities of divorce, ensuring your wealth and reputation remain secure.",
          },
          {
            title: "Expert Guidance",
            text: "Our team of experts is here to support you through every step of the process.",
          },
          {
            title: "Emotional Well-being",
            text: "We tackle the toughest legal and financial challenges, delivering solutions that minimize stress and safeguard your future.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="h-[280px] sm:h-[300px] md:h-[350px] cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 bg-neutral-50 rounded-lg shadow-xl flex flex-col justify-between p-4"
          >
            <div className="flex flex-col items-center">
              <span className="font-SF_Bold text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-center">
                {card.title}
              </span>
            </div>
            <p className="line-clamp-3 text-center mt-auto font-SF_Regular text-[16px] sm:text-[20px] md:text-[24px]">
              {card.text}
            </p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default AboutUs;
