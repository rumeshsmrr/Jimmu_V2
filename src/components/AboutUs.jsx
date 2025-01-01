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
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 p-6 sm:p-8 z-10">
          <h1
            className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#2D2D2D]"
            style={{ fontFamily: "SF_Bold" }}
          >
            About Us
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
          <h2
            className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF_Regular" }}
          >
            Our Mission
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 p-6 sm:p-8 text-right z-10">
          <h2
            className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF_Regular" }}
          >
            Expert guidance <br /> for life’s challenges
          </h2>
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-28 lg:w-32 h-16 sm:h-24 md:h-28 lg:h-32 bg-[#FFAA29] rounded-full z-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.section>

      {/* Section 2: Insights and Guidance */}
      <section className="relative min-h-screen bg-[#FDF9F3] flex flex-wrap">
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8">
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 bg-[#FFAA29] rounded-full z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center z-10">
          <h2
            className="text-[24px] sm:text-[36px] md:text-[48px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Providing expert insights and practical guidance to support you every step of the way.
          </h2>
          <p
            className="text-[16px] sm:text-[20px] md:text-[24px] font-regular text-[#2D2D2D] mt-4"
            style={{ fontFamily: "SF Pro Display" }}
          >
            At Jimmu Global Trusted Resources, our BLOGS section is your go-to destination for expert insights,
            practical tips, and thought-provoking content. We aim to empower you with knowledge, guiding you through
            every step of your journey with care and expertise. 
            Explore a wealth of resources designed to inform, inspire, and support you.
          </p>
        </div>
      </section>

      {/* Section 3: Cards */}
      <motion.section
        className="relative min-h-screen bg-[#FDF9F3] flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-md p-6 space-y-3 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-16 h-16 bg-[#FFAA29] rounded-full absolute -right-5 -top-5 flex items-center justify-center">
              <p className="text-white text-lg">01</p>
            </div>
            <h1 className="font-bold text-lg">Comprehensive Support</h1>
            <p className="text-sm text-zinc-500">
              We provide customized strategies to navigate the complexities of divorce, ensuring your wealth and reputation remain secure.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-md p-6 space-y-3 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-16 h-16 bg-[#FFAA29] rounded-full absolute -right-5 -top-5 flex items-center justify-center">
              <p className="text-white text-lg">02</p>
            </div>
            <h1 className="font-bold text-lg">Expert Guidance</h1>
            <p className="text-sm text-zinc-500">
              Our team of experts is here to support you through every step of the process.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-md p-6 space-y-3 rounded-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-16 h-16 bg-[#FFAA29] rounded-full absolute -right-5 -top-5 flex items-center justify-center">
              <p className="text-white text-lg">03</p>
            </div>
            <h1 className="font-bold text-lg">Emotional Well-being</h1>
            <p className="text-sm text-zinc-500">
              We tackle the toughest legal and financial challenges, delivering solutions that minimize stress and safeguard your future.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
