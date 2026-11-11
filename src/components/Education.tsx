import { useState, useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [certScrollPosition, setCertScrollPosition] = useState(0);
  const certContainerRef = useRef<HTMLDivElement>(null);

  const handleCertScroll = (direction: "left" | "right") => {
    const container = certContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    const newPosition = certScrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setCertScrollPosition(newPosition);
  };

  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Vellore Institute of Technology, Vellore",
      period: "Sep 2022 - Present",
      details: "CGPA: 8.45",
      icon: GraduationCap,
    },
    {
      title: "Intermediate (Class 12th)",
      institution: "Narayan Junior College, Tirupati",
      period: "Aug 2020 - Jul 2022",
      details: "Percentage: 91.3%",
      icon: GraduationCap,
    },
    {
      title: "10th Standard (SSC)",
      institution: "Narayana High School, Piler",
      period: "Aug 2019 - May 2020",
      details: "Percentage: 96.8%",
      icon: GraduationCap,
    },
  ];

  const experienceData = [
    {
      title: "Intern / Developer",
      institution: "iCAVE Infotech",
      period: "May 2025 - Jun 2025",
      details: "Frontend portfolio development",
      icon: Briefcase,
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      image:
        "https://i0.wp.com/thecrm.ninja/wp-content/uploads/2020/10/ai.png?fit=2087%2C1268&ssl=1",
      link: "https://drive.google.com/file/d/1dHXZJcQt8qB1Rfo66_UTjWWDZ2qwVEoK/view?usp=drivesdk",
    },
    {
      title: "Complete Web Development Course",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjaLOKumYqp6e6qvpk2IJ0xouEmLpe2ZEpg&s",
      link: "https://drive.google.com/file/d/1NdOljjK4ovpXPIdDwzW8nFQddkySzeKz/view?usp=drivesdk",
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      image:
        "https://images.credly.com/images/27db49f3-8bae-4314-8a84-884935b569db/linkedin_thumb_50_Oracle_Cloud_Infrastructure.png",
      link: "https://drive.google.com/file/d/19aESWv5aAo970Bei68JTwFRx21W58-qj/view?usp=drivesdk",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      image:
        "https://cc.sj-cdn.net/instructor/3d8458f2k85sh-postman/courses/1a8b8cdxvqjxq/promo-image.1676069333.png",
      link: "https://drive.google.com/file/d/1EedLTtLua6VBVIu2IhkLxvkfbsNUNVyj/view?usp=drivesdk",
    },
  ];

  return (
    <section id="education" className="section bg-skill-bg">
      <div className="container">
        <h2 className="section-title">Qualifications</h2>
        <p className="section-subtitle">My Journey</p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-background rounded-lg p-1 border border-border">
            <Button
              variant={activeTab === "education" ? "default" : "ghost"}
              onClick={() => setActiveTab("education")}
              className="px-6 py-2"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </Button>
            <Button
              variant={activeTab === "experience" ? "default" : "ghost"}
              onClick={() => setActiveTab("experience")}
              className="px-6 py-2"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === "education" ? (
            <div className="space-y-6">
              {educationData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="skill-card flex items-center gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "hsl(var(--button-dark))" }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{
                            color: "hsl(var(--button-dark-foreground))",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "hsl(var(--text-primary))" }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "hsl(var(--text-secondary))" }}>
                        {item.institution}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "hsl(var(--text-secondary))" }}
                      >
                        {item.period}
                      </p>
                      {item.details && (
                        <p
                          className="text-sm font-medium"
                          style={{ color: "hsl(var(--text-primary))" }}
                        >
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              {experienceData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="skill-card flex items-center gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "hsl(var(--button-dark))" }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{
                            color: "hsl(var(--button-dark-foreground))",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "hsl(var(--text-primary))" }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "hsl(var(--text-secondary))" }}>
                        {item.institution}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "hsl(var(--text-secondary))" }}
                      >
                        {item.period}
                      </p>
                      {item.details && (
                        <p
                          className="text-sm font-medium"
                          style={{ color: "hsl(var(--text-primary))" }}
                        >
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="section-title text-center">Certifications</h3>
          <p className="section-subtitle text-center">
            Professional Qualifications
          </p>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6 min-w-full" ref={certContainerRef}>
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[300px] skill-card text-center group cursor-pointer"
                  style={{
                    transform: `translateX(${index * 10}px)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div
                    className="w-full h-48 rounded-lg mb-4 overflow-hidden"
                    style={{ backgroundColor: "hsl(var(--background))" }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                  <h4
                    className="text-lg font-medium px-4 group-hover:text-primary transition-colors"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {cert.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={() => handleCertScroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={certScrollPosition <= 0}
            >
              ←
            </Button>
            <Button
              onClick={() => handleCertScroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={
                certScrollPosition >=
                (certContainerRef.current?.scrollWidth || 0) -
                  (certContainerRef.current?.clientWidth || 0)
              }
            >
              →
            </Button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="section-title">Achievements</h3>
          <p className="section-subtitle">Sports Excellence</p>

          <div className="max-w-3xl mx-auto">
            <div className="skill-card p-6">
              <h4
                className="text-lg font-bold mb-2"
                style={{ color: "hsl(var(--text-primary))" }}
              >
                National Level Cricket
              </h4>
              <p
                className="text-base mb-4"
                style={{ color: "hsl(var(--text-secondary))" }}
              >
                Represented Andhra Pradesh State Team in the 63rd and 64th
                National School Games (U-14 SGFI Cricket).
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://drive.google.com/file/d/123XO99o0haN5MLqByfO6JMNVR_lKP9bf/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  <span>63rd Certificate</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1dmAKT58ROKrx_xV1ocOI3PPIuRpsH3SH/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  <span>64th Certificate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
