
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {


  const featuredCourses = [
    {
      id: 1,
      title: "Web-Development",
      rating: 5,
      category: "Development",
      image: "/course/wd1.webp", // Consistent image path
    },
    {
      id: 2,
      title: "App-Development",
      rating: 5,
      category: "Programming",
      image: "/course/app1.jpg", // Fixed incomplete path
    },
    {
      id: 3,
      title: "Data Science and Machine Learning Essentials",
      rating: 5,
      category: "Data Science",
      image: "/course/data.jpg",
    },
    {
      id: 4,
      title: " Cybersecurity & Ethical Hacking ",
      rating: 5,
      category: "Cybersecurity",
      image: "/course/cyber.jpg",
    },
    {
      id: 5,
      title: "Cloud Computing ",
      rating: 5,
      category: "Cloud",
      image: "/course/cloud.png",
    },
    {
      id: 6,
      title: "AWS",
      rating: 5,
      category: "Networking",
      image: "/course/aws.jpg",
    },
    {
      id: 7,
      title: "INDUSTRIAL AUTOMATION",
      rating: 5,
      category: "Automation",
      image: "/course/automation.jpg",
    },
    {
      id: 8,
      title: "Information Security",
      rating: 5,
      category: "Security",
      image: "/course/ethical.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Skill to - Unlock Your Full IT Potential</title>
        <meta
          name="description"
          content="Enhance your IT skills with Our Courses"
        />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: black;
            color: white;
            margin-right: 20px;
          }
          * {
            box-sizing: border-box;
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 0.9;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full inline-block">
              EMPOWERING YOUR IT JOURNEY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Your Full <span className="text-red-600">IT</span>{" "}
              Potential with Our Courses.
            </h1>
            <p className="text-gray-400 max-w-lg">
              Master cutting-edge technologies and advance your career with our
              expert-led courses designed for today's tech market demands.
            </p>
            <button
              className="px-6 py-3 bg-red-600 text-white rounded-md transition-colors duration-300 relative overflow-hidden group"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span className="relative z-10">Explore Courses</span>
              <span
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                style={{ backgroundColor: "#b91c1c" }}
              ></span>
            </button>
          </div>
          <div className="relative">
            {/* <div
              className="absolute -inset-4 blur-xl rounded-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(220, 38, 38, 0.2), rgba(124, 58, 237, 0.2))",
                animation: "pulse 3s ease infinite",
              }}
            ></div> */}
            <div className="relative z-10">
              <Image
                src="/images/hero-image.jpg"
                alt="IT Skills Training"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Online Courses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Level up your skills with our most popular courses designed to
              help you succeed in today's tech landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-red-600"
                style={{
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  {/* Image with hover zoom effect */}
                  {course.image ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <div 
                        className="h-full w-full transition-transform duration-300 hover:scale-110"
                        style={{ transformOrigin: "center" }}
                      >
                        <Image
                          src={course.image}
                          alt={course.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      [Course Image]
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-gray-900 text-xs px-2 py-1 rounded">
                    {course.category}
                  </div>
                </div>
                <div className="p-4 flex flex-col" style={{ height: "180px" }}>
                  <h3 className="font-bold text-lg mb-2 transition-colors duration-300 hover:text-red-500">
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">
                      ({course.rating}/5)
                    </span>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full py-2 bg-red-600 text-white rounded transition-colors duration-300 hover:bg-red-800">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}