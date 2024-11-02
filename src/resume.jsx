import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/email.svg";
import smv from "./assets/smv.jpeg";

const projects = {
    "smvm": {
        "link": "https://github.com/s-mv/smvm",
        "points": [
            "The smvm (smv virtual machine) is a register based Virtual Machine implementation in C.",
            "Release version (v0.1.1) out, actively being developed. Comes with an assembler for 'assemvly.'",
            "Applies DSA, microprocessors, compiler design. Helped me learn Github Actions CI/CD."
        ]
    },
    "KisanSevak": {
        "link": "https://github.com/Fresh-Fields/fresh-fields",
        "points": [
            "ML powered agricultural tool for the farmer of the future! Recommends crops, predicts farm yield and compares future market prices.",
            "Technical skills used: deep learning, ML, full-stack web development."
        ]
    },
    "AirBNB Review Analyzer": {
        "link": "https://github.com/s-mv/airbnb-review-analyzer",
        "points": [
            "Analyze airbnb reviews in seconds! Made using Selenium, Beautiful Soup 4 and NLTK."
        ]
    },
    "pocl": {
        "link": "https://github.com/s-mv/pocl",
        "points": [
            "Highly parallelised programming language. Currently a work in progress."
        ]
    }
};


export const Resume = () => {
    return <div class="max-w-6xl mx-auto bg-white p-8 font-serif leading-[1.3]">
        <h1 class="text-center text-[18pt] mb-[2pt]">Shreerang Vaidya</h1>
        <div class="text-center mb-[2pt]">
            <div class="flex justify-center mb-[1pt]">
                <span class="flex items-center mx-[6pt]">
                    <img class="w-[16pt] h-[16pt] mr-[5pt]" src={github} alt="GitHub" />
                    <a target="_blank" href="https://github.com/s-mv/" class="no-underline text-black border-b border-black">
                        https://github.com/s-mv/
                    </a>
                </span>
                <span class="flex items-center mx-[6pt]">
                    <img class="w-[16pt] h-[16pt] mr-[5pt]" src={linkedin} alt="LinkedIn" />
                    <a target="_blank" href="https://linkedin.com/in/shreerang-vaidya/" class="no-underline text-black border-b border-black">
                        https://linkedin.com/in/shreerang-vaidya/
                    </a>
                </span>
            </div>
            <div class="flex justify-center mb-[1pt]">
                <span class="flex items-center mx-[6pt]">
                    <img class="w-[16pt] h-[16pt] mr-[5pt]" src={email} alt="Email" />
                    <a href="mailto:shreerangvaidya28@gmail.com" class="no-underline text-black border-b border-black">
                        shreerangvaidya28@gmail.com
                    </a>
                </span>
                <span class="flex items-center mx-[6pt]">
                    <img class="w-[16pt] h-[16pt] mr-[5pt]" src={email} alt="Email" />
                    <a href="mailto:2022.shreerang.vaidya@ves.ac.in" class="no-underline text-black border-b border-black">
                        2022.shreerang.vaidya@ves.ac.in
                    </a>
                </span>
            </div>
        </div>
        <div class="grid grid-cols-[1fr_auto] gap-16">
            <div class="flex flex-col flex-grow">
            <div class="my-[6pt] text-justify">
                Currently an undergraduate pursuing computer science. Specially interested in compiler design,
                machine learning, embedded systems, and data science. You're already on my site if you're seeing
                this, but here's a link anyway.<br />
                <a href="https://s-mv.github.io/" class="text-black border-b border-black">
                    https://s-mv.github.io/
                </a>
            </div>
            </div>
            <div class="flex flex-shrink-0 justify-end">
                <div class="flex flex-col justify-end items-center self-start">
                    <img src={smv} alt="Profile Photo" class="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover" />
                    <span class="mt-2 text-center text-gray-700">Imagine that this is less goofy.</span>
                </div>
            </div>
        </div>

        <h2 class="text-[14pt] mt-[8pt] mb-[1pt] border-b border-black">Education</h2>
        <div class="my-[6pt]">
            <strong>Vivekanand Education Society's Institute of Technology</strong>
            <span class="float-right">2022 – 2026</span><br />
            <em>B. E. in Computer Engineering</em> — <em>Aggregate GPA:</em> 8.9<br />
            <em>Relevant courses:</em> Theoretical Computer Science, DSA, Microprocessors, Operating Systems,
            OOPM, DBMS, Probabilistic Graphical Models, Discrete Structures and Graph Theory.
            <ul class="pl-[12pt] mt-[1pt] list-disc">
                <li class="ml-1">2nd runner up in BuzzPro '24.</li>
                <li class="ml-1">3rd runner up in Awakening The Scientist, 2022.</li>
                <li class="ml-1">Special mention in Hack-AI-thon 2.0.</li>
            </ul>
        </div>

        <h2 class="text-[14pt] mt-[8pt] mb-[1pt] border-b border-black">Technical Skills</h2>
        <ul class="pl-[12pt] mt-[1pt] list-disc">
            <li class="ml-1">Basic machine learning (deep learning) and data science.</li>
            <li class="ml-1">Basic full-stack development (MERN stack).</li>
            <li class="ml-1">Knowledge of Compiler Design, Operating Systems, DSA, etc.</li>
            <li class="ml-1">Proficiency in C/C++, Python, Go, and JS.</li>
        </ul>

        <h2 class="text-[14pt] mt-[8pt] mb-[1pt] border-b border-black">Experience</h2>
        <div class="mb-[10px]">
            <strong>Banao Technologies</strong> <span class="float-right">Jan 2024– Jun 2024</span><br />
            <span class="italic">Web Scraping Intern</span>
            <ul class="pl-[12pt] mt-[1pt] list-disc">
                <li class="ml-1">Learned the applications of web scraping, DBMS, backend development, etc. through various
                    projects.</li>
                <li class="ml-1">Gained valuable insights about the internal workings of a startup and team collaboration.
                </li>
            </ul>
        </div>

        <div class="mb-[10px]">
            <strong>Academor</strong> <span class="float-right">July 2023– August 2023</span><br />
            <span class="italic">Machine Learning Intern</span>
            <ul class="pl-[12pt] mt-[1pt] list-disc">
                <li class="ml-1">Making classification model to for loan approval prediction.</li>
                <li class="ml-1">Collaboration with team over Google Colab.</li>
            </ul>
        </div>

        <h2 class="text-[14pt] mt-[8pt] mb-[1pt] border-b border-black">Notable Projects</h2>
        {Object.entries(projects).map(([title, { link, points }]) => (
            <div class="mb-4">
                <div key={title} className="font-bold my-[6pt]">
                    {title} | <a target="_blank" rel="noopener noreferrer" href={link} className="inline-flex items-center text-black border-b border-black">
                        <img src="/path/to/github-icon.png" className="h-[18px] self-center" alt="GitHub" /> —
                        {link}
                    </a>
                </div>
                <ul className="pl-[12pt] mt-[1pt] list-disc">
                    {points.map((point, index) => (
                        <li key={index} className="ml-1">{point}</li>
                    ))}
                </ul>
            </div>
        ))}

        <h2 class="text-[14pt] mt-[8pt] mb-[1pt] border-b border-black">Achievements</h2>
        <ul class="pl-[12pt] mt-[1pt] list-disc">
            <li class="ml-1">
                Co-authored and published paper "<strong>KisanSevak: Enhancing Crop Management and Market
                    Forecasting through Machine Learning</strong>" in Volume 72 of the Journal of Engineering and Technology
                Management
                (JET-M): <a href="https://jet-m.com/wp-content/uploads/129-JETM8261.pdf"
                    class="text-black border-b border-black">
                    https://jet-m.com/wp-content/uploads/129-JETM8261.pdf
                </a>
            </li>
            <li class="ml-1">Submitted a solution in GDSC Solution Challenge, 2024.</li>
            <li class="ml-1">2 time Google Code-In Participant (2017-18).</li>
        </ul>
    </div >;
}