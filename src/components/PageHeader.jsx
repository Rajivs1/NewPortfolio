import React from 'react';
import Navigation from './Navigation';

const PageHeader = ({ title }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 mb-6">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl font-bold text-dark dark:text-light transition-colors duration-300 mb-2">
            {title}
          </h1>
          <div className="h-1 bg-primary w-16"></div>
        </div>
        <div className="order-1 lg:order-2 lg:pb-2">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 