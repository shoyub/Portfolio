import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Social Media Platform',
      description: [
        'Inspired from Facebook Social Network.',
        'Has all the Features of a social media platform like adding/removing friends, posting updates, liking, commenting and even AJAX inspired Chat rooms.',
        'Project was made with Vanilla JavaScript for FrontEnd and Django was used for BackEnd.'
      ],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/v4nshhh/Django-social-media-platform',
      technologies: ['Django', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Cryptyz Bitcoin Payment App',
      description: [
        'Cryptyz is a webapp for to manage Bitcoin Transactions.',
        'User can buy products and will have to pay via their Bitcoin wallet.',
        'Cryptyz was made using Blockonomics API. For each transaction, a unique payment address & QR are generated. Each user can have their own invoice.'
      ],
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/v4nshhh/Bitcoin-Paytment-App',
      technologies: ['React', 'Blockonomics API', 'Bitcoin']
    },
    {
      title: 'Wildlife E-commerce Store',
      description: [
        'Wildlife Sanctuary Site, started as a ticket booking site, but later got transformed into an e-comm store.',
        'This webapp not just contains the ticket booking with PayPal API Integration but also has a ministore, individual user cart and even a feature to track the orders.',
        'The Project also has features to read latest news and Blogs regarding wildlife.'
      ],
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/v4nshhh/Wildlife-E-commerce-Store/tree/main',
      technologies: ['Django', 'PayPal API', 'E-commerce']
    },
    {
      title: 'Covid & Pneumonia Detector',
      description: [
        'Disease Detection is a platform to detect Covid & Pneumonia.',
        'FrontEnd Design and API Development was done to provide a better User experience.'
      ],
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/v4nshhh/Covid-Pneumonia-Detector-Deep-Learning',
      technologies: ['Deep Learning', 'Python', 'Medical AI']
    },
    {
      title: 'React Media Gallery',
      description: [
        'React-Media-Gallery is a single page web-application that uses Unsplash and YouTube API to fetch images and videos and display them with a grid based system.',
        'React-Media-Gallery was made up using the basic usage of states, props, components and other basic React concepts.',
        'In addition to that ReactPicz also uses axios library to make an ajax call to the APIs and Semantic-ui for Styling.'
      ],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/v4nshhh/React-Media-Gallery',
      technologies: ['React', 'Unsplash API', 'YouTube API']
    },
    {
      title: 'Django TodoApp',
      description: [
        'A simple Todolist application built using Django Backend framework.',
        'This Todolist application was made in order to follow CRUD operations paradigm.',
        'The project also has an authentication feature so that the individual can access their todos.'
      ],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      githubUrl: 'https://github.com/v4nshhh/django-todoapp',
      technologies: ['Django', 'CRUD', 'Authentication']
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
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-skill-bg text-text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="text-text-secondary text-sm mb-6 space-y-2">
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