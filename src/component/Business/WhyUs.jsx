"use client";
import Image from "next/image";
const features = [
  {
    title: "Tailored Solutions for Every Stage of Business",
    img: "/Business/Whyus1.png",
  },
  {
    title: "Proven Expertise",
    img: "/Business/Whyus2.png",
  },
  {
    title: "Comprehensive & End-to-End Support",
    img: "/Business/Whyus3.png",
  },
  {
    title: "Global Reach",
    img: "/Business/Whyus4.png",
  },
  {
    title: "Track Record of Success",
    img: "/Business/Whyus5.png",
  },
];
export default function ConsultingSection() {
  return (
    <section className="bg-black text-white py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 text-center relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-10 md:mb-14">
        Why Choose <span className="text-red-500">CGSPL</span> For Your{" "}
        <span className="sm:block">Business Consulting Needs?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 transition-transform duration-300 hover:scale-105"
          >
            {/* Icon with Red-Black Gradient and Shine */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-600 to-black p-[2px] sm:p-[3px] animate-shine">
                <div className="bg-black w-full h-full rounded-full flex items-center justify-center shadow-lg">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black shadow-inner hover:shadow-red-500 transition">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={60}
                      height={60}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-90 hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl font-medium">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 text-center max-w-4xl mx-auto px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Get <span className="text-red-500">Started</span> Today
        </h3>
        <p className="text-gray-400 mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
          At Careertronic Global Services Pvt. Ltd., We Are Committed To Helping
          You Unlock Your Business's Full Potential. Our Strategic Consulting
          Services Are Designed To Empower Your Business For Success, Growth,
          And Financial Sustainability.
        </p>
      </div>
    </section>
  );
}