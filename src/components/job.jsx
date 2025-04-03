// pages/index.js
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function JobPortalLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Job Portal | Your Path to the Perfect Job</title>
        <meta
          name="description"
          content="Search, apply, and connect with top employers through our comprehensive job portal"
        />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          /* Added animation for content entry */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .delay-300 {
            animation-delay: 300ms;
          }

          .delay-600 {
            animation-delay: 600ms;
          }
        `}</style>
      </Head>

      <div className="flex h-screen bg-black text-white overflow-hidden border-2 border-white rounded-3xl m-5 p-5">
        {/* Left content section */}
        <div className="w-full md:w-1/2 px-8 md:px-16 flex flex-col justify-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 fade-in-up">
              FIND YOUR DREAM JOB
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in-up delay-300">
              CONNECT WITH TOP EMPLOYERS
            </h2>

            <ul className="space-y-3 mb-8 fade-in-up delay-600">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">
                  Access hundreds of job listings across multiple industries.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">
                  Apply directly to jobs with your resume or LinkedIn profile.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">
                  Get real-time notifications for new job openings tailored to
                  your profile.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">
                  Track your job applications with ease and stay organized.
                </span>
              </li>
            </ul>

            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-transform duration-300 transform hover:scale-105"
              onClick={() => console.log("Start searching for jobs")}
            >
              START SEARCHING FOR JOBS
            </button>
          </div>
        </div>

        {/* Illustration section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center relative">
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="job.png"
              alt="Description of the image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
