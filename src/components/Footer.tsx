import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-white/6 w-full">
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
            {["About", "Projects", "Contact"].map((item) => (
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
              {
                icon: faLinkedin,
                href: "https://www.linkedin.com/in/anas-wael/",
                hover: "hover:text-blue-500",
              },
              {
                icon: faGithub,
                href: "https://github.com/anaswail",
                hover: "hover:text-gray-300",
              },
              {
                icon: faInstagram,
                href: "https://www.instagram.com/anas_wae1/",
                hover: "hover:text-purple-400",
              },
            ].map(({ icon, href, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex h-8 w-8 items-center justify-center rounded-lg
                        bg-white/4 text-text-secondary/60 transition-all duration-200
                        hover:bg-white/8 ${hover}`}
              >
                <FontAwesomeIcon icon={icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 sm:flex-row">
          <p className="font-mono text-[10px] text-text-secondary/30">
            © {new Date().getFullYear()} Anas Wael. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-text-secondary/30">
            Built with React · TypeScript · TailwindCSS · GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
