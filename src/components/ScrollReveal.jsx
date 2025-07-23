import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal component to animate elements as they enter the viewport
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to reveal
 * @param {string} props.animation - Animation type: 'fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'zoom', 'rotate'
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Animation duration (in seconds)
 * @param {string} props.ease - GSAP easing function
 * @param {string} props.className - Additional CSS classes
 */
const ScrollReveal = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  ease = 'power2.out',
  className = '',
  ...rest
}) => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;

    // Define animation properties based on animation type
    let fromVars = { autoAlpha: 0 };
    
    switch (animation) {
      case 'slide-up':
        fromVars = { ...fromVars, y: 50 };
        break;
      case 'slide-down':
        fromVars = { ...fromVars, y: -50 };
        break;
      case 'slide-left':
        fromVars = { ...fromVars, x: 50 };
        break;
      case 'slide-right':
        fromVars = { ...fromVars, x: -50 };
        break;
      case 'zoom':
        fromVars = { ...fromVars, scale: 0.8 };
        break;
      case 'rotate':
        fromVars = { ...fromVars, rotation: 15 };
        break;
      default:
        // 'fade' is the default
        break;
    }

    // Set initial state (invisible)
    gsap.set(element, fromVars);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      }
    });

    tl.to(element, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      duration,
      delay,
      ease,
    });

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [animation, delay, duration, ease]);

  return (
    <div 
      ref={triggerRef} 
      className={className} 
      {...rest}
    >
      <div ref={elementRef}>
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal; 