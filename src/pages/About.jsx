import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faLaptopCode, faCamera } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div>
      {/* About Me Section */}
      <ScrollReveal animation="fade" duration={0.8}>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-dark dark:text-light mb-6">About Me</h2>
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <p className="text-light-text dark:text-dark-text leading-relaxed mb-4">
              Hi, I'm Rajiv Ranjan, a passionate software developer with a strong interest in building intuitive, high-performance web and mobile applications.
              I specialize in technologies like React, React Native, JavaScript, and Node.js, and I love creating clean, efficient, and scalable code.
            </p>
            <p className="text-light-text dark:text-dark-text leading-relaxed mb-4">
              My journey in tech has been driven by curiosity, problem-solving, and a continuous desire to learn and grow.
              Whether it's designing user interfaces or developing backend logic, I enjoy every part of the development lifecycle.
              I believe good software isn't just functional — it should also be a delight to use.
            </p>
            <p className="text-light-text dark:text-dark-text leading-relaxed mb-4">
              I've also worked on projects that include authentication systems, API integrations, and real-time data handling.
              Outside of coding, I enjoy playing cricket, exploring new tools, and collaborating with fellow developers.
            </p>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              My goal is to contribute to impactful projects and grow into a well-rounded software engineer.
              Thanks for visiting my portfolio — feel free to connect with me!
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Service Cards */}
      <ScrollReveal animation="slide-up" duration={0.7}>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-dark dark:text-light mb-8">What I do!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal animation="slide-left" delay={0.1} duration={0.6}>
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <FontAwesomeIcon icon={faCode} className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-4">Web Development</h3>
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={0.2} duration={0.6}>
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <FontAwesomeIcon icon={faPalette} className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-4">Web Design</h3>
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.3} duration={0.6}>
              <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-8 rounded-3xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-2xl text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-4">Mobile Apps</h3>
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={0.4} duration={0.6}>
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <FontAwesomeIcon icon={faCamera} className="text-2xl text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-4">Photography</h3>
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  I make high-quality photos of any category at a professional level.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About; 