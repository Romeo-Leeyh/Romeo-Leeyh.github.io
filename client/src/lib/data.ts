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
    authors: "YU, Z., LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2026",
    title: "Physical embedding on building surface spatial relationships shows better performance in graph-based daylight prediction",
    journal: "Building and Environment",
    link: "https://doi.org/10.1016/j.buildenv.2025.114141",
    bibtex: `@article{yu2026physical,
  title={Physical embedding on building surface spatial relationships shows better performance in graph-based daylight prediction},
  author={Yu, Zhexuan and Li, Yihui and Xiao, Jun and Zhou, Hao and Lin, Borong},
  journal={Building and Environment},
  volume={290},
  pages={114--141},
  year={2026},
  doi={10.1016/j.buildenv.2025.114141}
}`,
    ieee: `Z. Yu, Y. Li, J. Xiao, H. Zhou, and B. Lin, "Physical embedding on building surface spatial relationships shows better performance in graph-based daylight prediction," Building and Environment, vol. 290, pp. 114--141, 2026.`
  },
  {
    authors: "WU, Y., LI, S., LI, Y., SUN, H., LIN, B., LIU, X., DUAN, M., ZHOU, Z.",
    year: "2025",
    title: "A Novel Convective-Radiant Personalized Environmental Control System for Intermittent Heating Demand",
    journal: "Building Simulation",
    link: "https://doi.org/10.1007/s12273-025-1270-6",
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
    authors: "JIN, Y., ZENG, Y., LI, Y., LIN, B.",
    year: "2025",
    title: "Wearable Device for Personal Light Monitoring: Assessing Visual and Non-Visual Responses with Spectrally-Resolved Sensor",
    journal: "CIE Midterm Meeting 2025",
    link: "https://doi.org/10.25039/x051.2025/ckce5k",
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
    authors: "LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2025",
    title: "A Cross-Scale Normative Encoding Representation Method for 3D Building Models Suitable for Graph Neural Networks",
    journal: "Building Simulation 2025",
    link: "https://doi.org/10.26868/25222708.2025.1305",
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
    authors: "XIAO, J., LI, Y., ZHOU, H., WANG, Q., LIN, B., GAO, W., LU, S.",
    year: "2025",
    title: "OBJ to IDF: A Stable Geometry Transformation Module from 3D Geometry Data to Building Energy Model",
    journal: "Building Simulation 2025",
    link: "https://doi.org/10.26868/25222708.2025.1299",
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
    authors: "李奕辉, 高雯, 林波荣",
    year: "2025",
    title: "迈向碳中和的建筑数智化转型探索：从设计到运维",
    journal: "世界建筑导报",
    link: "https://doi.org/10.14080/j.aw.2025.05.007",
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
    ieee: `李奕辉, 高雯, and 林波荣, "迈向碳中和的建筑数智化转型探索：从设计到运维," 世界建筑导报, vol. 40, no. 05, pp. 6--11, 2025.`
  },
  {
    authors: "LI, S., WU, Y., LIN, B., LI, Y.",
    year: "2024",
    title: "The Thermal Performance of a Novel Convection-Radiation Coupled Liftable Workstation Terminal",
    journal: "Asim Conference 2024",
    link: "https://doi.org/10.69357/asim2024.1207",
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
    authors: "LI, Y., YAN, X., ZHOU, H., LIN, B.",
    year: "2024",
    title: "Question Answering for Decision-making in Green Building Design: A Multimodal Data Reasoning Method Driven by Large Language Models",
    journal: "ACADIA 2024",
    link: "https://doi.org/10.52842/conf.acadia.2024.2.457",
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
    authors: "YU, Z., LI, Y., XIAO, J., ZHOU, H., LIN, B.",
    year: "2025",
    title: "Hierarchical Graph-Based Method for Static Daylight Prediction of 3D Irregular Office Buildings",
    journal: "ISHVAC 2025",
    link: "https://doi.org/10.1051/e3sconf/202668904001",
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
    authors: "LI, Y., GAO, W., LIN, B.",
    year: "2022",
    title: "From Type to Network: A Review of Knowledge Representation Methods in Architecture Intelligence Design",
    journal: "Architectural Intelligence",
    link: "https://doi.org/10.1007/s44223-022-00006-9",
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
  }
];

export const awards = [
  "Tanzhen Scholar (Tsinghua University Initiative Scientific Research Program Grant No.20257020014.)",
  "Future Scholars Fellowship (top 0.5%)",
  "Outstanding Graduates of Tsinghua University (top 3%)",
  "China National Scholarship (top 0.2%)",
  "Comprehensive Outstanding Scholarship of Tsinghua University (3 times)"
];
