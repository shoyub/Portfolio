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
              href="https://github.com/shoyub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="http://www.linkedin.com/in/shoyub-khan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://portfolio-git-main-shoyubs-projects.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </a>
          </div>

          {/* Center - Content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'hsl(var(--text-primary))' }}>
              Shoyub Khan 
              <span className="text-3xl md:text-4xl lg:text-5xl">👋</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 border-b pb-2 inline-block" style={{ color: 'hsl(var(--text-secondary))', borderColor: 'hsl(var(--border))' }}>
              Computer Science Student & Full Stack Developer
            </h2>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              Computer Science student skilled in SQL, Java, and web technologies with strong problem-solving, communication, and teamwork abilities. Eager to apply knowledge in practical, impactful solutions.
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
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: 'hsl(var(--border))' }}>
              <img 
                src={profileImage} 
                alt="Shoyub Khan" 
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