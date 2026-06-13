import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contact mx-auto w-[min(1100px,90%)] py-16 md:py-24">
      <div className="relative mb-12 pl-5 md:mb-16">
        <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-linear-to-b from-accent via-primary to-transparent" />
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
          Contact
        </p>
        <h2 className="text-lg font-bold leading-relaxed text-white md:text-xl lg:text-2xl">
          Have a project in mind? Let's talk.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:gap-10">
        {/* ── Form ── */}
        <div className="rounded-2xl border border-white/[0.07] bg-sec-bg p-6 md:p-8">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary md:mb-8">
            Project Inquiry
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Anas Wael"
                className="rounded-xl border border-white/[0.07] bg-white/3 px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white-5"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+20 107 063 6301"
                className="rounded-xl border border-white/[0.07] bg-white/3 px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white-5"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                Email Address
              </label>
              <input
                type="email"
                placeholder="anaswail246@gmail.com"
                className="rounded-xl border border-white/[0.07] bg-white/3 px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white-5"
              />
            </div>

            {/* Project name */}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                Project Name
              </label>
              <input
                type="text"
                placeholder="My Awesome Project"
                className="rounded-xl border border-white/[0.07] bg-white/3 px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white-5"
              />
            </div>

            {/* Order details */}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
                Order Details
              </label>
              <textarea
                rows={5}
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
                className="resize-none rounded-xl border border-white/[0.07] bg-white/3 px-4 py-3
                       text-sm text-white placeholder:text-text-secondary/40
                       outline-none transition-colors duration-200
                       focus:border-primary/60 focus:bg-white-5"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            className="group mt-5 flex w-full items-center justify-center gap-3 rounded-xl
                   bg-primary py-3.5 text-sm font-semibold text-white
                   transition-all duration-300 hover:bg-purple-700 active:scale-[0.98] md:mt-6 cursor-pointer"
          >
            <span className="font-mono text-sm uppercase tracking-[0.15em]">
              Send Message
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* ── Side info ── */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Availability badge */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-sec-bg px-6 py-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
              Available for new projects
            </p>
          </div>

          {/* Direct contact info */}
          <div className="rounded-2xl border border-white/[0.07] bg-sec-bg p-6">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Direct Contact
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Email",
                  value: "anaswail246@gmail.com",
                  icon: (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  value: "+20 107 063 6301",
                  icon: (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white-5 text-text-secondary">
                    {icon}
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-secondary/50">
                      {label}
                    </p>
                    <p className="text-[13px] font-medium text-white">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="rounded-2xl border border-white/[0.07] bg-sec-bg p-6">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Find Me On
            </p>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  color: "#0a66c2",
                  icon: (
                    <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                  ),
                },
                {
                  label: "GitHub",
                  href: "#",
                  color: "#94a3b8",
                  icon: <FontAwesomeIcon icon={faGithub} className="text-lg" />,
                },
                {
                  label: "Instagram",
                  href: "#",
                  color: "#e1306c",
                  icon: (
                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  color: "#1877f2",
                  icon: (
                    <svg
                      className="h-4.5 w-4.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "#",
                  color: "#25d366",
                  icon: (
                    <svg
                      className="h-4.5 w-4.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  color: "#ff0000",
                  icon: (
                    <svg
                      className="h-4.5 w-4.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "#",
                  color: "#94a3b8",
                  icon: (
                    <svg
                      className="h-4.5 w-4.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, color, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{ "--social-color": color } as React.CSSProperties}
                  className="group flex flex-col items-center gap-1.5 rounded-xl
                         border border-white/[0.07] bg-white/3 py-3
                         transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07]"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color + "55";
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <span className="text-text-secondary transition-colors duration-200 group-hover:text-[var(--social-color)]">
                    {icon}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-text-secondary/50">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
