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
      // Use ref.current as the scoped container — selectors resolve only inside it.
      // Using class names that are unique to this component avoids leaking into siblings.
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
      // 80 vh gives breathing room without consuming a full screen.
      // py-20 adds internal cushion so planets aren't cropped at edges.
      className="relative flex h-[80vh] w-full flex-col items-center justify-center gap-5 overflow-hidden py-20"
    >
      {/* Decorative planets — positioned relative to this container */}
      <img
        src={planet1}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute left-[12%] top-[18%] w-32 opacity-60 lg:w-40"
      />
      <img
        src={planet3}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute bottom-[12%] left-[18%] w-28 opacity-60 lg:w-36"
      />
      <img
        src={planet3}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute right-[18%] top-[18%] w-28 opacity-60 lg:w-36"
      />
      <img
        src={planet2}
        alt=""
        aria-hidden="true"
        className="ts-planet absolute bottom-[12%] right-[12%] w-32 opacity-60 lg:w-40"
      />

      {/* Watermark logo */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[480px] max-w-[80vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] lg:w-[560px]"
      />

      {/* Text */}
      <h2 className="ts-title relative z-10 text-center text-5xl font-extrabold tracking-wider text-transparent [-webkit-text-stroke:2px_#a1a1aa] lg:text-6xl">
        {title}
      </h2>
      <p className="ts-title relative z-10 text-base font-semibold tracking-widest text-accent lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default TransitionSection;
