export const personalInfo = {
  name: "Yihui Li",
  chineseName: "李奕辉",
  title: "Ph.D. Candidate in Architecture",
  institution: "Tsinghua University",
  email: "liyihui23@mails.tsinghua.edu.cn",
  location: "Beijing, China",
  github: "https://github.com/Romeo-Leeyh",
  bio: "Ph.D. Candidate at the School of Architecture, Tsinghua University. My research focuses on Graph-Based Modeling of Spatial-Performance Coupling, Gen-AI-Assisted Design Reasoning for Green Buildings, and Digital Modeling and Simulation for Intelligent Building Systems. I will be a visiting Ph.D. student scholar at UC Berkeley (2026–2027).",
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
    degree: "Visiting Ph.D. Student Scholar",
    school: "University of California, Berkeley",
    year: "2026 – 2027 (expected)",
    details: "Center for Environmental Design Research. Supervised by Prof. Ramon Weber."
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
    title: "Graph-Based Modeling of Spatial-Performance Coupling",
    description: "Developing graph representations to capture the complex relationships between spatial configurations and building performance for accurate prediction and interpretable analysis."
  },
  {
    title: "Gen-AI-Assisted Design Reasoning for Green Buildings",
    description: "Leveraging large language models and multi-agent systems to support multimodal reasoning, knowledge integration, and decision-making in sustainable building design."
  },
  {
    title: "Digital Modeling & Simulation for Intelligent Building Systems",
    description: "Integrating BIM, rapid performance simulation, and equipment-level digitalization to enable real-time feedback, system coordination, and smart building operation."
  }
];

export const projects = [
  {
    title: "Graph-Based Modeling of Spatial-Performance Coupling in Complex Buildings",
    period: "2025 – 2027",
    role: 'PhD "Tanzhen Scholar" Program ($30,000 funding, top 15 projects university-wide)',
    description: "Developed a graph-based modeling workflow that integrates space, performance, and physical relationships for complex buildings. Enabled performance prediction and design optimization using a heterogeneous GNN with embedded simulation data.",
    tags: ["GNN", "Building Performance", "Python"]
  },
  {
    title: "MOOSAS: Multi-Objective Optimization Software for Architectural Simulation",
    period: "2023 – Present",
    role: "Core Developer",
    description: "Upgraded SketchUp plugin to convert irregular architectural forms into structured BIM models and IDF files for energy simulation. Proposed a graph-based modeling approach to handle complex geometries like atriums and O-shaped corridors; validated robustness with 800+ models and open-sourced the code. Contributed to two conference papers submitted to Building Simulation 2025 as first and second author.",
    tags: ["SketchUp", "BIM", "Optimization", "Open Source"]
  },
  {
    title: "MoosasQA: LLM-Powered Multimodal Reasoning Framework for Green Building Design",
    period: "2023 – 2024",
    role: "Leader",
    description: "Designed a reasoning framework integrating RAG, function-calling, and chain-of-thought methods to enable interactive design support. Integrated the QA tools into MOOSAS platform and developed the full-stack web application. Co-authored a conference paper submitted to ACADIA 2024.",
    tags: ["LLM", "RAG", "Full-stack"]
  },
  {
    title: "Convection–Radiation Coupled Workstation Terminal",
    period: "2024 – 2025",
    role: "Lead Designer, Prototype Development & On-site Deployment",
    description: "Designed a height-adjustable workstation integrating air ducts, heat exchangers, and radiant panels to create a hybrid microclimate terminal. Programmed lift controller and selected components for stable motion control. Reduced thickness to 10cm and weight by 35% through structural and thermal optimization.",
    tags: ["Hardware", "Control Systems", "Product Design"]
  },
  {
    title: "Wearable Sensor for Healthy Light Environment Monitoring",
    period: "2024 – 2025",
    role: "Product Design Lead",
    description: "Reconfigured PCB layout to address waterproofing and breathability for embedded temperature-humidity sensors. Optimized the casing geometry via topology refinement, reducing volume by over 40% from the initial prototype.",
    tags: ["IoT", "PCB Design", "Wearable", "Product Design"]
  }
];

