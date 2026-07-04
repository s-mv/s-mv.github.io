const contactItems = [
  {
    label: "GitHub",
    href: "https://github.com/s-mv/",
    text: "https://github.com/s-mv/",
    icon: "/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shreerang-vaidya/",
    text: "https://linkedin.com/in/shreerang-vaidya/",
    icon: "/linkedin.svg",
  },
  {
    label: "Email",
    href: "mailto:shreerangvaidya28@gmail.com",
    text: "shreerangvaidya28@gmail.com",
    icon: "/email.svg",
  },
  {
    label: "Email",
    href: "mailto:2022.shreerang.vaidya@ves.ac.in",
    text: "2022.shreerang.vaidya@ves.ac.in",
    icon: "/email.svg",
  },
  {
    label: "Blog",
    href: "https://s-mv.github.io/blog/",
    text: "https://s-mv.github.io/blog/",
    icon: "/blog.svg",
  },
];

const experienceItems = [
  {
    company: "Accelus Robotics",
    period: "May 2025– July 2025",
    role: "Intern",
    bullets: [
      "Developed a bytecode VM in C++ extending the rs274ngc NIST specification for efficient CNC machine control.",
      "Forked the LinuxCNC repository in order to introduce the extension in its ecosystem.",
      "Extensively applied compiler design, OS, embedded and systems programming concepts.",
    ],
  },
  {
    company: "Banao Technologies",
    period: "Jan 2024– Jun 2024",
    role: "Web Scraping Intern",
    bullets: [
      "Learned the applications of web scraping, DBMS, backend development, etc. through various projects.",
      "Gained valuable insights about the internal workings of a startup and team collaboration.",
    ],
  },
  {
    company: "4thventure IoTspace",
    period: "Jun 2020– May 2021",
    role: "Intern",
    bullets: [
      "Worked on a project to develop a user-facing React application.",
      "Collaborated on various frontend and backend systems.",
    ],
  },
];

const projectItems = [
  {
    name: "gcode++",
    github: "https://github.com/s-mv/gcode-plus-plus",
    bullets: [
      "Bytecode VM implementation extending the NIST rs274ngc g-code interpreter, adding conditions, looping, variables for versatility.",
      "Extensively applying compiler design, systems programming, as well as data structures and algorithms.",
    ],
  },
  {
    name: "smvm",
    github: "https://github.com/s-mv/smvm",
    bullets: [
      "Register-based Virtual Machine in C with assembler. Release v0.1.1 available, CI/CD with GitHub Actions.",
      "Utilizes DSA, microprocessors, compiler design principles. Helped me learn GitHub Actions CI/CD.",
    ],
  },
  {
    name: "Black-Scholes Visualizer",
    github: "https://github.com/s-mv/black-scholes-visualizer",
    live: "https://s-mv.github.io/black-scholes-visualizer/",
    bullets: [
      "Educational tool to demonstrate the Black-Scholes pricing model for European options using Rust + WebAssembly.",
      "Implements the full mathematical model including Phi(x), and d1, d2 terms with interactive visualization.",
    ],
  },
  {
    name: "smvrt",
    github: "https://github.com/s-mv/smvrt",
    wip: true,
    bullets: [
      "Minimal preemptive real-time operating system written in C and assembly, targeting ARMv7-based hardware like Raspberry Pi and QEMU.",
      "Includes cooperative multitasking, custom scheduler, basic UART CLI, and memory-mapped I/O with no external dependencies.",
      "Bootable image runs bare-metal without Linux, showcasing low-level systems design.",
    ],
  },
];

function ContactItem({ label, href, text, icon }) {
  const external = label === "GitHub" || label === "LinkedIn" || label === "Blog";
  return (
    <span className="inline-flex items-center gap-[1.5mm] whitespace-nowrap">
      <img src={icon} alt="" className="h-[3mm] w-[3mm]" />
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {text}
      </a>
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="resume-section-title mt-[3.2mm] mb-[1.5mm] text-[10.5pt] font-bold">
      {children}
    </h2>
  );
}

