'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Cloud, FileChartColumn, Bitcoin, Construction, Link, FileUp as FileUser, AppWindow, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollCards = () => {
  const cardRowRef = useRef(null);

  const cardsData = [
    {
      title: "Artificial Intelligence & Machine Learning",
      heading: "Artificial Intelligence & Machine Learning",
      image: "/servicepages/1stservice.png",
      content: "Our AI and ML solutions automate processes, enhance decision-making, and build intelligent systems that evolve over time. Using advanced technologies like natural language processing (NLP), chatbots, and predictive analytics, we help businesses improve customer interactions, increase operational efficiency, and stay competitive",
    },
    {
      title: "Cloud Computing & DevOps Solutions",
      heading: "Cloud Computing & DevOps Solutions",
      image: "/servicepages/2ndservice.png",
      content: "We help you leverage the power of cloud technologies to create flexible, scalable, and cost-efficient infrastructure. Our DevOps practices ensure smooth collaboration between development and operations teams, streamlining workflows and accelerating delivery times, so your business can scale efficiently and stay agile.",
    },
    {
      title: "App Development & Integration",
      heading: "App Development & Integration",
      image: "/servicepages/3rdservice.png",
      content: "Our team develops high-performance mobile and web applications designed to provide superior user experiences. We also offer seamless system integration to ensure your applications work harmoniously with existing platforms, maximizing efficiency and business outcomes.",
    },
    {
      title: "Software Maintenance & Support",
      heading: "Software Maintenance & Support",
      image: "/servicepages/4thservice.png",
      content: "We provide ongoing maintenance and support to ensure that your software remains up-to-date, secure, and optimized for peak performance. Our support services include bug fixes, updates, performance enhancements, and troubleshooting to ensure the long-term success of your software solutions.",
    },
    {
      title: "Data Science & Analytics",
      heading: "Data Science & Analytics",
      image: "/servicepages/5thservice.png",
      content: "Data Science and Analytics involve extracting valuable insights from large datasets to drive informed decision-making and optimize business operations. Data analytics helps turn raw data into actionable information, while data science enables deeper insights, improving efficiency and competitive advantage.",
    },
    {
      title: "Blockchain & IoT",
      heading: "Blockchain & IoT",
      image: "/servicepages/5thservice.png",
      content: "Embrace the transformative power of blockchain and IoT technologies to enhance security, transparency, and efficiency in your business processes. Our blockchain development services, including smart contracts, cryptocurrency solutions, and decentralized applications (DApps), help streamline operations and build trust.",
    },
  ];

  const getIcon = (title) => {
    switch (title) {
      case "Artificial Intelligence & Machine Learning": return <BrainCircuit size={20} />;
      case "Cloud Computing & DevOps Solutions": return <Cloud size={20} />;
      case "App Development & Integration": return <AppWindow size={20} />;
      case "Software Maintenance & Support": return <Construction size={20} />;
      case "Data Science & Analytics": return <FileChartColumn size={20} />;
      case "Blockchain & IoT": return <Bitcoin size={20} />;
    
      default: return <Cloud size={20} />;
    }
  };

  // Original scroll functionality for desktop
  useEffect(() => {
    if (window.innerWidth >= 640) {
      const allCards = document.querySelectorAll(".cards-scroll .card");
      const headerHeight = 45;
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
      <div className="hidden sm:block">
        <section className="common h-[0vh] w-full flex justify-center items-center">
        </section>

        <section className="cards-scroll px-2 lg:p-10 flex flex-col">
          <div className="card-row" ref={cardRowRef}>
            {cardsData.map((card, index) => (
              <div
                key={`desktop-${index}`}
                className="card overflow-hidden h-[100vh] w-full text-white bg-black sticky mx-auto"
              >
                <div className="card__header sm:px-10 2xl:px-20 bg-black w-full border-b-2 border-white/20 min-h-[45px] p-2 flex items-center justify-center md:justify-start cursor-pointer transition-all duration-300 hover:text-red-300">
                  <motion.h2 className="text-lg 2xl:text-xl w-full xl:px-20 font-semibold flex items-center gap-2 cursor-pointer">
                    {getIcon(card.title)}
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
                    <h3 className="relative text-lg font-semibold mb-5 text-center lg:text-start underline underline-offset-8 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full after:bottom-[-6px]">
                      {card.heading}
                    </h3>
                    <p className="text-sm leading-relaxed font-medium text-center sm:text-start">
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

      {/* Mobile Version */}
      <div className="block sm:hidden bg-black">
        <div className="container mx-auto px-4 py-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 bg-black/50 rounded-lg overflow-hidden shadow-lg border border-white/10"
            >
              <div className="bg-black p-4 border-b border-white/20">
                <h2 className="text-white text-lg font-bold flex items-center gap-2">
                  {getIcon(card.title)}
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