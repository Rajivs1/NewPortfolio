import React from 'react';

const Resume = () => {
  return (
    <div>
      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-dark dark:text-light mb-8">Education</h2>
        <div className="space-y-6">
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">Satyug DArshan INStitute of Engineering and Technology</h3>
                <p className="text-primary font-medium">Bachelor's of Technology , Computer Science and Engineering <span className=""> ( 8 CGPA )</span> </p>
              </div>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">2021 — 2025</span>
            </div>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">New York Academy Of Art</h3>
                <p className="text-primary font-medium">Master of Fine Arts</p>
              </div>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">2018 — 2019</span>
            </div>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">High School Of Art And Design</h3>
                <p className="text-primary font-medium">Bachelor of Applied Science</p>
              </div>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">2016 — 2018</span>
            </div>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-2xl font-semibold text-dark dark:text-light mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">Creative Director</h3>
                <p className="text-primary font-medium">2021 — Present</p>
              </div>
              <span className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium">Current</span>
            </div>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">Art Director</h3>
                <p className="text-primary font-medium">2019 — 2021</p>
              </div>
              <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm font-medium">2 Years</span>
            </div>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">Web Designer</h3>
                <p className="text-primary font-medium">2018 — 2019</p>
              </div>
              <span className="bg-purple-500/10 text-purple-500 px-4 py-2 rounded-full text-sm font-medium">1 Year</span>
            </div>
            <p className="text-light-text dark:text-dark-text leading-relaxed">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 