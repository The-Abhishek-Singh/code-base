"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Business Excellence Gateway</title>
        <meta
          name="description"
          content="Your gateway to business excellence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="mx-auto my-4 sm:my-6 lg:my-8 xl:w-[100dvw]  px-4 sm:px-6 lg:px-8 2xl:m-0 2xl:px-20 2xl:h-auto 2xl:mb-0">
          <div className="flex flex-col lg:flex-row items-center justify-between sm:p-8 lg:p-12 xl:p-16 2xl:p-0 2xl:m-0" >
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 2xl:m-0 2xl:p-0 2xl:text-xl 2xl:w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-bold leading-tight mb-4 xl:mb-6 ">
                YOUR
                <br />
                GATEWAY
                <br />
                TO BUSINESS
                <br />
                EXCELLENCE
              </h1>
              <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-300 mb-6 xl:mb-8 max-w-xl 2xl:max-w-2xl 2xl:mt-14 2xl:mb-14">
                We offer tailored strategies, expert guidance, and innovative
                solutions designed to propel your business forward.
              </p>
              <div className="flex flex-wrap gap-4 xl:gap-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 xl:px-8 py-2 xl:py-3 rounded-full transition duration-300 text-sm sm:text-base xl:text-lg">
                  Get Started
                </button>
                <button className="border border-white hover:bg-white hover:text-black text-white px-4 sm:px-6 xl:px-8 py-2 xl:py-3 rounded-full transition duration-300 text-sm sm:text-base xl:text-lg">
                  Our Services
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 2xl:m-0 2xl:p-0 2xl:w-full 2xl:h-[800px] 2xl:overflow-visible 2xl:pt-0">
              <div className="relative sm:h-64 md:h-80 lg:h-96 xl:h-112 2xl:m-0 2xl:p-0 2xl:h-full 2xl:w-full flex items-center justify-center">
                <Image
                  src="/Business/BS1.png"
                  alt="3D Red Building"
                  height={700}
                  width={700}
                  objectFit="cover"
                  className=""
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* Empowering Business Section */}
        <section className="py-10 sm:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-black 2xl:mt-0 2xl:pt-0">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-10 sm:mb-16 xl:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase mb-2 xl:mb-4">
                Empowering
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase">
                Business Together
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-16">
              {/* Left Side - Image */}
              <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <Image
                    src="/Business/BS24.png"
                    alt="Business Strategy"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              {/* Right Side - Text */}
              <div className="w-full lg:w-6/12 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 xl:mb-6">
                  Building stronger networks, driving shared success
                </h3>
                <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-300 mb-6 xl:mb-10">
                  "Building stronger networks, driving shared success"
                  encapsulates the essence of collaborative efforts and the
                  tremendous potential of businesses in achieving mutual growth
                  and prosperity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 xl:gap-8">
                  <div className="text-center p-3 xl:p-6 bg-black bg-opacity-50 rounded-lg">
                    <span className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                      8M+
                    </span>
                    <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-gray-400 mt-2">
                      Businesses engage with our group
                    </p>
                  </div>
                  <div className="text-center p-3 xl:p-6 bg-black bg-opacity-50 rounded-lg">
                    <span className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                      40%
                    </span>
                    <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-gray-400 mt-2">
                      Growth in revenue touchpoints
                    </p>
                  </div>
                  <div className="text-center p-3 xl:p-6 bg-black bg-opacity-50 rounded-lg">
                    <span className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                      50%
                    </span>
                    <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-gray-400 mt-2">
                      Success rate of our strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted Section */}
        <section className="w-full bg-gradient-to-r from-red-900 to-black py-6 sm:py-8 lg:py-10 xl:py-12">
          <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Left Side - Text */}
            <div className="text-white font-semibold text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-center md:text-left mb-4 md:mb-0">
              Trusted by <span className="text-red-300">120+</span> companies in
              10
              <br className="hidden sm:block" /> countries and counting...
            </div>
            {/* Right Side - Company Logos */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
              {/* Company Logos with Responsive Size */}
              <img
                src="/Business/amlogo.png"
                alt="Amazon"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain"
              />
              <img
                src="/Business/ytlogo.png"
                alt="YouTube"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain"
              />
              <img
                src="/Business/bclogo.png"
                alt="Boring Company"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain"
              />
              <img
                src="/Business/amlogo.png"
                alt="Google"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain"
              />
              <img
                src="/Business/amlogo.png"
                alt="Meta"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}