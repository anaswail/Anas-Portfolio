import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import planet1 from "../assets/planet-1.webp";
import planet2 from "../assets/planet-2.webp";
import planet3 from "../assets/planet-3.webp";
import logo from "../assets/logo.webp";
import anas from "../assets/anas.webp";
import neotech from "../assets/neotech.webp";
import jobportal from "../assets/jopPortal.webp";
import mrboxing from "../assets/mrboxing.webp";
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

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import TransitionSection from "../components/TransitionSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ─── Data ────────────────────────────────────────────────────────────────────

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

const projects = [
  {
    title: "NeoTech",
    subtitle: "E-commerce Website",
    description:
      "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
    tech: [
      { label: "React", icon: react },
      { label: "TailwindCSS", icon: tailwindcss },
      { label: "TypeScript", icon: typescript },
    ],
    image: neotech,
    liveUrl: "neotech-anas.vercel.app/",
    repoUrl: "https://github.com/anaswail/NeoTech",
  },
  {
    title: "MR.Boxing",
    subtitle: "Boxing Academy",
    description:
      "A boxing academy website built with React, TypeScript, and TailwindCSS v4, animated with TailwindCSS. Features a custom dark editorial design system using Bebas Neue typography, a red/black color palette, and reusable chamfered clip-path components throughout.",
    tech: [
      { label: "React", icon: react },
      { label: "TailwindCSS", icon: tailwindcss },
    ],
    image: mrboxing,
    liveUrl: "https://mr-boxing.vercel.app/",
    repoUrl: "https://github.com/anaswail/MR.Boxing",
  },
  {
    title: "Job Portal",
    subtitle: "Job site",
    description:
      "Job Portal is a modern React + Vite web app for easy job search and recruitment. Features include job browsing and filtering, applications management, employer dashboard, secure authentication, responsive design, and mock data ready for backend integration.",
    tech: [
      { label: "React", icon: react },
      { label: "TailwindCSS", icon: tailwindcss },
    ],
    image: jobportal,
    liveUrl: "",
    repoUrl: "",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const HomePage = () => {
  const ring1 = useRef<HTMLDivElement>(null);
  const ring2 = useRef<HTMLDivElement>(null);
  const ring3 = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect reduced-motion preference once
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Detect mobile (≤ 768px) — used to skip heavy animations on small screens
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // ── Hero + orbital animations ───────────────────────────────────────────
  useGSAP(
    () => {
      // Always run the intro text fade-in (lightweight)
      gsap.set(".intro-animation", { x: 30, opacity: 0 });
      gsap.set(".btns-intro-animation", { scale: 0, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(".intro-animation", {
        x: 0,
        opacity: 1,
        duration: prefersReducedMotion ? 0.01 : 1.4,
        stagger: prefersReducedMotion ? 0 : 0.2,
        ease: "power2.out",
        delay: 0.4,
      }).to(
        ".btns-intro-animation",
        {
          scale: 1,
          opacity: 1,
          duration: prefersReducedMotion ? 0.01 : 0.7,
          ease: "elastic.out(1, 0.6)",
          stagger: prefersReducedMotion ? 0 : 0.1,
          transformOrigin: "center center",
        },
        "<40%",
      );

      // Skip orbital ring & rocket animations on mobile/reduced-motion
      if (!isMobile && !prefersReducedMotion) {
        tl.from(
          ".ring-animation",
          { scale: 0, opacity: 0, duration: 1, stagger: 0.15 },
          "<",
        ).add(() => {
          gsap.to(ring1.current, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });
          gsap.to(ring2.current, {
            rotation: 360,
            duration: 16,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });
          gsap.to(ring3.current, {
            rotation: -360,
            duration: 24,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });
          gsap.to(".rocket", {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
          });
        });
      } else {
        // Just show rings & rocket statically on mobile
        gsap.set(".ring-animation", { opacity: 1, scale: 1 });
        gsap.set(".rocket", { opacity: 1 });
      }
    },
    { scope: containerRef },
  );

  // ── Horizontal scroll — desktop only ───────────────────────────────────
  useGSAP(() => {
    if (isMobile) return; // mobile uses a vertical stack instead

    const slides = gsap.utils.toArray<HTMLElement>(
      ".projects-horizontal .panel",
    );
    if (!slides.length) return;

    gsap.to(slides, {
      x: () => -(window.innerWidth * (slides.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: ".projects-horizontal",
        start: "top top",
        end: () => `+=${window.innerWidth * (slides.length - 1)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  // ── Project card scroll reveal ──────────────────────────────────────────
  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.set(".project-card", { y: 50, opacity: 0 });

    ScrollTrigger.create({
      trigger: ".projects-grid",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".project-card", {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        });
      },
      once: true,
    });
  });

  return (
    <div ref={containerRef} className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-5 pb-10 pt-24 md:flex-row md:px-10 md:pt-0">
        {/* Text */}
        <div className="flex w-full flex-col gap-0 md:w-1/2">
          <div className="intro-animation mb-5 w-fit rounded-xl bg-sec-bg px-5 py-2.5 md:px-6 md:py-3">
            <p className="text-base font-bold text-white md:text-lg">
              Anas Wael | Front-end
            </p>
          </div>

          <h1 className="intro-animation text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building responsive,
            <br />
            <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
              user-focused
            </span>{" "}
            web experiences
          </h1>

          <p className="intro-animation mt-4 w-full text-sm leading-7 text-text-secondary sm:text-base md:w-[85%]">
            I'm a frontend developer who crafts clean, responsive interfaces
            with a strong focus on UX and performance. I value collaboration,
            adapt quickly, and ship reliable, high-quality work.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 md:gap-6">
            <ul className="flex items-center gap-2.5">
              {[
                { icon: faInstagram, hover: "group-hover:text-purple-500" },
                { icon: faGithub, hover: "group-hover:text-gray-400" },
                { icon: faLinkedin, hover: "group-hover:text-blue-500" },
              ].map(({ icon, hover }, i) => (
                <li key={i}>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="btns-intro-animation group flex h-10 w-10 items-center justify-center rounded-lg bg-sec-bg drop-shadow-lg transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className={`text-xl text-text-secondary transition-colors duration-200 ${hover}`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <button className="btns-intro-animation rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white drop-shadow-lg transition-colors duration-200 hover:bg-purple-700 md:text-base">
              Download CV
            </button>
          </div>
        </div>

        {/* Orbital rig — hidden on very small screens, shown from sm up */}
        <div className="relative mt-6 flex h-64 w-full items-center justify-center sm:h-80 md:mt-0 md:h-130 md:w-1/2">
          <img
            src={logo}
            alt="logo"
            className="ring-animation absolute z-10 w-24 sm:w-32 md:w-48"
          />

          {/* Ring 1 — innermost */}
          <div
            ref={ring1}
            className="ring-animation absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 sm:h-36 sm:w-36 md:h-40 md:w-40"
          />

          {/* Ring 2 */}
          <div
            ref={ring2}
            className="ring-animation absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 sm:h-64 sm:w-64 md:h-80 md:w-80"
          >
            {[
              {
                src: planet1,
                cls: "absolute -top-6 left-1/2 -translate-x-1/2",
              },
              {
                src: planet2,
                cls: "absolute top-1/2 -translate-y-1/2 -right-6",
              },
              {
                src: planet3,
                cls: "absolute -bottom-6 left-1/2 -translate-x-1/2",
              },
              {
                src: planet2,
                cls: "absolute top-1/2 -translate-y-1/2 -left-6",
              },
            ].map(({ src, cls }, i) => (
              <img
                key={i}
                src={src}
                alt="planet"
                className={`w-10 sm:w-12 md:w-16 ${cls}`}
              />
            ))}
          </div>

          {/* Ring 3 — outermost, hidden on small screens */}
          <div
            ref={ring3}
            className="ring-animation absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:block md:h-120 md:w-120"
          >
            {[
              {
                src: planet1,
                cls: "absolute -top-8 left-1/2 -translate-x-1/2",
              },
              {
                src: planet2,
                cls: "absolute top-1/2 -translate-y-1/2 -right-8",
              },
              {
                src: planet3,
                cls: "absolute -bottom-8 left-1/2 -translate-x-1/2",
              },
              {
                src: planet1,
                cls: "absolute top-1/2 -translate-y-1/2 -left-8",
              },
            ].map(({ src, cls }, i) => (
              <img key={i} src={src} alt="planet" className={`w-16 ${cls}`} />
            ))}
          </div>
        </div>
      </section>

      <TransitionSection title="Who am I?" description="Good question..." />

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section className="about mx-auto w-[min(900px,90%)] py-4">
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
              className="relative z-10 w-full rounded-xl object-cover"
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
                         transition-all duration-250 hover:-translate-y-0.5 md:px-3.5 md:py-[18px]"
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
                      className="h-8 w-8 flex-shrink-0 rounded-lg object-contain
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

      <TransitionSection
        title="Projects?"
        description="Let's look at what I've shipped..."
      />

      {/* ── Projects: horizontal scroll on desktop, vertical stack on mobile ── */}

      {/* Desktop horizontal scroll */}
      <section className="projects-horizontal hidden h-screen w-full overflow-hidden md:flex">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="panel flex h-full shrink-0 items-center justify-between gap-10 px-[8vw]"
            style={{ width: "100vw" }}
          >
            <div className="flex w-1/2 flex-col">
              <span className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
                Project {String(idx + 1).padStart(2, "0")}
              </span>

              <h2 className="text-5xl font-extrabold text-accent lg:text-6xl">
                {p.title}
              </h2>
              <p className="mt-1 text-lg font-medium text-text-secondary">
                ({p.subtitle})
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {p.tech.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 rounded-lg bg-sec-bg px-3 py-1.5 drop-shadow-md"
                  >
                    <img src={t.icon} alt={t.label} className="h-5 w-5" />
                    <span className="text-sm font-semibold text-white">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 w-[88%] text-base leading-7 text-gray-400">
                {p.description}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button className="h-11 rounded-lg bg-primary px-7 text-base font-semibold text-white drop-shadow-lg transition-colors duration-300 hover:bg-purple-800">
                  View Docs
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={p.repoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-sec-bg p-2 drop-shadow-md transition-colors duration-200 hover:bg-white/10"
                  >
                    <img
                      src={github}
                      alt="GitHub"
                      className="rounded bg-white"
                    />
                  </a>
                  <a
                    href={p.liveUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-sec-bg text-xl drop-shadow-md transition-colors duration-200 hover:bg-white/10"
                  >
                    🚀
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex w-1/2 items-center justify-center">
              <div className="group relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="relative z-10 w-[88%] rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 -z-10 scale-95 rounded-xl bg-primary/20 blur-2xl" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Mobile vertical project cards */}
      <section className="mx-auto flex w-[min(600px,90%)] flex-col gap-8 py-8 md:hidden">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-sec-bg"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden sm:h-56">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5">
              <div>
                <h2 className="text-2xl font-extrabold text-accent">
                  {p.title}
                </h2>
                <p className="text-sm font-medium text-text-secondary">
                  ({p.subtitle})
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-1.5 rounded-lg bg-sec-bg px-2.5 py-1 ring-1 ring-white/10"
                  >
                    <img src={t.icon} alt={t.label} className="h-4 w-4" />
                    <span className="text-xs font-semibold text-white">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-6 text-gray-400 line-clamp-3">
                {p.description}
              </p>

              <div className="mt-1 flex items-center gap-3 border-t border-white/[0.06] pt-3">
                <button className="flex-1 rounded-lg bg-primary py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700">
                  View Docs
                </button>
                <a
                  href={p.repoUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] transition-colors hover:bg-white/10"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="h-4 w-4 rounded bg-white"
                  />
                </a>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-base transition-colors hover:bg-white/10"
                  >
                    🚀
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Projects Grid ─────────────────────────────────────────────────────── */}
      <section className="projects-grid mx-auto w-[min(1100px,90%)] py-16 md:py-24">
        <div className="relative mb-10 pl-5 md:mb-12">
          <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
            All Projects
          </p>
          <h2 className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
            A closer look at what I've built.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-sec-bg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-extrabold text-white">{p.title}</h3>
                <p className="mt-0.5 text-sm text-text-secondary">
                  ({p.subtitle})
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-2.5 py-1"
                    >
                      <img src={t.icon} alt={t.label} className="h-3.5 w-3.5" />
                      <span className="text-[11px] font-semibold text-white/70">
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-400 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <a
                    href={p.repoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] transition-colors hover:bg-white/10"
                  >
                    <img
                      src={github}
                      alt="GitHub"
                      className="h-4 w-4 rounded bg-white"
                    />
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-sm transition-colors hover:bg-white/10"
                    >
                      🚀
                    </a>
                  )}
                  <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.18em] text-text-secondary/50">
                    {p.tech.map((t) => t.label).join(" · ")}
                  </span>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-linear-to-r from-accent to-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <button className="group relative overflow-hidden rounded-xl border border-primary/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10 md:px-10 md:py-3.5">
            <span className="relative z-10 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.15em] md:text-sm">
              See all projects
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>

      <TransitionSection
        title="Like what I do?"
        description="Let's connect together..."
      />

      {/* ── Contact ───────────────────────────────────────────────────────────── */}
      <section className="contact mx-auto w-[min(1100px,90%)] py-16 md:py-24">
        <div className="relative mb-12 pl-5 md:mb-16">
          <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
            Contact
          </p>
          <h2 className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
            Have a project in mind? Let's talk.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:gap-10">
          {/* ── Form ── */}
          <div className="rounded-2xl border border-white/[0.07] bg-sec-bg p-6 md:p-8">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary md:mb-8">
              Project Inquiry
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Anas Wael"
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white/[0.05]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+20 100 000 0000"
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white/[0.05]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white/[0.05]"
                />
              </div>

              {/* Project name */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="My Awesome Project"
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white/[0.05]"
                />
              </div>

              {/* Order details */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                  Order Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  className="resize-none rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white/[0.05]"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              className="group mt-5 flex w-full items-center justify-center gap-3 rounded-xl
                   bg-primary py-3.5 text-sm font-semibold text-white
                   transition-all duration-300 hover:bg-purple-700 active:scale-[0.98] md:mt-6"
            >
              <span className="font-mono text-sm uppercase tracking-[0.15em]">
                Send Message
              </span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* ── Side info ── */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-sec-bg px-6 py-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Available for new projects
              </p>
            </div>

            {/* Direct contact info */}
            <div className="rounded-2xl border border-white/[0.07] bg-sec-bg p-6">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                Direct Contact
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Email",
                    value: "anaswael@email.com",
                    icon: (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "WhatsApp",
                    value: "+20 100 000 0000",
                    icon: (
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                  },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-text-secondary">
                      {icon}
                    </span>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-text-secondary/50">
                        {label}
                      </p>
                      <p className="text-[13px] font-medium text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/[0.07] bg-sec-bg p-6">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                Find Me On
              </p>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                {[
                  {
                    label: "LinkedIn",
                    href: "#",
                    color: "#0a66c2",
                    icon: (
                      <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                    ),
                  },
                  {
                    label: "GitHub",
                    href: "#",
                    color: "#94a3b8",
                    icon: (
                      <FontAwesomeIcon icon={faGithub} className="text-lg" />
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "#",
                    color: "#e1306c",
                    icon: (
                      <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                    ),
                  },
                  {
                    label: "Facebook",
                    href: "#",
                    color: "#1877f2",
                    icon: (
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: "WhatsApp",
                    href: "#",
                    color: "#25d366",
                    icon: (
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                  },
                  {
                    label: "YouTube",
                    href: "#",
                    color: "#ff0000",
                    icon: (
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                  {
                    label: "TikTok",
                    href: "#",
                    color: "#94a3b8",
                    icon: (
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ),
                  },
                ].map(({ label, href, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    style={{ "--social-color": color } as React.CSSProperties}
                    className="group flex flex-col items-center gap-1.5 rounded-xl
                         border border-white/[0.07] bg-white/[0.03] py-3
                         transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color + "55";
                      e.currentTarget.style.color = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <span className="text-text-secondary transition-colors duration-200 group-hover:text-[var(--social-color)]">
                      {icon}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-text-secondary/50">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <footer className="mt-8 border-t border-white/[0.06]">
        <div className="mx-auto w-[min(1100px,90%)] py-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:gap-6">
            {/* Left — name + tagline */}
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="text-sm font-bold text-white">Anas Wael</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary/50">
                Front-end Developer
              </p>
            </div>

            {/* Center — nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary/50
                       transition-colors duration-200 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right — social icons row */}
            <div className="flex items-center gap-2">
              {[
                { icon: faLinkedin, href: "#", hover: "hover:text-blue-500" },
                { icon: faGithub, href: "#", hover: "hover:text-gray-300" },
                {
                  icon: faInstagram,
                  href: "#",
                  hover: "hover:text-purple-400",
                },
              ].map(({ icon, href, hover }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-8 w-8 items-center justify-center rounded-lg
                        bg-white/[0.04] text-text-secondary/60 transition-all duration-200
                        hover:bg-white/[0.08] ${hover}`}
                >
                  <FontAwesomeIcon icon={icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/[0.05] pt-6 sm:flex-row">
            <p className="font-mono text-[10px] text-text-secondary/30">
              © {new Date().getFullYear()} Anas Wael. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-text-secondary/30">
              Built with React · TypeScript · TailwindCSS · GSAP
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
