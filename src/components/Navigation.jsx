import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faFileText, 
  faFolderOpen, 
  faCode, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const navItems = [
    { to: '/', text: 'About', icon: faUser },
    { to: '/resume', text: 'Resume', icon: faFileText },
    { to: '/projects', text: 'Projects', icon: faFolderOpen },
    { to: '/skills', text: 'Skills', icon: faCode },
    { to: '/contact', text: 'Contact', icon: faEnvelope }
  ];

  return (
    <nav className="w-full">
      {/* Mobile/Tablet Bottom Navigation Layout */}
      <ul className="flex xl:hidden items-center justify-between w-full">
        {navItems.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 px-2 transition-all duration-300 ${
                  isActive
                    ? 'text-primary'
                    : 'text-light-text dark:text-gray-400 hover:text-dark dark:hover:text-light'
                }`
              }
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />
              <span className="text-xs font-medium">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Top Navigation Layout */}
      <ul className="hidden xl:flex items-center justify-end gap-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-dark shadow-lg'
                    : 'text-light-text dark:text-gray-300 hover:text-dark dark:hover:text-white hover:bg-light-secondary dark:hover:bg-gray-800 dark:hover:shadow-lg'
                }`
              }
            >
              <FontAwesomeIcon icon={item.icon} className="text-sm" />
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 