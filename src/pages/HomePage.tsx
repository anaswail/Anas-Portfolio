import TransitionSection from "../components/TransitionSection";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <TransitionSection title="Who am I?" description="Good question..." />

      <About />

      <TransitionSection
        title="Projects?"
        description="Let's look at what I've shipped..."
      />

      <Projects />

      <TransitionSection
        title="Like what I do?"
        description="Let's connect together..."
      />

      <Contact />
    </div>
  );
};

export default HomePage;
