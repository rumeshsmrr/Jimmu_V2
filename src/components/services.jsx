import React from "react";
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";

const ServicePage = () => {
  return (
    <>
      <section className="bg-[#FFFAF4] w-full min-h-screen flex items-start justify-center">

        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-0">

          {/* Left Section */}
          <div className="flex flex-row items-center md:items-start justify-between m-4 md:m-10">

            <h1 className="text-[100px] md:text-[200px] font-bold text-[#2d2d2d] leading-none">1</h1>
            <p className="text-[#2d2d2d] text-base md:text-lg font-semibold">
              (Services)
            </p>
          </div>

          {/* Right Section */}
          <div className="mt-6 md:mt-14 flex flex-col gap-10 md:gap-28 items-center md:items-start">
            <h2 className="text-xl md:text-6xl font-semibold text-[#2d2d2d] text-center md:text-left">
              Investigations & Surveillance
            </h2>

            {/* Image */}
            <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
              <img
                src={service1}
                alt="Investigations and Surveillance"
                className="rounded-2xl shadow-md object-cover w-[250px] md:w-[350px] h-[100px] md:h-[140px]"
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-[25px] text-[#2d2d2d] text-center md:text-left">
              Discreet, professional monitoring and fact-finding for legal and private matters.
            </p>
          </div>
        </div>
      </section>



      {/* section 2*/}
      <section className="bg-[#FFFAF4] w-full min-h-screen flex items-start justify-center">

        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-0">

        {/* Left Section */}
        <div className="flex flex-row items-center md:items-start justify-between m-4 md:m-10">

            <h1 className="text-[100px] md:text-[200px] font-bold text-[#2d2d2d] leading-none">2</h1>
            <p className="text-[#2d2d2d] text-base md:text-lg font-semibold">
            (Services)
            </p>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-14 flex flex-col gap-10 md:gap-28 items-center md:items-start">
            <h2 className="text-xl md:text-6xl font-semibold text-[#2d2d2d] text-center md:text-left">
            Technical security & Counter measures
            </h2>

            {/* Image */}
            <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
            <img
                src={service2}
                alt="Investigations and Surveillance"
                className="rounded-2xl shadow-md object-cover w-[250px] md:w-[350px] h-[100px] md:h-[140px]"
            />
            </div>

            {/* Description */}
            <p className="text-base md:text-[25px] text-[#2d2d2d] text-center md:text-left">
            Advanced solutions to detect and prevent unauthorized surveillance and breaches
            </p>
        </div>
        </div>
        </section>

        {/* section 3*/}
      <section className="bg-[#FFFAF4] w-full min-h-screen flex items-start justify-center">

      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-0">

      {/* Left Section */}
      <div className="flex flex-row items-center md:items-start justify-between m-4 md:m-10">

          <h1 className="text-[100px] md:text-[200px] font-bold text-[#2d2d2d] leading-none">3</h1>
          <p className="text-[#2d2d2d] text-base md:text-lg font-semibold">
          (Services)
          </p>
      </div>

      {/* Right Section */}
      <div className="mt-6 md:mt-14 flex flex-col gap-10 md:gap-28 items-center md:items-start">
          <h2 className="text-xl md:text-6xl font-semibold text-[#2d2d2d] text-center md:text-left">
          Cyber Investigators
          </h2>

          {/* Image */}
          <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
          <img
              src={service3}
              alt="Investigations and Surveillance"
              className="rounded-2xl shadow-md object-cover w-[250px] md:w-[350px] h-[100px] md:h-[140px]"
          />
          </div>

          {/* Description */}
          <p className="text-base md:text-[25px] text-[#2d2d2d] text-center md:text-left">
          Expert analysis and tracking of digital crimes, data breaches, and online threats
          </p>
      </div>
      </div>
      </section>

      {/* section 4*/}
      <section className="bg-[#FFFAF4] w-full min-h-screen flex items-start justify-center">

        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-0">

        {/* Left Section */}
        <div className="flex flex-row items-center md:items-start justify-between m-4 md:m-10">

            <h1 className="text-[100px] md:text-[200px] font-bold text-[#2d2d2d] leading-none ">4</h1>
            <p className="text-[#2d2d2d] text-base md:text-lg font-semibold">
            (Services)
            </p>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-14 flex flex-col gap-10 md:gap-28 items-center md:items-start">
            <h2 className="text-xl md:text-6xl font-semibold text-[#2d2d2d] text-center md:text-left">
            Assets tracing & <br />Forfeiture
            </h2>

            {/* Image */}
            <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
            <img
                src={service4}
                alt="Investigations and Surveillance"
                className="rounded-2xl shadow-md object-cover w-[250px] md:w-[350px] h-[100px] md:h-[140px]"
            />
            </div>

            {/* Description */}
            <p className="text-base md:text-[25px] text-[#2d2d2d] text-center md:text-left">
            Investigating and recovering hidden assets across jurisdictions                           
            </p>
        </div>
        </div>
        </section>

    </>
  );
};

export default ServicePage;
