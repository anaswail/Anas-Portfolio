import { useRef } from "react";
import { useNavigate } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ErrorPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      gsap.set(".err-fade", { y: 30, opacity: 0 });
      gsap.to(".err-fade", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
      });

      // Floating glitch on the 404
      gsap.to(".err-404", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="flex min-h-screen w-full flex-col items-center justify-center px-5 py-20 text-center"
    >
      {/* 404 number */}
      <div className="err-404 err-fade relative select-none">
        {/* Ghost behind — blurred accent glow */}
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[160px] font-extrabold leading-none text-accent opacity-10 blur-2xl sm:text-[220px] md:text-[280px]"
          aria-hidden="true"
        >
          404
        </span>

        <h1 className="relative bg-linear-to-r from-accent to-primary bg-clip-text text-[120px] font-extrabold leading-none tracking-tighter text-transparent sm:text-[180px] md:text-[220px]">
          404
        </h1>
      </div>

      {/* Divider line */}
      <span className="err-fade mb-8 mt-2 block h-px w-24 rounded-full bg-linear-to-r from-accent to-primary opacity-60" />

      {/* Message */}
      <div className="err-fade relative mb-2 pl-5">
        <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
          Lost in space
        </p>
      </div>

      <h2 className="err-fade mb-4 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
        Page not found.
      </h2>

      <p className="err-fade mb-10 max-w-sm text-sm leading-7 text-text-secondary md:text-base">
        The page you're looking for doesn't exist, was moved, or got swallowed
        by a black hole somewhere in this galaxy.
      </p>

      {/* Actions */}
      <div className="err-fade flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => navigate("/projects", { replace: true })}
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-700 md:text-base"
        >
          Back to Home
        </button>

        <button
          onClick={() => navigate("/projects", { replace: true })}
          className="rounded-lg bg-sec-bg px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:text-accent md:text-base"
        >
          View Projects
        </button>
      </div>

      {/* Floating astronaut */}
      <div className="err-fade pointer-events-none mt-16 select-none text-6xl md:text-7xl">
        🧑‍🚀
      </div>
    </div>
  );
};

export default ErrorPage;
