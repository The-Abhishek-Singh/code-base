"use client"; 

import React from 'react';


const Footer = () => {
  return (
    <>
      <footer 
        className="mt-10 relative flex justify-center bg-black text-white py-10 lg:h-[550px] border-b border-gray-200" 
        style={{
          backgroundImage: "url('/Footerbggg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative flex flex-col mx-5 justify-around py-5 items-center md:items-start container w-full h-full">
          {/* Top Section - Logo and Description */}
          <div className="mb-12 w-full">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-10 mb-4">
             
              <div>

                <h2 className="text-red-600 flex justify-center flex-col md:flex-row md:justify-start items-center font-semibold md:flex-none text-2xl mb-2">
                <img src="/FooterLogo.png" alt="Careertronics" className="w-20 h-16" />
                  Careertronic
                </h2>
                <p className="text-gray-300 text-center  md:text-start px-5 sm:px-32 md:px-0 text-md max-w-2xl">
                  Explore our services today and discover how we can empower your business or career.
                </p>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:w-full">
            {/* Products Section */}
            <div className="flex flex-col  items-center">
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2 flex flex-col justify-center items-center">
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">MDBootstrap</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">MDWordPress</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">BrandFlow</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Bootstrap Angular</a></li>
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className="flex flex-col  items-center">
              <h3 className="font-semibold text-lg mb-4">Useful links</h3>
              <ul className="space-y-2 flex flex-col justify-center items-center">
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Your Account</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Become an Affiliate</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Shipping Rates</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col  items-center">
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 flex flex-col justify-center items-center">
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Help</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Customer care</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col  items-center">
              <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
              <p className="text-gray-300 mb-2">Raipur, India</p>
              <p className="text-gray-300 mb-4 text-center">Chanakyans Education Foundation</p>
              <p className="text-gray-300">+ 01 234 567 88</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="text-center bg-[#191817] p-3 text-white">
        <article className="text-gray-500 text-sm text-center sm:text-left flex justify-center items-center">
          Copyright © 2024 
          <span className="text-red-500 mx-1">Careertronic Global Services Pvt. Ltd</span> 
          | All rights reserved
        </article>
      </div>

      {/* Tailwind Custom Style for Underline Animation */}
      <style jsx>{`
        .underline-animation {
          position: relative;
          display: inline-block;
        }
        
        .underline-animation::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: red;
          transition: width 0.3s ease-in-out;
        }
        
        .underline-animation:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Footer;
