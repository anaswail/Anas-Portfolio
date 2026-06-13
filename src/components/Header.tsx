import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// images
import logo from "../assets/logo.webp";
import planet1 from "../assets/planet-1.webp";
import planet2 from "../assets/planet-2.webp";
import planet3 from "../assets/planet-3.webp";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const hasOpened = useRef(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          start: 0,
          end: "max",

          onUpdate: (self) => {
            const percent = self.progress * 100;
            if (percent > 10) {
              gsap.to(".header", {
                yPercent: -95,
                duration: 0.5,
              });
            } else {
              gsap.to(".header", {
                yPercent: 0,
                duration: 0.5,
              });
            }
          },
        });

        gsap.from(".status-bar", {
          width: 0,
          scrollTrigger: {
            start: "top top",
            end: "max",
            scrub: 1,
          },
        });

        gsap.from(ref.current, {
          y: -100,
          duration: 1,
          delay: 1,
        });
      });
    },
    {
      scope: ref,
    },
  );
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location.pathname]);

  useGSAP(
    () => {
      gsap.to(".menuBtn", {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      function afterTL() {
        gsap.to(".particle", {
          x: () => gsap.utils.random(0, window.innerWidth),
          y: () => gsap.utils.random(0, window.innerHeight),
          opacity: () => gsap.utils.random(0.2, 1),
          duration: () => gsap.utils.random(20, 40),
          ease: "none",
          repeat: -1,
          yoyo: true,
          stagger: {
            amount: 8,
            from: "random",
          },
        });
      }

      if (menuOpen) {
        hasOpened.current = true;

        const tl = gsap.timeline({
          onComplete: afterTL,
        });

        tl.from(".menuCircleAnimation", {
          y: -100,
          duration: 0.7,
          scale: 0,
          opacity: 0,
          ease: "power2.in",
        })
          .to(".menuCircleAnimation", {
            scale: 30,
            backgroundColor: "#0b0024",
            rotate: 360,
            duration: 1,
            ease: "power2.inOut",
          })
          .from(".nav-links", {
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            opacity: 0,
            ease: "power2.out",
          })
          .from(".planet", {
            opacity: 0,
            scale: 0.2,
            duration: 0.3,
            stagger: 0.15,
          })
          .set(".particle", {
            x: () => gsap.utils.random(0, window.innerWidth),
            y: () => gsap.utils.random(0, window.innerHeight),
            scale: () => gsap.utils.random(0.4, 1.8),
            opacity: () => gsap.utils.random(0.3, 0.9),
          });
      } else if (hasOpened.current && isClosing) {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsClosing(false);
          },
        });

        tl.to(".planet", {
          opacity: 0,
          scale: 0.2,
          duration: 0.3,
          stagger: 0.15,
        })
          .to(".nav-links", {
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            opacity: 0,
            ease: "power2.out",
          })
          .to(".menuCircleAnimation", {
            scale: 0,
            backgroundColor: "#0b0024",
            rotate: 360,
            duration: 1,
            ease: "power2.inOut",
          })
          .to(".menuCircleAnimation", {
            y: -100,
            duration: 0.7,
            opacity: 0,
            ease: "power2.in",
          });
      }
    },
    {
      scope: mobileRef,
      dependencies: [menuOpen, isClosing],
    },
  );

  const handleToggle = () => {
    if (menuOpen) {
      setIsClosing(true);
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const handleNavClick = () => {
    setIsClosing(true);
    setMenuOpen(false);
  };

  const showMenuContent = menuOpen || isClosing;

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div
        className="header hidden  backdrop-blur-md bg-[#101010]/50 p-2 px-5 md:flex items-center justify-between h-24  w-full top-0 left-0 z-50"
        ref={ref}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="w-40 pointer-events-none" />
        </Link>
        <ul className="nav flex gap-8 items-center">
          <li className="text-lg relative after:content-[' '] after:absolute after:-bottom-0.5 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:duration-500">
            <Link to="/" className="text-text">
              Home
            </Link>
          </li>
          <li className="text-lg relative after:content-[' '] after:absolute after:-bottom-0.5 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:duration-500">
            <Link to="about" className="text-text">
              About me
            </Link>
          </li>
          <li className="text-lg relative after:content-[' '] after:absolute after:-bottom-0.5 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:duration-500">
            <Link to="projects" className="text-text">
              Projects
            </Link>
          </li>
          <li className="text-lg relative after:content-[' '] after:absolute after:-bottom-0.5 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:duration-500">
            <Link to="content" className="text-text">
              Content
            </Link>
          </li>
          <li className="text-lg relative after:content-[' '] after:absolute after:-bottom-0.5 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:w-full after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:duration-500">
            <Link to="blogs" className="text-text">
              Blogs
            </Link>
          </li>
        </ul>
        <ul className="links flex gap-5 items-center">
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl cursor-pointer text-secondary hover:text-primary duration-200"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl cursor-pointer text-secondary hover:text-primary duration-200"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl cursor-pointer text-secondary hover:text-primary duration-200"
              />
            </a>
          </li>
        </ul>
        <div className="w-full h-1 bg-white/30 backdrop-blur-md absolute bottom-0 left-0">
          <div className="status-bar bg-linear-to-r from-accent to-primary  h-full"></div>
        </div>
      </div>
      <div
        className="mobile-menu md:hidden h-screen w-full z-50"
        ref={mobileRef}
      >
        <div className=" fixed right-6 bottom-8 w-14 h-14 drop-shadow-xl">
          <span className="menuBtn absolute inset-0 scale-105 rounded-full bg-linear-to-t from-accent via-primary to-transparent"></span>

          <button
            onClick={handleToggle}
            className="relative  rounded-full flex justify-center items-center flex-col gap-1.5 bg-sec-bg w-full h-full"
          >
            <span
              className={`bars w-6 h-0.5 bg-white duration-500 ${menuOpen ? "rotate-45 absolute top-1/2 left-1/2 -translate-1/2" : "rotate-0"}`}
            ></span>
            <span
              className={`bars ${menuOpen ? "hidden" : ""} duration-300 w-6 h-0.5 bg-white`}
            ></span>
            <span
              className={`bars w-6 h-0.5 bg-white duration-500 ${menuOpen ? "-rotate-45 absolute top-1/2 left-1/2 -translate-1/2" : "rotate-0"}`}
            ></span>
          </button>
        </div>

        {showMenuContent && (
          <div className="h-full w-full">
            <div>
              {Array.from({ length: 100 }).map((_, i) => (
                <span
                  key={i}
                  className="particle absolute w-px h-px bg-white rounded-full"
                />
              ))}
            </div>
            <img
              src={planet2}
              alt="planet"
              className="planet w-20 absolute top-10 right-10 "
            />
            <img
              src={planet1}
              alt="planet"
              className="planet w-16 absolute bottom-10 left-10 "
            />
            <img
              src={planet3}
              alt="planet"
              className="planet w-16 absolute top-20 left-10 "
            />
            <ul className="flex flex-col items-center justify-center gap-12 h-full">
              <li
                className="nav-links text-white font-bold tracking-wider text-2xl "
                onClick={handleNavClick}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className="nav-links text-white font-bold tracking-wider text-2xl "
                onClick={handleNavClick}
              >
                <Link to="about">About</Link>
              </li>
              <li
                className="nav-links text-white font-bold tracking-wider text-2xl "
                onClick={handleNavClick}
              >
                <Link to="projects">Projects</Link>
              </li>
              <li
                className="nav-links text-white font-bold tracking-wider text-2xl "
                onClick={handleNavClick}
              >
                <Link to="Content">Content</Link>
              </li>
              <li
                className="nav-links text-white font-bold tracking-wider text-2xl "
                onClick={handleNavClick}
              >
                <Link to="blogs">Blogs</Link>
              </li>
            </ul>
            <div className="menuCircleAnimation w-10 h-10 -z-10 rounded-full bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
