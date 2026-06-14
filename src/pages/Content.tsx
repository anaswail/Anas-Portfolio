import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPlay, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { videos, type Platform } from "../data/videos";

// ─── Platform config ──────────────────────────────────────────────────────────

const platformConfig: Record<
  Platform,
  { icon: typeof faYoutube; label: string; color: string; hover: string }
> = {
  youtube: {
    icon: faYoutube,
    label: "YouTube",
    color: "text-red-500",
    hover: "hover:text-red-400",
  },
  instagram: {
    icon: faInstagram,
    label: "Instagram",
    color: "text-pink-500",
    hover: "hover:text-pink-400",
  },
  tiktok: {
    icon: faTiktok,
    label: "TikTok",
    color: "text-text-secondary",
    hover: "hover:text-white",
  },
  facebook: {
    icon: faFacebook,
    label: "Facebook",
    color: "text-blue-500",
    hover: "hover:text-blue-400",
  },
};

// ─── Sort newest first ────────────────────────────────────────────────────────

const sorted = [...videos].sort((a, b) => b.date.localeCompare(a.date));

// ─── Video card ───────────────────────────────────────────────────────────────

const VideoCard = ({ video }: { video: (typeof videos)[number] }) => {
  const [hovered, setHovered] = useState(false);

  // Format "2025-05" → "May 2025"
  const formattedDate = new Date(video.date + "-01").toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  return (
    <div
      className="video-card group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-sec-bg transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] w-full overflow-hidden sm:aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Play button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
            <FontAwesomeIcon
              icon={faPlay}
              className="ml-1 text-xl text-white"
            />
          </div>
        </div>

        {/* Platform badges — bottom-left of thumbnail */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          {video.links.map(({ platform }) => {
            const cfg = platformConfig[platform];
            return (
              <span
                key={platform}
                className={`flex h-6 w-6 items-center justify-center rounded-md bg-black/50 backdrop-blur-sm text-xs ${cfg.color}`}
                title={cfg.label}
              >
                <FontAwesomeIcon icon={cfg.icon} />
              </span>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Date */}
        <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
          <FontAwesomeIcon icon={faCalendar} className="text-[9px]" />
          {formattedDate}
        </p>

        {/* Title */}
        <h3 className="text-sm font-bold leading-snug text-white line-clamp-2 md:text-base">
          {video.title}
        </h3>

        {/* Description */}
        {video.description && (
          <p className="text-xs leading-relaxed text-text-secondary line-clamp-2">
            {video.description}
          </p>
        )}

        {/* Platform links */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
          {video.links.map(({ platform, url }) => {
            const cfg = platformConfig[platform];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noreferrer"
                title={`Watch on ${cfg.label}`}
                className={`flex items-center gap-1.5 rounded-lg bg-bg px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${cfg.color} ${cfg.hover}`}
              >
                <FontAwesomeIcon icon={cfg.icon} className="text-sm" />
                <span className="hidden sm:inline">{cfg.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-linear-to-r from-accent to-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Content = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".content-fade", { y: 24, opacity: 0 });
      gsap.to(".content-fade", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.set(".video-card", { y: 32, opacity: 0 });
      gsap.to(".video-card", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.5,
      });
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="w-full py-10 md:py-16">
      {/* Page header */}
      <div className="content-fade mx-auto mb-4 w-[min(900px,90%)]">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
          Content
        </p>
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Short-form
          <br />
          <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
            videos & reels.
          </span>
        </h1>
      </div>

      {/* Sub-heading */}
      <div className="content-fade mx-auto mb-12 w-[min(900px,90%)]">
        <p className="relative pl-5 text-sm leading-7 text-text-secondary md:text-base">
          <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent to-transparent" />
          Short-form content I post across YouTube, Instagram, TikTok, and
          Facebook. Each card links directly to every platform it was published
          on.
        </p>
      </div>

      {/* Stats row */}
      <div className="content-fade mx-auto mb-12 w-[min(900px,90%)]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {(
            [
              { label: "Total videos", value: sorted.length },
              { label: "Platforms", value: 4 },
              {
                label: "YouTube",
                value: sorted.filter((v) =>
                  v.links.some((l) => l.platform === "youtube"),
                ).length,
              },
              {
                label: "Instagram",
                value: sorted.filter((v) =>
                  v.links.some((l) => l.platform === "instagram"),
                ).length,
              },
            ] as { label: string; value: number }[]
          ).map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-sec-bg px-5 py-4
                         after:absolute after:-bottom-1.5 after:left-1/2 after:z-[-1] after:h-full
                         after:w-full after:-translate-x-1/2 after:rounded-xl after:bg-accent
                         after:content-[''] after:transition-all after:duration-500
                         hover:after:-bottom-2.5"
            >
              <h3 className="text-3xl font-extrabold text-white md:text-4xl">
                +{stat.value}
              </h3>
              <p className="mt-1 text-xs font-bold tracking-wider text-transparent md:text-sm [-webkit-text-stroke:1px_#a1a1aa]">
                {stat.label}
              </p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-accent to-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Video grid */}
      <div className="content-fade mx-auto w-[min(900px,90%)]">
        {sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.07] bg-sec-bg py-24 text-center">
            <p className="mb-2 text-4xl">🎬</p>
            <p className="font-mono text-sm font-bold text-white">
              No videos yet
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Add your first video to{" "}
              <code className="text-accent">src/data/videos.ts</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
