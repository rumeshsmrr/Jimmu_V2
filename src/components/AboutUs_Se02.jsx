import React from "react";
import { motion } from "framer-motion";

const AboutUs_Se02 = () => (
  <section className="relative min-h-screen bg-[#FDF9F3] flex flex-wrap">
    {/* Circle Animation */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8">
      <motion.div
        className="w-[90vh] h-[90vh] bg-[#FFAA29] rounded-full z-0 absolute -left-[45vh]"
        initial={{ x: 100, opacity: 0, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>

    {/* Text Animation */}
    <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center z-10">
      <motion.h2
        className="text-[24px] sm:text-[36px] md:text-[48px] font-SF_Bold text-[#2D2D2D]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Providing expert insights and practical guidance to support you every
        step of the way.
      </motion.h2>
      <motion.p
        className="text-[16px] sm:text-[20px] md:text-[24px] font-SF_Regular text-[#2D2D2D] mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        At Jimmu Global Trusted Resources, our BLOGS section is your go-to
        destination for expert insights, practical tips, and thought-provoking
        content. We aim to empower you with knowledge, guiding you through every
        step of your journey with care and expertise. Explore a wealth of
        resources designed to inform, inspire, and support you.
      </motion.p>
    </div>
  </section>
);

export default AboutUs_Se02;
