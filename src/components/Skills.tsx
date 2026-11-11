const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
      ],
    },
    {
      title: "Web Frameworks",
      skills: [
        { name: "Spring Boot", level: "Intermediate" },
        { name: "FastAPI", level: "Advanced" },
        { name: "Flask", level: "Intermediate" },
        { name: "React.js", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      title: "AI / Machine Learning",
      skills: [
        { name: "Machine Learning", level: "Intermediate" },
        { name: "Deep Learning", level: "Intermediate" },
        { name: "NLP", level: "Intermediate" },
        { name: "Generative AI", level: "Intermediate" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "LangChain", level: "Intermediate" },
      ],
    },
    {
      title: "MLOps & DevOps",
      skills: [
        { name: "Docker", level: "Intermediate" },
        { name: "MLflow", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "RabbitMQ", level: "Intermediate" },
        { name: "IntelliJ IDEA", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: "Advanced" },
        { name: "Public Speaking", level: "Advanced" },
        { name: "Time Management", level: "Advanced" },
        { name: "Event Management", level: "Intermediate" },
        { name: "Writing", level: "Intermediate" },
      ],
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Generative AI",
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
        <p className="section-subtitle">Technologies and tools I work with</p>

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
                          skill.level,
                        )} h-2 rounded-full transition-all duration-300`}
                        style={{
                          width:
                            skill.level === "Advanced"
                              ? "90%"
                              : skill.level === "Intermediate"
                                ? "70%"
                                : "40%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <div className="mt-16">
          <h3
            className="text-2xl font-bold text-center mb-8"
            style={{ color: "hsl(var(--text-primary))" }}
          >
            Relevant Coursework
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "hsl(var(--background))",
                  color: "hsl(var(--text-primary))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
