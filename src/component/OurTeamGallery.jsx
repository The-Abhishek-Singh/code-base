"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    { name: "Amazon", logo: "/glam.webp" },
    { name: "Google", logo: "/gl2.png" },
    { name: "Microsoft", logo: "/gl3.png" },
    { name: "Infosys", logo: "/infogl.png" },
    { name: "TCS", logo: "/gltcs.webp" },
    { name: "IBM", logo: "/glibm.png" },
    { name: "Wipro", logo: "/Marq/ABB.png" },
    { name: "Wipro", logo: "/Marq/accenture-7.svg" },
    { name: "Wipro", logo: "/Marq/AdaniPower.png" },
    { name: "Wipro", logo: "/Marq/Allen-Bradley.jpg" },
    { name: "Wipro", logo: "/Marq/Amazon.png" },
    { name: "Wipro", logo: "/Marq/ATOS.png" },
    { name: "Wipro", logo: "/Marq/Barclays.png" },
    { name: "Wipro", logo: "/Marq/CAPGEMINI.jpg" },
    { name: "Wipro", logo: "/Marq/ceat.png" },
    { name: "Wipro", logo: "/Marq/CEATLTD.NS.png" },
    { name: "Wipro", logo: "/Marq/Fendahl.png" },
    { name: "Wipro", logo: "/Marq/Gati.png" },
    { name: "Wipro", logo: "/Marq/INTUIT.png" },
    { name: "Wipro", logo: "/Marq/jsw(1).png" },
    { name: "Wipro", logo: "/Marq/MINDTREE.png" },
    { name: "Wipro", logo: "/Marq/linkedln.png" },
    { name: "Wipro", logo: "/Marq/Lodha.png" },
    { name: "Wipro", logo: "/Marq/ORACLE.png" },
    { name: "Wipro", logo: "/Marq/RdY.png" },
    { name: "Wipro", logo: "/Marq/REDHAT.png" },
    { name: "Wipro", logo: "/Marq/siemens(1).jpg" },
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
        className="text-red-500 p-16 flex flex-col items-center text-center space-y-8"
        style={{
          background:
            "linear-gradient(90deg, hsla(230, 100%, 12%, 1) 0%, hsla(230, 100%, 12%, 1) 0%, hsla(230, 100%, 10%, 1) 31%)",
        }}
      >
        <h1 className="text-3xl font-bold font-poppins">
          <span className="text-white">
            THE MINDS BEHIND <span className="text-red-500"> CAREERTRONIC</span>{" "}
            TEAM
          </span>
        </h1>
        <p className="text-white max-w-2xl leading-relaxed">
          At Careertronic Global Services, our strength lies in our skilled and
          passionate team, dedicated to delivering innovative solutions for your
          success. We bring expertise across software development, IT training,
          business consulting, and education advisory. Our commitment to
          continuous learning ensures we stay ahead of industry trends,
          providing cutting-edge solutions tailored to your needs.
        </p>
        <img
          src="/OurTeam.png"
          alt="Our Team"
          className="mt-8 mb-10 w-full max-w-xl rounded-[40px]"
        />
        <button
          className="text-white py-3 px-6 rounded hover:bg-red-600 transition-colors"
          style={{
            background:
              "linear-gradient(90deg, hsla(0, 100%, 50%, 1) 0%, hsla(0, 100%, 30%, 1) 99%, hsla(3, 100%, 73%, 1) 100%)",
          }}
        >
          Show All
        </button>
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
            animation-duration: 12s;
          }
        }
      `}</style>
    </div>
  );
};

export default OurTeamGallery;
