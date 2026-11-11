import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'hsl(var(--button-dark))', color: 'hsl(var(--button-dark-foreground))' }} className="py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Name and Title */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shoyub Khan</h3>
            <p className="text-gray-300">Computer Science Student & Full Stack Developer</p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/shoyub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="http://www.linkedin.com/in/shoyub-khan" 
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
            © 2024 Shoyub Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;