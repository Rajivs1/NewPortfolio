import React from 'react';

const Resume = () => {
  return (
    <div className="px-4 sm:px-0">
      {/* Education Section */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-xl md:text-2xl font-semibold text-dark dark:text-light mb-6 md:mb-8">Education</h2>
        <div className="space-y-4 md:space-y-6">
          <div className="bg-light-surface dark:bg-dark-surface p-4 md:p-8 rounded-2xl md:rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark dark:text-light mb-1 md:mb-2">JC BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY</h3>
                <p className="text-primary font-medium text-sm md:text-base">Bachelor's of Technology , Computer Science and Engineering <span className=""> ( 8 CGPA )</span> </p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">2021 — 2025</span>
            </div>
            <p className="text-light-text dark:text-dark-text text-sm md:text-base leading-relaxed">
              Pursuing a comprehensive Computer Science curriculum with specialization in software development and artificial intelligence. Engaged in various technical projects including mobile application development, machine learning models, and web development. Active member of the university coding club and participated in multiple hackathons.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-4 md:p-8 rounded-2xl md:rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark dark:text-light mb-1 md:mb-2">USCD DAV PUBLIC SCHOOL</h3>
                <p className="text-primary font-medium text-sm md:text-base">Senior Secondary Education</p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">2018 — 2020</span>
            </div>
            <p className="text-light-text dark:text-dark-text text-sm md:text-base leading-relaxed">
              Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics. Achieved distinction in Mathematics and Computer Science. Participated in inter-school technology competitions and science exhibitions. Served as the head of the school's computer club, organizing workshops and events.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-4 md:p-8 rounded-2xl md:rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark dark:text-light mb-1 md:mb-2">USCD DAV PUBLIC SCHOOL</h3>
                <p className="text-primary font-medium text-sm md:text-base">High School</p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">2016 — 2018</span>
            </div>
            <p className="text-light-text dark:text-dark-text text-sm md:text-base leading-relaxed">
              Completed high school education with a strong foundation in science and mathematics. Discovered my passion for programming during this period, participating in basic coding courses and computer science projects. Recognized with the "Young Innovator Award" for developing a simple calculator application using JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-dark dark:text-light mb-6 md:mb-8">Experience</h2>
        <div className="space-y-4 md:space-y-6">
          <div className="bg-light-surface dark:bg-dark-surface p-4 md:p-8 rounded-2xl md:rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark dark:text-light mb-1 md:mb-2">Software Developer (Midas Group)</h3>
                <p className="text-primary font-medium text-sm md:text-base">Jul 2025 — Present</p>
                <p className="text-primary font-medium text-sm md:text-base">Noida , UP , India</p>
              </div>
              <span className="bg-green-500/10 text-green-500 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">Current</span>
            </div>
            <p className="text-light-text dark:text-dark-text text-sm md:text-base leading-relaxed">
              Working as a Software Developer at Midas Group, where I am responsible for developing and maintaining software applications using Next.js , React , NodeJs , MongoDB , Express , Tailwind CSS , and TypeScript.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-4 md:p-8 rounded-2xl md:rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark dark:text-light mb-1 md:mb-2">Software Developer Intern (Khuban Software Development )</h3>
                <p className="text-primary font-medium text-sm md:text-base">Jan 2025 — Jul 2025</p>
                <p className="text-primary font-medium text-sm md:text-base">Faridabad , Haryana , India</p>
              </div>
              <span className="bg-blue-500/10 text-blue-500 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">6 Months</span>
            </div>
            <p className="text-light-text dark:text-dark-text text-sm md:text-base leading-relaxed">
              Worked as a Software Developer Intern at Khuban Software Development, where I was responsible for developing and maintaining software applications using React , React Native , NodeJs , Swagger and TypeScript.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-4 md:p-8 rounded-2xl md:rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-dark dark:text-light mb-1 md:mb-2">Web Designer (Kalajitha IT Solutions)</h3>
                <p className="text-primary font-medium text-sm md:text-base">Jul 2024 — Sept 2024</p>
                <p className="text-primary font-medium text-sm md:text-base">Bengaluru , Karnataka , India</p>
              </div>
              <span className="bg-purple-500/10 text-purple-500 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">3 Months</span>
            </div>
            <p className="text-light-text dark:text-dark-text text-sm md:text-base leading-relaxed">
              Worked as a Web Designer at Kalajitha IT Solutions, where I was responsible for designing and developing websites using HTML , CSS , JavaScript , and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 