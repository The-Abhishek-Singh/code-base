'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, BookOpen, Award, Briefcase, MapPin, Zap, Users, GraduationCap, Building, Heart, Plane, Camera, School } from 'lucide-react';

const StudyAbroadPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const destinationsRef = useRef(null);
  const processRef = useRef(null);
  const whyUsRef = useRef(null);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Animate destinations sequentially with a more dynamic effect
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setActiveIndex(prev => {
          if (prev === null) return 0;
          if (prev >= 5) {
            clearInterval(interval);
            return 5;
          }
          return prev + 1;
        });
      }, 150); // Slightly faster for more dynamic feel
      
      return () => clearInterval(interval);
    }, 300); // Start animations sooner
    
    return () => clearTimeout(timer);
  }, []);

  // Observer for scroll-triggered animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, options);

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const destinations = [
    {
      title: "United States",
      description: "World-class universities offering diverse programs and vibrant campus life in cities across America.",
      icon: <School className="h-10 w-10 text-red-500" />
    },
    {
      title: "United Kingdom",
      description: "Prestigious education with centuries of academic excellence and rich cultural experiences.",
      icon: <BookOpen className="h-10 w-10 text-red-500" />
    },
    {
      title: "Australia",
      description: "High-quality education in a relaxed atmosphere with beautiful landscapes and multicultural cities.",
      icon: <Globe className="h-10 w-10 text-red-500" />
    },
    {
      title: "Canada",
      description: "Safe, welcoming environment with affordable education options and post-graduation work opportunities.",
      icon: <MapPin className="h-10 w-10 text-red-500" />
    },
    {
      title: "Germany",
      description: "Tuition-free public universities with strong focus on engineering and technology programs.",
      icon: <Building className="h-10 w-10 text-red-500" />
    },
    {
      title: "Custom Study Plans",
      description: "Personalized study abroad strategies tailored to your academic goals, budget, and career aspirations.",
      icon: <GraduationCap className="h-10 w-10 text-red-500" />
    }
  ];

  const processSteps = [
    "Profile Evaluation",
    "Destination Selection",
    "University Applications",
    "Visa Guidance",
    "Pre-Departure Prep",
    "Arrival Support"
  ];

  // Function to generate gradient animation
  const generateGradientAnimation = (index) => {
    const delay = index * 0.1;
    return {
      animation: `gradient-shift 8s ease infinite ${delay}s`,
    };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background lines */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-px bg-gradient-to-r from-red-500 to-transparent" 
              style={{
                top: `${i * 10}%`, 
                width: '100%',
                transform: `translateX(${Math.sin(scrollY / 1000 + i) * 5}%)`,
                opacity: 0.3 + Math.sin(scrollY / 1000 + i) * 0.3,
                transition: 'transform 0.5s ease-out'
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-px bg-gradient-to-b from-gray-500 to-transparent" 
              style={{
                left: `${i * 10}%`, 
                height: '100%',
                transform: `translateY(${Math.cos(scrollY / 1000 + i) * 5}%)`,
                opacity: 0.3 + Math.cos(scrollY / 1000 + i) * 0.3,
                transition: 'transform 0.5s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section with particles */}
      <div className="bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10"></div>
         
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-gray-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-text-gradient">
              Study Abroad Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300 transform transition-all duration-1000 delay-500" 
               style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
              Transform your future with world-class education opportunities across the globe. Your international academic journey starts here.
            </p>
            <button className="bg-red-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center group transition-all duration-300 transform hover:scale-105 hover:bg-red-800 relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore Programs 
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-2" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Destinations Section with staggered animations */}
      <div ref={destinationsRef} className="container mx-auto px-4 py-24 observe-section">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 relative inline-block ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-gradient-x">Top Study Destinations</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 transition-transform duration-1000 delay-500 origin-left" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto transform transition-all duration-1000 delay-700"
             style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            Discover premier educational destinations offering world-class degrees and life-changing cultural experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 p-8 rounded-lg transform transition-all duration-700 hover:bg-gray-800 border border-gray-800 hover:border-red-500 group relative overflow-hidden ${
                activeIndex !== null && index <= activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-red-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
              <div className="mb-6 group relative">
                <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:text-red-400 relative">
                  {destination.icon}
                  <div className="absolute -inset-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-700"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white relative inline-block">
                {destination.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">{destination.description}</p>
              <div className="absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-tl from-red-500 to-transparent rounded-tl-full opacity-0 group-hover:opacity-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process Section with connected animation */}
      <div ref={processRef} className="bg-gray-900 py-24 relative overflow-hidden observe-section">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Animated background effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/10 via-transparent to-transparent"
            style={{
              transform: `translate(${Math.sin(scrollY / 1000) * 10}%, ${Math.cos(scrollY / 1000) * 10}%)`,
              transition: 'transform 1s ease-out'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 transform transition-all duration-1000" 
               style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-gradient-x">
              Your Study Abroad Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A seamless process designed to guide you from application to arrival at your dream university.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-0 relative">
            {/* Animated connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900/50 via-gray-500/50 to-gray-900/50 transform -translate-y-1/2 z-0">
              <div className="absolute top-0 left-0 right-0 h-full bg-red-500/40 animate-pulse"></div>
            </div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="group w-full md:w-auto relative z-10" style={{ transitionDelay: `${index * 150}ms` }}>
                <div 
                  className="relative bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 md:mx-1 h-full flex flex-col items-center justify-center text-center border-t border-gray-800 group-hover:border-red-500 transition-all duration-500 group-hover:bg-black group-hover:bg-opacity-70 transform group-hover:-translate-y-3"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-br from-red-700 to-red-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-red-500/20 relative overflow-hidden">
                      {index + 1}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{step}</span>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-red-500/30 rounded-lg transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute w-8 h-1 top-1/2 right-0 transform translate-x-4 z-20">
                    <div className="h-full w-full bg-red-500/40 animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with animated reveals */}
      <div ref={whyUsRef} className="container mx-auto px-4 py-24 observe-section">
        <div className="text-center mb-16 transform transition-all duration-1000" 
             style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-gradient-x">Why Choose Our Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We provide comprehensive support to make your international education dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg transition-all duration-500 hover:bg-gray-800 border border-gray-800 hover:border-red-500 group relative overflow-hidden transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-xl font-semibold mb-4 text-white relative pb-2 inline-block">
              Expert Academic Guidance
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              {["Personalized university selection based on your profile", "Application strategy to maximize acceptance rates", "Scholarship and financial aid application support"].map((item, i) => (
                <li key={i} className="flex items-start transform transition-all duration-500 hover:translate-x-2 relative pl-6">
                  <span className="absolute left-0 top-0 text-red-500 font-bold transition-all duration-300 group-hover:text-red-400">✓</span>
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500/30 group-hover:w-full transition-all duration-700 delay-100"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg transition-all duration-500 hover:bg-gray-800 border border-gray-800 hover:border-red-500 group relative overflow-hidden transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-bl from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-xl font-semibold mb-4 text-white relative pb-2 inline-block">
              Comprehensive Support
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              {["Visa application assistance with high success rates", "Pre-departure orientation and cultural preparation", "International student community and alumni network"].map((item, i) => (
                <li key={i} className="flex items-start transform transition-all duration-500 hover:translate-x-2 relative pl-6">
                  <span className="absolute left-0 top-0 text-red-500 font-bold transition-all duration-300 group-hover:text-red-400">✓</span>
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500/30 group-hover:w-full transition-all duration-700 delay-100"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section with floating elements */}
      <div className="py-24 relative overflow-hidden observe-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Dynamic floating orbs */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-gray-500 to-gray-800 blur-3xl"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: `${20 + i * 20}%`,
                left: `${20 + i * 25}%`,
                opacity: 0.05 + i * 0.02,
                transform: `translate(${Math.sin(scrollY / 1000 + i) * 50}px, ${Math.cos(scrollY / 1000 + i) * 50}px)`,
                transition: 'transform 3s ease-out'
              }}
            />
          ))}
          
          {/* Additional floating elements on the right side */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-red-700 to-red-900 blur-3xl"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                top: `${50 - i * 15}%`,
                right: `${15 + i * 10}%`,
                opacity: 0.03 + i * 0.01,
                transform: `translate(${Math.cos(scrollY / 1000 + i) * 40}px, ${Math.sin(scrollY / 1000 + i) * 40}px)`,
                transition: 'transform 3s ease-out'
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 animate-gradient-x">Begin Your Global Education Journey</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 transform transition-all duration-1000" 
             style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            Take the first step toward international academic excellence and life-changing cultural experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 relative overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center">
                Free Consultation
                <span className="absolute inset-0 bg-white rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-10"></span>
              </span>
              <span className="absolute -inset-px bg-gradient-to-r from-red-600 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>
            </button>
            <button className="bg-transparent border-2 border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 hover:border-red-400 hover:bg-black hover:bg-opacity-50 group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Download Programs Guide
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              </span>
              <span className="absolute -inset-px bg-gradient-to-r from-red-500 to-transparent rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes animate-gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: animate-gradient-x 3s ease infinite;
        }
        
        .animate-text-gradient {
          background-size: 200% auto;
          animation: animate-gradient-x 4s ease infinite;
        }
        
        .observe-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .observe-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default StudyAbroadPage;