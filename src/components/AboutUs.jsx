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
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 p-8 z-10">
          <h1
            className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-bold text-[#2D2D2D]"
            style={{ fontFamily: "SF_Bold" }}
          >
            About Us
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <h2
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF_Regular" }}
          >
            Our Mission
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 p-8 text-right z-10">
          <h2
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF_Regular" }}
          >
            Expert guidance <br /> for life’s challenges
          </h2>
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#FFAA29] rounded-full z-0"
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
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
      >
        <div className="relative w-full sm:w-1/2 flex items-center justify-center mb-6 sm:mb-0">
        <motion.div
  className="absolute w-2/3 h-2/3 bg-[#FFAA29] rounded-full z-0"
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="w-full sm:w-1/2 z-10">
          <h2
            className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF_Medium" }}
          >
            Providing expert insights and practical guidance to support you every step of the way.
          </h2>
          <p
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-regular text-[#2D2D2D] mt-4"
            style={{ fontFamily: "SF_Regular" }}
          >
            At Jimmu Global Trusted Resources, our BLOGS section is your go-to destination for expert insights,
            practical tips, and thought-provoking content. We aim to empower you with knowledge, guiding you through
            every step of your journey with care and expertise. 
            Explore a wealth of resources designed to inform, inspire, and support you.
          </p>
        </div>
      </motion.section>

      {/* Section 3: Cards */}
      <motion.section
  className="relative min-h-screen bg-[#FDF9F3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
      >
        {/* Card 1 */}
        <div className="h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 bg-neutral-50 rounded-lg shadow-xl flex flex-col justify-between p-4">
          <div className="flex flex-col items-center">
            <span className="font-SF_Bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center">Comprehensive Support</span>
          </div>
          <p className="line-clamp-3 text-center mt-auto font-SF_Regular text-[20px] sm:text-[24px] md:text-[26px]">
            We provide customized strategies to navigate the complexities of divorce, ensuring your wealth and reputation remain secure.
          </p>
        </div>

        {/* Card 2 */}
        <div className="h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 bg-neutral-50 rounded-lg shadow-xl flex flex-col justify-between p-4">
          <div className="flex flex-col items-center">
            <span className="font-SF_Bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center">Expert Guidance</span>
          </div>
          <p className="line-clamp-3 text-center mt-auto font-SF_Regular text-[20px] sm:text-[24px] md:text-[26px]">
            Our team of experts is here to support you through every step of the process.
          </p>
        </div>

        {/* Card 3 */}
        <div className="h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 bg-neutral-50 rounded-lg shadow-xl flex flex-col justify-between p-4">
          <div className="flex flex-col items-center">
            <span className="font-SF_Bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center">Emotional Well-being</span>
          </div>
          <p className="line-clamp-3 text-center mt-auto font-SF_Regular text-[20px] sm:text-[24px] md:text-[26px]">
            We tackle the toughest legal and financial challenges, delivering solutions that minimize stress and safeguard your future.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
