"use client";
import React, { useState, useEffect } from 'react';


const TravelTourWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tours = [
    {
      image: "",
     
      
      
    },
    {
      image: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847",
     
      
    },
    {
      image: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158",
      
    },
    {
      image: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245",
      
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tours.length);
    }, 2600);

    return () => clearInterval(slideInterval);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // return (
    // //   <div className="flex items-center">
    // //     {[...Array(fullStars)].map((_, i) => (
    // //       <Star key={`full-${i}`} className="text-yellow-400 w-4 h-4" fill="#afe312" />
    // //     ))}
    // //     {hasHalfStar && <StarHalf className="text-yellow-400 w-4 h-4" />}
    // //     {[...Array(5 - Math.ceil(rating))].map((_, i) => (
    // //       <Star key={`empty-${i}`} className="text-gray-300 w-4 h-4" />
    // //     ))}
    // //   </div>
    // );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040a22] via-[#162561] to-[#6f7aa6] relative overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        {tours.map((tour, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={tour.image} 
              alt={tour.title} 
              className="w-full h-full object-cover absolute"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 grid md:grid-cols-2 grid-cols-1 place-items-center min-h-screen gap-12 p-8">
        <div className="bg-transparent text-white w-full max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-6">
          OUR SERVICES
          </h1>
          <p className="text-xl mb-8">
          Careertronic Global Services provides customized solutions for
                  individuals, businesses, and institutions, helping them thrive
                  in the digital era. We offer career development programs,
                  skill training, and job placement for professionals, while
                  businesses benefit from process optimization, automation, and
                  software integration to enhance efficiency and growth.
                  Institutions gain access to digital transformation strategies
                  and innovative technologies to improve operations. With a
                  focus on innovation, efficiency, and success, we empower our
                  clients to stay competitive and achieve their goals in an
                  evolving digital landscape.
          </p>
         
        </div>
        
        

        <div className="w-96 h-[490px] relative">
          {tours.map((tour, index) => (
            <div 
              key={index}
              className={`absolute w-full h-full transition-all duration-1000 ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
            >
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-2 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                {tour.cost}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-lg rounded-b-2xl p-4 text-white">
                <h2 className="text-xl font-semibold mb-2">{tour.title}</h2>
                <p className="text-sm mb-2">{tour.description}</p>
                <div className="flex items-center gap-2">
                  {renderStars(tour.rating)}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTourWebsite;