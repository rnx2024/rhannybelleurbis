export const profile = {
  name: "Rhanny Belle Urbis",
  role: "AI Engineer | Automation Engineer | Backend Engineer",
  shortBio:
    "I build backend systems, agents, agentic AI, and workflow automations, to handle business processes and operations with security and reliability.",
  location: "Ilocos Sur, Philippines",
  email: "raniurbis@gmail.com",
  linkedin: "https://www.linkedin.com/in/rhanny-belle-urbis",
  github: "https://www.github.com/rnx2024",
};

export const projectCategories = [
  {
    title: "AI Apps",
    items: [
      {
        name: "TripBites",
        summary: "Agent-driven travel intelligence app using LangGraph + ReAct-style orchestration.",
        stack: ["TypeScript", "Next.js", "LangGraph", "ReAct"],
        href: "https://news-weather-agent-frontend.vercel.app",
      },
      {
        name: "VoiceBuddy",
        summary: "Voice-focused AI app using OpenAI TTS for interactive speech generation and practical experimentation.",
        stack: ["Python", "Streamlit", "OpenAI TTS"],
        href: "https://voicebuddy-ai-ver1.streamlit.app",
      },
      {
        name: "CarInsure Bot",
        summary: "Insurance assistant application built around retrieval and guided interaction patterns.",
        stack: ["Python", "Streamlit", "LlamaIndex"],
        href: "https://chatbot-insurance-ver1.streamlit.app",
      },
    ],
  },
];

export const workExperience = [
  {
    role: "AI & Automation Engineer",
    company: "Cadence Education",
    period: "June 2026 – Present",
    highlights: [
      "Analyze, improve, debug, and manage existing workflows and automations to ensure 100% serviceability to branches.",
      "Build OpenWorkflows and implement migrations from Power Automate, Make, and n8n workflows to ensure the security and reliability of business automations.",
      "Create requirements analyses, build plans and designs, and workflow and agent documentation to ensure development and implementation meet acceptance criteria, business requirements, and security rules.",
    ],
  },
  {
    role: "AI Automation Engineer (Freelance)",
    company: "Strategic AI Consultants",
    period: "March 2026 – May 2026",
    highlights: [
      "Built an n8n-orchestrated predictive lead scoring workflow, reducing manual lead review time by up to 75%.",
      "Developed a client onboarding automation, reducing setup time by up to 3 hours per client.",
      "Worked with the Founder/CEO in client discovery and onboarding for project implementation and handoff.",
      "Improved workflows through ongoing review, maintenance, and audits, reducing integration risks and identifying new automation opportunities.",
    ],
  },
  {
    role: "AI Automation Engineer",
    company: "PopAI Technologies",
    period: "August 2025 – April 2026",
    highlights: [
      "Developed AI and data workflow backends for enterprise agentic AI products, including PopAI Knowledge Manager (RAG), Sales Agents, and Recruitment Agents.",
      "Built ETL-based automated reporting pipelines, KPI monitoring systems, websocket-based message monitoring, and QA data systems for internal operations.",
      "Built n8n workflows, LangChain and LangGraph agents, and FastAPI services.",
      "Implemented production monitoring, failure handling, notification workflows, API testing, QA guides, and documentation for internal and client-facing AI agents.",
      "Collaborated with project managers, frontend developers, QA teams, and end-users to translate requirements into reliable automation and AI workflow features.",
    ],
  },
  {
    role: "Team Lead / AI Specialist",
    company: "Behavior Education Services Team (BEST)",
    period: "March 2025 – August 2025",
    highlights: [
      "Led process improvements, automated workflow development, and AI solutions that increased productivity in Global HR and BA Recruitment by 50%.",
      "Led the design and development of an automated OCR and information extraction app for tenant application forms for Evercrest Homes.",
      "Designed training materials and conducted AI training across departments to achieve 86% business AI fluency.",
    ],
  },
  {
    role: "Remote Placement Specialist / Data Analyst",
    company: "Talents2Germany",
    period: "August 2024 – March 2025",
    highlights: [
      "Automated HR, recruitment, and reporting workflows using JavaScript/TypeScript, Python, and APIs.",
      "Increased team productivity by 50% through automation of candidate job application updates and FAQ chatbot development.",
      "Designed and developed automated data analysis and predictive data analysis to help formulate business strategies and support decision-making.",
    ],
  },
  {
    role: "Campaigns, Advocacy, and Networking Staff (Ilocos Region)",
    company: "Katinnulong Dagiti Umili iti Amianan, Inc.",
    period: "October 2010 – May 2020",
    highlights: [
      "Led 30+ comprehensive research, automated, and predictive data analysis projects that supported the organization’s funding efforts.",
    ],
  },
];

export const articles = [
  {
    title: "Embeddings vs. Re-Ranking: How to Use Each",
    summary: "When embeddings are enough, when re-ranking is justified, and how to combine both in production retrieval pipelines.",
    href: "https://medium.com/@raniurbis/embeddings-vs-re-ranking-how-to-use-each-8ead57f4edfa?source=your_stories_outbox---writer_outbox_published-----------------------------------------",
    tags: ["RAG", "Retrieval", "Embeddings", "Re-ranking"],
  },
  {
    title: "How to Build a Fast & Reliable API for an ETL/Report Generation Agent",
    summary: "A practical pattern for keeping FastAPI thin while moving heavy ETL and report generation work off the request path.",
    href: "https://medium.com/@raniurbis/how-to-build-a-fast-reliable-api-for-an-etl-report-generation-agent-56f5c3f581ba?source=your_stories_outbox---writer_outbox_published-----------------------------------------",
    tags: ["FastAPI", "ETL", "Agents", "Architecture"],
  },
  {
    title: "Building Production-Ready Apps Without Over-Engineering",
    summary: "How to keep systems dependable and maintainable without adding unnecessary complexity too early.",
    href: "https://medium.com/@raniurbis/building-production-ready-apps-without-over-engineering-ce79ef7904b5?source=your_stories_outbox---writer_outbox_published-----------------------------------------",
    tags: ["Architecture", "Backend", "Production"],
  },
  {
    title: "Why Most Systems Don’t Have Real Error Handling",
    summary: "A production-minded look at failure handling, stability, and what real operational resilience requires.",
    href: "https://medium.com/@raniurbis/why-most-systems-dont-have-real-error-handling-e277d1471314?source=your_stories_outbox---writer_outbox_published-----------------------------------------",
    tags: ["Reliability", "Error Handling", "Backend"],
  },
  {
    title: "How To Use SignalRCore in Python",
    summary: "A targeted technical article on wiring Python systems to SignalR-based realtime communication patterns.",
    href: "https://medium.com/@raniurbis/how-to-use-signalrcore-in-python-3250203ceb14?source=your_stories_outbox---writer_outbox_published-----------------------------------------",
    tags: ["Python", "SignalR", "Realtime"],
  },
  {
    title: "How n8n Can Complement Backend Implementations",
    summary: "Where workflow automation belongs, where backend code should take over, and how to combine both sanely.",
    href: "https://medium.com/@raniurbis/how-n8n-can-complement-backend-implementations-13804550a33a?source=your_stories_outbox---writer_outbox_published-----------------------------------------",
    tags: ["n8n", "Automation", "Backend"],
  },
];
