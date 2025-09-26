type LanguagesDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

type DevelopmentDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

type DesignDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

type MoreToolsDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const languagesData: LanguagesDataItem[] = [
  {
    title: "Java",
    imgSrc: "/toolstack/java_logo.png",
    link: "https://www.java.com/",
  },
  {
    title: "Dart",
    imgSrc: "/toolstack/dart_logo.png",
    link: "https://www.dart.dev/",
  },
  {
    title: "Python",
    imgSrc: "/toolstack/python_logo.png",
    link: "https://www.python.org/",
  },
  {
    title: "C",
    imgSrc: "/toolstack/c_logo.png",
    link: "https://www.c-language.org/",
  },
  {
    title: "C++",
    imgSrc: "/toolstack/cpp_logo.png",
    link: "https://isocpp.org/",
  },
  {
    title: "JavaScript",
    imgSrc: "/toolstack/javascript_logo.png",
    link: "https://www.javascript.com/",
  },
];

const developmentData: DevelopmentDataItem[] = [
  {
    title: "Flutter",
    imgSrc: "/toolstack/flutter_logo.png",
    link: "https://flutter.dev/",
  },
  {
    title: "Firebase",
    imgSrc: "/toolstack/firebase_logo.png",
    link: "https://firebase.google.com/",
  },
  {
    title: "Riverpod",
    imgSrc: "/toolstack/riverpod_logo.png",
    link: "https://riverpod.dev/",
  },
  {
    title: "MySQL",
    imgSrc: "/toolstack/mysql_logo.png",
    link: "https://www.mysql.com/",
  },
  {
    title: "PostgreSQL",
    imgSrc: "/toolstack/postgresql_logo.png",
    link: "https://www.postgresql.org/",
  },
  {
    title: "MongoDB",
    imgSrc: "/toolstack/mongodb_logo.png",
    link: "https://www.mongodb.com/",
  },
  {
    title: "SQLite",
    imgSrc: "/toolstack/sqlite_logo.png",
    link: "https://www.sqlite.org/",
  },
  {
    title: "Flask",
    imgSrc: "/toolstack/flask_logo.png",
    link: "https://flask.palletsprojects.com/",
  },
  {
    title: "FastAPI",
    imgSrc: "/toolstack/fastapi_logo.png",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    title: "Node.js",
    imgSrc: "/toolstack/nodejs_logo.png",
    link: "https://nodejs.org/",
  },
  {
    title: "AWS",
    imgSrc: "/toolstack/aws_logo.png",
    link: "https://aws.amazon.com/",
  },
  {
    title: "GCP",
    imgSrc: "/toolstack/gcp_logo.png",
    link: "https://cloud.google.com/",
  },
  {
    title: "Git",
    imgSrc: "/toolstack/git_logo.png",
    link: "https://git-scm.com/",
  },
  {
    title: "Github",
    imgSrc: "/toolstack/github_logo.png",
    link: "https://github.com/",
  },
];

const designData: DesignDataItem[] = [
  {
    title: "Figma",
    imgSrc: "/toolstack/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Adobe Illustrator",
    imgSrc: "/toolstack/illustrator_logo.png",
    link: "https://www.adobe.com/products/illustrator.html",
  },
  {
    title: "Adobe Photoshop",
    imgSrc: "/toolstack/photoshop_logo.png",
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    title: "Adobe InDesign",
    imgSrc: "/toolstack/indesign_logo.png",
    link: "https://www.adobe.com/products/indesign.html",
  },
  {
    title: "Canva",
    imgSrc: "/toolstack/canva_logo.png",
    link: "https://www.canva.com/",
  },
];

const moreToolsData: MoreToolsDataItem[] = [
  {
    title: "VSCode",
    imgSrc: "/toolstack/vscode_logo.png",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Android Studio",
    imgSrc: "/toolstack/android_studio_logo.png",
    link: "https://developer.android.com/studio",
  },
  {
    title: "Postman",
    imgSrc: "/toolstack/postman_logo.png",
    link: "https://www.postman.com/",
  },
  {
    title: "SQL",
    imgSrc: "/toolstack/sql_logo.png",
    link: "https://www.sql.org/",
  },
  {
    title: "Solidity",
    imgSrc: "/toolstack/solidity_logo.png",
    link: "https://soliditylang.org/",
  },
  {
    title: "Cursor",
    imgSrc: "/toolstack/cursor_logo.png",
    link: "https://www.cursor.com/",
  },
  {
    title: "MetaMask",
    imgSrc: "/toolstack/metamask_logo.png",
    link: "https://metamask.io/",
  },
  {
    title: "Netlify",
    imgSrc: "/toolstack/netlify_logo.png",
    link: "https://www.netlify.com/",
  },
  {
    title: "Vercel",
    imgSrc: "/toolstack/vercel_logo.png",
    link: "https://www.vercel.com/",
  },
  {
    title: "Notion",
    imgSrc: "/toolstack/notion_logo.png",
    link: "https://www.notion.so/",
  },
  {
    title: "Workspace",
    imgSrc: "/toolstack/workspace_logo.png",
    link: "https://workspace.google.com/",
  },
  {
    title: "Webflow",
    imgSrc: "/toolstack/webflow_logo.svg",
    link: "https://www.webflow.com/",
  },
  {
    title: "Framer",
    imgSrc: "/toolstack/framer_logo.png",
    link: "https://www.framer.com/",
  },
  {
    title: "Davinci Resolve",
    imgSrc: "/toolstack/davinci_logo.png",
    link: "https://www.davinciresolve.com/",
  },
  {
    title: "WS Filmora",
    imgSrc: "/toolstack/filmora_logo.png",
    link: "https://filmora.wondershare.com/",
  },
  {
    title: "FL Studio",
    imgSrc: "/toolstack/flstudio_logo.webp",
    link: "https://www.flstudio.com/",
  },
];

export { languagesData, developmentData, designData, moreToolsData };
