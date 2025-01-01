import React from "react";
import { motion } from "framer-motion";

const AboutUs_Se03 = () => (
  <motion.section
    className="relative min-h-screen bg-[#FDF9F3] flex items-center justify-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8">
      {/* Card 1: Comprehensive Support */}
      <motion.div
        className="bg-white shadow-md p-8 space-y-4 rounded-lg relative overflow-hidden text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-16 h-16 bg-[#FFAA29] rounded-full absolute -right-5 -top-5 flex items-center justify-center">
          <p className="text-white text-lg">01</p>
        </div>
        <h1 className="font-bold text-[48px]">Comprehensive Support</h1>
        <p className="text-[26px] text-zinc-500 mt-4">
          We address the challenges of dividing significant assets, offering clear solutions to protect your financial interests during divorce.
        </p>
      </motion.div>

      {/* Card 2: Emotional Well-being */}
      <motion.div
        className="bg-white shadow-md p-8 space-y-4 rounded-lg relative overflow-hidden text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-16 h-16 bg-[#FFAA29] rounded-full absolute -right-5 -top-5 flex items-center justify-center">
          <p className="text-white text-lg">02</p>
        </div>
        <h1 className="font-bold text-[48px]">Emotional Well-being</h1>
        <p className="text-[26px] text-zinc-500 mt-4">
          We tackle the toughest legal and financial challenges, delivering solutions that minimize stress and safeguard your future.
        </p>
      </motion.div>

      {/* Card 3: Legal Guidance */}
      <motion.div
        className="bg-white shadow-md p-8 space-y-4 rounded-lg relative overflow-hidden text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-16 h-16 bg-[#FFAA29] rounded-full absolute -right-5 -top-5 flex items-center justify-center">
          <p className="text-white text-lg">03</p>
        </div>
        <h1 className="font-bold text-[48px]">Legal Guidance</h1>
        <p className="text-[26px] text-zinc-500 mt-4">
          We provide customized strategies to navigate the complexities of divorce, ensuring your wealth and reputation remain secure.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

export default AboutUs_Se03;
