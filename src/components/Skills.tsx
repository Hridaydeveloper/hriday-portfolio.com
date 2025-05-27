
import React from 'react';
import { Code, Server, Database, Cpu, Users, Presentation } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="text-blue-400" size={32} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux'],
      color: 'blue'
    },
    {
      title: 'Backend',
      icon: <Server className="text-green-400" size={32} />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
      color: 'green'
    },
    {
      title: 'Programming',
      icon: <Cpu className="text-purple-400" size={32} />,
      skills: ['C', 'C++', 'Python'],
      color: 'purple'
    },
    {
      title: 'Tools & Tech',
      icon: <Database className="text-yellow-400" size={32} />,
      skills: ['Git', 'GitHub', 'Netlify', 'Hostinger', 'REST APIs'],
      color: 'yellow'
    },
    {
      title: 'Communication',
      icon: <Users className="text-pink-400" size={32} />,
      skills: ['Verbal Communication', 'Written Communication', 'Team Collaboration'],
      color: 'pink'
    },
    {
      title: 'Presentation',
      icon: <Presentation className="text-indigo-400" size={32} />,
      skills: ['Technical Presentations', 'Project Documentation', 'Client Communication'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-500',
      green: 'from-green-500 to-green-600 border-green-500',
      purple: 'from-purple-500 to-purple-600 border-purple-500',
      yellow: 'from-yellow-500 to-yellow-600 border-yellow-500',
      pink: 'from-pink-500 to-pink-600 border-pink-500',
      indigo: 'from-indigo-500 to-indigo-600 border-indigo-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-${category.color}-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} mr-3`}></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className={`h-2 bg-gray-700 rounded-full overflow-hidden`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: '85%',
                      animationDelay: `${(index * 0.2) + 0.5}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
