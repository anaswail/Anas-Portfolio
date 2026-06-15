import github from "../assets/github.webp";
import figma from "../assets/figma.webp";
import { useNavigate } from "react-router-dom";

type Tech = {
  label: string;
  icon: string;
  main?: boolean;
};

type Project = {
  title: string;
  slug: string;
  subtitle: string;
  image: string;
  tech: Tech[];
  description: string;
  repoUrl?: string;
  liveUrl?: string;
  design?: boolean;
  role?: string[];
};

type CardProps = {
  projects: Project[];
};

const Card = ({ projects }: CardProps) => {
  const navigate = useNavigate();

  return (
    <>
      {projects.map((p, idx) => (
        <div
          onClick={() => navigate(`/projects/${p.slug}`)}
          key={idx}
          className="cursor-pointer project-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-sec-bg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
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
            <span
              className={`${p.design ? "absolute" : "hidden"} duration-500 group-hover:opacity-100 opacity-0 top-2 right-2 bg-primary p-2 text-[8px] rounded-lg text-white tracking-wider `}
            >
              Designed with figma
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5 relative">
            <img
              src={figma}
              alt="figma"
              loading="lazy"
              decoding="async"
              className={`${p.design ? "absolute" : "hidden"} top-6 right-8 w-8 grayscale-50 group-hover:grayscale-0 `}
            />
            <h3 className="text-xl font-extrabold text-white">{p.title}</h3>
            <p className="mt-0.5 text-sm text-text-secondary">({p.subtitle})</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech
                .filter((tech) => tech.main === true)
                .map((t) => (
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
                {p.role?.join(" · ")}
              </span>
            </div>
          </div>

          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-accent to-primary transition-all duration-500 group-hover:w-full" />
        </div>
      ))}
    </>
  );
};

export default Card;
