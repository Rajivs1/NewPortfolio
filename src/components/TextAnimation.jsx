import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

/**
 * TextAnimation component for creating animated text effects
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The text to animate
 * @param {string} props.type - Animation type: 'chars', 'words', 'lines'
 * @param {string} props.animation - Animation effect: 'fadeIn', 'slideUp', 'slideDown', 'rotateIn', 'elastic'
 * @param {number} props.duration - Animation duration in seconds
 * @param {number} props.stagger - Stagger amount between elements
 * @param {string} props.className - Additional CSS classes
 */
const TextAnimation = ({
  children,
  type = 'chars',
  animation = 'fadeIn',
  duration = 0.5,
  stagger = 0.02,
  delay = 0,
  className = '',
}) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    // Create SplitText instance
    const split = new SplitText(textRef.current, {
      type: type === 'chars' ? 'chars' : type === 'words' ? 'words' : 'lines',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
    });
    
    // Store reference to split for cleanup
    splitRef.current = split;
    
    // Set initial state
    const elements = split[type === 'chars' ? 'chars' : type === 'words' ? 'words' : 'lines'];
    gsap.set(elements, { autoAlpha: 0 });
    
    // Animation properties
    let fromVars = {};
    
    switch (animation) {
      case 'slideUp':
        fromVars = { y: '100%', autoAlpha: 0 };
        break;
      case 'slideDown':
        fromVars = { y: '-100%', autoAlpha: 0 };
        break;
      case 'rotateIn':
        fromVars = { autoAlpha: 0, rotationX: -90, transformOrigin: '50% 50% -20' };
        break;
      case 'elastic':
        fromVars = { autoAlpha: 0, scale: 0.5 };
        break;
      default:
        // 'fadeIn' is default
        fromVars = { autoAlpha: 0 };
    }
    
    // Set initial position
    gsap.set(elements, fromVars);
    
    // Create timeline and animate
    const tl = gsap.timeline({ delay });
    
    // Animation based on type
    switch (animation) {
      case 'slideUp':
      case 'slideDown':
        tl.to(elements, { 
          y: 0, 
          autoAlpha: 1, 
          duration, 
          stagger, 
          ease: 'power2.out' 
        });
        break;
      case 'rotateIn':
        tl.to(elements, { 
          rotationX: 0, 
          autoAlpha: 1, 
          duration, 
          stagger, 
          ease: 'back.out(1.7)' 
        });
        break;
      case 'elastic':
        tl.to(elements, { 
          scale: 1, 
          autoAlpha: 1, 
          duration, 
          stagger, 
          ease: 'elastic.out(1, 0.3)' 
        });
        break;
      default:
        // 'fadeIn' is default
        tl.to(elements, { 
          autoAlpha: 1, 
          duration, 
          stagger, 
          ease: 'power2.inOut' 
        });
    }
    
    // Cleanup function
    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
      tl.kill();
    };
  }, [children, type, animation, duration, stagger, delay]);
  
  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default TextAnimation; 