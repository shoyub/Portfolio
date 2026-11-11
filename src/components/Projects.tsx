import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    const newPosition = scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setScrollPosition(newPosition);
  };

  const projects = [
    {
      title: "Real-Time Chat Application",
      description: [
        "Built a real-time chat application with WebSocket integration",
        "Implemented private messaging, group chats, and online status",
        "Features include message history, typing indicators, and file sharing",
      ],
      image:
        "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg",
      githubUrl: "https://github.com/shoyub/real-time-chat",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebSocket"],
    },
    {
      title: "IMDB Top 250 Movies Chatbot",
      description: [
        "Built a full-featured IMDB clone with movie database integration",
        "Implemented search, filtering, and user ratings functionality",
        "Responsive design with dark/light theme support",
      ],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg",
      githubUrl: "https://github.com/shoyub/imdb-clone",
      technologies: ["React", "TypeScript", "TMDB API", "Tailwind CSS"],
    },
    {
      title: "Yumigo:Online Food Ordering App",
      description: [
        "Developed a real-time food delivery application",
        "Implemented user authentication, order tracking, and payment integration",
        "Real-time order status updates and delivery tracking",
      ],
      image:
        "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147704672/images/1adf4-eba4-a33c-774a-0c8b431df6f4_Food-Ordering-App-iOS-System-Design.png",
      githubUrl: "https://github.com/shoyub/food-delivery",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    },
    {
      title: "To-do List",
      description: [
        "Built a responsive and intuitive to-do list application",
        "Implemented features like task creation, deletion, and status updates",
        "Used local storage for data persistence",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLMBw7nYnX6cZ57Okws4BV6PxLXEffT5WgQ&s",
      githubUrl: "https://github.com/shoyub/todo-list",
      technologies: ["React", "TypeScript", "CSS", "LocalStorage"],
    },
    {
      title: "Weather Check",
      description: [
        "Developed a weather application using weather API integration",
        "Real-time weather updates with location-based searching",
        "Display of temperature, humidity, wind speed, and weather conditions",
      ],
      image:
        "https://www.shutterstock.com/image-vector/hand-holding-mobile-phone-weather-600nw-1996711097.jpg",
      githubUrl: "https://github.com/shoyub/weather-check",
      technologies: ["React", "API Integration", "CSS", "JavaScript"],
    },
    {
      title: "E-commerce Cart",
      description: [
        "Created a shopping cart system with product management",
        "Implemented cart functionality with add, remove, and quantity updates",
        "Responsive design for all device sizes",
      ],
      image:
        "https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE=",
      githubUrl: "https://github.com/shoyub/ecommerce-cart",
      technologies: ["React", "Redux", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Expense Tracker",
      description: [
        "Built an expense tracking application with category management",
        "Implemented income and expense tracking with data visualization",
        "Added monthly and yearly expense analysis features",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedch_2ecliNl5opcklePx8Ts1C7gM-OTexg&s",
      githubUrl: "https://github.com/shoyub/expense-tracker",
      technologies: ["React", "Chart.js", "TypeScript", "LocalStorage"],
    },
    {
      title: "Quiz App",
      description: [
        "Developed an interactive quiz application with multiple categories",
        "Implemented score tracking and result analysis",
        "Added timer functionality and progress tracking",
      ],
      image:
        "https://repository-images.githubusercontent.com/182525249/aadd7a80-54fe-11eb-9872-ccd06b8789b6",
      githubUrl: "https://github.com/shoyub/quiz-app",
      technologies: ["React", "TypeScript", "CSS", "Context API"],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Projects that I flex</p>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-full" ref={containerRef}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group flex-shrink-0 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
                style={{
                  transform: `translateX(${index * 10}px)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-skill-bg rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="text-4xl font-bold opacity-20">
                      {project.title[0]}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: "hsl(var(--skill-bg))",
                          color: "hsl(var(--text-secondary))",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div
                    className="text-sm mb-6 space-y-2"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
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

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button
            onClick={() => handleScroll("left")}
            variant="outline"
            size="icon"
            className="rounded-full"
            disabled={scrollPosition <= 0}
          >
            ←
          </Button>
          <Button
            onClick={() => handleScroll("right")}
            variant="outline"
            size="icon"
            className="rounded-full"
            disabled={
              scrollPosition >=
              (containerRef.current?.scrollWidth || 0) -
                (containerRef.current?.clientWidth || 0)
            }
          >
            →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
