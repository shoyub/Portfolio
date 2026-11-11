const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'ReactJS', level: 'Intermediate' },
        { name: 'HTML CSS', level: 'Advanced' },
        { name: 'Javascript', level: 'Advanced' },
        { name: 'TailwindCSS', level: 'Basic' },
        { name: 'UI/UX', level: 'Basic' },
        { name: 'JQuery', level: 'Basic' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Django', level: 'Advanced' },
        { name: 'NodeJS', level: 'Basic' },
        { name: 'ExpressJS', level: 'Basic' },
        { name: 'REST API', level: 'Intermediate' },
        { name: 'Firebase', level: 'Basic' },
        { name: 'SQL Mongo', level: 'Intermediate' }
      ]
    },
    {
      title: 'Other',
      skills: [
        { name: 'C++', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'Git & Github', level: 'Intermediate' },
        { name: 'Azure', level: 'Basic' },
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Bash', level: 'Basic' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Basic':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
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
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-sm text-text-secondary">{skill.level}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className={`${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-300`}
                        style={{ 
                          width: skill.level === 'Advanced' ? '90%' : 
                                 skill.level === 'Intermediate' ? '70%' : '40%' 
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