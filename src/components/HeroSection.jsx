import React from "react";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import Arrow1 from "../assets/images/arrow1.png";
// import Arrow2 from "../assets/images/arrow2.png";

const HeroSection = () => {
  
  return (

    <section className="bg-[#FFFAF4] h-screen text-center " >

      <div className="max-w-4xl mx-auto pt-28 md:pt-36">
        {/* Welcome Text */}
        <h2 className="text-md text-[#2d2d2d] uppercase tracking-widest mb-6">
          Welcome to JIMMU
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] leading-tight">
          We Carry Over 30 Years Of <br/>
        </h1>

        <div className="flex flex-row justify-center gap-3 items-center my-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] ">
                Experience
            </h1>
            <div className="flex justify-center">
              <img
                  src={hero1}
                  alt="Experience 1"
                  className=" rounded-xl w-12 h-12 "
              />
              <img
                  src={hero2}
                  alt="Experience 2"
                  className="rounded-xl w-12 h-12"
              />
              <img
                  src={hero3}
                  alt="Experience 3"
                  className="rounded-xl w-12 h-12"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] ">
                So You Can
            </h1>
        </div>

    
        <div className="flex flex-row justify-center gap-3 items-center md:my-4">

            <h1 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d] ">
                Move Forward With Confidence  
            </h1>

            <div className="flex justify-center ">
              <img
                      src={Arrow1}
                      alt="arrow"
                      className="rounded-xl w-12 h-12"
                  />

              {/* <img
                      src={Arrow2}
                      alt="arrow head"
                      className="w-auto h-9 "
                  /> */}
            </div>    

        </div>


        {/* Subtext */}
        <p className="text-lg text-gray-600 font-normal mx-1 md:mt-16 md:mb-12">
          Utilizing our skills and experience, we can manage all aspects of High
          Net Worth Divorces with reactive and proactive methods.
        </p>

        {/* Call To Action */}
        <button className="mt-8 bg-[#FFAA29] text-[#2d2d2d] text-lg font-semibold py-2 px-4 rounded-lg hover:bg-orange-400">
          Call Us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
