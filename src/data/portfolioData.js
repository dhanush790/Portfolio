export const personalInfo = {
  name: "Dhanush M",
  role: "AI & Full-Stack Developer",
  status: "Available for Opportunities",
  location: "Coimbatore, Tamil Nadu",
  email: "dhanush30166@gmail.com",
  phone: "+91 7907262392",
  github: "https://github.com/dhanush790",
  linkedin: "https://linkedin.com/in/dhanush-m-344065294",
  bio: "Final-year B.Tech Artificial Intelligence & Data Science student specialized in crafting intelligent, scalable, and high-performance web applications using FastAPI, React, and Retrieval-Augmented Generation (RAG).",
  heroHeadlines: [
    { line1: "CREATIVE", line2: "DEVELOPER" },
    { line1: "SCALABLE", line2: "SYSTEMS" },
    { line1: "INTELLIGENT", line2: "SYSTEMS" }
  ],
  stats: [
    { label: "CGPA", value: "8.40", desc: "B.Tech AI & Data Science" },
    { label: "Core Stack", value: "FastAPI + React", desc: "High-Performance APIs" },
    { label: "AI Specialization", value: "RAG & LLMs", desc: "Vector Search & Retrieval" },
    { label: "Experience", value: "Infosys Intern", desc: "Enterprise Workflows" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & APIs" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools & DevOps" }
  ],
  skills: [
    // Frontend
    { name: "React.js", category: "frontend", level: "Advanced", icon: "Code2" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: "FileCode" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "Palette" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", icon: "Layout" },
    { name: "Responsive UI", category: "frontend", level: "Advanced", icon: "Smartphone" },
    { name: "Component-based UI", category: "frontend", level: "Advanced", icon: "Layers" },

    // Backend & APIs
    { name: "Python", category: "backend", level: "Advanced", icon: "Terminal" },
    { name: "FastAPI", category: "backend", level: "Advanced", icon: "Zap" },
    { name: "Django", category: "backend", level: "Advanced", icon: "Server" },
    { name: "Django REST Framework", category: "backend", level: "Advanced", icon: "Cpu" },
    { name: "REST APIs", category: "backend", level: "Advanced", icon: "Network" },
    { name: "JWT Authentication", category: "backend", level: "Intermediate", icon: "ShieldCheck" },
    { name: "Swagger / OpenAPI", category: "backend", level: "Advanced", icon: "FileText" },
    { name: "LLM API Integration", category: "backend", level: "Advanced", icon: "Bot" },

    // AI & ML
    { name: "RAG Architecture", category: "ai", level: "Advanced", icon: "BrainCircuit" },
    { name: "Large Language Models", category: "ai", level: "Advanced", icon: "Sparkles" },
    { name: "ChromaDB", category: "ai", level: "Advanced", icon: "Database" },
    { name: "Vector Embeddings", category: "ai", level: "Advanced", icon: "GitCommit" },
    { name: "Semantic Search", category: "ai", level: "Advanced", icon: "Search" },
    { name: "Sentence Transformers", category: "ai", level: "Intermediate", icon: "Activity" },
    { name: "Speech-to-Text", category: "ai", level: "Intermediate", icon: "Mic" },
    { name: "Prompt Engineering", category: "ai", level: "Advanced", icon: "Wand2" },

    // Databases
    { name: "PostgreSQL", category: "databases", level: "Advanced", icon: "Database" },
    { name: "pgvector", category: "databases", level: "Intermediate", icon: "HardDrive" },
    { name: "MySQL", category: "databases", level: "Intermediate", icon: "Database" },
    { name: "SQL", category: "databases", level: "Advanced", icon: "Code2" },
    { name: "Relational DB Design", category: "databases", level: "Advanced", icon: "Table" },

    // Tools & DevOps
    { name: "Docker", category: "tools", level: "Intermediate", icon: "Box" },
    { name: "Git & GitHub", category: "tools", level: "Advanced", icon: "GitBranch" },
    { name: "VS Code", category: "tools", level: "Advanced", icon: "FileCode2" },
    { name: "Swagger UI & Postman", category: "tools", level: "Advanced", icon: "CheckCircle2" },
    { name: "Agile Collaboration", category: "tools", level: "Advanced", icon: "Users" }
  ]
};

export const projectsData = [
  {
    id: "workflow-automation",
    number: "01",
    badge: "Enterprise Automation",
    title: "Dynamic Workflow Automation System",
    subtitle: "Digital Data Collection & Smart Form Engine",
    description: "Built during the Infosys Virtual Internship, this enterprise-grade smart form engine enables dynamic form schema creation, conditional show/hide branching, versioned publishing, and real-time response analytics.",
    featured: true,
    highlight: false,
    tags: ["FastAPI", "PostgreSQL", "React.js", "Docker", "JWT Auth", "Swagger UI"],
    metrics: "100% Swagger-documented REST APIs with JWT security",
    points: [
      "Engineered high-performance RESTful APIs for form creation and conditional branching logic",
      "Implemented JWT authentication for form admins and secure shareable links for respondents",
      "Built submission analytics dashboard with instant CSV/JSON data export"
    ],
    github: "https://github.com/dhanush790",
    demo: "#"
  },
  {
    id: "rag-assistant",
    number: "02",
    badge: "AI & Vector Retrieval",
    title: "AI Study Assistant using RAG",
    subtitle: "Context-Aware Knowledge Retrieval Engine",
    description: "An intelligent study platform where students upload PDF and textbook materials to query them in natural language. Powered by ChromaDB vector storage, Sentence Transformers for semantic chunking, and LLMs for precise, contextual answers.",
    featured: true,
    highlight: true, // CENTER HIGHLIGHTED CARD MATCHING REFERENCE VIDEO
    tags: ["React.js", "Django REST", "ChromaDB", "LLMs", "Vector Embeddings", "Python"],
    metrics: "Sub-second vector lookup & multi-document parsing",
    points: [
      "Designed vector database storage and query pipeline with ChromaDB",
      "Implemented document processing, embedding generation, and per-student access isolation",
      "Delivered real-time streaming answers with precise source citations"
    ],
    github: "https://github.com/dhanush790",
    demo: "#"
  },
  {
    id: "hospital-management",
    number: "03",
    badge: "Healthcare Systems",
    title: "Smart Hospital Patient Flow Management",
    subtitle: "Digitized Queue & Voice-Assisted Clinical Portal",
    description: "Comprehensive healthcare workflow application digitizing patient registration, smart token queue generation, department routing, and clinical documentation, featuring speech-to-text for hands-free doctor inputs.",
    featured: true,
    highlight: false,
    tags: ["Django", "PostgreSQL", "Speech-to-Text", "HTML5/CSS3", "JavaScript"],
    metrics: "40% reduction in patient waiting and intake times",
    points: [
      "Developed end-to-end patient workflow from token issuance to diagnostic portals",
      "Integrated speech-to-text API for rapid doctor notes and prescription logging",
      "Implemented role-based portals for reception, doctor triage, and pharmacy"
    ],
    github: "https://github.com/dhanush790",
    demo: "#"
  }
];

export const experienceData = [
  {
    period: "2026",
    role: "Full-Stack & Backend Intern",
    organization: "Infosys Virtual Internship",
    project: "Dynamic Workflow Automation System (Digital Data Collection Framework)",
    stack: ["FastAPI", "PostgreSQL", "React.js", "Docker", "JWT", "Swagger UI"],
    details: [
      "Engineered a scalable smart form builder platform featuring a FastAPI backend and a responsive React.js admin dashboard.",
      "Designed RESTful endpoints for schema generation, versioned publishing, conditional show/hide logic, and automated CSV/JSON data exports.",
      "Implemented robust JWT-based authorization, secure file uploads, shareable respondent URLs, and interactive Swagger documentation."
    ]
  }
];

export const educationData = [
  {
    period: "2023 - 2027 (Pursuing)",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Artificial Intelligence and Data Science",
    institution: "Coimbatore Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    score: "CGPA: 8.40",
    highlights: "Focus on Data Structures, Algorithms, Machine Learning, Deep Learning, DBMS, and Web Architecture."
  },
  {
    period: "2023",
    degree: "Higher Secondary (Class XII)",
    major: "Computer Science & Science Stream",
    institution: "GHSS Marayoor",
    location: "Kerala",
    score: "81.9%",
    highlights: "Distinction in Mathematics and Computer Science foundations."
  },
  {
    period: "2021",
    degree: "Secondary School (Class X)",
    major: "General High School Studies",
    institution: "GHSS Marayoor",
    location: "Kerala",
    score: "94.4%",
    highlights: "Academic Excellence with Top Tier Percentile."
  }
];

export const certificationsData = [
  {
    name: "Data Analytics with Python",
    issuer: "NPTEL",
    skills: ["Python", "Data Processing", "NumPy & Pandas", "Statistical Analytics"],
    badge: "Government of India / IIT"
  },
  {
    name: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera / Johns Hopkins University",
    skills: ["Modern Frontend", "Responsive UI", "DOM Manipulation", "Asynchronous JavaScript"],
    badge: "Verified Certification"
  }
];
