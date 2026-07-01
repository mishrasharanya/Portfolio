import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>"In God we trust, all others must bring data." — W. Edwards Deming</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;