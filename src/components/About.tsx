import { Award, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/profile-hero.jpg";

const About = () => {
  const stats = [
    { icon: Award, title: "8.58 CGPA", subtitle: "B.Tech CSE" },
    { icon: Briefcase, title: "Completed", subtitle: "6+ Projects" },
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
                  alt="About Shoyub"
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
              Passionate Computer Science student at VIT Vellore with expertise
              in Java, Spring Boot, Full-Stack Development, Machine Learning,
              NLP, and Generative AI. Experienced in building scalable web
              applications, microservices, and AI-powered solutions using modern
              technologies. Strong problem-solving skills with a keen interest
              in software engineering, backend development, and intelligent
              systems.
            </p>

            {/* Resume Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                <a
                  href="/Java_resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  Download Java Resume
                </a>
              </Button>

              <Button className="btn-primary">
                <a
                  href="/Python_Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  Download Python Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
