'use client';
import { useEffect, useRef } from 'react';

const ANIMATIONS = {
  slideLeft: 'opacity-0 translate-x-64', // Slide from right to left
  slideRight: 'opacity-0 -translate-x-64', // Slide from left to right
  slideDown: 'opacity-0 -translate-y-64', // Slide from top to bottom
  slideUp: 'opacity-0 translate-y-64', // Slide from bottom to top
  fadeSlideLeft: 'opacity-0 translate-x-64 scale-95',
  fadeSlideRight: 'opacity-0 -translate-x-64 scale-95',
  fadeSlideDown: 'opacity-0 -translate-y-64 scale-95',
  fadeSlideUp: 'opacity-0 translate-y-64 scale-95',
  slightLeft : 'opacity-0 translate-x-16',
  slightRight : 'opacity-0 -translate-x-16',
  slightUp : 'opacity-0 translate-y-16',
  slightDown : 'opacity-0 -translate-y-16',
  fadeIn: 'opacity-0 scale-95', // Simple fade in with slight scale
  scaleUp: 'opacity-0 scale-75', // Scale up animation
  flipIn: 'opacity-0 rotateX-90', // Flip in animation
  slideBottomLeft: 'opacity-0 translate-x-32 translate-y-32', // From bottom right to top left
  slideBottomRight: 'opacity-0 -translate-x-32 translate-y-32',
  slightBottomLeft: 'opacity-0 translate-x-16 translate-y-16', // From bottom right to top left
  slightBottomRight: 'opacity-0 -translate-x-16 translate-y-16',
  spinIn: 'opacity-0 rotate-180 scale-90',
  // New animations for spinning from left and right
  spinFromLeft: 'opacity-0 -translate-x-64 rotate-180 scale-90',
  spinFromRight: 'opacity-0 translate-x-64 rotate-180 scale-90',
  slightspinFromLeft: 'opacity-0 -translate-x-16 rotate-90 scale-90',
  // More intense spinning animations
  spinRollLeft: 'opacity-0 -translate-x-64 rotate-360 scale-90',
  spinRollRight: 'opacity-0 translate-x-64 rotate-360 scale-90',
};

const EASINGS = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  gentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

const ScrollReveal = ({
  children,
  className = '',
  animation = 'slideLeft',
  duration = 800,
  delay = 0,
  easing = 'smooth',
  index = 0,
  stagger = 0,
  // Simple disable flag that will be used to disable on mobile
  disableBelow = null // 'sm', 'md', 'lg', etc. or null to never disable
}) => {
  const elementRef = useRef(null);
  const animationCompleted = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If disabled on mobile, check screen width
    let isDisabled = false;
    if (disableBelow) {
      const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
      };
      const breakpointWidth = breakpoints[disableBelow] || 0;
      isDisabled = window.innerWidth < breakpointWidth;
    }

    // If disabled, show element immediately without animation
    if (isDisabled) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.style.transition = 'none';
      return;
    }

    // Handle resize to disable animations if window is resized below threshold
    const handleResize = () => {
      if (!disableBelow) return;
      const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
      };
      const breakpointWidth = breakpoints[disableBelow] || 0;
      if (window.innerWidth < breakpointWidth) {
        element.style.opacity = '1';
        element.style.transform = 'none';
        element.style.transition = 'none';
      } else if (!animationCompleted.current) {
        // Reset to initial state if not yet animated and window is resized above threshold
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms ${EASINGS[easing]}`;
        
        // Apply transform based on animation type
        if (animation === 'spinFromLeft') {
          element.style.transform = 'translateX(-16rem) rotate(180deg) scale(0.9)';
        } else if (animation === 'spinFromRight') {
          element.style.transform = 'translateX(16rem) rotate(180deg) scale(0.9)';
        } else if (animation === 'spinRollLeft') {
          element.style.transform = 'translateX(-16rem) rotate(360deg) scale(0.9)';
        } else if (animation === 'spinRollRight') {
          element.style.transform = 'translateX(16rem) rotate(360deg) scale(0.9)';
        } else if (ANIMATIONS[animation].includes('translate-x')) {
          element.style.transform = 'translateX(16rem)';
        } else if (ANIMATIONS[animation].includes('-translate-x')) {
          element.style.transform = 'translateX(-16rem)';
        } else if (ANIMATIONS[animation].includes('translate-y')) {
          element.style.transform = 'translateY(16rem)';
        } else if (ANIMATIONS[animation].includes('-translate-y')) {
          element.style.transform = 'translateY(-16rem)';
        } else if (ANIMATIONS[animation].includes('scale')) {
          element.style.transform = 'scale(0.95)';
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Handle intersection for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationCompleted.current) {
            const totalDelay = delay + (index * stagger);
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0) rotate(0) scale(1)';
              animationCompleted.current = true;
            }, totalDelay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [animation, delay, duration, easing, index, stagger, disableBelow]);

  // We'll apply the animation classes here but handle the actual animation in JS
  return (
    <div
      ref={elementRef}
      className={`${ANIMATIONS[animation]} ${className}`}
      style={{
        willChange: 'transform, opacity',
        transition: `all ${duration}ms ${EASINGS[easing]}`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;