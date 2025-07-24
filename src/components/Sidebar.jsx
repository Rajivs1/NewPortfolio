import React, { useState, useEffect, useRef } from 'react';
import profileImage from "../assets/images/my-avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faChevronDown,
  faChevronUp,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn,
  faGithub,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

const Sidebar = ({ isOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const profileImgRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef([]);
  const socialIconsRef = useRef([]);
  const expandedContentRef = useRef(null);

  useEffect(() => {
    // Profile image animation
    gsap.fromTo(
      profileImgRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.3)" }
    );

    // Name and title animation
    gsap.fromTo(
      [nameRef.current, titleRef.current],
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );

    // Contact items animation - staggered
    gsap.fromTo(
      contactItemsRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }
    );

    // Social icons animation
    gsap.fromTo(
      socialIconsRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)" }
    );
  }, []);

  // Animation for expanding/collapsing on mobile
  useEffect(() => {
    if (expandedContentRef.current) {
      if (isExpanded) {
        gsap.fromTo(
          expandedContentRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(
          expandedContentRef.current,
          { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" }
        );
      }
    }
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Reset refs array before each render
  const addToContactRefs = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };

  const addToSocialRefs = (el) => {
    if (el && !socialIconsRef.current.includes(el)) {
      socialIconsRef.current.push(el);
    }
  };

  return (
    <aside className={`
      w-full lg:w-72 
      bg-light-surface dark:bg-dark-surface 
      px-8 py-6 lg:py-10 
      lg:fixed lg:left-5 lg:top-5 lg:bottom-5 
      rounded-2xl 
      z-10 
      overflow-y-auto 
      transition-all duration-300 ease-in-out
      ${isOpen ? 'block' : 'hidden lg:block'}
    `}>
      {/* Mobile Compact View with Dropdown */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div ref={profileImgRef} className="bg-light-secondary dark:bg-dark-secondary w-16 h-16 rounded-2xl overflow-hidden p-1.5 transition-colors duration-300 flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full rounded-2xl object-cover" 
              />
            </div>
            <div className="min-w-0">
              <h1 ref={nameRef} className="text-xl font-semibold text-dark dark:text-light transition-colors duration-300 truncate">Rajiv Ranjan</h1>
              <span ref={titleRef} className="inline-block py-1 px-3 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-2xl text-xs transition-colors duration-300">Software Developer</span>
            </div>
          </div>
          <button 
            onClick={toggleExpanded}
            className="w-8 h-8 flex items-center justify-center text-dark dark:text-light hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-lg transition-all duration-200"
          >
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="text-sm" />
          </button>
        </div>

        {/* Expanded Details */}
        <div
          ref={expandedContentRef}
          className={`mt-6 overflow-hidden ${!isExpanded ? 'h-0 opacity-0' : ''}`}
        >
          <div className="h-px bg-light-border dark:bg-dark-border mb-6 transition-colors duration-300"></div>
          
          {/* Contact Information */}
          <ul className="grid grid-cols-1 gap-4 mb-6">
            <li ref={addToContactRefs} className="flex items-start text-light-text dark:text-dark-text transition-colors duration-300">
              <div className="w-8 h-8 flex items-center justify-center text-primary mr-3 text-sm flex-shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="block text-xs text-light-text dark:text-dark-text mb-1 transition-colors duration-300">EMAIL</span>
                <span className="text-dark dark:text-light font-normal transition-colors duration-300 break-words text-sm">rajeev04632@gmail.com</span>
              </div>
            </li>
            <li ref={addToContactRefs} className="flex items-start text-light-text dark:text-dark-text transition-colors duration-300">
              <div className="w-8 h-8 flex items-center justify-center text-primary mr-3 text-sm flex-shrink-0">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="block text-xs text-light-text dark:text-dark-text mb-1 transition-colors duration-300">PHONE</span>
                <span className="text-dark dark:text-light font-normal transition-colors duration-300 text-sm">+91 8521982915</span>
              </div>
            </li>
            <li ref={addToContactRefs} className="flex items-start text-light-text dark:text-dark-text transition-colors duration-300">
              <div className="w-8 h-8 flex items-center justify-center text-primary mr-3 text-sm flex-shrink-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="block text-xs text-light-text dark:text-dark-text mb-1 transition-colors duration-300">LOCATION</span>
                <span className="text-dark dark:text-light font-normal transition-colors duration-300 text-sm">Faridabad, Haryana, India</span>
              </div>
            </li>
          </ul>
          
          {/* Social Media Links - Mobile */}
          <div className="flex justify-center gap-4">
            <a ref={addToSocialRefs} href="https://www.linkedin.com/in/rajiv-ranjan1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a ref={addToSocialRefs} href="https://github.com/Rajivs1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a ref={addToSocialRefs} href="https://x.com/RajivRa24145798" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a ref={addToSocialRefs} href="/src/assets/RajivResume001.pdf" download="Rajiv_Ranjan_Resume.pdf" aria-label="Resume" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Full View */}
      <div className="hidden lg:block">
        <div className="text-center mb-5">
          <div ref={profileImgRef} className="bg-light-secondary dark:bg-dark-secondary w-32 h-32 mx-auto mb-5 rounded-2xl overflow-hidden p-2.5 transition-colors duration-300">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full rounded-2xl object-cover" 
            />
          </div>
          <h1 ref={nameRef} className="text-3xl mb-2.5 text-dark dark:text-light font-semibold transition-colors duration-300">Rajiv Ranjan</h1>
          <div className="inline-block mb-2.5">
            <span ref={titleRef} className="inline-block py-2 px-5 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-3xl text-sm transition-colors duration-300">Software Developer</span>
          </div>
        </div>
        
        <div className="h-px bg-light-border dark:bg-dark-border my-8 transition-colors duration-300"></div>
        
        {/* Contact Information - Desktop */}
        <ul className="my-8 space-y-6">
          <li ref={addToContactRefs} className="flex items-start text-light-text dark:text-dark-text transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center text-primary mr-2.5 text-lg flex-shrink-0">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="block text-xs text-light-text dark:text-dark-text mb-1 transition-colors duration-300">EMAIL</span>
              <span className="text-dark dark:text-light font-normal transition-colors duration-300 break-words">rajeev04632@gmail.com</span>
            </div>
          </li>
          <li ref={addToContactRefs} className="flex items-start text-light-text dark:text-dark-text transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center text-primary mr-2.5 text-lg flex-shrink-0">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="block text-xs text-light-text dark:text-dark-text mb-1 transition-colors duration-300">PHONE</span>
              <span className="text-dark dark:text-light font-normal transition-colors duration-300">+91 8521982915</span>
            </div>
          </li>
          <li ref={addToContactRefs} className="flex items-start text-light-text dark:text-dark-text transition-colors duration-300">
            <div className="w-10 h-10 flex items-center justify-center text-primary mr-2.5 text-lg flex-shrink-0">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="block text-xs text-light-text dark:text-dark-text mb-1 transition-colors duration-300">LOCATION</span>
              <span className="text-dark dark:text-light font-normal transition-colors duration-300">Faridabad, Haryana, India</span>
            </div>
          </li>
        </ul>
        
        {/* Social Media Links - Desktop */}
        <div className="flex justify-center mt-8 gap-4">
          <a ref={addToSocialRefs} href="https://www.linkedin.com/in/rajiv-ranjan1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a ref={addToSocialRefs} href="https://github.com/Rajivs1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a ref={addToSocialRefs} href="https://x.com/RajivRa24145798" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a ref={addToSocialRefs} href="/src/assets/RajivResume001.pdf" download="Rajiv_Ranjan_Resume.pdf" aria-label="Resume" className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-dark dark:text-light text-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-dark">
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 