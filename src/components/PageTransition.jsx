import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

/**
 * PageTransition component that animates page transitions
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to animate
 * @param {string} props.transitionType - Transition type: 'fade', 'slide', 'zoom', 'flip'
 * @param {number} props.duration - Animation duration in seconds
 */
const PageTransition = ({
  children,
  transitionType = 'fade',
  duration = 0.5
}) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const prevPathRef = useRef(location.pathname);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Only animate if the path has changed
    if (prevPathRef.current !== location.pathname) {
      // Exit animation (out)
      const exitTl = gsap.timeline({
        onComplete: () => {
          // Update the previous path reference
          prevPathRef.current = location.pathname;
          
          // Create and play the enter animation (in)
          const enterTl = gsap.timeline();
          
          switch (transitionType) {
            case 'slide':
              enterTl.fromTo(
                container,
                { 
                  x: '100%', 
                  autoAlpha: 0 
                },
                { 
                  x: '0%', 
                  autoAlpha: 1, 
                  duration, 
                  ease: 'power2.out' 
                }
              );
              break;
              
            case 'zoom':
              enterTl.fromTo(
                container,
                { 
                  scale: 0.8, 
                  autoAlpha: 0 
                },
                { 
                  scale: 1, 
                  autoAlpha: 1, 
                  duration, 
                  ease: 'back.out(1.7)' 
                }
              );
              break;
              
            case 'flip':
              enterTl.fromTo(
                container,
                { 
                  rotationY: 90, 
                  autoAlpha: 0, 
                  transformPerspective: 600 
                },
                { 
                  rotationY: 0, 
                  autoAlpha: 1, 
                  duration, 
                  ease: 'power3.out' 
                }
              );
              break;
              
            default: // fade
              enterTl.fromTo(
                container,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration, ease: 'power2.inOut' }
              );
          }
        }
      });
      
      // Apply exit animation based on transition type
      switch (transitionType) {
        case 'slide':
          exitTl.to(container, { 
            x: '-100%', 
            autoAlpha: 0, 
            duration: duration * 0.8, 
            ease: 'power2.in' 
          });
          break;
          
        case 'zoom':
          exitTl.to(container, { 
            scale: 1.2, 
            autoAlpha: 0, 
            duration: duration * 0.8, 
            ease: 'power2.in' 
          });
          break;
          
        case 'flip':
          exitTl.to(container, { 
            rotationY: -90, 
            autoAlpha: 0, 
            transformPerspective: 600, 
            duration: duration * 0.8, 
            ease: 'power3.in' 
          });
          break;
          
        default: // fade
          exitTl.to(container, { 
            autoAlpha: 0, 
            duration: duration * 0.8, 
            ease: 'power2.inOut' 
          });
      }
    } else {
      // Initial load - just animate in
      gsap.fromTo(
        container,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: duration * 0.8 }
      );
    }
  }, [location.pathname, transitionType, duration]);
  
  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition; 