export const publications = [
  {
    authors: "LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2026",
    title: "From Geometry to Graph: Automation of Building Performance Modeling via Convex Graph Encoding",
    journal: "Automation in Construction",
    volume: "183",
    pages: "106815",
    link: "https://doi.org/10.1016/j.autcon.2026.106815",
    type: "journal",
    bibtex: `@article{li2026geometry,
  title={From Geometry to Graph: Automation of Building Performance Modeling via Convex Graph Encoding},
  author={Li, Yihui and Xiao, Jun and Zhou, Hao and Lin, Borong},
  journal={Automation in Construction},
  volume={183},
  pages={106815},
  year={2026},
  doi={10.1016/j.autcon.2026.106815}
}`,
    ieee: `Y. Li, J. Xiao, H. Zhou, and B. Lin, "From Geometry to Graph: Automation of Building Performance Modeling via Convex Graph Encoding," Automation in Construction, vol. 183, p. 106815, 2026.`
  },
  {
    authors: "YU, Z., LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2026",
    title: "Physical Embedding on Building Surface Spatial Relationships Shows Better Performance in Graph-Based Daylight Prediction",
    journal: "Building and Environment",
    volume: "290",
    pages: "114141",
    link: "https://doi.org/10.1016/j.buildenv.2025.114141",
    type: "journal",
    bibtex: `@article{yu2026physical,
  title={Physical embedding on building surface spatial relationships shows better performance in graph-based daylight prediction},
  author={Yu, Zhexuan and Li, Yihui and Xiao, Jun and Zhou, Hao and Lin, Borong},
  journal={Building and Environment},
  volume={290},
  pages={114141},
  year={2026},
  doi={10.1016/j.buildenv.2025.114141}
}`,
    ieee: `Z. Yu, Y. Li, J. Xiao, H. Zhou, and B. Lin, "Physical embedding on building surface spatial relationships shows better performance in graph-based daylight prediction," Building and Environment, vol. 290, pp. 114141, 2026.`
  },
  {
    authors: "LI, Y., GAO, W., LIN, B.",
    year: "2022",
    title: "From Type to Network: A Review of Knowledge Representation Methods in Architectural Intelligence Design",
    journal: "Architectural Intelligence",
    volume: "1(1)",
    pages: "4",
    link: "https://doi.org/10.1007/s44223-022-00006-9",
    type: "journal",
    bibtex: `@article{liTypeNetworkReview2022,
  title = {From Type to Network: A Review of Knowledge Representation Methods in Architecture Intelligence Design},
  author = {Li, Yihui and Gao, Wen and Lin, Borong},
  year = 2022,
  journal = {Architectural Intelligence},
  volume = {1},
  number = {1},
  pages = {4},
  doi = {10.1007/s44223-022-00006-9}
}`,
    ieee: `Y. Li, W. Gao, and B. Lin, "From Type to Network: A Review of Knowledge Representation Methods in Architecture Intelligence Design," Architectural Intelligence, vol. 1, no. 1, p. 4, 2022.`
  },
  {
    authors: "WU, Y., LI, S., LI, Y., SUN, H., LIN, B., et al.",
    year: "2025",
    title: "A Novel Convective-Radiant Personalized Environmental Control System for Intermittent Heating Demand",
    journal: "Building Simulation",
    link: "https://doi.org/10.1007/s12273-025-1270-6",
    type: "journal",
    bibtex: `@article{wuNovelConvectiveradiantPersonalized2025,
  title = {A Novel Convective-Radiant Personalized Environmental Control System for Intermittent Heating Demand},
  author = {Wu, Yifan and Li, Shiying and Li, Yihui and Sun, Hongli and Lin, Borong and Liu, Xiaohua and Duan, Mengfan and Zhou, Ziqian},
  year = 2025,
  journal = {Building Simulation},
  volume = {18},
  number = {6},
  pages = {1355--1376},
  doi = {10.1007/s12273-025-1270-6}
}`,
    ieee: `Y. Wu, S. Li, Y. Li, H. Sun, B. Lin, X. Liu, M. Duan, and Z. Zhou, "A Novel Convective-Radiant Personalized Environmental Control System for Intermittent Heating Demand," Building Simulation, vol. 18, no. 6, pp. 1355--1376, 2025.`
  },
  {
    authors: "LI, Y., GAO, W., LIN, B.",
    year: "2025",
    title: "Exploring the Digital and Intelligent Transformation of Buildings Toward Carbon Neutrality: From Design to Operation",
    journal: "World Architecture Review",
    volume: "40(05)",
    pages: "6–11",
    link: "https://doi.org/10.14080/j.aw.2025.05.007",
    type: "journal",
    bibtex: `@article{SJJB202505003,
  title = {迈向碳中和的建筑数智化转型探索：从设计到运维},
  author = {李奕辉 and 高雯 and 林波荣},
  year = 2025,
  journal = {世界建筑导报},
  volume = {40},
  number = {05},
  pages = {6--11},
  doi = {10.14080/j.aw.2025.05.007}
}`,
    ieee: `Y. Li, W. Gao, and B. Lin, "Exploring the Digital and Intelligent Transformation of Buildings Toward Carbon Neutrality: From Design to Operation," World Architecture Review, vol. 40, no. 05, pp. 6--11, 2025.`
  },
  {
    authors: "LI, Y., YAN, X., ZHOU, H., LIN, B.",
    year: "2024",
    title: "Question Answering for Decision-making in Green Building Design: A Multimodal Data Reasoning Method Driven by Large Language Models",
    journal: "ACADIA 2024",
    link: "https://doi.org/10.52842/conf.acadia.2024.2.457",
    type: "conference",
    bibtex: `@inproceedings{liQuestionAnsweringDecisionmaking2024a,
  title = {Question Answering for Decision-making in Green Building Design: A Multimodal Data Reasoning Method Driven by Large Language Models},
  booktitle = {Proceedings of the 44th Annual Conference for the Association for Computer Aided Design in Architecture},
  author = {Li, Yihui and Yan, Xiaoyue and Zhou, Hao and Lin, Borong},
  year = 2024,
  pages = {457--472},
  doi = {10.52842/conf.acadia.2024.2.457}
}`,
    ieee: `Y. Li, X. Yan, H. Zhou, and B. Lin, "Question Answering for Decision-making in Green Building Design: A Multimodal Data Reasoning Method Driven by Large Language Models," in Proceedings of the 44th Annual Conference for the Association for Computer Aided Design in Architecture, Calgary, Canada, 2024.`
  },
  {
    authors: "LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2025",
    title: "A Cross-Scale Normative Encoding Representation Method for 3D Building Models Suitable for Graph Neural Networks",
    journal: "Building Simulation 2025",
    link: "https://doi.org/10.26868/25222708.2025.1305",
    type: "conference",
    bibtex: `@inproceedings{liCrossScaleNormativeEncoding2025,
  title = {A Cross-Scale Normative Encoding Representation Method for 3D Building Models Suitable for Graph Neural Networks},
  booktitle = {Proceedings of the Building Simulation Conference 2025},
  author = {Li, Yihui and Xiao, Jun and Zhou, Hao and Lin, Borong},
  year = 2025,
  address = {Brisbane, Australia},
  doi = {10.26868/25222708.2025.1305}
}`,
    ieee: `Y. Li, J. Xiao, H. Zhou, and B. Lin, "A Cross-Scale Normative Encoding Representation Method for 3D Building Models Suitable for Graph Neural Networks," in Proceedings of the Building Simulation Conference 2025, Brisbane, Australia, 2025.`
  },
  {
    authors: "XIAO, J., LI, Y., ZHOU, H., LIN, B., GAO, W., LU, S.",
    year: "2025",
    title: "A Stable Geometry Transformation Module from 3D Geometry Data to Building Energy Model",
    journal: "Building Simulation 2025",
    link: "https://doi.org/10.26868/25222708.2025.1299",
    type: "conference",
    bibtex: `@inproceedings{xiaoOBJIDFStable2025,
  title = {OBJ to IDF: A Stable Geometry Transformation Module from 3D Geometry Data to Building Energy Model},
  booktitle = {Proceedings of the Building Simulation Conference 2025},
  author = {Xiao, Jun and Li, Yihui and Zhou, Hao and Wang, Qiong and Lin, Borong and Gao, Wen and Lu, Shuai},
  year = 2025,
  address = {Brisbane, Australia},
  doi = {10.26868/25222708.2025.1299}
}`,
    ieee: `J. Xiao, Y. Li, H. Zhou, Q. Wang, B. Lin, W. Gao, and S. Lu, "OBJ to IDF: A Stable Geometry Transformation Module from 3D Geometry Data to Building Energy Model," in Proceedings of the Building Simulation Conference 2025, Brisbane, Australia, 2025.`
  },
  {
    authors: "YU, Z., LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2025",
    title: "Hierarchical Graph-Based Method for Static Daylight Prediction of 3D Irregular Office Buildings",
    journal: "ISHVAC 2025",
    link: "https://doi.org/10.1051/e3sconf/202668904001",
    type: "conference",
    bibtex: `@inproceedings{yuHierarchicalGraphbasedMethod2025,
  title = {Hierarchical Graph-Based Method for Static Daylight Prediction of 3D Irregular Office Buildings},
  booktitle = {14th International Symposium on Heating, Ventilation, and Air Conditioning (ISHVAC 2025)},
  author = {Yu, Zhexuan and Li, Yihui and Xiao, Jun and Zhou, Hao and Lin, Borong},
  year = 2025,
  doi = {10.1051/e3sconf/202668904001}
}`,
    ieee: `Z. Yu, Y. Li, J. Xiao, H. Zhou, and B. Lin, "Hierarchical Graph-Based Method for Static Daylight Prediction of 3D Irregular Office Buildings," in 14th International Symposium on Heating, Ventilation, and Air Conditioning (ISHVAC 2025), Tokyo, Japan, 2025.`
  },
  {
    authors: "LI, S., WU, Y., LIN, B., LI, Y.",
    year: "2024",
    title: "The Thermal Performance of a Novel Convection-Radiation Coupled Liftable Workstation Terminal",
    journal: "ASim 2024",
    link: "https://doi.org/10.69357/asim2024.1207",
    type: "conference",
    bibtex: `@inproceedings{asim2024_1207,
  title = {The Thermal Performance of a Novel Convection-Radiation Coupled Liftable Workstation Terminal},
  booktitle = {Proceedings of Asim Conference 2024: 5th Asia Conference of IBPSA},
  author = {Li, Shiying and Wu, Yifan and Lin, Borong and Li, Yihui},
  year = 2024,
  pages = {897--904},
  doi = {10.69357/asim2024.1207}
}`,
    ieee: `S. Li, Y. Wu, B. Lin, and Y. Li, "The Thermal Performance of a Novel Convection-Radiation Coupled Liftable Workstation Terminal," in Proceedings of Asim Conference 2024: 5th Asia Conference of IBPSA, Osaka, Japan, 2024.`
  },
  {
    authors: "JIN, Y., ZENG, Y., LI, Y., LIN, B.",
    year: "2025",
    title: "Wearable Device for Personal Light Monitoring: Assessing Visual and Non-Visual Response with Spectrally-Resolved Sensor",
    journal: "CIE 2025",
    link: "https://doi.org/10.25039/x051.2025/ckce5k",
    type: "conference",
    bibtex: `@inproceedings{jinWearableDevicePersonal2025,
  title = {Wearable Device for Personal Light Monitoring: Assessing Visual and Non-Visual Responses with Spectrally-Resolved Sensor},
  booktitle = {Proceedings of CIE Midterm Meeting 2025},
  author = {Jin, Yanwei and Zeng, Yunyi and Li, Yihui and Lin, Borong},
  year = 2025,
  address = {Vienna, Austria},
  doi = {10.25039/x051.2025/ckce5k}
}`,
    ieee: `Y. Jin, Y. Zeng, Y. Li, and B. Lin, "Wearable Device for Personal Light Monitoring: Assessing Visual and Non-Visual Responses with Spectrally-Resolved Sensor," in Proceedings of CIE Midterm Meeting 2025, Vienna, Austria, 2025.`
  },
  {
    authors: "LI, Y., YU, Z., XIAO, J., WANG, Q., ZHOU, H., LIN, B.",
    year: "2026",
    title: "Physics-Embedded Transfer Learning Graph Neural Network for Building Energy Prediction",
    journal: "IAQVEC 2026 (Working Paper)",
    link: "",
    type: "working",
    bibtex: `@inproceedings{li2026physics,
  title = {Physics-Embedded Transfer Learning Graph Neural Network for Building Energy Prediction},
  author = {Li, Yihui and Yu, Zhexuan and Xiao, Jun and Wang, Qiong and Zhou, Hao and Lin, Borong},
  year = 2026,
  booktitle = {IAQVEC 2026},
  address = {Los Angeles, United States}
}`,
    ieee: `Y. Li, Z. Yu, J. Xiao, Q. Wang, H. Zhou, and B. Lin, "Physics-Embedded Transfer Learning Graph Neural Network for Building Energy Prediction," in IAQVEC 2026, Los Angeles, United States, 2026.`
  },
  {
    authors: "XIAO, J., WANG, Q., LI, Y., YU, Z., ZHOU, H., LIN, B.",
    year: "2026",
    title: "A Fully Automated DM-BIM-BEM Pipeline Enabling Graph-Based Intelligence, Interoperability, and Performance-Driven Early Design",
    journal: "Preprint, arXiv (Working Paper)",
    link: "https://doi.org/10.48550/arXiv.2601.16813",
    type: "working",
    bibtex: `@article{xiao2026fully,
  title = {A Fully Automated DM-BIM-BEM Pipeline Enabling Graph-Based Intelligence, Interoperability, and Performance-Driven Early Design},
  author = {Xiao, Jun and Wang, Qiong and Li, Yihui and Yu, Zhexuan and Zhou, Hao and Lin, Borong},
  year = 2026,
  journal = {arXiv preprint},
  doi = {10.48550/arXiv.2601.16813}
}`,
    ieee: `J. Xiao, Q. Wang, Y. Li, Z. Yu, H. Zhou, and B. Lin, "A Fully Automated DM-BIM-BEM Pipeline Enabling Graph-Based Intelligence, Interoperability, and Performance-Driven Early Design," arXiv preprint, 2026.`
  }
];

export const academicLeadership = [
  {
    title: "Student Affairs Committee of the Architectural Society of China",
    role: "Vice Student Secretary-General",
    period: "September 2024 – Present",
    description: "In charge of academic affairs."
  },
  {
    title: '"30s Future Studies" – Architecture + AI & Computing Group',
    role: "Leader and Initiator",
    period: "April 2025 – Present",
    description: "Organized nationwide student salons and academic events for young scholars."
  }
];

export const awards = [
  {
    name: 'Tsinghua University "Tanzhen Scholar" Program',
    year: "2025–2027"
  },
  {
    name: "Comprehensive First-Class Scholarship of Tsinghua University",
    year: "2024–2025"
  },
  {
    name: "Future Scholars Fellowship (top 0.5%)",
    year: "2023–2028"
  },
  {
    name: "Outstanding Graduates of Tsinghua University (top 3%)",
    year: "2024"
  },
  {
    name: "China National Scholarship (top 0.2%)",
    year: "2022–2023"
  },
  {
    name: "Comprehensive Outstanding Scholarship of Tsinghua University (3 times in total)",
    year: "2020–2023"
  }
];
