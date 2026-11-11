import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Social Icons */}
          <div className="flex lg:flex-col items-center gap-6">
            <a 
              href="https://leetcode.com/v4nshh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.153 7.758-.025l.039-.038c2.248-2.165 2.248-5.68 0-7.845l-4.277-4.193a1.374 1.374 0 0 0-1.961.025 1.375 1.375 0 0 0 .025 1.961l4.277 4.193c1.351 1.326 1.351 3.474 0 4.8-.675.663-1.567.995-2.458.995s-1.783-.332-2.458-.995L8.583 13.948a1.374 1.374 0 0 0-1.961-.025 1.375 1.375 0 0 0 .025 1.961l3.854 3.78a3.897 3.897 0 0 0 5.542-.025 3.897 3.897 0 0 0 0-5.542l-3.854-3.78L7.812 5.063a3.897 3.897 0 0 0-5.542 0 3.897 3.897 0 0 0 0 5.542L6.547 14.84l.039.038c.674.663 1.567.995 2.458.995s1.784-.332 2.458-.995a1.374 1.374 0 0 0 0-1.961 1.375 1.375 0 0 0-1.961 0c-.675.663-1.567.995-2.458.995s-1.783-.332-2.458-.995L.346 8.675a1.374 1.374 0 0 0-1.961 0 1.375 1.375 0 0 0 0 1.961l4.277 4.193c2.248 2.165 5.518 2.153 7.758-.025l.039-.038c2.248-2.165 2.248-5.68 0-7.845L6.182 2.728a1.374 1.374 0 0 0-1.961-.025 1.375 1.375 0 0 0 .025 1.961l4.277 4.193c1.351 1.326 1.351 3.474 0 4.8a1.374 1.374 0 0 0 0 1.961 1.375 1.375 0 0 0 1.961 0c2.248-2.178 2.248-5.68 0-7.845L6.207 2.54A3.897 3.897 0 0 1 13.483 0z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/kapoor-codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/kapoor_twts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vansh-kapoor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Center - Content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Vansh Kapoor 
              <span className="text-3xl md:text-4xl lg:text-5xl">👋</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-text-secondary mb-6 border-b border-border pb-2 inline-block">
              FullStack Software Developer
            </h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              A Fullstack programming wizard, bending code to my will and conjuring magic in the digital realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary">
                <a href="#contact">Say Hello</a>
              </Button>
              <Button variant="outline" className="btn-secondary">
                <a href="#about">Scroll Down</a>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
              <img 
                src={profileImage} 
                alt="Vansh Kapoor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;