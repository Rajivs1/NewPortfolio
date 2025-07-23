import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faServer, faMobile, faTools, faDatabase, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from '../components/ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: faCode,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/40',
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'HTML/CSS', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'Redux', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: faServer,
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/40',
      skills: [
        { name: 'Node.js', proficiency: 90 },
        { name: 'Express', proficiency: 85 },
        { name: 'RESTful APIs', proficiency: 90 },
        { name: 'GraphQL', proficiency: 75 },
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: faMobile,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/40',
      skills: [
        { name: 'React Native', proficiency: 85 },
        { name: 'Expo', proficiency: 80 },
        { name: 'Mobile UI/UX', proficiency: 75 },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: faDatabase,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/40',
      skills: [
        { name: 'MongoDB', proficiency: 85 },
        { name: 'MySQL', proficiency: 80 },
       
      ]
    },
    {
      id: 'devops',
      name: 'Tools',
      icon: faTools,
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/40',
      skills: [
        { name: 'Git', proficiency: 90 },
        { name: 'GitHub', proficiency: 85 },
        { name: 'VSCode', proficiency: 95 },
        { name: 'IntelliJ IDEA', proficiency: 80 },
        { name: 'Excel', proficiency: 85 },
        { name: 'PowerPoint', proficiency: 80 },
      ]
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: faUsers,
      color: 'text-primary',
      bgColor: 'bg-primary/20',
      borderColor: 'border-primary/40',
      skills: [
        { name: 'Team Collaboration', proficiency: 95 },
        { name: 'Communication', proficiency: 90 },
        { name: 'Problem Solving', proficiency: 95 },
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-dark dark:text-light mb-8">My Skills</h2>
      <p className="text-light-text dark:text-dark-text mb-10">
        I've developed expertise across various technologies and domains throughout my career. 
        Here's a comprehensive overview of my technical proficiency and soft skills.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <ScrollReveal 
            key={category.id} 
            animation="slide-up" 
            duration={0.7} 
            delay={0.1}
          >
            <div className={`p-6 rounded-3xl border ${category.borderColor} transition-all duration-300 hover:shadow-lg`}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                  <FontAwesomeIcon icon={category.icon} className={`text-xl ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-dark dark:text-light">{category.name}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-dark dark:text-light font-medium">{skill.name}</span>
                      <span className="text-light-text dark:text-dark-text">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-light-secondary dark:bg-dark-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${category.bgColor} rounded-full`}
                        style={{ width: `${skill.proficiency}%`, opacity: 0.8 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal animation="fade" duration={0.8} delay={0.3} className="mt-12">
        <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-3xl border border-light-secondary dark:border-dark-secondary">
          <h3 className="text-xl font-semibold text-dark dark:text-light mb-4">Continuous Learning</h3>
          <p className="text-light-text dark:text-dark-text mb-6">
            I'm passionate about continuous learning and staying current with the latest technologies. 
            I regularly complete courses, attend workshops, and contribute to open source projects to enhance my skills.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'JavaScript', 'TypeScript', 'React Native', 'Next.js', 'MongoDB', 'Express', 'GraphQL', 'Redux', 'Tailwind CSS', 'REST API', 'Git', 'Firebase', 'AWS'].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Skills; 