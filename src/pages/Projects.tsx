import Card from "../components/Card";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="container mx-auto mt-16 px-8">
      <div className="relative mb-10 pl-5 md:mb-12">
        <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
          All Projects
        </p>
        <h2 className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
          A closer look at what I've built.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <Card projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
