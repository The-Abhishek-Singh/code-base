"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Carousel state and data
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    {
      src: "/Course/crousel/crousel1.png",
      alt: "IT Skills Training",
      caption: "Cutting-edge IT training",
    },
    {
      src: "/Course/crousel/crousel2.png",
      alt: "Web Development",
      caption: "Learn modern web development",
    },
    {
      src: "/Course/crousel/crousel3.png",
      alt: "Data Science",
      caption: "Master data science skills",
    },
  ];

  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual carousel navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const featuredCourses = [
    {
      id: 1,
      title: "Web-Development",
      rating: 5,
      category: "Development",
      image: "/Course/wd1.webp",
      enrollUrl: "/courses/WEB-DEVELOPMENT", // Added enrollment URL
    },
    {
      id: 2,
      title: "App-Development",
      rating: 5,
      category: "Programming",
      image: "/Course/app1.jpg",
      enrollUrl: "/courses/Application-Development", // Added enrollment URL
    },
    {
      id: 3,
      // title: "Data Science and Machine Learning Essentials",
      title: "Data Science and Artificial Intelligence",
      rating: 5,
      category: "Data Science",
      image: "/Course/data.jpg",
      enrollUrl: "/courses/DATA-SCIENCE-&-AI", // Added enrollment URL
    },
    {
      id: 4,
      title: " Cybersecurity",
      rating: 5,
      category: "Cybersecurity",
      image: "/Course/ethical.jpg",
      enrollUrl: "/courses/CYBER-SECURITY", 
    },
    {
      id: 5,
      title: "Cloud Computing ",
      rating: 5,
      category: "Cloud",
      image: "/Course/cloud.png",
      enrollUrl: "/courses/CLOUD-COMPUTING", 
    },
    {
      id: 6,
      // title: "AWS & DEVOPS",
      title: "AWS",
      rating: 5,
      category: "Networking",
      image: "/Course/aws.jpg",
      enrollUrl: "/courses/AWS-DEVOPS", 
    },
    {
      id: 7,
      title: "INDUSTRIAL AUTOMATION",
      rating: 5,
      category: "Automation",
      image: "/Course/automation.jpg",
      enrollUrl: "/courses/INDUSTRIAL-AUTOMATION", 
    },
    {
      id: 8,
      title: "Information Security",
      rating: 5,
      category: "Security",
      image: "/Course/ethical.jpg",
      enrollUrl: "/courses/INFORMATION-SECURITY", 
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

      {/* Hero Section with Carousel */}
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

          {/* Carousel Component */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            {/* Main Carousel Container */}
            <div className="relative h-80 md:h-96 w-full">
              {/* Carousel Slides */}
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-lg font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all duration-300"
                onClick={prevSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all duration-300"
                onClick={nextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}

              {/* Carousel Indicators
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-red-600 w-4"
                        : "bg-white bg-opacity-50"
                    }`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 relative z-20 pt-28">
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
                    <Link href={course.enrollUrl}>
                      <button className="w-full py-2 bg-red-600 text-white rounded transition-colors duration-300 hover:bg-red-800">
                        Enroll Now
                      </button>
                    </Link>
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
