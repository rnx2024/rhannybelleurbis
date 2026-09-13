export const profile = {
  name: "Rhanny Belle Urbis",
  role: "AI Automation Engineer | Backend Systems & AI Agents",
  shortBio:
    "I build backend services, AI workflows, and automations that help teams reduce manual work, run reliably, and handle business data securely.",
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
        summary: "A travel assistant built with Next.js and LangGraph. It uses a multi-step workflow to gather trip information and return a useful answer in one place.",
        problem: "Trip planning often means checking several sources and pulling the details together by hand.",
        built: "Built the interface in Next.js and the workflow in LangGraph, using a ReAct-style approach to break requests into smaller tasks.",
        engineeringNote: "The project focuses on workflow orchestration rather than treating the app as a single chat prompt.",
        stack: ["TypeScript", "Next.js", "LangGraph", "ReAct"],
        href: "https://news-weather-agent-frontend.vercel.app",
      },
      {
        name: "VoiceBuddy",
        summary: "A document-to-audio app that summarizes uploaded documents and turns the summary—or the full document—into narration using OpenAI TTS.",
        problem: "Long documents are not always convenient to read, especially when someone needs to review them away from a screen.",
        built: "Built a Streamlit interface that accepts documents, creates a summary when requested, and generates narrated audio.",
        engineeringNote: "The app supports both summarized and full-document narration instead of forcing one workflow on every document.",
        stack: ["Python", "Streamlit", "OpenAI TTS"],
        href: "https://voicebuddy-ai-ver1.streamlit.app",
      },
      {
        name: "CarInsure Bot",
        summary: "A question-and-answer app for car-insurance documents. It retrieves relevant policy information before answering questions in plain language.",
        problem: "Insurance documents can be difficult to search when a policyholder needs a quick answer.",
        built: "Built a Streamlit interface with LlamaIndex to retrieve relevant content before generating an answer.",
        engineeringNote: "The retrieval step keeps the response tied to the available policy material instead of relying only on the model’s general knowledge.",
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
      "Keep branch automations running by investigating failures, fixing workflows, and handling operational issues.",
      "Rebuild selected Power Automate, Make, and n8n workflows as OpenWorkflows, with clearer failure handling and stronger control over integrations.",
      "Turn business requirements into implementation plans, workflow and agent designs, acceptance criteria, and documentation.",
    ],
  },
  {
    role: "AI Automation Engineer (Freelance)",
    company: "Strategic AI Consultants",
    period: "March 2026 – May 2026",
    highlights: [
      "Built an n8n-orchestrated predictive lead scoring workflow, reducing manual lead review time by up to 75%.",
      "Developed a client onboarding automation, reducing setup time by up to 3 hours per client.",
      "Joined client-discovery calls with the founder, clarified requirements, and helped move projects through implementation and handoff.",
      "Reviewed existing workflows, fixed integration issues, and identified follow-up automation work.",
    ],
  },
  {
    role: "AI Automation Engineer",
    company: "PopAI Technologies",
    period: "August 2025 – April 2026",
    highlights: [
      "Built backend workflows for enterprise AI products, including a RAG knowledge manager, sales agents, and recruitment agents.",
      "Built ETL and reporting pipelines, KPI monitoring systems, WebSocket message monitoring, and QA data systems for internal operations.",
      "Developed n8n workflows, LangChain and LangGraph agents, and FastAPI services.",
      "Added monitoring, failure handling, notifications, API tests, QA guides, and documentation for internal and client-facing AI agents.",
      "Worked with project managers, frontend developers, QA teams, and end users to turn requirements into working automation and AI features.",
    ],
  },
  {
    role: "Team Lead / AI Specialist",
    company: "Behavior Education Services Team (BEST)",
    period: "March 2025 – August 2025",
    highlights: [
      "Led HR and recruitment process improvements that increased team productivity by 50%.",
      "Designed and built an OCR and information-extraction app for tenant application forms.",
      "Created training materials and delivered AI training across departments, contributing to 86% business AI fluency.",
    ],
  },
  {
    role: "Remote Placement Specialist / Data Analyst",
    company: "Talents2Germany",
    period: "August 2024 – March 2025",
    highlights: [
      "Automated HR, recruitment, and reporting workflows using JavaScript/TypeScript, Python, and APIs.",
      "Increased team productivity by 50% by automating candidate application updates and building an FAQ chatbot.",
      "Built automated reporting and predictive-analysis workflows to support business planning and decision-making.",
    ],
  },
  {
    role: "Campaigns, Advocacy, and Networking Staff (Ilocos Region)",
    company: "Katinnulong Dagiti Umili iti Amianan, Inc.",
    period: "October 2010 – May 2020",
    highlights: [
      "Led more than 30 research and data-analysis projects, including automated reporting and predictive analysis, to support the organization’s funding work.",
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
