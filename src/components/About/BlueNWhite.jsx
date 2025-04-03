import React from "react";
import ScrollReveal from "../ScrollReveal";

const RedNBlack = ({ 
  missionTitle, 
  missionPoints, 
  visionTitle, 
  visionPoints, 
  missionImage, 
  visionImage,
  missionNumber=1,
  visionNumber=2, 
  visionHidden=0,
  noPoints=0
}) => {
  return (
    <div className="w-full">
      {/* Mission Section - Dark Background */}
      <div className="bg-black text-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Mission Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <ScrollReveal animation="fadeSlideRight" duration={1200} easing="bouncy">
                <div className="flex items-center gap-3 mb-6 relative">
                  <ScrollReveal animation="slightspinFromLeft" duration={1000} delay={300} easing="spring" disableBelow="lg">
                    <div className="text-7xl md:text-8xl opacity-20 font-bold text-red-600 absolute -bottom-[9px] md:-bottom-5 left-0">{missionNumber}</div>
                  </ScrollReveal>
                  <ScrollReveal animation="slideDown" duration={900} delay={600} easing="bouncy">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative">
                      <span className="text-red-500">{missionTitle.split(' ')[0]}</span> {missionTitle.split(' ').slice(1).join(' ')}
                    </h2>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
              
              <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
                {missionPoints.map((point, index) => (
                  <ScrollReveal 
                    key={index} 
                    animation="slightLeft" 
                    duration={800} 
                    delay={800 + (index * 200)} 
                    easing="gentle"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <ScrollReveal 
                        animation="spinIn" 
                        duration={1000} 
                        delay={1000 + (index * 200)} 
                        easing="spring"
                      >
                        <div className={`bg-red-900 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-white font-bold shrink-0 border-2 border-red-700 ${noPoints?`hidden`:`block`}`}>
                          {index + 1}
                        </div>
                      </ScrollReveal>
                      <ScrollReveal 
                        animation="fadeIn" 
                        duration={800} 
                        delay={1100 + (index * 200)}
                      >
                        <p className="text-base sm:text-lg leading-relaxed">{point}</p>
                      </ScrollReveal>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            
            {/* Mission Image - Enhanced with shadow and border */}
            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
              <ScrollReveal 
                animation="fadeSlideLeft" 
                duration={1300} 
                delay={400} 
                easing="spring"
              >
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[24rem] mx-auto relative">
                  <div className="absolute inset-0 bg-red-500 rounded-lg transform rotate-2 translate-x-2 translate-y-2 opacity-30"></div>
                  <img src={missionImage} alt="Mission" className="w-full h-auto rounded-lg relative z-10 border-2 border-red-700 shadow-lg" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vision Section - Red accent on white */}
      <div className={`bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 ${visionHidden ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-evenly">
            {/* Vision Image - Enhanced with shadow and border */}
            <ScrollReveal 
              animation="fadeSlideRight" 
              duration={1200} 
              delay={200} 
              easing="bouncy" 
              className="w-full lg:w-auto flex justify-center items-center mb-6 lg:mb-0"
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[24rem] relative">
                <div className="absolute inset-0 bg-black rounded-lg transform -rotate-2 translate-x-2 translate-y-2 opacity-20"></div>
                <img src={visionImage} alt="Vision" className="w-full h-auto rounded-lg relative z-10 border-2 border-gray-200 shadow-xl" />
              </div>
            </ScrollReveal>
            
            {/* Vision Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fadeSlideLeft" duration={1100} delay={400} easing="spring">
                <div className="flex items-center gap-3 mb-6 relative">
                  <ScrollReveal animation="spinFromRight" duration={1500} delay={600} easing="bouncy" disableBelow="md">
                    <div className="text-7xl md:text-8xl opacity-15 font-bold text-red-600 absolute -bottom-[9px] md:-bottom-5 left-0">{visionNumber}</div>
                  </ScrollReveal>
                  <ScrollReveal animation="slideUp" duration={900} delay={800} easing="gentle">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 relative">
                      <span className="text-red-600">{visionTitle.split(' ')[0]}</span> {visionTitle.split(' ').slice(1).join(' ')}
                    </h2>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
              
              <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
                {visionPoints.map((point, index) => (
                  <ScrollReveal 
                    key={index} 
                    animation="slightRight" 
                    duration={800} 
                    delay={1000 + (index * 200)} 
                    easing="gentle"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <ScrollReveal 
                        animation="spinIn" 
                        duration={1000} 
                        delay={1200 + (index * 200)} 
                        easing="spring"
                      >
                        <div className={`bg-black rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-white font-bold shrink-0 border-2 border-red-500 ${noPoints?`hidden`:`block`}`}>
                          {index + 1}
                        </div>
                      </ScrollReveal>
                      <ScrollReveal 
                        animation="fadeIn" 
                        duration={800} 
                        delay={1300 + (index * 200)}
                      >
                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">{point}</p>
                      </ScrollReveal>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedNBlack;