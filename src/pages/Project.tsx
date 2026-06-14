import { useParams, Link, Navigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFigma,
  faYoutube,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faClock,
  faUsers,
  faLayerGroup,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data/projects";

const platformIcons: Record<string, typeof faYoutube> = {
  youtube: faYoutube,
  instagram: faInstagram,
  tiktok: faTiktok,
  facebook: faFacebook,
};

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const {
    title,
    subtitle,
    image,
    tech,
    liveUrl,
    repoUrl,
    figmaUrl,
    videoLinks,
    duration,
    collaboration,
    challenges,
    classification,
    docs,
    warning,
  } = project;

  return (
    <div className="w-full px-5 py-16 md:px-10 lg:px-20">
      {/* Cover Image */}
      <div className="relative mb-8 w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover md:h-[28rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          {classification && (
            <span className="mb-3 inline-block rounded-full bg-sec-bg px-4 py-1.5 text-xs font-semibold text-accent md:text-sm">
              {classification}
            </span>
          )}
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-text-secondary md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      {warning && (
        <p className="text-red-700 text-xs md:text-sm mb-6 tracking-wide">
          *{warning}
        </p>
      )}

      {/* Links row */}
      <div className="mb-12 flex flex-wrap items-center gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-700"
          >
            Live Demo
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </a>
        )}

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-sec-bg px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:text-accent"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        )}

        {figmaUrl && (
          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-sec-bg px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:text-accent"
          >
            <FontAwesomeIcon icon={faFigma} />
            Figma Design
          </a>
        )}

        {videoLinks?.map(({ platform, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-sec-bg text-text-secondary transition-colors duration-200 hover:text-accent"
            title={`Watch on ${platform}`}
          >
            <FontAwesomeIcon icon={platformIcons[platform] ?? faYoutube} />
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Overview
          </h2>
          {docs?.map((p) => (
            <div>
              <p className=" text-text-secondary leading-8 tracking-wider">
                {p}
              </p>
              <span className="block w-full h-px bg-linear-to-r from-primary to-sec-bg my-6 "></span>
            </div>
          ))}

          {challenges && challenges.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                Challenges & Solutions
              </h2>
              <div className="flex flex-col gap-4">
                {challenges.map(({ problem, solution, link }, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl bg-sec-bg p-5 md:p-6"
                  >
                    <p className="mb-2 flex items-start gap-2 text-sm font-semibold text-white md:text-base tracking-wider leading-8">
                      <span className="mt-1 text-accent">
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      {problem}
                    </p>
                    <p className="pl-6 text-sm leading-6 text-text-secondary md:text-base tracking-wide">
                      {solution}
                    </p>
                    {link && (
                      <a
                        href={link}
                        className="absolute top-6 right-6 bg-primary/70 p-2 drop-shadow-xl rounded-sm text-white font-semibold tracking-wide text-xs"
                      >
                        more details
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-xl bg-sec-bg p-6">
            <h3 className="mb-5 text-lg font-bold text-white">
              Project Details
            </h3>

            <div className="flex flex-col gap-5">
              {/* Tech stack */}
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  <FontAwesomeIcon icon={faLayerGroup} />
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.map(({ label, icon }, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 rounded-lg bg-bg px-3 py-1.5 text-xs text-white"
                    >
                      <img src={icon} alt={label} className="h-4 w-4" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {duration && (
                <div>
                  <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                    <FontAwesomeIcon icon={faClock} />
                    Duration
                  </p>
                  <p className="text-sm text-white">{duration}</p>
                </div>
              )}

              <div>
                <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  <FontAwesomeIcon icon={faUsers} />
                  Collaboration
                </p>
                {collaboration?.isCollaborative ? (
                  <ul className="flex flex-col gap-1">
                    {collaboration.collaborators.map((c, i) => (
                      <li key={i} className="text-sm text-white">
                        {c.url ? (
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:text-accent"
                          >
                            {c.name}
                          </a>
                        ) : (
                          c.name
                        )}{" "}
                        <span className="text-text-secondary">— {c.role}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-white">Solo project</p>
                )}
              </div>
            </div>
          </div>

          <Link
            to="/projects"
            className="rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-700"
          >
            ← Back to Projects
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Project;
