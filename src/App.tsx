import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

// Reduced particle count — 350 individual tweens was heavy.
// 120 particles, each sharing a single staggered tween batch = far fewer active tweens.
const PARTICLE_COUNT = 120;

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Place all particles randomly up-front with a single gsap.set call
      gsap.set(".particle", {
        x: () => gsap.utils.random(0, window.innerWidth),
        y: () => gsap.utils.random(0, window.innerHeight),
        scale: () => gsap.utils.random(0.4, 1.8),
        opacity: () => gsap.utils.random(0.3, 0.9),
      });

      // One batched tween with stagger — much cheaper than 350 independent tweens
      gsap.to(".particle", {
        x: () => gsap.utils.random(0, window.innerWidth),
        y: () => gsap.utils.random(0, window.innerHeight),
        opacity: () => gsap.utils.random(0.2, 1),
        duration: () => gsap.utils.random(20, 40),
        ease: "none",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 8, // spread start times across 8 s so they don't all move in sync
          from: "random",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div className="app flex flex-col items-center bg-bg min-h-screen overflow-x-hidden">
      <Header />

      {/* Starfield — fixed, behind everything */}
      <div
        ref={ref}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
          <span
            key={i}
            className="particle absolute w-px h-px bg-white rounded-full"
          />
        ))}
      </div>

      {/* Page content */}
      <div className="relative z-10 w-full mt-16">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
