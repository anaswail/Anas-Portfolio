import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// images
import logo from "../assets/logo.webp";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useGSAP(
    () => {
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
    },
    {
      scope: ref,
    },
  );
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <div
      className="header backdrop-blur-md bg-[#101010]/50 w-full p-2 px-5 flex items-center justify-between h-24 fixed top-0 left-0 z-50"
      ref={ref}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="w-40" />
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
  );
};

export default Header;
