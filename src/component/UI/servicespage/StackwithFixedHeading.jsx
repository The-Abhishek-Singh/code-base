"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Code,
  Cloud,
  FileChartColumn,
  Bitcoin,
  Construction,
  Link,
  FileUp as FileUser,
  AppWindow,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ScrollCards = ({ cardsData, customIcons }) => {
  const cardRowRef = useRef(null);

  // Default icons map
  const defaultIconsMap = {
    brainCircuit: BrainCircuit,
    cloud: Cloud,
    appWindow: AppWindow,
    construction: Construction,
    fileChartColumn: FileChartColumn,
    bitcoin: Bitcoin,
    code: Code,
    link: Link,
    fileUser: FileUser,
  };

  // Merge custom icons with default icons
  const iconMap = { ...defaultIconsMap, ...customIcons };

  // Default cards data if none is provided
  const defaultCardsData = [
    {
      title: "Default Card Example",
      heading: "Default Card Example",
      image: "/placeholder.png",
      content: "This is a default card shown when no data is provided.",
      iconType: "cloud",
    },
  ];

  // Use provided cardsData or default if not provided
  const cards = cardsData || defaultCardsData;

  const getIcon = (iconType, size = 20) => {
    if (!iconType) return <Cloud size={size} />;

    const IconComponent = iconMap[iconType];
    return IconComponent ? (
      <IconComponent size={size} />
    ) : (
      <Cloud size={size} />
    );
  };

  // Original scroll functionality for desktop
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 640) {
      const allCards = document.querySelectorAll(".cards-scroll .card");
      const headerHeight = 39.8;
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
  }, [cards]);

  return (
    <div>
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden sm:block">
        <section className="common h-[0vh] w-full flex justify-center items-center"></section>

        <section className="cards-scroll  flex flex-col">
          <div className="card-row" ref={cardRowRef}>
            {cards.map((card, index) => (
              <div
                key={`desktop-${index}`}
                className="card overflow-hidden h-[100vh] w-full text-white bg-black sticky mx-auto"
              >
                <div className="card__header sm:px-10 2xl:px-20 bg-black w-full border-b-2 border-white/20 min-h-[45px] p-2 flex items-center justify-center md:justify-start cursor-pointer transition-all duration-300 hover:text-red-300">
                  <motion.h2 className="text-lg 2xl:text-xl w-full xl:px-20 font-semibold flex items-center gap-2 cursor-pointer">
                    {getIcon(card.iconType)}
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

        <section className="common h-[0vh] w-full flex justify-center items-center"></section>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden bg-black">
        <div className="container mx-auto px-4 py-8">
          {cards.map((card, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 bg-black/50 rounded-lg overflow-hidden shadow-lg border border-white/10"
            >
              <div className="bg-black p-4 border-b border-white/20">
                <h2 className="text-white text-lg font-bold flex items-center gap-2">
                  {getIcon(card.iconType)}
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
