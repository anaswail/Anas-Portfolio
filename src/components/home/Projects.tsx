import neotech from "../../assets/neotech.webp";
import jobportal from "../../assets/jopPortal.webp";
import mrboxing from "../../assets/mrboxing.webp";
import github from "../../assets/github.webp";
import react from "../../assets/react.webp";
import typescript from "../../assets/typescript.webp";
import tailwindcss from "../../assets/tailwindcss.webp";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const Projects = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    gsap.fromTo(
      ".project-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 50%",
          toggleActions: "restart none restart none",
        },
      },
    );
  });
  return (
    <>
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
                      className="flex items-center gap-1.5 rounded-lg bg-white-5 px-2.5 py-1"
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

                <div className="mt-5 flex items-center gap-3 border-t border-white/6 pt-4">
                  <a
                    href={p.repoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white-5 transition-colors hover:bg-white/10"
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
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white-5 text-sm transition-colors hover:bg-white/10"
                    >
                      🚀
                    </a>
                  )}
                  <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.18em] text-text-secondary/50">
                    {p.tech.map((t) => t.label).join(" · ")}
                  </span>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-accent to-primary transition-all duration-500 group-hover:w-full" />
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
    </>
  );
};

export default Projects;
