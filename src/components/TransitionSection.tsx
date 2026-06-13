import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../assets/logo.webp";
import planet1 from "../assets/planet-1.webp";
import planet2 from "../assets/planet-2.webp";
import planet3 from "../assets/planet-3.webp";

gsap.registerPlugin(ScrollTrigger);

const TransitionSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".ts-title", {
        scale: 0.6,
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "center center",
          scrub: 1.5,
        },
      });

      gsap.from(".ts-planet", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "center 40%",
          scrub: 2,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none relative flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 py-16 sm:gap-5 sm:py-20 lg:h-[80vh] lg:min-h-0"
    >
      {/* Decorative planets — positioned relative to this container */}
      <img
        src={planet1}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute left-[5%] top-[10%] w-16 opacity-60 sm:left-[12%] sm:top-[18%] sm:w-32 lg:w-40"
      />
      <img
        src={planet3}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute bottom-[8%] left-[8%] w-14 opacity-60 sm:bottom-[12%] sm:left-[18%] sm:w-28 lg:w-36"
      />
      <img
        src={planet3}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute right-[10%] top-[10%] w-14 opacity-60 sm:right-[18%] sm:top-[18%] sm:w-28 lg:w-36"
      />
      <img
        src={planet2}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute bottom-[8%] right-[5%] w-16 opacity-60 sm:bottom-[12%] sm:right-[12%] sm:w-32 lg:w-40"
      />

      {/* Watermark logo */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[260px] max-w-[80vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:w-[480px] lg:w-[560px]"
      />

      {/* Text */}
      <h2 className="ts-title relative z-10 px-2 text-center text-3xl font-extrabold tracking-wider text-transparent [-webkit-text-stroke:1.5px_#a1a1aa] sm:text-5xl sm:[-webkit-text-stroke:2px_#a1a1aa] lg:text-6xl">
        {title}
      </h2>
      <p className="ts-title relative z-10 px-2 text-center text-sm font-semibold tracking-widest text-accent sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default TransitionSection;
