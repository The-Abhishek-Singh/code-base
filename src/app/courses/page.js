'use client'
import React from 'react'
import { Globe,Handshake } from 'lucide-react';
import Input from '@/component/UI/services/Input';
import Servicesboxes from '@/component/UI/services/Servicesboxes';
const head = () => {




  const companies = [
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
    <>
      {/* Fake Nav */}
      <div className="h-20 bg-black"></div>
      <div className="h-full w-full servicegradient bg-gradient-to-b from-black via-[#1E1E1E] to-black">
        <div className="flex flex-col lg:flex-row relative">
          <div className="h-full w-full md:pt-20 sm:px-16 lg:px-24 px-6 justify-center flex flex-col gap-8">
            <div className="relative py-6 md:p-0">
              <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-7 inline-block">
                OUR SERVICES
              </h1>
              <img
                src="/services/Removed.png"
                alt="Removed"
                className="float-right m-4 relative lg:-top-20 sm:w-[50%] md:w-[50%] lg:w-[500px] sm:block hidden"
              />
              <p className="text-white font-light text-sm tracking-wider md:text-2xl lg:text-xl paragraph mt-2 mb-2 lg:mb-10 lg:leading-[2vw] lg:w-[65%]">
                Careertronic Global Services provides customized solutions for
                individuals, businesses, and institutions, helping them thrive
                in the digital era. We offer career development programs, skill
                training, and job placement for professionals, while businesses
                benefit from process optimization, automation, and software
                integration to enhance efficiency and growth. Institutions gain
                access to digital transformation strategies and innovative
                technologies to improve operations. With a focus on innovation,
                efficiency, and success, we empower our clients to stay
                competitive and achieve their goals in an evolving digital
                landscape.
              </p>
              <Input />
              <div className="flex gap-4 mt-[2vw]">
                <div className="flex gap-2">
                  <Globe />
                  <h1>Globally Recognize </h1>
                </div>
                <div className="flex gap-2">
                  <Handshake />
                  <h1>No Commitment</h1>
                </div>
              </div>
            </div>
            {/* <div className=''></div> */}
          </div>
          {/* <div className='h-full lg:w-[50%] w-full py-10 px-16 flex items-center justify-center'></div> */}
        </div>
        {/* Company Logos Marquee */}
        <div className="relative  py-10 overflow-hidden">
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
      {/* SECONE PART OF THE PAGE  */}
      <div className="h-auto w-full  mt-28">
        <div className="flex justify-center">
          <div className="w-[80%] h-[80px] bg-red-600 flex  justify-center align-middle rounded-full rounded-tl-md rounded-br-sm bg-gradient-to-r from-[#D31C1F] to-[#AD0003] ">
            <h1 className="text-white sm:text-3xl flex items-center text-xl">
              {" "}
              Careertronic services
            </h1>
          </div>
        </div>
        <div className="w-[90%] mx-auto md:gap-20 lg:gap-16 gap-12 py-16 px-4 flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:grid-rows-3">
          <Servicesboxes
            title="WEB DEVELOPMENT "
            bgUrl="/Course/wd1.webp"
            shifturl="/courses/WEB DEVELOPMENT"
           
          />

          <Servicesboxes
            title="APPLICATION DEVELOPMENT"
            bgUrl="/Course/app1.jpg" // Replace with actual path
            shifturl="/courses/Application-Development"
          />

          <Servicesboxes
            title="DATA SCIENCE & AI"
            bgUrl="/Course/data.jpg"
            shifturl="/courses/DATA-SCIENCE-&-AI"
          />
          <Servicesboxes
            title="INDUSTRIAL AUTOMATION"
            bgUrl="/Course/automation.jpg "
            shifturl="/courses/INDUSTRIAL-AUTOMATION"
          />
          <Servicesboxes
            title="AWS DEVOPS"
            bgUrl="/Course/aws.jpg"
            shifturl="/courses/AWS-DEVOPS"
          />

          <Servicesboxes
            title="CYBER SECURITY"
            bgUrl="/Course/cyber.jpg"
            shifturl="/courses/CYBER-SECURITY"
          />

          <Servicesboxes
            title="CLOUD COMPUTING"
            bgUrl="/Course/cloud.png"
            shifturl="/courses/CLOUD-COMPUTING"
          />

          <Servicesboxes
            title="ETHICAL HACKING"
            bgUrl="/Course/ethical.jpg"
            shifturl="/courses/ETHICAL-HACKING"
          />

          <Servicesboxes
            title="INFORMATION SECURITY"
            bgUrl="/Course/Info.png"
            shifturl="/courses/INFORMATION-SECURITY"
          />
        </div>
      </div>
    </>
  );
}
export default head