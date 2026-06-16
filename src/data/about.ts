import github from "../assets/github.webp";
import react from "../assets/react.webp";
import typescript from "../assets/typescript.webp";
import tailwindcss from "../assets/tailwindcss.webp";
import figma from "../assets/figma.webp";
import css from "../assets/css.webp";
import framer from "../assets/Framer.png";
import git from "../assets/git.webp";
import html from "../assets/html.webp";
import javascript from "../assets/javascript.webp";
import redux from "../assets/redux.webp";
import shadcn from "../assets/shadcn.webp";
import strapi from "../assets/strapi.webp";
import tanstack from "../assets/tanstack.webp";
import adobexd from "../assets/adobe.webp";
import bootstrap from "../assets/bootstrap.webp";
import gsapLogo from "../assets/gsap.webp";

export const stats = [
  { title: "Months as a freelancer", number: 2 },
  { title: "Full Projects", number: 4 },
  { title: "Customers", number: 3 },
  { title: "Technologies", number: 17 },
];

export const skillCategories = [
  {
    label: "Frontend",
    color: "#7c3aed",
    skills: [
      {
        name: "React",
        icon: react,
        level: 4,
        levelLabel: "Advanced",
        projects: 4,
      },
      {
        name: "TypeScript",
        icon: typescript,
        level: 3,
        levelLabel: "Proficient",
        projects: 3,
      },
      {
        name: "JavaScript",
        icon: javascript,
        level: 5,
        levelLabel: "Expert",
        projects: 12,
      },
      {
        name: "HTML",
        icon: html,
        level: 5,
        levelLabel: "Expert",
        projects: 12,
      },
      { name: "CSS", icon: css, level: 5, levelLabel: "Expert", projects: 12 },
      {
        name: "Redux",
        icon: redux,
        level: 3,
        levelLabel: "Proficient",
        projects: 2,
      },
      {
        name: "TanStack",
        icon: tanstack,
        level: 2,
        levelLabel: "Familiar",
        projects: 1,
      },
    ],
  },
  {
    label: "Styling & UI",
    color: "#0ea5e9",
    skills: [
      {
        name: "TailwindCSS",
        icon: tailwindcss,
        level: 5,
        levelLabel: "Expert",
        projects: 4,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
        level: 3,
        levelLabel: "Familiar",
        projects: 2,
      },
      {
        name: "Shadcn/UI",
        icon: shadcn,
        level: 3,
        levelLabel: "Familiar",
        projects: 1,
      },
      {
        name: "Framer",
        icon: framer,
        level: 3,
        levelLabel: "Proficient",
        projects: 2,
      },
      {
        name: "GSAP",
        icon: gsapLogo,
        level: 3,
        levelLabel: "Proficient",
        projects: 1,
      },
    ],
  },
  {
    label: "Design",
    color: "#f472b6",
    skills: [
      {
        name: "Figma",
        icon: figma,
        level: 3,
        levelLabel: "Proficient",
        projects: 5,
      },
      {
        name: "Adobe Xd",
        icon: adobexd,
        level: 2,
        levelLabel: "Familiar",
        projects: 1,
      },
    ],
  },
  {
    label: "Backend & CMS",
    color: "#34d399",
    skills: [
      {
        name: "Strapi",
        icon: strapi,
        level: 2,
        levelLabel: "Familiar",
        projects: 1,
      },
    ],
  },
  {
    label: "Version Control",
    color: "#fb923c",
    skills: [
      {
        name: "Git",
        icon: git,
        level: 4,
        levelLabel: "Advanced",
        projects: 12,
      },
      {
        name: "GitHub",
        icon: github,
        level: 4,
        levelLabel: "Advanced",
        projects: 34,
      },
    ],
  },
];

