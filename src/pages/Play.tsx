import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Chess, Square, PieceSymbol, Color } from "chess.js";
import RedoxChessEngine from "../utils/redoxchessEngine";
import "./Play.css";

// Piece SVG components matching chess.com style with custom colors
const PIECES: Record<string, string> = {
  // White pieces (light cream color)
  wK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  wQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L14 11v14L7 14l2 12z"/><path stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"/></g></svg>`,
  wR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="butt" d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path stroke-linecap="butt" stroke-linejoin="miter" d="M31 17v12.5H14V17"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path fill="none" stroke-linejoin="miter" d="M11 14h23"/></g></svg>`,
  wB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  wN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#fff" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#fff" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#000" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  wP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
  // Black pieces (dark purple color matching theme)
  bK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6" stroke="#c2a4ff"/><path fill="#1a1a2e" stroke="#c2a4ff" d="M20 8h5"/><path fill="#1a1a2e" stroke="#c2a4ff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#1a1a2e" stroke="#c2a4ff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path stroke="#c2a4ff" d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg>`,
  bQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#1a1a2e"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path fill="#1a1a2e" stroke-linecap="butt" d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/><path fill="#1a1a2e" stroke-linecap="butt" d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path fill="none" stroke-linecap="butt" d="M11 38.5a35 35 1 0 0 23 0"/><path fill="none" d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0"/></g></svg>`,
  bR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#1a1a2e" stroke-linecap="butt" d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z"/><path fill="#1a1a2e" stroke-linecap="butt" stroke-linejoin="miter" d="M14 29.5v-13h17v13H14z"/><path fill="#1a1a2e" stroke-linecap="butt" d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"/><path fill="none" stroke-linejoin="miter" d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"/></g></svg>`,
  bB: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g fill="#1a1a2e" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path stroke-linejoin="miter" d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"/></g></svg>`,
  bN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#c2a4ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path fill="#1a1a2e" d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path fill="#1a1a2e" d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/><path fill="#c2a4ff" d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"/></g></svg>`,
  bP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path fill="#1a1a2e" stroke="#c2a4ff" stroke-width="1.5" stroke-linecap="round" d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"/></svg>`,
};

