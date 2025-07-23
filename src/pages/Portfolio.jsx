import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioItems = [
    { id: 1, title: 'Finance', category: 'Web design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 2, title: 'Orizon', category: 'Web design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 3, title: 'Fundo', category: 'Web design', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 4, title: 'Brawlhalla', category: 'Applications', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 5, title: 'DSM', category: 'Web design', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 6, title: 'MetaSpark', category: 'Web development', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 7, title: 'Summary', category: 'Web development', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 8, title: 'Task Manager', category: 'Applications', image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=400&h=300&fit=crop&auto=format', link: '#' },
    { id: 9, title: 'Arrival', category: 'Web development', image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=300&fit=crop&auto=format', link: '#' }
  ];

  const categories = ['All', 'Web design', 'Applications', 'Web development'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div>
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

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group bg-light-surface dark:bg-dark-surface rounded-3xl overflow-hidden border border-light-secondary dark:border-dark-secondary hover:border-primary/50 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href={item.link}
                  className="w-12 h-12 bg-dark rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300"
                >
                  <FontAwesomeIcon icon={faEye} className="text-light text-lg" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <p className="text-primary text-sm font-medium mb-2">{item.category}</p>
              <h3 className="text-xl font-semibold text-dark dark:text-light">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 