export const timelineItems = [
  {
    year: "2021 — The start",
    title: "First line of coding",
    description:
      "I was passionate about computers, so I was curious about how programs were made. I kept researching until I learned about programming and started with C++.",
    tags: [
      {
        label: "C++",
        color: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
    ],
    isMilestone: false,
  },
  {
    year: "2022 — Path clarity",
    title: "Scratch & python",
    description:
      "At the beginning of this stage, I started watching paid courses to understand more, and at the same time I started learning Python on my own and took a Scratch course on GSAP, and I was first among my peers. This is because there is something in me that pushes me forward, making me want to be the best at everything.",
    tags: [
      {
        label: "Python",
        color: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
      {
        label: "Scratch",
        color: "text-orange-400 border-orange-400/30 bg-orange-400/10",
      },
    ],
    isMilestone: true,
  },
  {
    year: "2023 — Web development",
    title: "Picking up Figma & UI craft",
    description:
      "At the end of that year, I started in the field of web development and took a paid course, but the progress was so slow that there were two whole sessions just to show us the colors in CSS and we had to try out each color individually. So after a few months I quit and started a front-end development program.",
    tags: [
      {
        label: "Front-end",
        color: "text-pink-400 border-pink-400/30 bg-pink-400/10",
      },
    ],
    isMilestone: false,
  },
  {
    year: "2024 — Front-End Track",
    title: "basics of front-end",
    description:
      "A few months into this year, I quit the paid course because I felt I was wasting my time and effort. I started a scholarship program with a specific person. The scholarship's explanations and follow-up were nonexistent, but it helped me by showing me the roadmap. From then on, I started forging my own path. I had already finished HTML & CSS and started on JavaScript. After joining the scholarship program, I finished JavaScript and moved on to React.",
    tags: [
      {
        label: "HTML",
        color: "text-orange-400 border-orange-400/30 bg-orange-400/10",
      },
      {
        label: "CSS",
        color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      },
      {
        label: "Javascript",
        color: "text-red-400 border-red-400/30 bg-red-400/10",
      },
      {
        label: "React",
        color: "text-green-400 border-green-400/30 bg-green-400/10",
      },
      {
        label: "tailwindcss",
        color: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      },
    ],
    isMilestone: true,
  },
  {
    year: "2025 — transitional year",
    title: "The most important year since I started",
    description:
      "In late 2024, I started delving deeper into web development, but towards the end of the year, my high school exams began, so my programming study time decreased. However, I continued until April 2025, then stopped until mid-July due to my high school exams. After finishing, I enrolled in the Faculty of Mass Communication and continued programming, but with greater intensity and depth. I began to delve deeper into more concepts and gained much more experience. It was then that I started working with my first client.",
    tags: [
      { label: "React", color: "text-primary border-primary/30 bg-primary/10" },
      {
        label: "TypeScript",
        color: "text-primary border-primary/30 bg-primary/10",
      },
      {
        label: "Faculty of Media",
        color: "text-yellow border-yellow/30 bg-yellow/10",
      },

      {
        label: "First client",
        color: "text-blue border-blue/30 bg-blue/10",
      },

      {
        label: "Delving into the concepts",
        color: "text-purple border-purple/30 bg-purple/10",
      },
    ],
    isMilestone: true,
  },
  {
    year: "2026 — Now",
    title: "energy explosion",
    description:
      "This year is an important year for me. I'm trying to find a job or start my own project, and at the same time, I'm developing my programming skills much more to become strong in things like data structures, clean code, algorithms, and web animation.",
    tags: [
      { label: "GSAP", color: "text-accent border-accent/30 bg-accent/10" },
      {
        label: "Next.js",
        color: "text-secondary border-secondary/30 bg-secondary/10",
      },
      {
        label: "programming skills",
        color: "text-primary border-primary/30 bg-primary/10",
      },
    ],
    isMilestone: true,
  },
];

export const softSkills = [
  {
    icon: "🧠",
    label: "Problem solving",
    desc: "Break down complex bugs methodically. Known for tracing root causes rather than patching symptoms.",
    level: 90,
    color: "#7c3aed",
  },
  {
    icon: "🔄",
    label: "Adaptability",
    desc: "Picks up new tools and frameworks quickly. Comfortable navigating ambiguity on the fly.",
    level: 88,
    color: "#06b6d4",
  },
  {
    icon: "🎯",
    label: "Attention to detail",
    desc: "Pixel-level precision in UI. Notices inconsistent spacing, off-brand colors, and animation jank.",
    level: 92,
    color: "#ec4899",
  },
  {
    icon: "🤝",
    label: "Collaboration",
    desc: "Values clear communication and shared context. Ships reliable work that teammates can build on.",
    level: 82,
    color: "#10b981",
  },
  {
    icon: "⚡",
    label: "Delivery mindset",
    desc: "Bias toward shipping. Avoids over-engineering, keeps scope tight, and iterates fast.",
    level: 85,
    color: "#f97316",
  },
  {
    icon: "📐",
    label: "Design intuition",
    desc: "Thinks in systems — typography, spacing, color hierarchy — not just components.",
    level: 80,
    color: "#7c3aed",
  },
];

export const learningGoals = [
  {
    icon: "🗂️",
    bg: "bg-accent/10",
    title: "Data structures & algorithms",
    desc: "Working through arrays, linked lists, trees, and graphs. Focused on pattern recognition for interview-level problem solving and writing efficient code.",
  },
  {
    icon: "🔁",
    bg: "bg-primary/10",
    title: "Algorithm design",
    desc: "Studying sorting, searching, recursion, and dynamic programming. Building the mental muscle to analyse time and space complexity before writing code.",
  },
  {
    icon: "✨",
    bg: "bg-pink-400/10",
    title: "Advanced animation systems",
    desc: "Deepening GSAP mastery — complex ScrollTrigger pinning, SVG morphing, and physics-based motion. Exploring Three.js for WebGL-based 3D scenes.",
  },
  {
    icon: "🛠️",
    bg: "bg-green-400/10",
    title: "Advanced Front-end",
    desc: "Building larger websites with more detailed animations while maintaining performance, and learning testing and networking.",
  },
  {
    icon: "🧩",
    bg: "bg-orange-400/10",
    title: "Software architecture",
    desc: "Learning to think beyond components — folder structures, separation of concerns, reusable design patterns, and scalable code organisation.",
  },
];
