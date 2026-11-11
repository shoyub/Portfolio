import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: [
        'Designed and developed a scalable chat platform supporting private and group messaging with Socket.IO and Redis.',
        'Implemented RabbitMQ-based microservices to ensure reliable message queuing, fault tolerance, and smooth scaling.',
        'Deployed the application on AWS with Docker for containerization, enabling efficient resource management and availability.'
      ],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/shoyub/chat-app',
      technologies: ['MERN', 'RabbitMQ', 'Socket.IO', 'Redis', 'AWS', 'Docker']
    },
    {
      title: 'Yumigo: Online Food Ordering App',
      description: [
        'Built a responsive food ordering app with real-time menu browsing, cart management, and secure Stripe-based payments.',
        'Integrated Auth0 authentication and role-based access to ensure safe and seamless user onboarding.',
        'Optimized performance with Zod validation, Cloudinary for media storage, and efficient MongoDB queries.'
      ],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/shoyub/yumigo',
      technologies: ['React.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB']
    },
    {
      title: 'IMDB Top 250 Movie Chatbot',
      description: [
        'Developed a conversational chatbot capable of answering queries on IMDB\'s Top 250 movies by rank, rating, or release year.',
        'Automated data collection with Selenium and Pandas to build a clean dataset for dynamic retrieval.',
        'Implemented RASA framework for natural language understanding and integrated custom actions for accurate responses.'
      ],
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/shoyub/imdb-chatbot',
      technologies: ['Python', 'RASA', 'Selenium', 'Pandas', 'NLP']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Projects that I flex</p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Project Image */}
              <div className="w-full h-48 bg-skill-bg rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'hsl(var(--text-primary))' }}>
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ 
                        backgroundColor: 'hsl(var(--skill-bg))', 
                        color: 'hsl(var(--text-secondary))' 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="text-sm mb-6 space-y-2" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {project.description.map((desc, descIndex) => (
                    <p key={descIndex}>• {desc}</p>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 btn-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;