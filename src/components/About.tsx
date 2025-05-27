
import React from 'react';
import { GraduationCap, MapPin, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate and dedicated web developer currently pursuing my B.Tech in Computer Science at 
              ICFAI University, Tripura. I specialize in creating sleek and user-friendly web experiences using 
              modern technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both front-end and back-end development, I'm always exploring 
              innovative ways to build scalable web solutions. My journey in tech is driven by curiosity 
              and a desire to solve real-world problems through code.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-white">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-gray-400">ICFAI University, Tripura (2023–Present)</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">High School (I - XII)</h4>
                  <p className="text-gray-400">Kendriya Vidyalaya Kunjaban No.1, Agartala (2011 - 2023)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Briefcase className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Current Internships</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-white">AI & ML Developer</h4>
                  <p className="text-gray-400">NIT Agartala</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Full Stack Developer</h4>
                  <p className="text-gray-400">Ardent Computers Pvt. Ltd. (Kolkata)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Award className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Extracurriculars</h3>
              </div>
              <p className="text-gray-400">Active participant in hackathons and coding competitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
