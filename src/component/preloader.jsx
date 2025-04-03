"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power4, Elastic, Back } from "gsap";

const AdvancedPreloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const particlesRef = useRef([]);
  const sideBubblesLeftRef = useRef([]);
  const sideBubblesRightRef = useRef([]);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const particleCount = 50;
      const container = preloaderRef.current;

      particlesRef.current = Array.from({ length: particleCount }, () => {
        const particle = document.createElement("div");
        particle.className = "absolute rounded-full bg-red-500/50 opacity-0";
        container.appendChild(particle);
        return particle;
      });
    };

    // Create side bubbles
    const createSideBubbles = () => {
      const bubbleCount = 5;
      const container = preloaderRef.current;

      // Left side bubbles
      sideBubblesLeftRef.current = Array.from({ length: bubbleCount }, () => {
        const bubble = document.createElement("div");
        bubble.className = "absolute rounded-full bg-red-500/70 opacity-0";
        container.appendChild(bubble);
        return bubble;
      });

      // Right side bubbles
      sideBubblesRightRef.current = Array.from({ length: bubbleCount }, () => {
        const bubble = document.createElement("div");
        bubble.className = "absolute rounded-full bg-red-500/70 opacity-0";
        container.appendChild(bubble);
        return bubble;
      });
    };

    // Smoothly animate side bubbles
    const animateSideBubbles = () => {
      // Animate left side bubbles with improved easing
      sideBubblesLeftRef.current.forEach((bubble, index) => {
        const size = gsap.utils.random(10, 30);
        gsap.set(bubble, {
          width: size,
          height: size,
          left: "-10%",
          top: `${30 + index * 15}%`,
          opacity: 0,
          transformOrigin: "center center",
        });

        // Improved animation with smoother easing and transitions
        gsap.to(bubble, {
          left: "15%",
          opacity: [0, 0.7, 0],
          scale: [1, 1.5, 1],
          duration: gsap.utils.random(2.5, 4),
          ease: "sine.inOut",
          repeat: -1,
          delay: index * 0.4,
          yoyo: true,
        });
      });

      // Animate right side bubbles with improved easing
      sideBubblesRightRef.current.forEach((bubble, index) => {
        const size = gsap.utils.random(10, 30);
        gsap.set(bubble, {
          width: size,
          height: size,
          right: "-10%",
          top: `${40 + index * 15}%`,
          opacity: 0,
          transformOrigin: "center center",
        });

        // Improved animation with smoother easing and transitions
        gsap.to(bubble, {
          right: "15%",
          opacity: [0, 0.7, 0],
          scale: [1, 1.5, 1],
          duration: gsap.utils.random(2.5, 4),
          ease: "sine.inOut",
          repeat: -1,
          delay: index * 0.4,
          yoyo: true,
        });
      });
    };

    // Smoothly animate particles
    const animateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        const size = gsap.utils.random(5, 20);

        gsap.set(particle, {
          width: size,
          height: size,
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
          opacity: 0,
          transformOrigin: "center center",
        });

        // Improved particle animation with better easing and smoother transitions
        gsap.to(particle, {
          opacity: [0, gsap.utils.random(0.4, 0.7), 0],
          scale: [1, gsap.utils.random(1.2, 1.8), 1],
          x: "+=" + gsap.utils.random(-50, 50),
          y: "+=" + gsap.utils.random(-50, 50),
          duration: gsap.utils.random(2, 4),
          ease: "power2.inOut",
          repeat: -1,
          delay: index * 0.02,
          yoyo: true,
        });
      });
    };

    // Create smoother GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
        // Clean up particles and bubbles
        particlesRef.current.forEach((particle) => particle.remove());
        sideBubblesLeftRef.current.forEach((bubble) => bubble.remove());
        sideBubblesRightRef.current.forEach((bubble) => bubble.remove());
      },
    });

    // Initial setup
    createParticles();
    createSideBubbles();
    gsap.set([textRef.current, logoRef.current], {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    // Animate particles and side bubbles
    animateParticles();
    animateSideBubbles();

    // Enhanced animation sequence with smoother transitions
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.2,
        rotation: -180,
        boxShadow: "0 0 0px 0px rgba(255,0,0,0)",
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        boxShadow: "0 20px 50px 10px rgba(255,0,0,0.3)",
        duration: 1.8, // Slightly longer for smoother animation
        ease: Elastic.easeOut.config(1, 0.3), // Smoother elastic effect
      }
    )
      .fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          letterSpacing: "20px",
          filter: "blur(5px)", // Added blur effect for smoother appearance
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          letterSpacing: "0px",
          filter: "blur(0px)",
          duration: 1.4, // Slightly longer for smoother animation
          ease: Power4.easeOut,
        },
        "-=0.9" // Better overlap timing
      )
      .fromTo(
        progressBarRef.current,
        {
          width: "0%",
          backgroundColor: "rgba(239,68,68,0)",
        },
        {
          width: "100%",
          backgroundColor: "rgba(239,68,68,1)",
          duration: 2.2, // Slightly longer for smoother progress
          ease: "power2.inOut", // Smoother easing for the progress bar
        },
        "-=1.2" // Better overlap timing
      )
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 1.1, // Reduced scale for smoother exit
        duration: 1.5,
        delay: 0.5,
        ease: "power2.inOut", // Smoother exit transition
        onComplete: () => {
          preloaderRef.current.style.display = "none";
        },
      });

    // Cleanup function
    return () => {
      tl.kill();
      particlesRef.current.forEach((particle) => particle.remove());
      sideBubblesLeftRef.current.forEach((bubble) => bubble.remove());
      sideBubblesRightRef.current.forEach((bubble) => bubble.remove());
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center 
                 bg-black text-white z-50 overflow-hidden"
    >
      <div
        ref={logoRef}
        className="relative mb-4 w-32 h-32 bg-black rounded-full flex items-center 
                   justify-center shadow-2xl transform hover:rotate-[360deg] 
                   transition-transform duration-1000 group"
      >
        <img
          src="/FooterLogo.png"
          alt="Careertronic Logo"
          className="w-20 h-20 object-contain"
        />
        {/* Hover glow effect */}
        <div
          className="absolute inset-0 bg-red-500 rounded-full opacity-0 
                        group-hover:opacity-30 transition-opacity duration-500 
                        animate-ping"
        ></div>
      </div>
      <h1
        ref={textRef}
        className="text-5xl font-bold  tracking-wide text-center 
                   text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]"
      >
        Careertronic
      </h1>
      <div className="absolute bottom-10 w-full flex justify-center">
        <div
          ref={progressBarRef}
          className="h-1 bg-red-500 opacity-70"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default AdvancedPreloader;
