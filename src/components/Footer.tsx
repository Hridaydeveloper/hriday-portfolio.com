
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hriday Das</h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate web developer crafting digital experiences with modern technologies. 
              Always learning, always creating.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">dashriday856@gmail.com</p>
              <p className="text-gray-400">Tripura, India</p>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/hriday-das-390a61286/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={25} />
              </a>
              <a
                href="https://github.com/Hridaydeveloper/"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <Github size={25} />
              </a>
              <a
                href="mailto:dashriday856@gmail.com?subject=Let's%20Connect&body=Hi%20Hriday%2C%20I%20visited%20your%20portfolio..."
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={25} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hriday Das. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made by Hriday Das
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
