import github from "../../assets/github.webp";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "../Card";
import { projects } from "../../data/projects";
import { Link } from "react-router";

const HomeProjects = () => {
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
        {projects
          .filter((project) => project.started === true)
          .map((p, idx) => (
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
                  {p.tech.map((t, idx) => (
                    <div
                      key={idx}
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
                  <Link to={`/projects/${p.slug}`} className="cursor-pointer">
                    <button className=" h-11 rounded-lg bg-primary px-7 text-base font-semibold text-white drop-shadow-lg transition-colors duration-300 hover:bg-purple-800">
                      View Docs
                    </button>
                  </Link>
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
          <Card
            projects={projects.filter((project) => project.started === true)}
          />
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link to="/projects">
            <button className="group cursor-pointer relative overflow-hidden rounded-xl border border-primary/40 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10 md:px-10 md:py-3.5">
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
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
