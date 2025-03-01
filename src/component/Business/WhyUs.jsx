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
    <section className="bg-black text-white py-20 px-6 md:px-16 text-center relative">
      <h2 className="text-3xl md:text-5xl font-semibold mb-14">
        Why Choose <span className="text-red-500">CGSPL</span> For Your <br />
        Business Consulting Needs?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 transition-transform transform hover:scale-110"
          >
            {/* Icon with Red-Black Gradient and Shine */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-600
               to-black p-[3px] animate-shine">
                <div className="bg-black w-full h-full rounded-full flex items-center justify-center shadow-lg">
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-black shadow-inner hover:shadow-red-500 transition">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={70}
                      height={70}
                      className="opacity-90 hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xl font-medium max-w-xs">{feature.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-4xl font-semibold">
          Get <span className="text-red-500">Started</span> Today
        </h3>
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
          At Careertronic Global Services Pvt. Ltd., We Are Committed To Helping
          You Unlock Your Business’s Full Potential. Our Strategic Consulting
          Services Are Designed To Empower Your Business For Success, Growth,
          And Financial Sustainability.
        </p>
      </div>
    </section>
  );
}