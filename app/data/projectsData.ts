type ProjectsDataItem = {
  index: number;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
};

const projectsData: ProjectsDataItem[] = [
  {
    index: 1,
    imgSrc: "/projects/jagriti.jpg",
    title: "Jagriti",
    description:
      "AI-powered financial advisor empowering rural India with personalized financial literacy, mentorship, and tools for financial independence.",
    link: "https://github.com/jaytomarr/jagriti_flutter",
  },
  {
    index: 2,
    imgSrc: "/projects/msngr.jpg",
    title: "MSNGR",
    description:
      "Real-time chat application with live one-to-one text messaging and instant image.",
    link: "https://github.com/jaytomarr/msngr",
  },
  {
    index: 3,
    imgSrc: "/projects/decimate.jpg",
    title: "DeciMate",
    description:
      "Real-time collaborative polling app, enabling simultaneous voting and instant group decision-making.",
    link: "https://github.com/jaytomarr/deci_mate_decision_making_app",
  },
  {
    index: 4,
    imgSrc: "/projects/voting.jpg",
    title: "Voting Simulator",
    description:
      "Decentralized voting application with secure on-chain vote casting, real-time validation, and immutable vote records for a transparent election process.",
    link: "https://github.com/jaytomarr/voting_sim_dapp",
  },
  {
    index: 5,
    imgSrc: "/projects/chatbot.jpg",
    title: "ChatBoat",
    description:
      "Chatbot application that provides real-time assistance, answers queries, and guides users for a seamless interactive experience.",
    link: "https://github.com/jaytomarr/flutter_chat_bot",
  },
  {
    index: 6,
    imgSrc: "/projects/emotion.jpg",
    title: "Live Emotion Detector",
    description:
      "Real-time emotion detection app with live camera analysis, emotion recognition, and facial expression detection.",
    link: "https://github.com/jaytomarr/live_emotion_detector_app",
  },
  {
    index: 7,
    imgSrc: "/projects/pixflow.jpg",
    title: "PixFlow AI",
    description:
      "AI-powered web application that generates videos from text or media inputs, offering real-time previews and quick content creation.",
    link: "https://github.com/jaytomarr/PixFlowAI",
  },
  {
    index: 8,
    imgSrc: "/projects/vektor.jpg",
    title: "Vektor",
    description:
      "Wallpaper app providing high-quality, customizable wallpapers with easy browsing and download options.",
    link: "https://github.com/jaytomarr/pexels_wallpaper_app",
  },
  {
    index: 9,
    imgSrc: "/projects/news.jpg",
    title: "Tech News App",
    description:
      "Tech news app delivering real-time updates, trending articles, and personalized technology content to users.",
    link: "https://github.com/jaytomarr/tech_news_app",
  },
  {
    index: 10,
    imgSrc: "/projects/notes.jpg",
    title: "Notes Taker",
    description:
      "Note-taking app allowing users to create, edit, and organize notes efficiently with easy search and categorization features.",
    link: "https://github.com/jaytomarr/notes_app_sqlite",
  },
  {
    index: 11,
    imgSrc: "/projects/whatsapp.jpg",
    title: "WhatsApp Clone",
    description:
      "Clone app enabling real-time one-to-one text and media messaging, with chat history and online presence tracking for seamless experience.",
    link: "https://github.com/jaytomarr/whatsapp_clone",
  },
  {
    index: 12,
    imgSrc: "/projects/xpense.jpg",
    title: "Xpense",
    description:
      "Landing page for an expense tracker SaaS web app, designed to highlight core features while guiding users to easily understand the platform.",
    link: "https://github.com/jaytomarr/xpense_web_app",
  },
];

export default projectsData;
