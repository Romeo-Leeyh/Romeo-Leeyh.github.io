export const personalInfo = {
  name: "Yihui Li",
  chineseName: "李奕辉",
  title: "Ph.D. Candidate in Architecture",
  institution: "Tsinghua University",
  email: "liyihui23@mails.tsinghua.edu.cn",
  location: "Beijing, China",
  github: "https://github.com/Romeo-Leeyh",
  bio: "Ph.D. Candidate at the School of Architecture, Tsinghua University. My research focuses on Gen-AI-Assisted Design Reasoning for Green Buildings, Graph-Based Modeling, and Digital Simulation for Intelligent Building Systems.",
  avatar: "https://avatars.githubusercontent.com/u/82253350?v=4",
  resumeUrl: "/resume.pdf"
};

export const education = [
  {
    degree: "Ph.D. in Architecture",
    school: "Tsinghua University",
    year: "2023 – 2028 (expected)",
    details: "Key Laboratory of Eco-planning and Green Building, Ministry of Education. Supervised by Prof. Borong Lin."
  },
  {
    degree: "Bachelor of Architecture",
    school: "Tsinghua University",
    year: "2019 – 2023",
    details: "School of Architecture, Tsinghua University, Beijing, China."
  }
];

export const researchInterests = [
  {
    title: "Gen-AI-Assisted Design Reasoning",
    description: "Leveraging large language models and multi-agent systems to support multimodal reasoning, knowledge integration, and decision-making in sustainable building design."
  },
  {
    title: "Graph-Based Modeling",
    description: "Developing graph representations to capture the complex relationships between spatial configurations and building performance for accurate prediction and interpretable analysis."
  },
  {
    title: "Digital Modeling & Simulation",
    description: "Integrating BIM, rapid performance simulation, and equipment-level digitalization to enable real-time feedback, system coordination, and smart building operation."
  }
];

export const projects = [
  {
    title: "Graph-Based Modeling of Spatial-Performance Coupling",
    period: "2025 – 2027",
    role: "PhD “Tanzhen Explorer Scholar” Project",
    description: "Developed a graph-based modeling workflow that integrates space, performance, and physical relationships for complex buildings. Enabled performance prediction and design optimization using a heterogeneous GNN with embedded simulation data.",
    tags: ["GNN", "Building Performance", "Python"]
  },
  {
    title: "MOOSAS: Multi-Objective Optimization Software",
    period: "2023 – Present",
    role: "Core Developer",
    description: "Upgraded SketchUp plugin to convert irregular architectural forms into structured BIM models and IDF files for energy simulation. Proposed a graph-based modeling approach to handle complex geometries.",
    tags: ["SketchUp", "BIM", "Optimization"]
  },
  {
    title: "MoosasQA: LLM-Powered Multimodal Reasoning",
    period: "2023 – 2024",
    role: "Leader",
    description: "Designed a reasoning framework integrating RAG, function-calling, and chain-of-thought methods to enable interactive design support. Integrated the QA tools into MOOSAS platform.",
    tags: ["LLM", "RAG", "Full-stack"]
  },
  {
    title: "Convection–Radiation Coupled Workstation",
    period: "2024 – 2025",
    role: "Lead Designer",
    description: "Designed a height-adjustable workstation integrating air ducts, heat exchangers, and radiant panels. Programmed lift controller and selected components for stable motion control.",
    tags: ["Hardware", "Control Systems", "Product Design"]
  }
];

export const publications = [
  {
    authors: "YU, Z., LI, Y.*, GAO, W., LIN, B.",
    year: "2025",
    title: "Physical embedding on building surface spatial relationships shows better performance in graph-based daylight prediction",
    journal: "Building and Environment",
    link: "https://doi.org/10.1016/j.buildenv.2025.114141"
  },
  {
    authors: "LI, Y., GAO, W., LIN, B.*",
    year: "2022",
    title: "From Type to Network: A Review of Knowledge Representation Methods in Architecture Intelligence Design",
    journal: "Architectural Intelligence",
    link: "https://doi.org/10.1007/s44223-022-00006-9"
  },
  {
    authors: "LI, Y.#, YAN, X.#, ZHOU, H., LIN, B.*",
    year: "2024",
    title: "Question Answering for Decision-making in Green Building Design: A Multimodal Data Reasoning Method Driven by Large Language Models",
    journal: "ACADIA 2024",
    link: "https://doi.org/10.48550/arXiv.2412.04741"
  },
  {
    authors: "LI, Y., XIAO, J., ZHOU, H., LIN, B.*",
    year: "2025",
    title: "A Cross-Scale Normative Encoding Representation Method for 3D Building Models Suitable for Graph Neural Networks",
    journal: "BS 2025",
    link: "https://doi.org/10.26868/25222708.2025.1305"
  },
  {
    authors: "XIAO, J., LI, Y., ZHOU, H., LIN, B.*, GAO, W., LU, S.",
    year: "2025",
    title: "A Stable Geometry Transformation Module from 3D Geometry Data to Building Energy Model",
    journal: "BS 2025",
    link: "https://doi.org/10.26868/25222708.2025.1299"
  }
];

export const awards = [
  "Tanzhen Scholar (Tsinghua University Initiative Scientific Research Program Grant No.20257020014.)",
  "Future Scholars Fellowship (top 0.5%)",
  "Outstanding Graduates of Tsinghua University (top 3%)",
  "China National Scholarship (top 0.2%)",
  "Comprehensive Outstanding Scholarship of Tsinghua University (3 times)"
];
