# 🚀 Shoyub Khan — 3D Interactive Developer Portfolio

A modern, high-performance **3D interactive developer portfolio** for **Patan Baba Shoyub Khan** (Software Development Engineer Intern at **Quantiphi** & CSE Graduate from **VIT Vellore**), built with **React 18**, **TypeScript**, **Three.js / WebGL**, **GSAP**, and **Lenis**.

---

## ✨ Key Features

- **Interactive 3D Character Experience**: Rigged 3D character powered by **Three.js**, **GLTFLoader / DRACOLoader**, Web Crypto (`AES-CBC`) model decryption, HDR studio rim lighting, and real-time cursor/scroll bone tracking.
- **Smooth Scroll & GSAP Timelines**: Synchronized camera transitions, horizontal project showcase pinning, and custom 3D split-text animations powered by **GSAP (`ScrollTrigger`)** and **Lenis**.
- **Interactive `/play` Arena ("Talk with me" + Chess)**:
  - **Custom Portfolio AI Assistant**: Answers questions about Shoyub's experience at **Quantiphi** & **iCAVE Infotech**, 7 full-stack/microservices/AI projects, VIT Vellore education, and certifications, with strict out-of-bounds guardrails and instant **LinkedIn** / **GitHub** profile redirects.
  - **ELO 3640 Chess Engine**: Built-in interactive chess board powered by `chess.js` and a custom Minimax + Alpha-Beta pruning engine (`RedoxChessEngine`).
- **Direct Portfolio Mail System**: Asynchronous contact form in [`Contact.tsx`](./src/components/Contact.tsx) using FormSubmit AJAX to deliver structured portfolio inquiries (`Portfolio Mail from <Sender> - <Subject>`) without page redirects.

---

## 🧰 Tech Stack

- **Frontend & Routing**: React 18, TypeScript, Vite 5, React Router v7
- **3D & WebGL**: Three.js, React Three Fiber, Drei, Rapier Physics, Postprocessing
- **Animations & Smooth Scroll**: GSAP (`ScrollTrigger`), Lenis, React Fast Marquee
- **Interactive Modules**: `chess.js`, Custom Minimax Chess Engine, Guardrailed Portfolio Chatbot
- **Contact & Analytics**: FormSubmit AJAX API, Vercel Analytics & Speed Insights

---

## 📂 Featured Projects Showcased

1. **RetailCo Warehouse & Fulfilment Management System** — *Python, FastAPI, React 18, Vite, SQLAlchemy 2.0, Pydantic v2, SQLite, Pytest, GitLab CI*
2. **Real-Time Chat Application** — *MongoDB, Express.js, React.js, Node.js, Socket.IO, Redis Pub/Sub, RabbitMQ, Docker*
3. **Quiz Microservices Platform** — *Java, Spring Boot, REST APIs, PostgreSQL, JPA/Hibernate, Netflix Eureka, OpenFeign*
4. **Phishing Detection System** — *Python, FastAPI, Scikit-learn, Pandas, MongoDB*
5. **AI Search Chatbot with LangChain** — *Python, LangChain, Groq, Llama 3, Agentic RAG, Streamlit*
6. **Next Word Prediction System** — *Python, TensorFlow, LSTM & GRU, NLP, Streamlit*
7. **Lingo: Interactive Language Learning Platform** — *Next.js 14, React, TypeScript, Tailwind CSS, PostgreSQL, Drizzle ORM, Stripe*

---

## 🚀 Getting Started

### 1) Clone the Repository

```bash
git clone https://github.com/shoyub/Portfolio.git
cd Portfolio
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Run Development Server

```bash
npm run dev
```

### 4) Build for Production

```bash
npm run build
```

---

## 🤝 Connect with Shoyub Khan

- **GitHub**: [github.com/shoyub](https://github.com/shoyub)
- **LinkedIn**: [linkedin.com/in/shoyub-khan](https://www.linkedin.com/in/shoyub-khan)
- **Email**: [shoyub.khan01@gmail.com](mailto:shoyub.khan01@gmail.com)
- **Location**: Bengaluru, Karnataka, India

---

## 🪪 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
