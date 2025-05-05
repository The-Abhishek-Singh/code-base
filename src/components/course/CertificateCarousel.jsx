'use client';
import { useState } from "react";
import Image from "next/image";

const CertificateCarousel = () => {
    const certificates = [
        {
          id: 1,
          image: '/coursePage/certificate1.jpg',
          title: 'Intership Completion (DS)'
        },
        {
          id: 2,
          image: '/coursePage/certificate2.jpg',
          title: 'Live Project Completion (DS)'
        },
        {
          id: 3,
          image: '/coursePage/certificate3.jpg',
          title: 'Portfolio Completion (FS)'
        },
        {
          id: 4,
          image: '/coursePage/certificate4.jpg',
          title: 'Program Completion (FS)'
        },
        {
          id: 5,
          image: '/coursePage/certificate5.jpg',
          title: 'Program Completion (DS)'
        },
        {
          id: 6,
          image: '/coursePage/certificate6.jpg',
          title: 'Program Completion (IA)'
        }
    
      ];
  const [current, setCurrent] = useState(0);
  const total = certificates.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-48 sm:w-full max-w-xl mx-auto overflow-hidden rounded-lg">
      <div className="flex transition-transform h-64 duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {certificates.map((cert, index) => (
          <div key={index} className="min-w-full flex justify-center items-center bg-green-900">
            <Image
              src={cert.image}
              alt={cert.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-full"
            />
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow">
        ▶
      </button>
    </div>
  );
};

export default CertificateCarousel;
