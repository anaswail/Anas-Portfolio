import About from "../components/home/About";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { learningGoals, softSkills, timelineItems } from "../data/about";

const SectionHeader = ({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) => (
  <div className="relative mb-10 pl-5 md:mb-12">
    <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
    <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
      {eyebrow}
    </p>
    <h2 className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
      {heading}
    </h2>
  </div>
);

const TimelineSection = () => (
  <section className="mx-auto w-[min(900px,90%)] py-8">
    <SectionHeader
      eyebrow="Journey"
      heading="From first line of code to shipping real products."
    />

    <div className="relative pl-8">
      <span className="absolute left-3.5 top-2 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />

      {timelineItems.map((item, i) => (
        <div key={i} className="timeline-item relative mb-9 last:mb-0">
          <span
            className={`absolute -left-6.25 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-bg ${
              item.isMilestone ? "border-primary" : "border-accent"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                item.isMilestone ? "bg-primary" : "bg-accent"
              }`}
            />
          </span>

          <p
            className={`mb-1 font-mono text-[10px] uppercase tracking-[0.15em] ${
              item.isMilestone ? "text-primary" : "text-accent"
            }`}
          >
            {item.year}
          </p>
          <h3 className="mb-2 text-[15px] font-bold text-white tracking-wider">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary tracking-wider">
            {item.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t, j) => (
              <span
                key={j}
                className={`rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-wide ${t.color}`}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SoftSkillsSection = () => (
  <section className="mx-auto w-[min(900px,90%)] py-8">
    <SectionHeader
      eyebrow="Beyond the stack"
      heading="The skills that don't show up in a package.json."
    />

    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      {softSkills.map((sk, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-sec-bg px-4 py-4 transition-all duration-250 hover:-translate-y-0.5"
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = sk.color + "55")
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
        >
          <span className="mb-2 block text-2xl">{sk.icon}</span>
          <p className="mb-1 text-[12px] font-bold text-white tracking-wider">
            {sk.label}
          </p>
          <p className="mb-3 text-[11px] leading-relaxed text-text-secondary tracking-wide">
            {sk.desc}
          </p>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className="h-full rounded-full"
              style={{ width: `${sk.level}%`, background: sk.color }}
            />
          </div>
          <span
            className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-350 group-hover:w-full"
            style={{ background: sk.color }}
          />
        </div>
      ))}
    </div>
  </section>
);

const LearningSection = () => (
  <section className="mx-auto w-[min(900px,90%)] py-8">
    <SectionHeader
      eyebrow="In progress"
      heading="What I'm actively learning right now."
    />

    <div className="flex flex-col gap-3">
      {learningGoals.map((g, i) => (
        <div
          key={i}
          className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-sec-bg p-4 transition-colors duration-200 hover:border-accent/25 md:p-5"
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base ${g.bg} mt-0.5`}
          >
            {g.icon}
          </div>
          <div>
            <p className="mb-1 font-mono text-[13px] font-bold text-white tracking-wider">
              {g.title}
            </p>
            <p className="text-sm leading-relaxed text-text-secondary tracking-wide">
              {g.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".about-fade", { y: 24, opacity: 0 });
      gsap.to(".about-fade", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.2,
      });
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="w-full py-10 md:py-16">
      {/* Page title */}
      <div className="about-fade mx-auto mb-12 w-[min(900px,90%)]">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
          About me
        </p>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          The person
          <br />
          <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
            behind the code.
          </span>
        </h1>
      </div>

      <div className="about-fade">
        <About />
      </div>

      <div className="about-fade mt-16">
        <TimelineSection />
      </div>

      <div className="about-fade mt-16">
        <SoftSkillsSection />
      </div>

      <div className="about-fade mt-16">
        <LearningSection />
      </div>
    </div>
  );
};

export default AboutPage;
