'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code, Smartphone, Megaphone, GraduationCap, Brain, Link, FileUp as FileUser, School, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollCards = () => {
  const cardRowRef = useRef(null);



  const cardsData = [
   
    {
      title: "SOFTWARE DEVELOPMENT & EXPORT SERVICES",
      heading: "Software Development & Export Services",
      image: "/1service.png",
      content: "Our AI and ML solutions automate processes, enhance decision-making, and build intelligent systems that evolve over time. Using advanced technologies like natural language processing (NLP), chatbots, and predictive analytics, we help businesses improve customer interactions, increase operational efficiency, and stay competitive",
    },
    {
      title: "IT TRAINING",
      heading: "IT TRAINING",
      image: "/2service.png",
      content: "At Careertronic Global Services, we offer industry-leading IT training programs designed to equip individuals with the skills and expertise needed to thrive in today's competitive digital landscape. Our training courses cover a wide range of cutting-edge technologies, each designed to provide you with a comprehensive understanding of the subject, along with real-world applications and career opportunities.",
    },
    {
      title: "INDUSTRIAL AUTOMATION TRAINING",
      heading: "INDUSTRIAL AUTOMATION TRAINING",
      image: "/3service.png",
      content: "Welcome to Careertronic's Industrial Automation Training Program, where we empower you with the skills, knowledge, and hands-on experience to thrive in the rapidly growing field of automation. Our comprehensive curriculum covers the latest technologies in PLCs, SCADA, robotics, and IoT, preparing you for successful careers in industries ranging from manufacturing to energy management, process control, and more.",
    },
    
    {
      title: "STUDY ABROAD",
      heading: "STUDY ABROAD",
      image: "/4service.png",
      content: "Welcome to Careertronic's Industrial Automation Training Program, where we empower you with the skills, knowledge, and hands-on experience to thrive in the rapidly growing field of automation. Our comprehensive curriculum covers the latest technologies in PLCs, SCADA, robotics, and IoT, preparing you for successful careers in industries ranging from manufacturing to energy management, process control, and more.",
    },
    
  ];

  const getIcon = (title) => {
    switch (title) {
      case "SOFTWARE DEVELOPMENT & EXPORT SERVICES": return <Code size={20} />;
      case "IT TRAINING": return <Smartphone size={20} />;
      case "INDUSTRIAL AUTOMATION TRAINING": return <Brain size={20} />;
      case "CORPORATE & INDUSTRIAL TRAINING": return <Megaphone size={20} />;
      case "STUDY ABROAD": return <GraduationCap size={20} />;
      case "WORK ABROAD": return <Link size={20} />;
      case "BPO, KPO, RPO & BUSSINESS OUTSOURCING SOLUTION": return <Handshake size={20} />;
      case "CAMPUS DRIVE MANAGEMENT": return <School size={20} />;
      case "RESUME BUILDER": return <FileUser size={20} />;
      default: return <Handshake size={20} />;
    }
  };

  useEffect(() => {
    const allCards = document.querySelectorAll(".cards-scroll .card");
    const headerHeight = 70;
    const cardsCount = allCards.length;
    const cardSpacing = 5;


    const cardsClickHandler = (index) => {
      let topScrollValue = window.innerHeight * index - headerHeight * index;
      topScrollValue = Math.max(0, topScrollValue);

      const element = allCards[index];
      window.getComputedStyle(element);

     

      const finalOffset = topScrollValue + document.querySelector(".card-row").getBoundingClientRect().top + window.pageYOffset;
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
        const heightValue = cardsCount * (headerHeight + cardSpacing) - (headerHeight + cardSpacing);
        const totalHeaders = cardsCount * (headerHeight + cardSpacing);
        const reduceValue = (cardsCount - i) * (headerHeight + cardSpacing);

        let bottomValue = window.innerHeight - totalHeaders - reduceValue + headerHeight;
        bottomValue = bottomValue > 0 ? "-" + bottomValue : Math.abs(bottomValue);
        const fontSize = 20 + 4 * i;

        // Modified setup without transform animation
        card.style.fontSize = `${fontSize}px`;
        card.style.marginTop =  `${incValue}px`;
        card.style.marginBottom = `${decValue}px`;
        card.style.top = `${incValue}px`;
        card.style.bottom = `${bottomValue}px`;
        card.style.maxWidth = `100%`;
        card.style.maxHeight = `calc(100vh - ${heightValue - 3}px)`;
     

        card.addEventListener("click", () => cardsClickHandler(i));
      });

      

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='bg-black'>
      <section className="common h-[0vh] w-full flex justify-center items-center">
      </section>

      <div className=" p-8 text-center relative m-32">
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="relative w-[80%] h-16 bg-red-600 rounded-full overflow-hidden rounded-tr-lg rounded-bl-lg">
          <div className="absolute inset-y-0 left-0 w-1/4 "></div>
          <div className="absolute inset-y-0 right-0 w-1/4"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          OUR POPULAR SERVICES
          </div>
        </div>
      </div>
    </div>







      <section className="cards-scroll px-2 lg:p-10 flex flex-col  bg-black">
        <div className="card-row" ref={cardRowRef}>
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`card overflow-hidden h-[100vh] w-full text-white bg-black sm:sticky mx-auto `}
            >
              <div className="card__header md:px-20 bg-black
               w-full border-b-2 border-white/20 min-h-[75px] p-2 flex items-center justify-center md:justify-start cursor-pointer transition-all duration-300 hover:text-red-300">
                <motion.h2 className="text-xs sm:text-xl w-full xl:px-20 font-bold flex items-center gap-2 cursor-pointer">
                  {getIcon(card.title)}
                  {card.title}
                </motion.h2>
              </div>
              <div className="card__body grid grid-cols-1 md:grid-cols-2 pb-0">
                <div className="flex p-10 items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.heading}
                    width={450}
                    height={250}
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="card__content text-left flex flex-col items-start justify-center lg:px-8">
                  <h3 className="relative hidden md:block text-sm md:text-lg font-semibold mb-5 text-center lg:text-start underline underline-offset-8 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full after:bottom-[-6px]">
                    {card.heading}
                  </h3>
                  <p className="text-sm leading-relaxed font-medium text-center md:text-start p-2 md:p-0">
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="common h-[0vh] w-full flex justify-center items-center">
      </section>
    </div>

    
  );
};

export default ScrollCards;