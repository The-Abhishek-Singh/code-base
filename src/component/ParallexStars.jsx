'use client'
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollReveal from './ScrollReveal';

// Function to generate multiple box shadows that scales with screen width
const generateBoxShadow = (n, screenWidth = 2000) => {
  // Adjust maximum range based on screen width, adding extra buffer
  const maxRange = Math.max(screenWidth * 1.5, 3000);
  
  let value = `${Math.floor(Math.random() * maxRange)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  for (let i = 2; i <= n; i++) {
    value = `${value}, ${Math.floor(Math.random() * maxRange)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
  }
  return value;
};

// Animations
const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const revealAnim = keyframes`
  0% {
    top: 0;
    opacity: 1;
  }
  85% {
    top: 0;
    opacity: 1;
  }
  100% {
    // top: -105%;
    opacity: 0;
  }
`;

// Styled components
const RevealContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  animation: ${revealAnim} 3.85s ease-in-out forwards;
  animation-delay: 2s;
  background: #000;
  overflow: hidden;
`;

const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${props => props.shadowValue};
  animation: ${animStar} 50s linear infinite;
  border-radius: 50%;
  
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${props => props.shadowValue};
    border-radius: 50%;
  }
`;

const Stars2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${props => props.shadowValue};
  animation: ${animStar} 100s linear infinite;
  border-radius: 50%;
  
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${props => props.shadowValue};
    border-radius: 50%;
  }
`;

const Stars3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${props => props.shadowValue};
  animation: ${animStar} 150s linear infinite;
  border-radius: 50%;
  
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${props => props.shadowValue};
    border-radius: 50%;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  transform: translateY(-50%);
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;

`;

const FirstLine = styled.span`
  background: -webkit-linear-gradient(white,whitesmoke, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  font-size: clamp(16px, 4vw, 30px);
  margin-bottom: clamp(5px, 2vw, 10px);
  letter-spacing: clamp(2px, 1vw, 5px);
`;

const SecondLine = styled.span`
  background: -webkit-linear-gradient(white,whitesmoke, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  font-size: clamp(32px, 7vw, 70px);
  font-weight: 400;
  letter-spacing: clamp(2px, 1vw, 5px);
`;

// Wrapper component to handle the reveal logic
const ParallaxStarsReveal = ({ children }) => {
  const [showReveal, setShowReveal] = useState(true);
  const [shadows, setShadows] = useState({
    small: '',
    medium: '',
    big: ''
  });
  
  // Handle star generation based on screen size
  useEffect(() => {
    // Function to adjust number of stars based on screen size
    const getStarCount = (width) => {
      if (width < 600) {
        return { small: 300, medium: 100, big: 50 };
      } else if (width < 1024) {
        return { small: 500, medium: 150, big: 75 };
      } else if (width < 2000) {
        return { small: 700, medium: 200, big: 100 };
      } else {
        // For very large screens, increase the star count
        return { small: 1000, medium: 300, big: 150 };
      }
    };

    // Generate stars
    const generateShadows = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        const counts = getStarCount(width);
        setShadows({
          small: generateBoxShadow(counts.small, width),
          medium: generateBoxShadow(counts.medium, width),
          big: generateBoxShadow(counts.big, width)
        });
      }
    };

    if (typeof window !== 'undefined') {
      // Always show the reveal animation
      setShowReveal(true);
      generateShadows();
      
      // Add cleanup for animation end
      const timer = setTimeout(() => {
        setShowReveal(false);
      }, 7000); // 5s animation + 2s delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Hide the reveal screen after animation
  useEffect(() => {
    // Listen for animation end
    const handleAnimationEnd = () => {
      setShowReveal(false);
    };

    const revealElement = document.getElementById('reveal-container');
    if (revealElement) {
      revealElement.addEventListener('animationend', handleAnimationEnd);
      return () => {
        revealElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [showReveal]);

  return (
    <>
      {children}
      
      {showReveal && (
        <RevealContainer id="reveal-container">
          <ScrollReveal animation="fadeIn" duration={1500} delay={200}>
            <Stars shadowValue={shadows.small} id="stars" />
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" duration={1800} delay={400}>
            <Stars2 shadowValue={shadows.medium} id="stars2" />
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" duration={2000} delay={600}>
            <Stars3 shadowValue={shadows.big} id="stars3" />
          </ScrollReveal>
          
          {/* Title animations */}
          <Title id="title">
            <ScrollReveal animation="slideUp" duration={1000} delay={1000}>
              <FirstLine>Accelerate Your Career Growth with</FirstLine>
            </ScrollReveal>
            <ScrollReveal animation="slideUp" duration={1200} delay={1300}>
              <SecondLine>Careertronic</SecondLine>
            </ScrollReveal>
          </Title>
        </RevealContainer>
      )}
    </>
  );
};

export default ParallaxStarsReveal;