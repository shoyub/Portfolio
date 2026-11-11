import { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'Vellore Institute of Technology, Vellore',
      period: 'Sep 2022 - Present',
      details: 'CGPA: 8.45',
      icon: GraduationCap
    },
    {
      title: 'Intermediate (Class 12th)',
      institution: 'Narayan Junior College, Tirupati',
      period: 'Aug 2020 - Jul 2022',
      details: 'Percentage: 91.3%',
      icon: GraduationCap
    },
    {
      title: '10th Standard (SSC)',
      institution: 'Narayana High School, Piler',
      period: 'Aug 2019 - May 2020',
      details: 'Percentage: 97.3%',
      icon: GraduationCap
    }
  ];

  const experienceData = [
    {
      title: 'Intern / Developer',
      institution: 'iCAVE Infotech',
      period: 'May 2025 - Jun 2025',
      details: 'Frontend portfolio development',
      icon: Briefcase
    },
    {
      title: 'Senior Core Committee Member',
      institution: 'Soft Computing Research Society (VIT)',
      period: '2023 - Present',
      details: 'AI/ML workshops and events',
      icon: Briefcase
    }
  ];

  const certifications = [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=150&fit=crop'
    },
    {
      title: 'Complete Web Development Course',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=200&h=150&fit=crop'
    },
    {
      title: 'Oracle Cloud Infrastructure Foundations',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=150&fit=crop'
    },
    {
      title: 'GeeksforGeeks Problem Solving',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop'
    },
    {
      title: 'National School Games Cricket',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=200&h=150&fit=crop'
    },
    {
      title: 'Leadership & Event Management',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=150&fit=crop'
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
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--button-dark))' }}>
                        <IconComponent className="w-6 h-6" style={{ color: 'hsl(var(--button-dark-foreground))' }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold" style={{ color: 'hsl(var(--text-primary))' }}>{item.title}</h3>
                      <p style={{ color: 'hsl(var(--text-secondary))' }}>{item.institution}</p>
                      <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>{item.period}</p>
                      {item.details && <p className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>{item.details}</p>}
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
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--button-dark))' }}>
                        <IconComponent className="w-6 h-6" style={{ color: 'hsl(var(--button-dark-foreground))' }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold" style={{ color: 'hsl(var(--text-primary))' }}>{item.title}</h3>
                      <p style={{ color: 'hsl(var(--text-secondary))' }}>{item.institution}</p>
                      <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>{item.period}</p>
                      {item.details && <p className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>{item.details}</p>}
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
                <div className="w-full h-32 rounded-lg mb-4 overflow-hidden" style={{ backgroundColor: 'hsl(var(--background))' }}>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm font-medium" style={{ color: 'hsl(var(--text-primary))' }}>{cert.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;