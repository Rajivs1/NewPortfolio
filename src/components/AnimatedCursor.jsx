import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  
  useEffect(() => {
    const cursorInner = cursorInnerRef.current;
    const cursorOuter = cursorOuterRef.current;
    
    if (!cursorInner || !cursorOuter) return;
    
    // Initial position off screen
    gsap.set(cursorInner, { x: -100, y: -100 });
    gsap.set(cursorOuter, { x: -100, y: -100 });
    
    // Mouse move animation
    const moveCircle = (e) => {
      // Main cursor follows mouse instantly
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      
      // Outer cursor follows with slight delay for trailing effect
      gsap.to(cursorOuter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };
    
    // Link/button hover effect
    const handleLinkHover = () => {
      gsap.to(cursorOuter, {
        scale: 1.5,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
      
      gsap.to(cursorInner, {
        scale: 0.5,
        duration: 0.3,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        ease: "elastic.out(1, 0.3)"
      });
    };
    
    // End of link/button hover effect
    const handleLinkLeave = () => {
      gsap.to(cursorOuter, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
      
      gsap.to(cursorInner, {
        scale: 1,
        backgroundColor: 'var(--cursor-color, #ffffff)',
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };
    
    // Add mouse move listener
    document.addEventListener('mousemove', moveCircle);
    
    // Get all interactive elements for hover effect
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, .interactive');
    
    // Add hover listeners to all interactive elements
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCircle);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  return (
    <>
      {/* Outer larger ring */}
      <div
        ref={cursorOuterRef}
        className="fixed w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      
      {/* Inner dot */}
      <div
        ref={cursorInnerRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
};

export default AnimatedCursor; 