export default function Resume() {
  return (
    <div className="resume-route-bg">
      <article
        className="resume-plain mx-auto box-border bg-white text-black"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "12mm 15mm",
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "9pt",
          lineHeight: 1.14,
        }}
      >
        <header className="resume-header-plain text-center mb-[3.5mm]">
          <h1 className="m-0 mb-[1.5mm] text-[16pt] font-bold tracking-tight">
            Shreerang Vaidya
          </h1>

          <div className="mt-[1.2mm] flex flex-col gap-[1.2mm] text-[8.6pt]">
            <div className="flex flex-wrap justify-center gap-x-[4mm] gap-y-[1.2mm]">
              {contactItems.slice(0, 2).map((item) => (
                <ContactItem key={item.label + item.text} {...item} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-[4mm] gap-y-[1.2mm]">
              {contactItems.slice(2).map((item) => (
                <ContactItem key={item.label + item.text} {...item} />
              ))}
            </div>
          </div>
        </header>

        <p className="mb-[2.6mm] text-[8.9pt] leading-[1.18]">
          Computer Science undergraduate interested in compiler design, machine learning,
          embedded systems and distributed systems.
        </p>

        <SectionTitle>Education</SectionTitle>
        <p className="mb-[1.5mm] leading-[1.16]">
          <strong>Vivekanand Education Society&apos;s Institute of Technology</strong>
          <span className="float-right">2022 – 2026</span>
          <br />
          <em>B. E. in Computer Engineering</em> — <em>Aggregate GPA:</em> 9.15
          <br />
          <em>Relevant courses:</em> Systems Programming and Compiler Construction,
          Theoretical Computer Science, DSA, Microprocessors, Digital Logic and Computer
          Architecture, Operating Systems, OOPM, DBMS, Probabilistic Graphical Models,
          Quantitative Analysis, Discrete Structures and Graph Theory, etc.
        </p>

        <ul className="resume-list mt-[0.8mm] mb-[2mm] list-disc pl-[4.8mm]">
          <li>2nd runner up in BuzzPro, 2024.</li>
          <li>Special mention in Hack-AI-thon 2.0, 2024.</li>
          <li>3rd runner up in Awakening The Scientist, 2022.</li>
        </ul>

        <SectionTitle>Technical Skills</SectionTitle>
        <ul className="resume-list mt-[0.8mm] mb-[2mm] list-disc pl-[4.8mm]">
          <li>
            <strong>Languages:</strong> C, C++, Rust, Python, Go, Java, JavaScript
          </li>
          <li>
            <strong>Technologies:</strong> LLVM, PyTorch, TensorFlow, MERN Stack,
            FastAPI, WebAssembly
          </li>
          <li>
            <strong>Tools:</strong> Unix/Linux, Git, GDB, Valgrind, Make/CMake, Docker,
            Selenium
          </li>
          <li>
            <strong>Concepts:</strong> Systems Programming, Compiler Design, OS, Embedded
            Systems, DSA, ML/DL, Web Development, CI/CD
          </li>
        </ul>

        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-[2mm]">
          {experienceItems.map((experience) => (
            <section
              className="resume-entry break-inside-avoid mb-[1.3mm]"
              key={experience.company + experience.period}
            >
              <div className="font-bold leading-[1.12]">
                {experience.company}{" "}
                <span className="float-right font-normal">{experience.period}</span>
              </div>
              <div className="italic leading-[1.12]">{experience.role}</div>
              <ul className="resume-list mt-[0.8mm] mb-[0.8mm] list-disc pl-[4.8mm] leading-[1.14]">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <SectionTitle>Notable Projects</SectionTitle>
        <div className="space-y-[2mm]">
          {projectItems.map((project) => (
            <section
              className="resume-entry break-inside-avoid mb-[1.3mm]"
              key={project.name}
            >
              <p className="m-0 font-bold leading-[1.12]">
                {project.name}{" "}
                <a href={project.github} target="_blank" rel="noreferrer">
                  {project.github}
                </a>
                {project.live && (
                  <>
                    {" "}
                    ({" "}
                    <a href={project.live} target="_blank" rel="noreferrer">
                      run it here
                    </a>{" "}
                    )
                  </>
                )}
                {project.wip && <> (work in progress)</>}
              </p>
              <ul className="resume-list mt-[0.8mm] mb-[0.8mm] list-disc pl-[4.8mm] leading-[1.14]">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <SectionTitle>Achievements</SectionTitle>
        <ul className="resume-list mt-[0.8mm] mb-0 list-disc pl-[4.8mm] leading-[1.14]">
          <li>
            <strong>AIR 1627</strong> in GATE CSE 2025 certifying strong fundamentals.
          </li>
          <li>
            Co-hosted the 1st{" "}
            <a
              href="https://itch.io/jam/godot-india-community-game-jam/"
              target="_blank"
              rel="noreferrer"
            >
              Godot India Community Game Jam (GICGJ)
            </a>
            , 2025.
          </li>
          <li>
            Co-authored the paper{" "}
            <strong>
              KisanSevak: Enhancing Crop Management and Market Forecasting through Machine
              Learning
            </strong>
            :{" "}
            <a
              href="https://jet-m.com/wp-content/uploads/129-JETM8261.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://jet-m.com/wp-content/uploads/129-JETM8261.pdf
            </a>
          </li>
          <li>
            Submitted an entry for{" "}
            <a href="https://segfault.compilertech.org/" target="_blank" rel="noreferrer">
              IICT Segfault Hackathon
            </a>{" "}
            –{" "}
            <a href="https://github.com/joeldotdias/divinic/" target="_blank" rel="noreferrer">
              DiviniC: A modern Holy C Compiler with JIT Runtime and Lazy Error Handling
            </a>
            .
          </li>
          <li>2 time Google Code-In Participant (2017-18).</li>
        </ul>
      </article>
    </div>
  );
}