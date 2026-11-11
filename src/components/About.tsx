import { Award, Briefcase, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const stats = [
    { icon: Award, title: '3 Star', subtitle: 'LeetCoder' },
    { icon: Briefcase, title: 'Completed', subtitle: '7 Projects' },
    { icon: Heart, title: "Lovin'", subtitle: 'OpenSource' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My Introduction</p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={aboutImage} 
                  alt="About Vansh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-8 h-8 text-icon-color" />
                    </div>
                    <h3 className="font-bold text-text-primary text-lg">{stat.title}</h3>
                    <p className="text-text-secondary text-sm">{stat.subtitle}</p>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed mb-8 text-lg">
              Coding wizard with a love for the stars ✨ and football ⚽. Guitar virtuoso on the side. 
              A true team player, bringing tech-savvy and eclectic passions to the table.
            </p>

            {/* Resume Button */}
            <Button className="btn-primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;