interface MoveHistory {
  from: string;
  to: string;
  piece: string;
  captured?: string;
  san: string;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are the portfolio chat persona for Shoyub Khan. Speak in Shoyub's first-person voice ("I", "my", "me") as a warm, technically sharp representative of him. Be honest: use only the facts below and if the user asks anything unrelated to Shoyub Khan, his skills, his projects, his experience, or the chess game on this page, politely decline and state that it is not about Shoyub Khan.

Profile:
- Name: Shoyub Khan; based in Bengaluru, Karnataka, India.
- Role: Software Development Engineer Intern (SDE Intern) at Quantiphi & Full-Stack Developer.
- Education: B.Tech in Computer Science and Engineering from Vellore Institute of Technology (VIT Vellore), 2022-2026, CGPA 8.58/10. Intermediate at Narayan Junior College (91.3%), SSC at Narayana High School (96.8%).
- Work Experience: Software Development Engineer Intern at Quantiphi (Jan 2026 - Present; Gemini Enterprise Agents, GCP cloud architecture, FastAPI microservices) and Frontend Developer at iCAVE Infotech (May 2025 - June 2025; React.js, 30% page load reduction, Agile).
- Leadership & Sports: Represented Andhra Pradesh State Team in the 63rd and 64th National School Games (U-14 SGFI Cricket). Senior Core Committee Member of the Soft Computing Research Society (SCRS, VIT Chapter). Mentored 100+ students across 5+ tech workshops.
- Certifications: Certified Partner Specialist – Gemini Enterprise Agent Development (Google), Claude Certified Developer – Foundations (Anthropic), Oracle Cloud Application Foundation Implementation Specialist (Oracle), Microsoft Certified: Azure AI Fundamentals (Microsoft), Postman API Fundamentals Student Expert.
- Core tools: Java, Python, Spring Boot, FastAPI, React.js, Vite, TypeScript, JavaScript, PostgreSQL, MySQL, MongoDB, Redis, Docker, RabbitMQ, Socket.IO, GitLab CI, Pytest.
- Public GitHub: github.com/shoyub.

Portfolio projects:
1. RetailCo Warehouse & Fulfilment Management System: Full-stack supply chain app using FastAPI, React 18, Vite, SQLAlchemy 2.0, Pydantic v2, Pytest, and GitLab CI.
2. Real-Time Chat Application: Real-time messaging platform using Socket.IO, Redis Pub/Sub, RabbitMQ, Express, Node.js, and Docker.
3. Quiz Microservices Platform: Distributed Spring Boot microservices with API Gateway, Eureka discovery, OpenFeign, and PostgreSQL.
4. Phishing Detection System: Hybrid ML and rule-based security system with FastAPI and MongoDB on 11,000+ samples.
5. AI Search Chatbot with LangChain: Agentic RAG assistant with Groq, Llama 3, and Streamlit.
6. Next Word Prediction System: Deep learning LSTM & GRU text prediction on Streamlit.
7. Lingo: Gamified interactive language learning platform with Next.js 14, React, TypeScript, and Stripe.

Contact and links:
- GitHub: https://github.com/shoyub
- LinkedIn: https://www.linkedin.com/in/shoyub-khan
- Email: shoyub.khan01@gmail.com
- Phone: +91 7330734080
- Location: Bengaluru, Karnataka, India`;

const PROJECT_DETAILS = [
  {
    key: "retailco",
    keywords: ["retailco", "retail", "warehouse", "fulfilment", "fulfillment", "supply chain", "inventory", "project 1", "first project", "1st project"],
    response:
      "RetailCo Warehouse & Fulfilment Management System is a full-stack supply chain platform I built using Python, FastAPI, React 18, Vite, SQLAlchemy 2.0, Pydantic v2, and SQLite. It handles end-to-end inventory tracking, order creation, and shipment fulfilment workflows using clean service-layer architecture, Spec-Driven Development (OpenAPI), and automated Pytest + GitLab CI/CD pipelines.",
  },
  {
    key: "chat",
    keywords: ["real-time chat", "realtime chat", "chat app", "messaging", "socket.io", "socketio", "rabbitmq", "redis pub", "project 2", "second project", "2nd project"],
    response:
      "My Real-Time Chat Application is a distributed private and group messaging platform built with Node.js, Express, React.js, MongoDB, and Socket.IO. To support horizontal scaling across multiple server instances, I integrated Redis Pub/Sub for real-time event synchronization, RabbitMQ for asynchronous offline message queueing, and containerized the entire stack with Docker.",
  },
  {
    key: "quiz",
    keywords: ["quiz", "eureka", "openfeign", "api gateway", "spring boot project", "project 3", "third project", "3rd project"],
    response:
      "The Quiz Microservices Platform is a distributed backend system I architected using Java, Spring Boot, JPA/Hibernate, and PostgreSQL. It decomposes the application into independent Quiz and Question microservices that communicate synchronously via OpenFeign, register dynamically with a Netflix Eureka service discovery server, and route traffic through a centralized Spring Cloud API Gateway.",
  },
  {
    key: "phishing",
    keywords: ["phishing", "cyber", "network security", "malicious", "url detection", "project 4", "fourth project", "4th project"],
    response:
      "My Phishing Detection System is a cybersecurity and Machine Learning platform built with Python, FastAPI, Scikit-learn, Pandas, and MongoDB. It combines supervised ML classifiers trained on 11,000+ URL/domain samples with heuristic rule-based scoring, exposed via a high-throughput FastAPI REST service for real-time threat detection.",
  },
  {
    key: "langchain",
    keywords: ["ai search", "search chatbot", "search engine", "langchain", "groq", "llama 3", "llama3", "rag", "arxiv", "project 5", "fifth project", "5th project"],
    response:
      "The AI Search Chatbot with LangChain is an agentic RAG assistant built with Python, LangChain, Groq (Llama 3), and Streamlit. It uses tool-calling agents to dynamically search and synthesize live information across Wikipedia, ArXiv research papers, and DuckDuckGo with low-latency Llama 3 inference.",
  },
  {
    key: "nextword",
    keywords: ["next word", "next-word", "lstm", "gru", "nlp", "word prediction", "tensorflow", "project 6", "sixth project", "6th project"],
    response:
      "My Next Word Prediction System is a Deep Learning NLP engine built with Python, TensorFlow, and Streamlit. It trains and compares Recurrent Neural Network architectures (LSTM and GRU) on classical text corpora to predict top-k next word probabilities in real time.",
  },
  {
    key: "lingo",
    keywords: ["lingo", "language learning", "duolingo", "drizzle", "stripe", "next.js", "nextjs", "project 7", "seventh project", "7th project", "last project"],
    response:
      "Lingo is an interactive, gamified language-learning web platform built with Next.js 14, React, TypeScript, Tailwind CSS, PostgreSQL, Drizzle ORM, and Stripe. It features bite-sized lessons, dynamic audio pronunciation, a hearts/XP/quest progression system, and Stripe subscription checkout.",
  },
];

let singleProjectCounter = 0;

function getRedirectAction(query: string): { url: string; reply: string } | null {
  const q = query.trim().toLowerCase();

  if (/\b(linkedin|linked\s*in)\b/.test(q) && /\b(github|git\s*hub)\b/.test(q)) {
    return {
      url: "https://www.linkedin.com/in/shoyub-khan",
      reply:
        "Redirecting you to my LinkedIn profile (https://www.linkedin.com/in/shoyub-khan)! 🔗 You can also check out my GitHub at https://github.com/shoyub.",
    };
  }

  if (/\b(linkedin|linked\s*in)\b/.test(q)) {
    return {
      url: "https://www.linkedin.com/in/shoyub-khan",
      reply:
        "Redirecting you to my LinkedIn profile (https://www.linkedin.com/in/shoyub-khan)! 🔗 Let's connect!",
    };
  }

  if (/\b(github|git\s*hub)\b/.test(q)) {
    return {
      url: "https://github.com/shoyub",
      reply:
        "Redirecting you to my GitHub profile (https://github.com/shoyub)! 💻 Feel free to explore my repositories and code!",
    };
  }

  return null;
}

function getOutOfBoundsReply(q: string): string | null {
  const mentionsShoyubOrPossessive =
    /\b(shoyub|your|you|yours|u|ur|quantiphi|icave|vit|retailco|lingo)\b/.test(q);

  // Rule A: Asking to write/generate/give code, programs, scripts, functions, or solve coding/DSA problems
  const isCodingTaskRequest =
    /\b(give|write|create|generate|make|show|build|implement|solve|debug|fix)\b.*\b(code|program|script|function|algorithm|query|snippet|class|loop|array|string|numbers?|addition|sum|factorial|fibonacci|palindrome|sorting|binary\s*search|leetcode)\b/.test(
      q
    ) ||
    /\b(code|program|script|function|algorithm)\s+(for|to|in|of|that)\b/.test(q) ||
    /\b(adding|add|subtract|multiply|divide|reverse|sort|find)\s+\d*\s*(two|2|three|3|numbers?|strings?|arrays?|elements?|linked\s*list)\b/.test(
      q
    ) ||
    /\b(how\s+to\s+(code|program|write|implement|install|configure|center\s+a\s+div))\b/.test(q);

  if (isCodingTaskRequest) {
    return "Haha, I'm Shoyub's portfolio assistant, not a general code generator or compiler! 😄 That request is outside my scope since it's not about me. If you'd like to see my real-world code, ask me about my projects (like RetailCo, Real-Time Chat, or Quiz Microservices) or type \"GitHub\" to jump straight to my repositories!";
  }

  // Rule B: Pure math / arithmetic calculations or homework questions
  const isMathOrCalculation =
    /^\s*\d+\s*[\+\-\*\/\%\^]\s*\d+/.test(q) ||
    /\b(calculate|compute|solve\s+for|square\s+root|derivative|integral|equation|math\s+problem)\b/.test(
      q
    ) ||
    /\bwhat\s+is\s+\d+\s*(\+|\-|\*|\/|plus|minus|times|divided\s+by)\s*\d+/.test(q);

  if (isMathOrCalculation) {
    return "I'm here to talk about Shoyub Khan's software engineering journey, not crunch math problems! 😊 Ask me about my internships, distributed systems projects, or tech stack instead.";
  }

  // Rule C: General textbook definitions ("what is python", "what is java", "difference between...") that don't ask about Shoyub
  const isTextbookDefinition =
    !mentionsShoyubOrPossessive &&
    (/^(what\s+is|what\s+are|define|explain\s+what|difference\s+between|meaning\s+of)\s+(a\s+|an\s+|the\s+)?(python|java|javascript|typescript|react|fastapi|spring\s*boot|docker|redis|rabbitmq|sql|mongodb|postgresql|html|css|oop|dsa|microservices|api|rest|cloud|ai|ml|deep\s*learning)\b/.test(
      q
    ) ||
      /\b(syntax\s+of|tutorial\s+on|course\s+for)\b/.test(q));

  if (isTextbookDefinition) {
    return "That's a general technical definition rather than a question about me! 😊 If you want to know how I use these technologies in my work, ask \"What is your tech stack?\" or \"Explain your projects!\"";
  }

  // Rule D: General world knowledge, trivia, politics, celebrities, weather, recipes, entertainment, jokes, essays
  const isGeneralWorldQuery =
    /\b(weather|forecast|temperature|recipe|cook|movie|song|lyrics|bitcoin|crypto|stock\s*price|president|prime\s*minister|capital\s+of|population\s+of|tell\s+(me\s+)?a\s+joke|write\s+(a\s+|an\s+)?(essay|poem|story|letter|email)|translate|horoscope|news|politics|virat|messi|ronaldo|elon\s*musk|donald\s*trump|modi|chatgpt|openai)\b/.test(
      q
    ) ||
    (!mentionsShoyubOrPossessive &&
      /^(who\s+is|who\s+was|where\s+is|when\s+was|why\s+is|how\s+old\s+is|what\s+is\s+the\s+capital)\b/.test(
        q
      ));

  if (isGeneralWorldQuery) {
    return "That's outside my scope — it's not about me! 😊 I only answer questions related to Shoyub Khan, my software engineering experience at Quantiphi & iCAVE Infotech, my projects, skills, and education at VIT Vellore.";
  }

  return null;
}

function getLocalAssistantReply(query: string, history: ChatMessage[]): string {
  const q = query.trim().toLowerCase();
  const prevAssistantMsg =
    [...history].reverse().find((m) => m.role === "assistant")?.content.toLowerCase() || "";

  // 0. Check out-of-bounds / off-topic rules FIRST so general coding/trivia queries never trigger portfolio keyword rules
  const outOfBounds = getOutOfBoundsReply(q);
  if (outOfBounds) {
    return outOfBounds;
  }

  // 1. Check if the user is asking about a specific project by name/keyword
  for (const proj of PROJECT_DETAILS) {
    if (proj.keywords.some((kw) => q.includes(kw))) {
      return proj.response;
    }
  }

  // 2. Check if the user asks to "explain any one project", "tell me about one project", "best project", "favorite project", or "elaborate" after listing projects
  const asksSingleProject =
    /(explain|tell|describe|share|detail|elaborate).*(any\s*one|one|a\s+single|1|best|fav|favourite|favorite|top)\s*project/.test(q) ||
    /\b(any\s*one\s*project|one\s*of\s*(the\s*|your\s*)?projects?|best\s*project|favorite\s*project|favourite\s*project)\b/.test(q) ||
    (prevAssistantMsg.includes("retailco") &&
      /\b(explain|elaborate|more|detail|first|second|third|one|any|which)\b/.test(q));

  if (asksSingleProject) {
    const picked = PROJECT_DETAILS[singleProjectCounter % PROJECT_DETAILS.length];
    singleProjectCounter++;
    return `${picked.response}\n\nWould you like me to explain another project like Real-Time Chat, Quiz Microservices, Phishing Detection, AI Search Chatbot, or Lingo?`;
  }

  // 3. Check if the user asks for all projects / project list
  if (/\b(projects?|built|portfolio|works?|creations?|applications?|apps?)\b/.test(q)) {
    return "Here are the 7 key projects I've built:\n1. RetailCo Warehouse & Fulfilment System (FastAPI, React 18, SQLAlchemy 2.0, Pytest, GitLab CI)\n2. Real-Time Chat Application (Socket.IO, Redis Pub/Sub, RabbitMQ, Docker)\n3. Quiz Microservices Platform (Java, Spring Boot, Eureka, OpenFeign, PostgreSQL)\n4. Phishing Detection System (FastAPI, Scikit-learn ML, MongoDB)\n5. AI Search Chatbot (LangChain, Groq, Llama 3, RAG)\n6. Next Word Prediction System (TensorFlow, LSTM & GRU, Streamlit)\n7. Lingo Language Learning Platform (Next.js 14, TypeScript, PostgreSQL, Stripe)\n\nAsk me to explain any of these by name (e.g., \"explain RetailCo\" or \"explain Quiz Microservices\")!";
  }

  // 4. Specific company queries: Quantiphi vs iCAVE Infotech
  if (q.includes("quantiphi")) {
    return "At Quantiphi (Jan 2026 – Present, Bengaluru), I work as a Software Development Engineer Intern (SDE Intern). I architect and integrate Gemini Enterprise AI agentic workflows on Google Cloud Platform (GCP), build high-concurrency FastAPI & Python microservices, and collaborate on automated testing and cloud deployment pipelines.";
  }
  if (q.includes("icave") || q.includes("i cave")) {
    return "At iCAVE Infotech (May 2025 – June 2025, Bengaluru), I worked as a Frontend Developer. I architected and built 5+ high-performance responsive React.js components that reduced initial page load time by 30%, while working in Agile sprints with Git workflows.";
  }

  // 5. General work experience / internship / career
  if (/\b(experience|intern|internship|work\s*history|career|company|companies|job|role|currently\s*doing|working)\b/.test(q)) {
    return "I'm currently a Software Development Engineer Intern (SDE Intern) at Quantiphi in Bengaluru (Jan 2026 – Present), where I build Gemini Enterprise AI agents, GCP cloud workflows, and FastAPI microservices. Previously, I was a Frontend Developer at iCAVE Infotech (May – June 2025), where I built responsive React.js interfaces and reduced page load time by 30%.";
  }

  // 6. Education / College / VIT / CGPA / School
  if (/\b(education|college|university|vit|vellore|cgpa|gpa|grade|marks|percentage|degree|b\.?tech|branch|major|study|studied|school|narayana|intermediate|10th|12th|ssc|mpc)\b/.test(q)) {
    return "I completed my B.Tech in Computer Science & Engineering from Vellore Institute of Technology (VIT Vellore, 2026) with a CGPA of 8.58/10, where I also served as Senior Core Committee Member at SCRS. Prior to VIT, I completed Class 12 (MPC) at Narayan Junior College (2022) with 91.3%, and Class 10 (SSC) at Narayana High School (2020) with 96.8% Distinction, where I represented the Andhra Pradesh State Team in the 63rd and 64th National School Games (U-14 SGFI Cricket).";
  }

  // 7. Certifications
  if (/\b(certifications?|certified|certificates?|credentials?|oracle|azure|anthropic|claude|gemini\s*cert|postman\s*cert)\b/.test(q)) {
    return "I hold 5 industry certifications:\n• Google Certified Partner Specialist – Gemini Enterprise Agent Development\n• Anthropic Claude Certified Developer – Foundations\n• Oracle Cloud Application Foundation Certified Implementation Specialist\n• Microsoft Certified: Azure AI Fundamentals\n• Postman API Fundamentals Student Expert.";
  }

  // 8. Sports / Cricket / Extracurriculars / Leadership / Clubs / Hobbies
  if (/\b(cricket|sports?|hobby|hobbies|extracurricular|leadership|club|scrs|soft\s*computing|workshop|mentor|achievement|award|sgfi|andhra)\b/.test(q)) {
    return "During my Secondary School at Narayana High School (completed 2020), I represented the Andhra Pradesh State Team in the 63rd and 64th National School Games (U-14 SGFI Cricket) 🏏. During my B.Tech at VIT Vellore (completed 2026), I served as a Senior Core Committee Member of the Soft Computing Research Society (SCRS), organizing 5+ technical workshops and mentoring 100+ students!";
  }

  // 9. Technical skills / tech stack (requires skill-related intent or asking about Shoyub's familiarity with a tech)
  const asksAboutSkills =
    /\b(skills?|tech\s*stack|technologies|tools|frameworks|proficiency|proficient|expertise|strengths|strong\s*in|good\s*at|familiar\s*with|know|use|using|work\s*with|languages)\b/.test(
      q
    ) ||
    (mentionsAboutShoyub(q) &&
      /\b(backend|frontend|fullstack|full-stack|database|cloud|devops|java|python|spring\s*boot|fastapi|react|typescript|javascript|node|postgres|postgresql|mongodb|mysql|redis|docker|sdd|openapi|dsa|oop|microservices)\b/.test(
        q
      ));

  if (asksAboutSkills) {
    return "My technical stack spans:\n• Backend & Microservices: Java, Python, Spring Boot, FastAPI, Node.js, REST APIs, Netflix Eureka, OpenFeign, Spec-Driven Development (OpenAPI)\n• Frontend: React.js, Next.js 14, TypeScript, JavaScript, Vite, Tailwind CSS\n• Databases & Messaging: PostgreSQL, MySQL, MongoDB, SQLite, SQLAlchemy 2.0, Redis Pub/Sub, RabbitMQ, Socket.IO\n• Cloud, AI & DevOps: Google Cloud Platform (GCP), Gemini Enterprise Agents, LangChain, Llama 3, Docker, GitLab CI, Pytest.";
  }

  // 10. Contact / Email / Phone / Resume / Hiring / Location
  if (/\b(contact|email|mail|phone|call|number|reach|connect|hire|hiring|available|availability|open\s*to\s*work|resume|cv|location|where\s*are\s*you|based|city|bengaluru|bangalore)\b/.test(q)) {
    return "I'm based in Bengaluru, Karnataka, India 📍 and open to software engineering opportunities! You can reach me at:\n• Email: shoyub.khan01@gmail.com\n• Phone: +91 7330734080\n• Type \"LinkedIn\" or \"GitHub\" here and I'll redirect you directly to my profiles!";
  }

  // 11. Chess / Game
  if (/\b(chess|board|elo|3640|move|checkmate|white|black|engine|play)\b/.test(q)) {
    return "You're playing against my custom chess engine right here on the page! Click any white piece to make your move and see if you can beat ELO 3640 ♟️";
  }

  // 12. Who are you / About yourself / Intro / Bio
  if (
    /\b(who\s*are\s*you|about\s*you|about\s*yourself|introduce|introduction|tell\s*me\s*about\s*shoyub|who\s*is\s*shoyub|your\s*name|bio|summary|profile)\b/.test(q)
  ) {
    return "I'm Shoyub Khan — a Software Development Engineer Intern (SDE Intern) at Quantiphi and a Computer Science & Engineering graduate from VIT Vellore (8.58 CGPA). I specialize in building scalable backends, distributed microservices, and AI agent workflows using Java, Python, Spring Boot, FastAPI, React.js, and GCP!";
  }

  // 13. Greetings / Small talk / Thanks
  if (/^(hi|hello|hey|yo|hola|greetings|good\s*(morning|afternoon|evening)|howdy|sup|what'?s\s*up)\b/.test(q)) {
    return "Hey there! 👋 I'm Shoyub Khan, an SDE Intern at Quantiphi and CSE graduate from VIT Vellore. Ask me about any of my projects (like RetailCo, Real-Time Chat, or Quiz Microservices), my internships, tech stack, certifications, or type \"LinkedIn\" / \"GitHub\" to visit my profiles!";
  }
  if (/\b(how\s*are\s*you|how'?s\s*it\s*going)\b/.test(q)) {
    return "I'm doing great, thanks for asking! 😊 Ready to chat about my software engineering work, projects, or play a game of chess with you. What would you like to know about me?";
  }
  if (/\b(thank|thanks|thx|awesome|cool|great|nice)\b/.test(q)) {
    return "You're very welcome! 😊 Feel free to ask anything else about my projects, experience, or skills!";
  }

  // 14. Strict guardrail for any outside / unrelated questions
  return "That's outside my scope — it's not about me! 😊 I only answer questions about Shoyub Khan. Feel free to ask about my SDE Internship at Quantiphi, my projects (RetailCo, Real-Time Chat, Quiz Microservices, Phishing Detection, AI Search Chatbot, Next Word Prediction, or Lingo), my tech stack, education at VIT Vellore, or type \"LinkedIn\" / \"GitHub\" to open my profiles!";
}

function mentionsAboutShoyub(q: string): boolean {
  return /\b(you|your|yours|u|ur|shoyub|know|have|experience|worked|stack|skill)\b/.test(q);
}

const Play = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<Square[]>([]);
  const [moveHistory, setMoveHistory] = useState<MoveHistory[]>([]);
  const [capturedWhite, setCapturedWhite] = useState<string[]>([]);
  const [capturedBlack, setCapturedBlack] = useState<string[]>([]);
  const [boardFlipped, setBoardFlipped] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [gameStatus, setGameStatus] = useState<string>("");
  const [playerColor] = useState<Color>("w");
  const [engineThinking, setEngineThinking] = useState(false);
  const redoxchessRef = useRef<RedoxChessEngine | null>(null);
  const chatMessagesEndRef = useRef<HTMLDivElement | null>(null);

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hello there! I am Shoyub Khan 👋 Ask me anything you want to know!" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const files = boardFlipped ? ["h", "g", "f", "e", "d", "c", "b", "a"] : ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = boardFlipped ? ["1", "2", "3", "4", "5", "6", "7", "8"] : ["8", "7", "6", "5", "4", "3", "2", "1"];

  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const updateGameStatus = useCallback((g: Chess) => {
    if (g.isCheckmate()) {
      setGameStatus(g.turn() === "w" ? "Checkmate! Black wins!" : "Checkmate! White wins!");
    } else if (g.isDraw()) {
      if (g.isStalemate()) setGameStatus("Draw by stalemate");
      else if (g.isThreefoldRepetition()) setGameStatus("Draw by repetition");
      else if (g.isInsufficientMaterial()) setGameStatus("Draw by insufficient material");
      else setGameStatus("Draw");
    } else if (g.isCheck()) {
      setGameStatus(g.turn() === "w" ? "White is in check!" : "Black is in check!");
    } else {
      setGameStatus(g.turn() === "w" ? "White's turn" : "Black's turn");
    }
  }, []);

  useEffect(() => {
    updateGameStatus(game);
  }, [game, updateGameStatus]);

  useEffect(() => {
    const initEngine = async () => {
      redoxchessRef.current = new RedoxChessEngine();
      await redoxchessRef.current.init();
    };
    initEngine();
    return () => {
      redoxchessRef.current?.quit();
    };
  }, []);

  useEffect(() => {
    if (game.turn() === "b" && !game.isGameOver() && redoxchessRef.current) {
      setEngineThinking(true);
      redoxchessRef.current.setPosition(game.fen());
      redoxchessRef.current.getBestMove((move) => {
        const from = move.substring(0, 2) as Square;
        const to = move.substring(2, 4) as Square;
        makeMove(from, to);
        setEngineThinking(false);
      }, 12);
    }
  }, [game]);

  const getPieceAt = (square: Square): { type: PieceSymbol; color: Color } | null => {
    return game.get(square) || null;
  };

  const handleSquareClick = (square: Square) => {
    if (engineThinking || game.turn() !== "w") return;
    const piece = getPieceAt(square);

    // If a piece is already selected
    if (selectedSquare) {
      // Try to make a move
      if (possibleMoves.includes(square)) {
        makeMove(selectedSquare, square);
      } else if (piece && piece.color === game.turn()) {
        // Select a different piece of the same color
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setPossibleMoves(moves.map((m) => m.to as Square));
      } else {
        // Deselect
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } else {
      // Select a piece if it's the current player's turn
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setPossibleMoves(moves.map((m) => m.to as Square));
      }
    }
  };

  const makeMove = (from: Square, to: Square) => {
    try {
      const gameCopy = new Chess(game.fen());
      const move = gameCopy.move({ from, to, promotion: "q" }); // Auto-promote to queen

      if (move) {
        // Update captured pieces
        if (move.captured) {
          if (move.color === "w") {
            setCapturedBlack((prev) => [...prev, move.captured!]);
          } else {
            setCapturedWhite((prev) => [...prev, move.captured!]);
          }
        }

        // Update move history
        setMoveHistory((prev) => [
          ...prev,
          {
            from: move.from,
            to: move.to,
            piece: move.piece,
            captured: move.captured,
            san: move.san,
          },
        ]);

        setLastMove({ from: from, to: to });
        setGame(gameCopy);
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    } catch {
      setSelectedSquare(null);
      setPossibleMoves([]);
    }
  };

  const resetGame = () => {
    setGame(new Chess());
    setSelectedSquare(null);
    setPossibleMoves([]);
    setMoveHistory([]);
    setCapturedWhite([]);
    setCapturedBlack([]);
    setLastMove(null);
    setGameStatus("White's turn");
    setBoardFlipped(false);
  };

  const flipBoard = () => {
    if (moveHistory.length > 0) {
      if (window.confirm("Start new game?")) {
        resetGame();
        setBoardFlipped(!boardFlipped);
      }
      return;
    }
    setBoardFlipped(!boardFlipped);
  };

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const currentQuery = chatInput;
    const userMessage: ChatMessage = { role: "user", content: currentQuery };
    const updatedHistory = [...chatMessages, userMessage];
    setChatMessages(updatedHistory);
    setChatInput("");

    // Immediate redirect if user asks for LinkedIn or GitHub
    const redirectAction = getRedirectAction(currentQuery);
    if (redirectAction) {
      window.open(redirectAction.url, "_blank", "noopener,noreferrer");
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: redirectAction.reply },
      ]);
      return;
    }

    setIsTyping(true);

    try {
      const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...chatMessages
          .filter((m) => m.role !== "system")
          .map((m) => ({
            role: m.role,
            content: m.content,
          })),
        { role: "user", content: currentQuery },
      ];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: data.choices[0].message.content,
        };
        setChatMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("Invalid response");
      }
    } catch {
      const fallbackReply = getLocalAssistantReply(currentQuery, chatMessages);
      setChatMessages((prev) => [...prev, { role: "assistant", content: fallbackReply }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderPiece = (piece: { type: PieceSymbol; color: Color } | null) => {
    if (!piece) return null;
    const key = `${piece.color}${piece.type.toUpperCase()}`;
    const svg = PIECES[key];
    if (!svg) return null;
    return <div className="chess-piece" dangerouslySetInnerHTML={{ __html: svg }} />;
  };

  const isSquareLight = (file: string, rank: string): boolean => {
    const fileIndex = "abcdefgh".indexOf(file);
    const rankIndex = parseInt(rank) - 1;
    return (fileIndex + rankIndex) % 2 === 1;
  };

  const renderCapturedPieces = (pieces: string[], color: Color) => {
    return pieces.map((piece, index) => {
      const key = `${color}${piece.toUpperCase()}`;
      const svg = PIECES[key];
      return <div key={index} className="captured-piece" dangerouslySetInnerHTML={{ __html: svg || "" }} />;
    });
  };

  const formatMoveHistory = () => {
    const formatted: { moveNum: number; white: string; black: string }[] = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      formatted.push({
        moveNum: Math.floor(i / 2) + 1,
        white: moveHistory[i]?.san || "",
        black: moveHistory[i + 1]?.san || "",
      });
    }
    return formatted;
  };

  return (
    <div className="play-page">
      {/* Header */}
      <div className="play-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
      </div>

      <div className="chess-container">
        {/* Chat Panel - Left Side */}
        <div className="chat-panel">
          <div className="chat-header">
            <span className="chat-title">💬 Talk with me</span>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message assistant">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={chatMessagesEndRef} />
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
              data-cursor="disable"
            />
            <button className="chat-send-btn" onClick={sendMessage} data-cursor="disable">
              ➤
            </button>
          </div>
        </div>

        {/* Board Section with Player Labels */}
        <div className="chess-board-section">
          {/* Opponent Info - Top of Board */}
          <div className="player-bar opponent-bar">
            <div className="player-info">
              <div className="player-avatar">
                <span>SK</span>
              </div>
              <div className="player-details">
                <span className="player-name">Shoyub Khan</span>
                <span className="player-rating">{engineThinking ? "🤔 Thinking..." : "ELO 3640"}</span>
              </div>
            </div>
            <div className="captured-pieces">{renderCapturedPieces(capturedWhite, "w")}</div>
          </div>

          {/* Chess Board */}
          <div className="chess-board-wrapper">
            <div className="chess-board">
              {ranks.map((rank) =>
                files.map((file) => {
                  const square = `${file}${rank}` as Square;
                  const piece = getPieceAt(square);
                  const isLight = isSquareLight(file, rank);
                  const isSelected = selectedSquare === square;
                  const isPossibleMove = possibleMoves.includes(square);
                  const isLastMoveSquare = lastMove && (lastMove.from === square || lastMove.to === square);
                  const isCheck = game.isCheck() && piece?.type === "k" && piece?.color === game.turn();

                  return (
                    <div
                      key={square}
                      className={`chess-square ${isLight ? "light" : "dark"} 
                        ${isSelected ? "selected" : ""} 
                        ${isLastMoveSquare ? "last-move" : ""}
                        ${isCheck ? "in-check" : ""}`}
                      onClick={() => handleSquareClick(square)}
                      data-cursor="disable"
                    >
                      {/* Coordinate labels */}
                      {file === (boardFlipped ? "h" : "a") && <span className="coord-rank">{rank}</span>}
                      {rank === (boardFlipped ? "8" : "1") && <span className="coord-file">{file}</span>}

                      {/* Piece */}
                      {renderPiece(piece)}

                      {/* Possible move indicator */}
                      {isPossibleMove && <div className={`move-indicator ${piece ? "capture" : ""}`} />}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Player Info - Bottom of Board */}
          <div className="player-bar player-bar-bottom">
            <div className="player-info">
              <div className="player-avatar">
                <span>👤</span>
              </div>
              <div className="player-details">
                <span className="player-name">You</span>
                <span className="player-rating">{playerColor === "w" ? "White" : "Black"}</span>
              </div>
            </div>
            <div className="captured-pieces">{renderCapturedPieces(capturedBlack, "b")}</div>
          </div>
        </div>

        {/* Right Panel - Controls & Move History */}
        <div className="chess-side-panel right-panel">
          {/* Game Status */}
          <div className="game-status">
            <span className={game.isCheck() ? "check" : ""}>{gameStatus}</span>
          </div>

          {/* Move History */}
          <div className="move-history">
            <div className="move-history-header">Moves</div>
            <div className="move-history-list">
              {formatMoveHistory().map((move, index) => (
                <div key={index} className="move-row">
                  <span className="move-num">{move.moveNum}.</span>
                  <span className="move-white">{move.white}</span>
                  <span className="move-black">{move.black}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="game-controls">
            <button onClick={resetGame} className="control-btn" data-cursor="disable">
              New Game
            </button>
            <button onClick={flipBoard} className="control-btn" data-cursor="disable">
              Flip Board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
