"use client"

import React, { useEffect, useState } from 'react';

const GravityAnimation = () => {
  const [starsSmall, setStarsSmall] = useState('');
  const [starsMedium, setStarsMedium] = useState('');
  const [starsBig, setStarsBig] = useState('');

  // Generate the random stars on mount
  useEffect(() => {
    // Generate multiple box shadows for stars
    const multipleBoxShadow = (n) => {
      let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
      for (let i = 2; i <= n; i++) {
        value = `${value}, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
      }
      return value;
    };

    setStarsSmall(multipleBoxShadow(700));
    setStarsMedium(multipleBoxShadow(200));
    setStarsBig(multipleBoxShadow(100));
  }, []);

  return (
    <div className="fixed h-full w-full font-sans text-white" style={{
      fontFamily: "'Lato', sans-serif",
      background: 'radial-gradient(ellipse at bottom, #0C1116 0%, #090a0f 100%)'
    }}>
      {/* Stars Layers */}
      <div className="relative" style={{
        width: '1px',
        height: '1px',
        background: 'transparent',
        boxShadow: starsSmall,
        animation: 'animStar 50s linear infinite',
      }}>
        <div className="absolute" style={{
          top: '2000px',
          width: '1px',
          height: '1px',
          background: 'transparent',
          boxShadow: starsSmall
        }}></div>
      </div>

      <div className="relative" style={{
        width: '2px',
        height: '2px',
        background: 'transparent',
        boxShadow: starsMedium,
        animation: 'animStar 100s linear infinite',
      }}>
        <div className="absolute" style={{
          top: '2000px',
          width: '2px',
          height: '2px',
          background: 'transparent',
          boxShadow: starsMedium
        }}></div>
      </div>

      <div className="relative" style={{
        width: '3px',
        height: '3px',
        background: 'transparent',
        boxShadow: starsBig,
        animation: 'animStar 150s linear infinite',
      }}>
        <div className="absolute" style={{
          top: '2000px',
          width: '3px',
          height: '3px',
          background: 'transparent',
          boxShadow: starsBig
        }}></div>
      </div>

      {/* Horizon */}
      <div className="absolute" style={{
        width: '160%',
        height: '70%',
        borderRadius: '100% / 100%',
        background: '#038bff',
        filter: 'blur(30px)',
        left: '50%',
        bottom: '-20%',
        marginLeft: '-80%'
      }}>
        <div className="absolute w-full h-full" style={{
          borderRadius: '100% / 100%',
          background: '#215496',
          filter: 'blur(200px)',
          opacity: 0.7,
          top: '-10%'
        }}></div>
      </div>

      {/* Earth */}
      <div className="absolute" style={{
        width: '200%',
        height: '100%',
        background: 'black',
        borderRadius: '100% / 100%',
        left: '50%',
        bottom: '-50%',
        marginLeft: '-100%',
      }}>
        <div className="absolute w-full h-full" style={{
          borderRadius: '100% / 100%',
          boxShadow: 'inset 0px 0px 62px 20px rgba(60,105,138,0.85)'
        }}></div>
        <div className="absolute w-full h-full" style={{
          borderRadius: '100% / 100%',
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)'
        }}></div>
      </div>

      {/* Title */}
      <div className="absolute inset-x-0 text-center font-light" style={{
        top: '36%',
        marginTop: '-80px',
        fontSize: '130px',
        letterSpacing: '20px',
        paddingLeft: '20px',
        background: '-webkit-linear-gradient(white, rgb(219, 221, 224), #38495a)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: '6s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease',
        animationName: 'animGravity'
      }}>
        {/* GRAVITY */}
      </div>

      {/* Subtitle */}
      <div className="absolute inset-x-0 top-3/4 text-center font-light text-2xl" style={{
        letterSpacing: '6px',
      }}>
        <span className="text-gray-200" style={{
          animationDuration: '6s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease',
          animationName: 'animDont'
        }}>
          {/* DONT */}
        </span>{' '}
        <span className="text-gray-200" style={{
          animationDuration: '6s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease',
          animationName: 'animLet'
        }}>
          {/* LET */}
        </span>{' '}
        <span className="text-gray-200" style={{
          animationDuration: '6s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease',
          animationName: 'animGo'
        }}>
          {/* GO */}
        </span>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }

        @keyframes animGravity {
          0% {
            transform: translateY(-26px);
            opacity: 0;
          }
          30%, 80% {
            letter-spacing: 40px;
            padding-left: 40px;
            transform: translateY(0px);
            opacity: 1;
          }
          92%, 100% {
            letter-spacing: 35px;
            padding-left: 35px;
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @keyframes animDont {
          0%, 15% {
            transform: translateY(-26px);
            opacity: 0;
          }
          35%, 80% {
            transform: translateY(0px);
            opacity: 1;
          }
          92%, 100% {
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @keyframes animLet {
          0%, 25% {
            transform: translateY(-26px);
            opacity: 0;
          }
          45%, 80% {
            transform: translateY(0px);
            opacity: 1;
          }
          92%, 100% {
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @keyframes animGo {
          0%, 35% {
            transform: translateY(-26px);
            opacity: 0;
          }
          55%, 80% {
            transform: translateY(0px);
            opacity: 1;
          }
          92%, 100% {
            transform: translateY(-4px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GravityAnimation;