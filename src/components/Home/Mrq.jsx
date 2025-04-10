import React from 'react';

const Mrq = () => {
    const Company = [
        { name: "ABB", logo: "/Marq/ABB.png" },
        { name: "Accenture", logo: "/Marq1/accenture.png" },
        { name: "Adani", logo: "/Marq/AdaniPower.png" },
        { name: "Atos", logo: "/Marq1/atos.jpeg" },
        { name: "Barclays", logo: "/Marq/Barclays.png" },
        { name: "ceat", logo: "/Marq/ceat.png" },
        { name: "CGI", logo: "/Marq1/cgi.png" },
        { name: "CISCO", logo: "/Marq1/cisco.png" },
        { name: "cognizant", logo: "/Marq1/cogni.png" },
        { name: "Google", logo: "/Marq/Google (1).png" },
        { name: "Hx", logo: "/Marq/Hexaware1.png" },
        { name: "iBm", logo: "/Marq/IBM.png" },
        { name: "infosys", logo: "/Marq/INFOSYS.png" },
        { name: "intuit", logo: "/Marq1/intuit.jpg" },
        { name: "ms", logo: "/Marq1/microsoft.png" },
        { name: "Oracle", logo: "/Marq1/oracle.jpg" },
        { name: "GATI", logo: "/Marq/Gati.png" },
        { name: "SAP", logo: "/Marq/SAP.png" },
        { name: "TCS", logo: "/Marq/tcs.png" },
        { name: "Rockwell", logo: "/Marq1/rockwell.png" },
        { name: "Wipro", logo: "/Marq1/wipro.png" },
    ];

    return (
        <div className="marquee-wrapper my-8 bg-black relative -top-12">
            <style jsx>{`
                .marquee-wrapper {
                    background-color: rgba(0, 0, 0, 0.05);
                    padding: 1rem 0;
                }
                .marquee-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap
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
                                className="company-image w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-contain opacity-80"
                            />
                            <span className="text-gray-800 dark:text-white ml-2 font-medium">
                                {/* {company.name} */}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mrq;