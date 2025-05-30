import React from "react";
const Mrq = () => {
  const Company = [
    { name: "ABB", logo: "marquehome/marque 1.png" },
    { name: "Accenture", logo: "marquehome/marque 2.png" },
    { name: "Adani", logo: "marquehome/marque 3.png" },
    { name: "Atos", logo: "marquehome/marque 4.png" },
    { name: "Barclays", logo: "marquehome/marque 5.png" },
    { name: "ceat", logo: "marquehome/marque 6.png" },
    { name: "CGI", logo: "marquehome/marque 7.png" },
    { name: "CISCO", logo: "marquehome/marque 8.png" },
    { name: "cognizant", logo: "marquehome/marque 1.png" },
    { name: "Google", logo: "marquehome/marque 2.png" },
    { name: "Hx", logo: "marquehome/marque 3.png" },
    { name: "iBm", logo: "marquehome/marque 4.png" },
    { name: "infosys", logo: "marquehome/marque 5.png" },
    { name: "intuit", logo: "marquehome/marque 6.png" },
    { name: "ms", logo: "marquehome/marque 7.png" },
    { name: "Oracle", logo: "marquehome/marque 8.png" },
    { name: "GATI", logo: "marquehome/marque 1.png" },
    { name: "SAP", logo: "marquehome/marque 2.png" },
    { name: "TCS", logo: "marquehome/marque 3.png" },
    { name: "Rockwell", logo: "marquehome/marque 4.png" },
    { name: "Wipro", logo: "marquehome/marque 5.png" },
  ];

  return (
    <div className="marquee-wrapper my-10 bg-black relative -top-20">
      <style jsx>{`
        .marquee-wrapper {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 1rem 0;
        }
        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: flex;
          animation: marquee-scroll 30s linear infinite;
          width: max-content;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .company-item {
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
        }
        .company-image {
          transition: all 0.3s ease;
        }
        .company-image:hover {
          transform: scale(1.05);
          opacity: 1;
        }
        @media (max-width: 640px) {
          .marquee-content {
            animation-duration: 40s;
          }
        }
      `}</style>

      <div className="marquee-container">
        <div className="marquee-content">
          {/* Duplicate the company list to create a seamless loop */}
          {[...Company, ...Company].map((company, index) => (
            <div key={index} className="company-item">
              <img
                src={company.logo}
                alt={company.name}
                className="company-image w-28 sm:w-28 md:w-28 h-24 sm:h-28 md:h-32 object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mrq;
