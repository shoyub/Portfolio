import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-button-dark text-button-dark-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Name and Title */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Vansh Kapoor</h3>
            <p className="text-gray-300">FullStack Software Developer</p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/kapoor-codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/kapoor_twts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vansh-kapoor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Vansh Kapoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;