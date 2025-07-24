import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { faEye, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectItems = [
    { 
      id: 1, 
      title: 'JourneyScopes',
      description: 'A mobile travel application built with React Native that allows users to discover and plan their travel experiences. Features include location-based recommendations, itinerary planning, and travel guides.',
      category: 'Mobile App', 
      technologies: ['React Native', 'JavaScript', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&h=300&fit=crop&auto=format',
      githubLink: 'https://github.com/Rajivs1/JourneyScopes',
      demoLink: '#' 
    },
    { 
      id: 2, 
      title: 'StudyNotion',
      description: 'An Ed-Tech platform that provides comprehensive learning experiences for students. Includes features like course management, interactive lessons, and progress tracking.',
      category: 'Web App', 
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop&auto=format',
      githubLink: 'https://github.com/Rajivs1/StudyNotion',
      demoLink: '#' 
    },
    { 
      id: 3, 
      title: 'TopCourse',
      description: 'A course recommendation platform that helps users discover and compare top courses across various learning platforms. Includes filtering, sorting, and personalized recommendations.',
      category: 'Web App', 
      technologies: ['React', 'JavaScript', 'CSS'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&auto=format',
      githubLink: 'https://github.com/Rajivs1/TopCourse',
      demoLink: '#' 
    },
    { 
      id: 4, 
      title: 'Password Generator',
      description: 'A secure random password generator with customizable options for length, character types, and complexity. Helps users create strong, unique passwords for better security.',
      category: 'Utility', 
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&auto=format',
      githubLink: 'https://github.com/Rajivs1/passwordgenerator',
      demoLink: '#' 
    },
    { 
      id: 5, 
      title: 'FitPro',
      description: 'A fitness tracking application that helps users monitor their workouts, nutrition, and health metrics. Features include workout plans, progress tracking, and fitness goals.',
      category: 'Web App', 
      technologies: ['React', 'JavaScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop&auto=format',
      githubLink: 'https://github.com/Rajivs1/FitPro',
      demoLink: '#' 
    },
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Utility'];

  const filteredItems = activeFilter === 'All' 
    ? projectItems 
    : projectItems.filter(item => item.category === activeFilter);

  const getTechnologyIcon = (tech) => {
    switch (tech) {
      case 'React':
      case 'React Native':
        return <FontAwesomeIcon icon={faReact} />;
      case 'JavaScript':
        return <FontAwesomeIcon icon={faJs} />;
      case 'TypeScript':
        return <FontAwesomeIcon icon={faCode} />;
      case 'CSS':
      case 'Tailwind CSS':
      case 'Bootstrap':
        return <FontAwesomeIcon icon={faLaptopCode} />;
      default:
        return <FontAwesomeIcon icon={faCode} />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-6">My Projects</h1>
      <p className="text-light-text dark:text-dark-text text-lg mb-10">Explore my latest work and open-source contributions</p>
      
      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-dark shadow-lg'
                  : 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text hover:text-dark dark:hover:text-light hover:bg-light-secondary dark:hover:bg-dark-secondary border border-light-secondary dark:border-dark-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group bg-light-surface dark:bg-dark-surface rounded-3xl overflow-hidden border border-light-secondary dark:border-dark-secondary hover:border-primary transition-all duration-300 flex flex-col h-full">
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a 
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 hover:bg-light hover:text-dark"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-light text-lg group-hover:text-dark" />
                </a>
                <a 
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 hover:bg-light hover:text-dark"
                >
                  <FontAwesomeIcon icon={faEye} className="text-light text-lg group-hover:text-dark" />
                </a>
              </div>
              <div className="absolute top-4 right-4 bg-dark/80 text-light px-3 py-1 rounded-full text-xs font-medium">
                {item.category}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold text-dark dark:text-light mb-3">{item.title}</h3>
              <p className="text-light-text dark:text-dark-text mb-4 flex-grow">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {getTechnologyIcon(tech)} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 