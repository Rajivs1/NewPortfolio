import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-14 h-7 rounded-full p-1 transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-dark-secondary border border-dark-border' 
          : 'bg-light-secondary border border-light-border'
        }
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${isDark ? 'focus:ring-offset-dark-bg' : 'focus:ring-offset-light-bg'}
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`
          flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ease-in-out
          ${isDark 
            ? 'transform translate-x-0 bg-primary text-dark' 
            : 'transform translate-x-7 bg-primary text-dark'
          }
        `}
      >
        <FontAwesomeIcon 
          icon={isDark ? faMoon : faSun} 
          className="text-xs"
        />
      </div>
    </button>
  );
};

export default ThemeToggle; 