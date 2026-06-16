import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cvFile from "../../assets/Anas_Front-end.pdf";

import planet1 from "../../assets/planet-1.webp";
import planet2 from "../../assets/planet-2.webp";
import planet3 from "../../assets/planet-3.webp";
import logo from "../../assets/logo.webp";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Hero = () => {
  const ring1 = useRef<HTMLDivElement>(null);
  const ring2 = useRef<HTMLDivElement>(null);
  const ring3 = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useGSAP(
    () => {
      gsap.set(".intro-animation", { x: 30, opacity: 0 });
      gsap.set(".btns-intro-animation", { scale: 0, opacity: 0 });

      const tl = gsap.timeline();
      const mm = gsap.matchMedia();

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

      mm.add("(min-width: 768px)", () => {
        tl.from(
          ".ring-animation",
          { opacity: 0, duration: 1, stagger: 0.3 },
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
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set(".ring-animation", { opacity: 1, scale: 1 });
      });
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef}>
      <section className="hero relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-5 pb-10 pt-10 md:flex-row md:px-10 md:pt-0">
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
                {
                  icon: faInstagram,
                  href: "https://www.instagram.com/anas_wae1/",
                  hover: "group-hover:text-purple-500",
                },
                {
                  icon: faGithub,
                  href: "https://github.com/anaswail",
                  hover: "group-hover:text-gray-400",
                },
                {
                  icon: faLinkedin,
                  href: "https://www.linkedin.com/in/anas-wael/",
                  hover: "group-hover:text-blue-500",
                },
              ].map(({ icon, href, hover }, i) => (
                <li key={i}>
                  <a
                    href={href}
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

            <a href={cvFile} download>
              <button className="btns-intro-animation cursor-pointer rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white drop-shadow-lg transition-colors duration-200 hover:bg-purple-700 md:text-base">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Orbital rig — hidden on very small screens, shown from sm up */}
        <div className="pointer-events-none relative mt-6 flex h-64 w-full items-center justify-center sm:h-80 md:mt-0 md:h-130 md:w-1/2">
          <img
            src={logo}
            alt="logo"
            className="ring-animation absolute z-10 w-24 sm:w-32 md:w-48"
          />

          <div
            ref={ring1}
            className="ring-animation absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 sm:h-36 sm:w-36 md:h-40 md:w-40"
          />

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
    </div>
  );
};

export default Hero;
