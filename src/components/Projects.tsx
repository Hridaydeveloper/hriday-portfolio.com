
import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Cloud, Car, Zap, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    // {
    //   title: 'Uber Clone App',
    //   description: 'A fully functional ride-sharing application with real-time tracking, user authentication, and payment integration.',
    //   tech: ['React.js', 'Firebase', 'Google Maps API'],
    //   icon: <Smartphone className="text-blue-400" size={24} />,
    //   gradient: 'from-blue-500 to-cyan-500'

    // },
        {
      title: 'Simplifixr Website (StartUp)',
      description: 'Modern service website with React-based architecture and smooth animations.',
      tech: ['React', 'CSS Modules', 'Framer Motion'],
      // icon: <Zap className="text-red-400" size={24} />,
      imageUrl: '/simplifixr.jpg',
      gradient: 'from-red-500 to-pink-500',
      demoUrl: 'https://simplifixr-service-sphere.lovable.app/'
    },
    {
      title: 'Airbnb Clone',
      description: 'Modern accommodation booking platform with responsive design and interactive user interface.',
      tech: ['HTML', 'CSS', 'Context API'],
      // icon: <Cloud className="text-green-400" size={24} />,
      imageUrl: 'https://venturebeat.com/wp-content/uploads/2014/07/airbnb-logo-red.jpg?fit=2560%2C1440&strip=all',
      gradient: 'from-green-500 to-emerald-500',
      demoUrl: 'https://hridaydeveloper.github.io/airbnb-clone.com/'
      // codeUrl: 'https://hridaydeveloper.github.io/airbnb-clone.com/#'
      
    },
    {
      title: 'Weather Forecast Website',
      description: 'Dynamic weather application providing real-time weather data with beautiful UI animations.',
      tech: ['HTML', 'CSS', 'JavaScript','Weather API'],
      // icon: <Cloud className="text-purple-400" size={24} />,
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*IBU62zoM5nj3BNLzQ7rEKQ.png',
      gradient: 'from-purple-500 to-indigo-500',
      demoUrl: 'https://hridayforecast.netlify.app/'
    },
    {
      title: 'BMW Performance Website',
      description: 'Sleek automotive showcase website featuring BMW cars with stunning visual effects.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      // icon: <Car className="text-yellow-400" size={24} />,
      imageUrl: 'https://wallpapercave.com/wp/wp9209304.jpg',
      gradient: 'from-yellow-500 to-orange-500',
      demoUrl: 'https://hridaybmwsite.netlify.app/'
    },
    {
      title: 'Spotitube Music Player',
      description: 'Modern music player interface website with some install songs.',
      tech: ['HTML', 'CSS Modules', 'JavaScript'],
      // icon: <Zap className="text-red-400" size={24} />,
      imageUrl: 'https://i.pinimg.com/originals/76/ab/1a/76ab1a441934010f9db3dd7f6bf35d66.png',
      gradient: 'from-red-500 to-pink-500',
      demoUrl: 'https://spotitubeplayer.netlify.app/'
    },
    {
      title: 'Animated Login Page',
      description: 'Clean and modern authentication interface with smooth transitions and micro-interactions.',
      tech: ['HTML', 'CSS Animations', 'Form Validation'],
      // icon: <Lock className="text-indigo-400" size={24} />,
      imageUrl: 'https://cdn1.vectorstock.com/i/1000x1000/87/60/website-login-page-template-design-vector-36688760.jpg',
      gradient: 'from-indigo-500 to-purple-500',
      demoUrl: 'https://hridaydeveloper.github.io/-attractive-login-page/'
    },
    //   {
    //   title: 'My Portfolio website',
    //   description: 'Clean and modern porfolio that showcase my Full-Stack skills with smooth transitions and attractive UI/UX.',
    //   tech: ['HTML', 'CSS Animations', 'Form Validation'],
    //   icon: <Lock className="text-indigo-400" size={24} />,
    //   gradient: 'from-indigo-500 to-purple-500',
    //   demoUrl: 'https://hridaydeveloper.github.io/airbnb-clone.com/'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                  <img
    src={project.imageUrl}
    alt={project.title}
    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
  />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <div className="bg-white/10  group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div> */}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-black/30 text-white hover:bg-black/50 transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                  <button className="bg-black/30  text-white hover:bg-black/50 transition-colors duration-200">
                    <Github size={16} />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                   <a
    href={project.demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
  >
    <ExternalLink size={16} className="mr-2" />
    Live Demo
  </a>

                  {/* Here is my code button section */}
                  {/* <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    <Github size={16} className="mr-2" />
                    Code
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Code size={20} className="inline-block mr-2" />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
