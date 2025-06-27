// Common resume data
export const commonData = {
  name: "Shreerang Vaidya",
  contact: {
    github: "https://github.com/s-mv/",
    linkedin: "https://linkedin.com/in/shreerang-vaidya/",
    email: ["shreerangvaidya28@gmail.com", "2022.shreerang.vaidya@ves.ac.in"],
    blog: "https://s-mv.github.io/blog/"
  },
  intro: "Computer Science undergraduate interested in compiler design, machine learning, embedded systems and distributed systems.",
  education: {
    institution: "Vivekanand Education Society's Institute of Technology",
    degree: "B. E. in Computer Engineering",
    period: "2022 – 2026",
    gpa: "9.09",
    courses: "Systems Programming and Compiler Construction, Theoretical Computer Science, DSA, Microprocessors, Digital Logic and Computer Architecture, Operating Systems, OOPM, DBMS, Probabilistic Graphical Models, Quantitative Analysis, Discrete Structures and Graph Theory, etc.",
    achievements: [
      "2nd runner up in BuzzPro, 2024.",
      "Special mention in Hack-AI-thon 2.0, 2024.",
      "3rd runner up in Awakening The Scientist, 2022."
    ]
  },
  experiences: [
    {
      company: "Accelus Technologies",
      period: "Feb 2025– Present",
      title: "Intern",
      responsibilities: [
        "Developing CNC machine G-code bytecode VM in C, extending rs274ngc specification for efficient control.",
        "Extensively applying compiler design, OS, embedded and systems programming concepts."
      ]
    },
    {
      company: "Banao Technologies",
      period: "Jan 2024– Jun 2024",
      title: "Web Scraping Intern",
      responsibilities: [
        "Learned the applications of web scraping, DBMS, backend development, etc. through various projects.",
        "Gained valuable insights about the internal workings of a startup and team collaboration."
      ]
    },
    {
      company: "Academor",
      period: "July 2023– August 2023",
      title: "Machine Learning Intern",
      responsibilities: [
        "Made a classification model for loan approval prediction. Collaboration with team over Google Colab."
      ]
    }
  ],
  projects: [
    {
      title: "smvm",
      url: "https://github.com/s-mv/smvm",
      description: [
        "Register-based Virtual Machine in C with assembler. Release v0.1.1 available, CI/CD with GitHub Actions.",
        "Utilizes DSA, microprocessors, compiler design principles. Helped me learn Github Actions CI/CD."
      ],
      tags: ["systems", "compilers", "sde"]
    },
    {
      title: "smvblock",
      url: "https://github.com/s-mv/smvblock",
      description: [
        "Lightweight blockchain built in Rust from scratch for educational purposes based on the Ethereum white paper.",
        "Zero-gas, zero-fee system focused on clean implementation of blockchain fundamentals."
      ],
      tags: ["systems", "sde"]
    },
    {
      title: "Black-Scholes Visualizer",
      url: "https://github.com/s-mv/black-scholes-visualizer",
      liveUrl: "https://s-mv.github.io/black-scholes-visualizer/",
      description: [
        "Educational tool to demonstrate the Black-Scholes pricing model for European options using Rust + WebAssembly.",
        "Implements the full mathematical model including Phi(x), and d1, d2 terms with interactive visualization."
      ],
      tags: ["ml", "sde"]
    },
    {
      title: "gcode++",
      url: "https://github.com/s-mv/gcode-plus-plus",
      description: [
        "Bytecode VM implementation extending the NIST rs274ngc g-code interpreter, adding conditions, looping, variables for versatility.",
        "Extensively applying compiler design, systems programming, as well as data structures and algorithms."
      ],
      tags: ["systems", "compilers", "sde"]
    },
    {
      title: "KisanSevak",
      url: "https://jet-m.com/wp-content/uploads/129-JETM8261.pdf",
      description: [
        "ML-based crop management and market forecasting system for farmers.",
        "Published paper in the Journal of Engineering and Technology Management (JET-M)."
      ],
      tags: ["ml"]
    }
  ],
  achievements: [
    "AIR 1627 in GATE CSE 2025 certifying strong fundamentals.",
    "Co-hosted the 1st Godot India Community Game Jam (GICGJ), 2025.",
    "Co-authored and published paper \"KisanSevak: Enhancing Crop Management and Market Forecasting through Machine Learning\" in Volume 72 of the Journal of Engineering and Technology Management (JET-M).",
    "Submitted a solution in Amazon ML Challenge, 2024.",
    "Submitted a solution in GDSC Solution Challenge, 2024.",
    "2 time Google Code-In Participant (2017-18)."
  ],
  skills: {
    languages: "C, C++, Rust, Python, Go, Java, JavaScript",
    technologies: "MERN Stack, PyTorch, TensorFlow, FastAPI, LLVM, WebAssembly",
    tools: "Unix/Linux, Git, GDB, Valgrind, Make/CMake, Docker, Selenium",
    concepts: "Systems Programming, Compiler Design, DSA, OS, Embedded Systems, ML/DL, Web Development, CI/CD"
  }
};

export const systemsResumeConfig = {
  title: "Systems Engineering Resume",
  excludeExperiences: ["Academor"],
  projectTags: ["systems", "compilers"],
  highlightedSkills: ["Systems Programming", "Compiler Design", "OS", "Embedded Systems"]
};

export const sdeResumeConfig = {
  title: "Software Development Engineer Resume",
  excludeExperiences: ["Academor"],
  projectTags: ["sde"],
  highlightedSkills: ["DSA", "Web Development", "CI/CD"]
};

export const mlResumeConfig = {
  title: "Machine Learning Engineer Resume",
  includeExperiences: ["Accelus Technologies", "Academor"],
  projectTags: ["ml"],
  highlightedSkills: ["ML/DL", "PyTorch", "TensorFlow"]
};
