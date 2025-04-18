"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const OurTeamGallery = () => {

  const slides = ["/Partnerbg.png", "/partnerpg.png", "/OurTeam.png"];
  const [currentSlide, setCurrentSlide] = useState(0);
    
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const companies = [
    { name: "ABB", logo: "/Marq/ABB.png" },
    { name: "Accenture", logo: "/Marq/accenture-7.svg" },
    { name: "Adani", logo: "/Marq/AdaniPower.png" },
    { name: "Allen", logo: "/Marq/Allen-Bradley.jpg" },
    { name: "Atos", logo: "/Marq/ATOS.png" },
    { name: "Barclays", logo: "/Marq/Barclays.png" },
    { name: "Capgemini", logo: "/Marq/CAPGEMINI.jpg" },
    { name: "ceat", logo: "/Marq/ceat.png" },
    { name: "CGI", logo: "/Marq/CGI.png" },
    { name: "CISCO", logo: "/Marq/CISCO.jpg" },
    { name: "cognizant", logo: "/Marq/COGNIZANT.png" },
    { name: "Google", logo: "/Marq/Google (1).png" },
    { name: "Hx", logo: "/Marq/Hexaware1.png" },
    { name: "iBm", logo: "/Marq/IBM.png" },
    { name: "infosys", logo: "/Marq/INFOSYS.png" },
    { name: "intuit", logo: "/Marq/INTUIT.png" },
    { name: "ms", logo: "/Marq/MICROSOFT.jpg" },
    { name: "Mindtree", logo: "/Marq/MINDTREE.png" },
    { name: "Oracle", logo: "/Marq/ORACLE.png" },
    { name: "GATI", logo: "/Marq/Gati.png" },
    { name: "SAP", logo: "/Marq/SAP.png" },
    { name: "TCS", logo: "/Marq/tcs.png" },
    { name: "Oracle", logo: "/Marq/wipro.jpg" },
  ];
  return (
    <div className="bg-white">
      {/* Gallery Section */}
      <div className="px-4 sm:px-8 lg:px-16 space-y-10">
        <div className="text-center py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 font-poppins">
            Our Gallery
          </h1>
        </div>
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-100 rounded-xl shadow-lg">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100"
              onClick={prevSlide}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-75 hover:opacity-100"
              onClick={nextSlide}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* View all Companies */}
        <div className="text-center my-16 sm:my-20">
          <a
            href="/companies"
            className=" mt-12 block font-bold font-poppins text-xl sm:text-2xl md:text-3xl text-black hover:underline cursor-pointer"
          >
            <p>
              View all <span className="text-red-500">Companies</span>
            </p>
          </a>
        </div>
        {/* Company Logos Marquee */}
        <div className="relative bg-white py-10 overflow-hidden">
          <div className="marquee-container relative">
            <div className="marquee flex space-x-16 items-center">
              {companies.concat(companies).map((company, index) => (
                <div key={index} className="flex items-center px-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-contain opacity-90 transition-opacity duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Gradient fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
      
      {/* Our Team Section */}
      <div
        className="text-red-500 p-16 flex flex-col items-center text-center space-y-8 bg-black"
      >
        {/* <ScrollReveal
          animation="fadeSlideLeft"
          duration={800}
          easing="spring"
          delay={50}
        > */}
          <h1 className="text-3xl font-bold font-poppins">
            <span className="text-white">
              THE MINDS BEHIND{" "}
              <span className="text-red-500"> CAREERTRONIC</span> TEAM
            </span>
          </h1>
          <p className="text-white max-w-4xl leading-relaxed mt-5">
            At Careertronic Global Services, our strength lies in our skilled
            and passionate team, dedicated to delivering innovative solutions
            for your success. We bring expertise across software development, IT
            training, business consulting, and education advisory. Our
            commitment to continuous learning ensures we stay ahead of industry
            trends, providing cutting-edge solutions tailored to your needs.
          </p>
        {/* </ScrollReveal> */}
        {/* <ScrollReveal
          animation="slideUp"
          duration={700}
          easing="spring"
          delay={0}
          index={0}
          stagger={150}
        > */}
          <img
            src="/OurTeam.png"
            alt="Our Team"
            className="mt-8 mb-10 w-full rounded-[40px]"
          />
          <Link href="/ourteam">
            <button
              className="text-white py-3 px-6 rounded hover:bg-red-600 transition-colors"
              style={{
                background:
                  "linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 30%, 1) 99%, hsla(3, 100%, 73%, 1) 100%)",
              }}
            >
              Show All
            </button>
          </Link>
        {/* </ScrollReveal> */}
      </div>
      {/* Marquee Animation Style */}
      <style jsx>{`
        .marquee-container {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          margin-top: 20px;
        }
        .marquee {
          display: flex;
          animation: marquee-scroll 15s linear infinite;
          width: max-content;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};
export default OurTeamGallery;