
import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
  <img
    src="/image.png"
    alt="Hriday Das"
    className="w-full h-full object-cover"
  />
</div>

              {/* <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-lg animate-pulse"></div> */}
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Hriday Das</span>
            </h1>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Hire Me To Design Your Website</span>
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              A passionate Web Developer and Full-Stack Enthusiast
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into interactive digital experiences using modern technologies. 
            Currently pursuing B.Tech in Computer Science at ICFAI University, Tripura.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline-block mr-2" size={20} />
              Get in Touch
            </button>
          </div>

<div className="pt-4 flex justify-center">
  <a
    href="/resume.docx"
    download="Hriday_Das_Resume.docx"
    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center hover:scale-105 transition-transform"
  >
    <Download size={20} className="mr-2" />
    Download Resume
  </a>
</div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
