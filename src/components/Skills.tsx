const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "Spring Data JPA", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "IntelliJ IDEA", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "RabbitMQ", level: "Intermediate" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: "Advanced" },
        { name: "Event Management", level: "Intermediate" },
        { name: "Writing", level: "Intermediate" },
        { name: "Public Speaking", level: "Advanced" },
        { name: "Time Management", level: "Advanced" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-black";
      case "Intermediate":
        return "bg-gray-500";
      case "Basic":
        return "bg-stone-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="section bg-skill-bg">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Things I know</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-card">
              <h3
                className="text-xl font-bold text-center mb-6"
                style={{ color: "hsl(var(--text-primary))" }}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="font-medium"
                        style={{ color: "hsl(var(--text-primary))" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "hsl(var(--text-secondary))" }}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full h-2"
                      style={{ backgroundColor: "hsl(var(--border))" }}
                    >
                      <div
                        className={`${getLevelColor(
                          skill.level
                        )} h-2 rounded-full transition-all duration-300`}
                        style={{
                          width:
                            skill.level === "Advanced"
                              ? "90%"
                              : skill.level === "Intermediate"
                              ? "70%"
                              : "40%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
