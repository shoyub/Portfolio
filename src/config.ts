export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string;
  image: string;
  description: string;
  link: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

export const config = {
  developer: {
    name: "Shoyub",
    fullName: "Shoyub Khan",
    title: "Software Development Engineer Intern (SDE Intern)",
    description:
      "Software Development Engineer Intern (SDE Intern) and Full-Stack Developer with hands-on experience in building scalable web applications, distributed systems, and modern microservices. Skilled in Java, Python, Spring Boot, FastAPI, React.js, and SQL."
  },
  social: {
    github: "shoyub",
    email: "shoyub.khan01@gmail.com",
    location: "Bengaluru, Karnataka, India"
  },
  about: {
    title: "About Me",
    description:
      "Computer Science and Engineering graduate from VIT Vellore with hands-on experience in software development, full-stack application development, REST API development, database management, and software engineering practices. Skilled in Java, Python, Spring Boot, FastAPI, React.js, and SQL. Familiar with microservices architecture, object-oriented programming, automated testing, CI/CD, cloud technologies, and Spec-Driven Development. Strong foundation in designing maintainable applications and developing scalable software solutions."
  },
  experiences: [
    {
      position: "Software Development Engineer Intern",
      company: "Quantiphi",
      period: "Jan 2026 - Present",
      location: "Bengaluru, Karnataka, India",
      description:
        "Engineering enterprise generative AI agents, cloud architectures, and scalable microservices. Developing Gemini Enterprise Agent workflows, GCP infrastructure, and high-performance backend systems.",
      responsibilities: [
        "Architecting and integrating enterprise AI agentic workflows and LLM pipelines using Google Cloud Platform (GCP) and Gemini models.",
        "Developing high-concurrency backend services with FastAPI and Python, implementing secure REST APIs and asynchronous messaging.",
        "Collaborating with senior cloud engineers to establish scalable microservices architecture and automated testing pipelines."
      ],
      technologies: ["GCP", "Gemini", "FastAPI", "Python", "Docker", "Microservices", "REST APIs", "Agentic AI"]
    },
    {
      position: "Frontend Developer",
      company: "iCAVE Infotech",
      period: "May 2025 - Jun 2025",
      location: "Bengaluru, Karnataka, India",
      description:
        "Architected and built 5+ high-performance responsive frontend components for company web applications using React.js, reducing initial page load time by 30%. Implemented modern responsive design patterns, modular styling, and accessibility standards.",
      responsibilities: [
        "Architected and built 5+ high-performance responsive frontend components with React.js, reducing initial page load time by 30%.",
        "Enhanced user experience through the implementation of responsive design patterns, modular styling, and modern accessibility standards.",
        "Collaborated with a 3-member engineering team utilizing Git version control, branch workflows, and Agile sprint development."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "Agile", "REST APIs"]
    },
    {
      position: "B.Tech in Computer Science & Engineering",
      company: "Vellore Institute of Technology (VIT)",
      period: "Sep 2022 - May 2026",
      location: "Vellore, Tamil Nadu",
      description:
        "CGPA: 8.58/10. Senior Core Committee Member at Soft Computing Research Society (SCRS), VIT Chapter. Organized 5+ technical workshops on web and software development, mentoring 100+ students.",
      responsibilities: [
        "Graduated with 8.58/10 CGPA across Data Structures, Algorithms, DBMS, OS, Networks, and Microservices.",
        "Served as Senior Core Committee Member of the Soft Computing Research Society (SCRS), VIT Chapter.",
        "Organized 5+ technical workshops mentoring 100+ students in modern web and software engineering."
      ],
      technologies: ["Data Structures & Algorithms", "OOP", "Microservices", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      position: "Intermediate (Class 12 - MPC)",
      company: "Narayan Junior College",
      period: "Aug 2020 - Jul 2022",
      location: "Tirupati, Andhra Pradesh",
      description:
        "Graduated with 91.3% in Mathematics, Physics, and Chemistry (MPC). Developed advanced analytical problem-solving and mathematical reasoning capabilities.",
      responsibilities: [
        "Secured 91.3% in State Board Examinations (2022).",
        "Comprehensive coursework in higher mathematics, mechanics, and analytical physics."
      ],
      technologies: ["Mathematics", "Physics", "Analytical Problem Solving"]
    },
    {
      position: "Secondary School Certificate (Class 10)",
      company: "Narayana High School",
      period: "Aug 2019 - May 2020",
      location: "Piler, Andhra Pradesh",
      description:
        "Graduated with 96.8% with Distinction. Represented Andhra Pradesh State Team in the 63rd and 64th National School Games (U-14 SGFI Cricket), demonstrating teamwork and leadership.",
      responsibilities: [
        "Secured 96.8% with Distinction in SSC Board examinations (2020).",
        "Represented Andhra Pradesh State Team in the 63rd and 64th National School Games (U-14 SGFI Cricket)."
      ],
      technologies: ["Academic Distinction", "National SGFI Cricket (63rd & 64th)"]
    }
  ],
  certifications: [
    {
      title: "Professional Cloud Architect Certification",
      issuer: "Google Cloud",
      date: "Nov 2026",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      link: "https://www.credly.com/badges/657ec02b-1c4c-4bc5-9f1a-c6f6b988428e/public_url"
    },
    {
      title: "Associate Cloud Engineer Certification",
      issuer: "Google",
      date: "Sep 2026",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      link: "https://www.credly.com/badges/7c106a6b-33dc-4eb0-868e-85573172e054/public_url"
    },
    {
      title: "Claude Certified Developer – Foundations",
      issuer: "Anthropic",
      date: "Sep 2026",
      image: "/images/claude.svg",
      link: "https://www.credly.com/badges/d490c6ff-8125-45c7-b728-a7e319f8c5ac"
    },
    {
      title: "Certified Partner Specialist – Gemini Enterprise Agent Development",
      issuer: "Google",
      date: "July 2026",
      image: "/images/gemini.svg",
      link: "https://www.linkedin.com/in/shoyub-khan"
    },
    {
      title: "Oracle Cloud Application Foundation Certified Implementation Specialist",
      issuer: "Oracle",
      date: "August 2025",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      link: "https://drive.google.com/file/d/19aESWv5aAo970Bei68JTwFRx21W58-qj/view?usp=drivesdk"
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "August 2024",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      link: "https://drive.google.com/file/d/1dHXZJcQt8qB1Rfo66_UTjWWDZ2qwVEoK/view"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Certified",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      link: "https://drive.google.com/file/d/1EedLTtLua6VBVIu2IhkLxvkfbsNUNVyj/view?usp=drivesdk"
    }
  ],
  projects: [
    {
      id: 1,
      title: "RetailCo Warehouse & Fulfilment Management System",
      category: "Full-Stack / Supply Chain",
      technologies: "Python, FastAPI, React 18, Vite, SQLAlchemy 2.0, Pydantic v2, SQLite, Pytest, GitLab CI",
      image: "/images/project-1.svg",
      description:
        "Developed a full-stack warehouse and fulfilment management application covering inventory, orders, shipments, and supply chain workflows with service-layer architecture and Spec-Driven Development.",
      link: "https://github.com/shoyub"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      category: "Full-Stack / Distributed Systems",
      technologies: "MongoDB, Express.js, React.js, Node.js, Socket.IO, Redis, RabbitMQ, Docker",
      image: "/images/project-2.svg",
      description:
        "Real-time private & group messaging platform with Socket.IO, multi-instance synchronization using Redis Pub/Sub, asynchronous offline notifications with RabbitMQ, and Docker containerization.",
      link: "https://github.com/shoyub/real-time-chat"
    },
    {
      id: 3,
      title: "Quiz Microservices Platform",
      category: "Microservices Architecture",
      technologies: "Java, Spring Boot, REST APIs, PostgreSQL, JPA/Hibernate, Netflix Eureka, OpenFeign",
      image: "/images/project-3.svg",
      description:
        "Distributed microservices backend featuring independent API Gateway, Quiz Service, Question Service, Netflix Eureka discovery registry, OpenFeign IPC, and PostgreSQL persistence.",
      link: "https://github.com/shoyub/Quiz-Microservices"
    },
    {
      id: 4,
      title: "Phishing Detection System",
      category: "Cyber Security / ML",
      technologies: "Python, FastAPI, Machine Learning, MongoDB, Pandas, Scikit-learn",
      image: "/images/project-4.svg",
      description:
        "Hybrid phishing detection platform combining ML models and rule-based scoring trained on 11,000+ samples, paired with a high-throughput FastAPI REST API service.",
      link: "https://github.com/shoyub/Network-Security"
    },
    {
      id: 5,
      title: "AI Search Chatbot with LangChain",
      category: "GenAI / Agentic RAG",
      technologies: "Python, LangChain, Groq, Llama 3, RAG, Streamlit",
      image: "/images/project-5.svg",
      description:
        "Agentic AI search assistant powered by Llama 3 via Groq and LangChain agents with multi-tool dynamic RAG across Wikipedia, Arxiv, and DuckDuckGo.",
      link: "https://github.com/shoyub/search-engine"
    },
    {
      id: 6,
      title: "Next Word Prediction System",
      category: "Deep Learning / NLP",
      technologies: "Python, TensorFlow, LSTM, GRU, NLP, Streamlit",
      image: "/images/project-6.svg",
      description:
        "Sequential NLP deep learning engine using recurrent neural networks (LSTM & GRU) trained on classical texts with real-time Streamlit comparison interface.",
      link: "https://github.com/shoyub/next-word-"
    },
    {
      id: 7,
      title: "Lingo: Interactive Language Learning Platform",
      category: "Full-Stack Web App",
      technologies: "Next.js 14, React, TypeScript, Tailwind CSS, PostgreSQL, Drizzle ORM, Stripe",
      image: "/images/project-7.svg",
      description:
        "Interactive gamified language learning web platform featuring bite-sized interactive lessons, dynamic audio pronunciation, heart/quest systems, and Stripe payments.",
      link: "https://github.com/shoyub/lingo"
    }
  ],
  contact: {
    email: "shoyub.khan01@gmail.com",
    phone: "+91 7330734080",
    github: "https://github.com/shoyub",
    linkedin: "https://www.linkedin.com/in/shoyub-khan",
    location: "Bengaluru, Karnataka, India"
  },
  skills: {
    develop: {
      title: "BACKEND & SDE",
      description: "Scalable backends, microservices & distributed systems",
      details:
        "Architecting high-concurrency backend services and distributed microservices with Java, Spring Boot, Python, and FastAPI. Proficient in database modeling with PostgreSQL and MongoDB, Redis caching, RabbitMQ message brokers, and Docker containerization.",
      tools: [
        "Java",
        "Spring Boot",
        "FastAPI",
        "Python",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Docker",
        "REST APIs",
        "Microservices"
      ]
    },
    design: {
      title: "FULL-STACK & CS",
      description: "Modern web applications & core computer science fundamentals",
      details:
        "Engineering responsive web interfaces using React.js, Vite, TypeScript, and modern styling. Grounded in robust Computer Science fundamentals: Object-Oriented Design (OOP), Data Structures & Algorithms (DSA), Operating Systems, and Spec-Driven Development.",
      tools: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "Vite",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "OOP & SOLID",
        "DSA",
        "SQLAlchemy",
        "GitLab CI",
        "Git"
      ]
    }
  }
};
