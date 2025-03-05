"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Code,
  Cloud,
  FileChartColumn,
  Bitcoin,
  Construction,
  AppWindow,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";
const ScrollCards = () => {
  const cardRowRef = useRef(null);
  const cardsData = [
    {
      title: "SOFTWARE DEVELOPMENT & EXPORT SERVICES ",
      heading: "SOFTWARE DEVELOPMENT & EXPORT SERVICES ",
      image: "/1service.png",
      content:
        " We specialize in software development and export services, delivering cutting-edge technology solutions tailored to your business needs. Our expertise spans custom software, web and mobile applications, AI-driven solutions, and cloud integrations, ensuring seamless digital transformation. With a focus on innovation and scalability, we help businesses enhance efficiency, drive growth, and stay ahead in the competitive tech landscape.",
    },
    {
      title: "IT & INDUSTRIAL AUTOMATION TRAINING",
      heading: "IT & INDUSTRIAL AUTOMATION TRAINING",
      image: "/3service.png",
      content:
        "We provide IT and Industrial Automation Training, equipping professionals with the latest skills and knowledge to excel in a technology-driven world. Our comprehensive programs cover software development, industrial automation, AI, IoT, and cloud computing, ensuring hands-on expertise. With industry-aligned curriculum and expert guidance, we prepare individuals to adapt, innovate, and succeed in the evolving tech landscape.",
    },
    {
      title: "CORPORATE & INDUSTRIAL TRAINING",
      heading: "CORPORATE & INDUSTRIAL TRAINING",
      image: "/2service.png",
      content:
        "Our Corporate & Industrial Training programs are tailored to enhance organizational performance and workforce productivity. We offer customized training solutions in IT, automation, and emerging technologies, ensuring employees gain practical skills and industry expertise. With expert-led sessions and real-world applications, we help businesses upskill their teams and stay ahead in a competitive landscape.",
    },
    {
      title: "GLOBAL EDUCATION & STUDY ABROAD PROGRAMS",
      heading: "GLOBAL EDUCATION & STUDY ABROAD PROGRAMS",
      image: "/4service.png",
      content:
        "Our Global Education & Study Abroad Programs provide students and professionals with access to world-class educational opportunities and enriching cross-cultural experiences. We offer personalized guidance, university partnerships, and scholarship assistance to help individuals achieve their academic and career goals. With a focus on global exposure and skill development, we empower learners to excel in an increasingly interconnected world.",
    },
    {
      title: "BUSINESS CONSULTING",
      heading: "BUSINESS CONSULTING",
      image: "/5service.jpeg",
      content:
        "Our Business Consulting services provide strategic expertise to help businesses overcome challenges, streamline operations, and drive sustainable growth. We offer data-driven insights, process optimization, and market analysis to enhance decision-making and competitiveness. With a focus on innovation and efficiency, we empower organizations to scale successfully in a dynamic business landscape.",
    },
  ];
  const getImage = (title) => {
    switch (title) {
      case "SOFTWARE DEVELOPMENT & EXPORT SERVICES ":
        return "homeCollapse1.png";
      case "IT & INDUSTRIAL AUTOMATION TRAINING":
        return "homeCollapse2.png";
      case "CORPORATE & INDUSTRIAL TRAINING":
        return "homeCollapse3.png";
      case "GLOBAL EDUCATION & STUDY ABROAD PROGRAMS":
        return "homeCollapse4.png";
      case "BUSINESS CONSULTING":
        return "homeCollapse5.png";
      case "Blockchain & IoT":
        return "homeCollapse1.png";
      default:
        return "homeCollapse2.png";
    }
  };
  // Original scroll functionality for desktop
  useEffect(() => {
    if (window.innerWidth >= 640) {
      const allCards = document.querySelectorAll(".cards-scroll .card");
      const headerHeight = 63;
      const cardsCount = allCards.length;
      const cardSpacing = 5;
      const cardsClickHandler = (index) => {
        let topScrollValue = window.innerHeight * index - headerHeight * index;
        topScrollValue = Math.max(0, topScrollValue);
        const element = allCards[index];
        window.getComputedStyle(element);
        const finalOffset =
          topScrollValue +
          document.querySelector(".card-row").getBoundingClientRect().top +
          window.pageYOffset;
        const duration = 800;
        const startingY = window.pageYOffset;
        const diff = finalOffset - startingY;
        let start = null;
        const easeInOutQuad = (t) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const time = timestamp - start;
          const percent = easeInOutQuad(Math.min(time / duration, 1));
          window.scrollTo(0, startingY + diff * percent);
          if (time < duration) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };
      if (cardsCount) {
        allCards.forEach((card, i) => {
          const incValue = i * (headerHeight + cardSpacing);
          const decValue = (cardsCount - i - 1) * (headerHeight + cardSpacing);
          const heightValue =
            cardsCount * (headerHeight + cardSpacing) -
            (headerHeight + cardSpacing);
          const totalHeaders = cardsCount * (headerHeight + cardSpacing);
          const reduceValue = (cardsCount - i) * (headerHeight + cardSpacing);
          let bottomValue =
            window.innerHeight - totalHeaders - reduceValue + headerHeight;
          bottomValue =
            bottomValue > 0 ? "-" + bottomValue : Math.abs(bottomValue);
          card.style.marginTop = `${incValue}px`;
          card.style.marginBottom = `${decValue}px`;
          card.style.top = `${incValue}px`;
          card.style.bottom = `${bottomValue}px`;
          card.style.maxWidth = `100%`;
          card.style.maxHeight = `calc(100vh - ${heightValue - 3}px)`;
          card.addEventListener("click", () => cardsClickHandler(i));
        });
      }
    }
  }, []);
  return (
    <div>
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden sm:block -mt-[16vh]">
        <section className="common h-[0vh] w-full flex justify-center items-center"></section>
        <section className="cards-scroll  flex flex-col">
          <div className="card-row" ref={cardRowRef}>
            {cardsData.map((card, index) => (
              <div
                key={`desktop-${index}`}
                className="card overflow-hidden h-[100vh] w-full text-white bg-black sticky mx-auto shadow-[0_-8px_30px_5px_rgba(255,255,255,0.2)]"
              >
                <div className="card__header sm:px-10 2xl:px-20 bg-black w-full border-b-2 border-white/20 min-h-[45px] p-2 flex items-center justify-center md:justify-start cursor-pointer transition-all duration-300 hover:text-red-300 ">
                  <motion.h2 className="text-lg 2xl:text-xl w-full xl:px-20 font-semibold flex items-center gap-2 cursor-pointer">
                  <img src={getImage(card.title)} alt={card.title} width="50" height="50" />
                    {card.title}
                  </motion.h2>
                </div>
                <div className="card__body grid grid-cols-1 md:grid-cols-2 pb-0">
                  <div className="flex p-2 2xl:p-10 items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.heading}
                      width={320}
                      height={120}
                      className="object-cover rounded-2xl 2xl:w-[25rem]"
                    />
                  </div>
                  <div className="card__content text-left flex flex-col items-start 2xl:justify-center pt-2 sm:px-10 md:px-8">
                    <h3 className="relative text-xl font-semibold mb-5 text-center lg:text-start underline underline-offset-8 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full after:bottom-[-6px]">
                      {card.heading}
                    </h3>
                    <p className="text-xl leading-relaxed font-medium text-center sm:text-start">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="common h-[0vh] w-full flex justify-center items-center"></section>
      </div>
      {/* Mobile Version */}
      <div className="block sm:hidden bg-black">
        <div className="container mx-auto px-4 py-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 bg-black/50 rounded-lg overflow-hidden border border-white/10"
            >
              <div className="bg-black p-4 border-b border-white/20 shadow-[0_-8px_15px_-3px_rgba(255,255,255,0.5)]">
                <h2 className="text-white text-lg font-bold flex items-center gap-2">
                  {/* {getIcon(card.title)} */}
                  <img src={getImage(card.title)} alt={card.title} width="40" height="40" />
                  {card.title}
                </h2>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <Image
                    src={card.image}
                    alt={card.heading}
                    width={350}
                    height={150}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">{card.heading}</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ScrollCards;