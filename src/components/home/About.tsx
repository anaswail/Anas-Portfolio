import anas from "../../assets/anas.webp";

import github from "../../assets/github.webp";
import react from "../../assets/react.webp";
import typescript from "../../assets/typescript.webp";
import tailwindcss from "../../assets/tailwindcss.webp";
import figma from "../../assets/figma.webp";
import css from "../../assets/css.webp";
import framer from "../../assets/Framer.png";
import git from "../../assets/git.webp";
import html from "../../assets/html.webp";
import javascript from "../../assets/javascript.webp";
import redux from "../../assets/redux.webp";
import shadcn from "../../assets/shadcn.webp";
import strapi from "../../assets/strapi.webp";
import tanstack from "../../assets/tanstack.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const stats = [
  { title: "Years of experience", number: 2 },
  { title: "Full Projects", number: 4 },
  { title: "Customers", number: 3 },
  { title: "Technologies", number: 14 },
];

const skillCategories = [
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
        level: 4,
        levelLabel: "Advanced",
        projects: 3,
      },
      {
        name: "JavaScript",
        icon: javascript,
        level: 5,
        levelLabel: "Expert",
        projects: 4,
      },
      { name: "HTML", icon: html, level: 5, levelLabel: "Expert", projects: 4 },
      { name: "CSS", icon: css, level: 4, levelLabel: "Advanced", projects: 4 },
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
        name: "Shadcn/UI",
        icon: shadcn,
        level: 3,
        levelLabel: "Proficient",
        projects: 2,
      },
      {
        name: "Framer",
        icon: framer,
        level: 3,
        levelLabel: "Proficient",
        projects: 2,
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
        projects: 2,
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
      { name: "Git", icon: git, level: 4, levelLabel: "Advanced", projects: 4 },
      {
        name: "GitHub",
        icon: github,
        level: 4,
        levelLabel: "Advanced",
        projects: 4,
      },
    ],
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(".rocket", {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: "power2.inOut",
          transformOrigin: "50% 50%",
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set(".rocket", { opacity: 1 });
      });
    },
    { scope: ref },
  );

  return (
    <>
      <section ref={ref} className="about mx-auto w-[min(900px,90%)] py-4">
        {/* Header block */}
        <div className="relative mb-10 pl-5 md:mb-12">
          <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
            Who am I?
          </p>
          <h2 className="text-lg font-bold leading-relaxed text-white lg:text-2xl lg:w-[82%] md:text-xl">
            Front-end developer passionate about modern, responsive, and
            creative web experiences using React, TypeScript, TailwindCSS, and
            modern tooling. Focused on clean design, performance, and
            interactive interfaces.
          </h2>

          {/* Rocket orbiting the corner */}
          <div className="rocket absolute -right-2 -top-2 h-20 w-20 md:h-28 md:w-28">
            <span className="absolute top-0 select-none text-3xl md:text-4xl">
              🚀
            </span>
          </div>
        </div>

        {/* Stats + Photo */}
        <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
          {/* Stats column */}
          <div className="grid grid-cols-2 gap-3 md:flex md:w-[38%] md:flex-col md:gap-4">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-sec-bg px-5 py-4 md:px-7 md:py-5
                           after:absolute after:-bottom-1.5 after:left-1/2 after:z-[-1] after:h-full
                           after:w-full after:-translate-x-1/2 after:rounded-xl after:bg-accent
                           after:content-[''] after:transition-all after:duration-500
                           hover:after:-bottom-2.5"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                  0{idx + 1}
                </span>
                <h3 className="mt-1 text-4xl font-extrabold leading-none text-white md:text-5xl">
                  +{s.number}
                </h3>
                <p className="mt-1 text-sm font-bold tracking-wider text-transparent md:text-base [-webkit-text-stroke:1px_#a1a1aa]">
                  {s.title}
                </p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-accent to-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Photo */}
          <div className="group relative flex-1">
            <img
              src={anas}
              alt="Anas Wael"
              className="pointer-events-none relative z-10 w-full rounded-xl object-cover"
            />
            <span className="absolute -bottom-2.5 -right-2.5 z-0 h-full w-full rounded-xl bg-primary transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
            <span className="pointer-events-none absolute bottom-0 left-0 z-20 h-1/3 w-full rounded-b-xl bg-linear-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────────── */}
      <section className="skills mx-auto w-[min(900px,90%)] py-4">
        <div className="relative mb-10 pl-5 md:mb-12">
          <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
            Tech Stack
          </p>
          <h2 className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
            Tools and technologies I work with, grouped by discipline.
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-4 flex items-center gap-3 border-b border-white/[0.07] pb-3">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: cat.color }}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary">
                  {cat.label}
                </p>
                <span className="ml-auto font-mono text-[10px] text-text-secondary/40">
                  {cat.skills.length} skill{cat.skills.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2 sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] sm:gap-2.5">
                {cat.skills.map((sk) => (
                  <div
                    key={sk.name}
                    style={{ "--cat-color": cat.color } as React.CSSProperties}
                    className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl
                         border border-white/[0.07] bg-sec-bg px-3 py-4
                         transition-all duration-250 hover:-translate-y-0.5 md:px-3.5 md:py-4.5"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = cat.color + "55")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "")
                    }
                  >
                    <img
                      src={sk.icon}
                      alt={sk.name}
                      className="pointer-events-none h-8 w-8 shrink-0 rounded-lg object-contain
                           transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                           group-hover:scale-110 md:h-9 md:w-9"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="mb-1.5 truncate text-[11px] font-semibold text-white md:text-[12px]">
                        {sk.name}
                      </p>
                      <div className="mb-1 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(sk.level / 5) * 100}%`,
                            background: cat.color,
                          }}
                        />
                      </div>
                      <p className="font-mono text-[9px] tracking-wide text-text-secondary">
                        {sk.levelLabel}&nbsp;·&nbsp;{sk.projects}p
                      </p>
                    </div>
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-350 group-hover:w-full"
                      style={{ background: cat.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
