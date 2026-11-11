const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "SQL/PL-SQL", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL", level: "Advanced" },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git/GitHub", level: "Advanced" },
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
