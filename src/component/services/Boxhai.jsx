"use client";
import React from "react";
import { Globe, Handshake } from "lucide-react";
import Input from "@/component/UI/services/Input";
import Servicesboxes from "@/component/UI/services/Servicesboxes";
import ScrollReveal from "@/component/About/ScrollReveal";
const head = () => {
  return (
    <>
      {/* Fake Nav */}
      <div className="h-10 bg-black"></div>
      <div className="h-full w-full servicegradient bg-gradient-to-b from-black via-[#1E1E1E] to-black">
        <div className="flex flex-col lg:flex-row relative">
          <div className="h-full w-full sm:pt-24 sm:px-24 px-6 py-5 justify-center flex flex-col gap-8">
            <div className="relative py-6 md:p-0">
              <ScrollReveal
                animation="slideRight"
                duration={800}
                delay={200}
                easing="smooth"
              >
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4 inline">
                  OUR SERVICES
                </h1>
              </ScrollReveal>
              <ScrollReveal
                animation="slideLeft"
                duration={800}
                delay={200}
                easing="smooth"
              >
                <img
                  src="/services/Removed.png"
                  alt="Removed"
                  className="float-right m-4 relative sm:w-[50%] md:w-[50%] lg:w-[500px] lg:-top-20 hidden sm:block"
                />
              </ScrollReveal>
              <ScrollReveal
                animation="slideRight"
                duration={800}
                delay={200}
                easing="smooth"
              >
                <p className="text-white font-light text-lg tracking-wider md:text-2xl lg:text-xl w-full paragraph mt-20 lg:leading-[2vw] lg:w-[65%]">
                  Careertronic Global Services provides customized solutions for
                  individuals, businesses, and institutions, helping them thrive
                  in the digital era. We offer career development programs,
                  skill training, and job placement for professionals, while
                  businesses benefit from process optimization, automation, and
                  software integration to enhance efficiency and growth.
                  Institutions gain access to digital transformation strategies
                  and innovative technologies to improve operations. With a
                  focus on innovation, efficiency, and success, we empower our
                  clients to stay competitive and achieve their goals in an
                  evolving digital landscape.
                </p>
                <Input />
              </ScrollReveal>
              <div className="flex gap-4 mt-[3vw]">
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
        <div className="h-auto w-full flex items-center justify-around flex-wrap gap-2 px-5 py-6">
          <h1 className="">
            Trusted By <br /> 600+ Companies{" "}
          </h1>
          <h1 className="">Google</h1>
          <h1 className="">Facebook</h1>
          <h1 className="">Meta</h1>
          <h1 className="">Amazone </h1>
          <h1 className="">Tata</h1>
          <h1 className="">Techno</h1>
          <h1>Accenture</h1>
        </div>
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
        <div className="w-[90%] mx-auto md:gap-20 lg:gap-16 gap-12 p-16 flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-0">
          <ScrollReveal
            animation="slideLeft"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="SOFTWARE DEVELOPMENT & EXPORT SERVICES"
              bgUrl="/services/image%2021.png"
              shifturl="/services/SOFTWARE-DEVELOPMENT-&-EXPORT-SERVICES"
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="IT TRAINING & CERTIFICATION"
              bgUrl="/services/div2.png"
              shifturl="/services/first"
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="CLOUD SOLUTIONS & MIGRATION"
              bgUrl="/services/div3.png"
              shifturl="/services/first"
            />{" "}
          </ScrollReveal>
          <ScrollReveal
            animation="slideLeft"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="CYBERSECURITY SERVICES"
              bgUrl="/services/div4.png"
              shifturl="/services/first"
            />{" "}
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="Study Abroad"
              bgUrl="/services/div5.png"
              shifturl="/services/first"
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="Work Abroad"
              bgUrl="/services/div6.png"
              shifturl="/services/first"
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideLeft"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="E-COMMERCE SOLUTIONS"
              bgUrl="/services/div7.png"
              shifturl="/services/first"
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideUp"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="UI/UX DESIGN SERVICES"
              bgUrl="/services/div8.png"
              shifturl="/services/first"
            />
          </ScrollReveal>
          <ScrollReveal
            animation="slideRight"
            duration={800}
            easing="spring"
            delay={50}
            index={0}
            stagger={150}
          >
            <Servicesboxes
              title="IT INFRASTRUCTURE MANAGEMENT"
              bgUrl="/services/div9.png"
              shifturl="/services/first"
            />
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};
export default head;