import { Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  return (
    <footer
      style={{
        backgroundColor: "hsl(var(--button-dark))",
        color: "hsl(var(--button-dark-foreground))",
      }}
      className="py-12"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Name and Title */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shoyub Khan</h3>
            <p className="text-gray-300">
              Computer Science Student & Full Stack Developer
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/shoyub"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              onMouseEnter={() => setHoveredIcon("github")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Github
                className={`w-6 h-6 text-gray-300 hover:text-white transition-all duration-300 ${
                  hoveredIcon === "github" ? "scale-110" : ""
                }`}
              />
              {hoveredIcon === "github" && (
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-spin" />
              )}
            </a>

            {/* LinkedIn */}
            <a
              href="http://www.linkedin.com/in/shoyub-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Linkedin
                className={`w-6 h-6 text-gray-300 hover:text-white transition-all duration-300 ${
                  hoveredIcon === "linkedin" ? "scale-110" : ""
                }`}
              />
              {hoveredIcon === "linkedin" && (
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-400 animate-spin" />
              )}
            </a>

            {/* Email */}
            <button
              onClick={() => {
                setShowContact(!showContact);
                navigator.clipboard.writeText("shoyubvk2004@gmail.com");
              }}
              className="relative group"
              onMouseEnter={() => setHoveredIcon("email")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Mail
                className={`w-6 h-6 text-gray-300 hover:text-white transition-all duration-300 ${
                  hoveredIcon === "email" ? "scale-110" : ""
                }`}
              />
              {hoveredIcon === "email" && (
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-green-400 animate-spin" />
              )}
              {showContact && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  Copied to clipboard! 📋
                </span>
              )}
            </button>

            {/* Phone */}
            <button
              onClick={() => {
                setShowContact(!showContact);
                navigator.clipboard.writeText("+91 9951988639");
              }}
              className="relative group"
              onMouseEnter={() => setHoveredIcon("phone")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Phone
                className={`w-6 h-6 text-gray-300 hover:text-white transition-all duration-300 ${
                  hoveredIcon === "phone" ? "scale-110" : ""
                }`}
              />
              {hoveredIcon === "phone" && (
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-purple-400 animate-spin" />
              )}
              {showContact && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  Copied to clipboard! 📋
                </span>
              )}
            </button>
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
