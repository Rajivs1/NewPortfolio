import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import { gsap } from 'gsap';
import PageTransition from './PageTransition';

const Layout = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const location = useLocation();
  const mainContentRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) { // Show after scrolling 100px
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  // Animation on route change
  useEffect(() => {
    // Fade out and in on route change
    if (mainContentRef.current) {
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    // Animate title and underline
    if (titleRef.current && underlineRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
      
      gsap.fromTo(
        underlineRef.current,
        { width: 0 },
        { width: "100%", duration: 0.6, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [location.pathname]); // Re-run when route changes

  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'About Me';
      case '/resume':
        return 'Resume';
      case '/portfolio':
        return 'Portfolio';
      case '/skills':
        return 'My Skills';
      case '/contact':
        return 'Contact';
      default:
        return 'About Me';
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Mobile & Tablet Layout */}
      <div className="xl:hidden">
        <div className="p-5">
          {/* Sidebar at top */}
          <div className="mb-5">
            <Sidebar isOpen={true} />
          </div>
          
          <main className="p-0 overflow-auto">
            <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-0 overflow-hidden min-h-[calc(100vh-12rem)] transition-colors duration-300">
              {/* Header with Title and Theme Toggle */}
              <div className="bg-light-surface dark:bg-dark-surface rounded-t-2xl pt-0 -m-0">
                <div className="flex items-center justify-between p-6 pb-4">
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <div>
                      <h1 ref={titleRef} className="text-3xl font-bold text-dark dark:text-light transition-colors duration-300 mb-0">
                        {getPageTitle()}
                      </h1>
                      <div ref={underlineRef} className="h-1 bg-primary w-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Page Content */}
              <div ref={mainContentRef} className="px-6 py-8">
                <PageTransition transitionType="fade" duration={0.5}>
                  <Outlet />
                </PageTransition>
              </div>
            </div>
          </main>
        </div>

        {/* Fixed Bottom Navigation for Mobile & Tablet - Shows on Scroll */}
        <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          showNavigation ? 'transform translate-y-0' : 'transform translate-y-full'
        }`}>
          <div className="bg-light-surface dark:bg-dark-surface shadow-2xl border-t border-light-secondary dark:border-dark-secondary backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Desktop Layout (XL and above) */}
      <div className="hidden xl:flex min-h-screen p-5">
        <Sidebar isOpen={true} />
        
        <main className="flex-1 ml-80 p-0 overflow-auto">
          <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-0 overflow-hidden min-h-[calc(100vh-2.5rem)] transition-colors duration-300">
            {/* Top Header with Navigation and Theme Toggle */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-t-2xl pt-0 -m-0">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-6 pb-6">
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <div>
                    <h1 ref={titleRef} className="text-4xl font-bold text-dark dark:text-light transition-colors duration-300 mb-0">
                      {getPageTitle()}
                    </h1>
                    <div ref={underlineRef} className="h-1 bg-primary w-16"></div>
                  </div>
                </div>
                <div className="lg:pb-2 -mr-6 -mt-6 -mb-6 pr-0 rounded-tr-2xl">
                  <div className="bg-light-secondary dark:bg-dark-secondary rounded-tl-2xl rounded-tr-2xl pl-6 pr-6 pt-6 pb-4 shadow-lg dark:shadow-2xl dark:shadow-black/50">
                    <Navigation />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Page Content */}
            <div ref={mainContentRef} className="px-10 py-8 border-t border-light-secondary dark:border-dark-secondary">
              <PageTransition transitionType="fade" duration={0.5}>
                <Outlet />
              </PageTransition>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout; 