export const profile = {
  name: "Rhanny Belle Urbis",
  role: "AI Automation Engineer / Backend Engineer",
  shortBio:
    "I build AI-driven backend systems, workflow automations, and agent-based services that handle real business operations with stability, traceability, and practical deployment in mind.",
  longBio:
    "My work focuses on dependable AI systems that collect, organize, analyze, and transform information into usable outputs for business teams. I design backends and automation pipelines that can process high volumes of data, avoid duplicate work, support long-running tasks, and remain maintainable in production.",
  location: "Ilocos Sur, Philippines",
  email: "raniurbis@gmail.com",
  linkedin: "https://www.linkedin.com/in/rhanny-belle-urbis",
  github: "https://github.com/",
};

export const projectCategories = [
  {
    title: "AI Apps",
    items: [
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
      {
        name: "TripBites",
        summary: "Agent-driven travel and food exploration app using LangGraph + ReAct-style orchestration.",
        stack: ["Next.js", "LangGraph", "ReAct"],
        href: "https://news-weather-agent-frontend.vercel.app",
      },
    ],
  },
  {
    title: "AI/ML Case Studies",
    items: [
      {
        name: "Germany Tech Market: Trends & Forecast",
        summary: "Market trend and forecast analysis of the German tech sector with a structured narrative and visuals.",
        stack: ["Forecasting", "Time Series", "RPubs"],
        href: "https://rpubs.com/rnx2024/trends-and-forecast-germany-tech-market",
      },
      {
        name: "Revenue Forecast 2025: Top 12 German Companies",
        summary: "Revenue forecasting analysis for 12 German companies with comparative insights and projections.",
        stack: ["Forecasting", "Financial Analysis", "RPubs"],
        href: "https://rpubs.com/rnx2024/revenue-forecast-2025-for-top-12-german-companies",
      },
      {
        name: "Philippine Presidents: Mapped Profiles",
        summary: "Exploratory data story mapping presidential candidates and presidents across key attributes.",
        stack: ["Data Viz", "EDA", "RPubs"],
        href: "https://rpubs.com/rnx2024/philippine-presidential-candidates-and-presidents-mapped-profiles",
      },
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
