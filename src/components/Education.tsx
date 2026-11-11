import { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: 'Postgraduation',
      institution: 'VIT - Vellore',
      period: '2021 - 2023',
      icon: GraduationCap
    },
    {
      title: 'Undergraduation',
      institution: 'GGSIPU - Delhi',
      period: '2018 - 2021',
      icon: GraduationCap
    },
    {
      title: 'CBSE (X+XII)',
      institution: 'SIS - Delhi',
      period: '2016 - 2018',
      icon: GraduationCap
    }
  ];

  const experienceData = [
    {
      title: 'Student Developer Intern',
      institution: 'Nokia Networks',
      period: '2022 - Present',
      icon: Briefcase
    },
    {
      title: 'CNCF Delhi Co-organizer',
      institution: 'Cloud Native Computing Foundation',
      period: '2021 - Present',
      icon: Briefcase
    },
    {
      title: 'Machine Learning Intern',
      institution: 'NITD - Delhi',
      period: '2020',
      icon: Briefcase
    }
  ];

  const certifications = [
    {
      title: 'Postman Student Expert',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=150&fit=crop'
    },
    {
      title: 'ImagineHack Hackathon',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=150&fit=crop'
    },
    {
      title: '30 Days of Google Cloud',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=150&fit=crop'
    },
    {
      title: 'Holopin Badges',
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=200&h=150&fit=crop'
    },
    {
      title: 'Solving Real Life Challenges using Java',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=150&fit=crop'
    },
    {
      title: 'Crash Course on Python - Google',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=200&h=150&fit=crop'
    },
    {
      title: 'Data Analysis with Python',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop'
    }
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
              variant={activeTab === 'education' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('education')}
              className="px-6 py-2"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </Button>
            <Button
              variant={activeTab === 'experience' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('experience')}
              className="px-6 py-2"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Experience
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'education' ? (
            <div className="space-y-6">
              {educationData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="skill-card flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-button-dark rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-button-dark-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                      <p className="text-text-secondary">{item.institution}</p>
                      <p className="text-sm text-text-secondary">{item.period}</p>
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
                  <div key={index} className="skill-card flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-button-dark rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-button-dark-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                      <p className="text-text-secondary">{item.institution}</p>
                      <p className="text-sm text-text-secondary">{item.period}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="section-title">Certifications & Achievements</h3>
          <p className="section-subtitle">Victories I hold</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="skill-card text-center group cursor-pointer">
                <div className="w-full h-32 bg-background rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm font-medium text-text-primary">{cert.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;