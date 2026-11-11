import { Award, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const stats = [
    { icon: Award, title: "8.5 CGPA", subtitle: "B.Tech CSE" },
    { icon: Briefcase, title: "Completed", subtitle: "3 Projects" },
    { icon: Heart, title: "Lovin'", subtitle: "Problem Solving" },
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
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: "hsl(var(--icon-color))" }}
                      />
                    </div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "hsl(var(--text-primary))" }}
                    >
                      {stat.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "hsl(var(--text-secondary))" }}
                    >
                      {stat.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <p
              className="leading-relaxed mb-8 text-lg"
              style={{ color: "hsl(var(--text-secondary))" }}
            >
              A passionate Computer Science student from VIT Vellore with
              expertise in full-stack development, cloud technologies, and
              AI/ML. Experienced in building scalable applications and solving
              complex problems with modern tech stacks.
            </p>

            {/* Resume Button */}
            <Button className="btn-primary">
              <a
                href="https://shoyub.site/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
