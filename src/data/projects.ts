import tailwindcss from "../assets/tailwindcss.webp";
import react from "../assets/react.webp";
import typescript from "../assets/typescript.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import gsapLogo from "../assets/gsap.webp";
import javascript from "../assets/javascript.webp";
import bootstrap from "../assets/bootstrap.webp";
import framer from "../assets/Framer.png";
import supabase from "../assets/supabase.webp";
import figma from "../assets/figma.webp";
import clerk from "../assets/clerk.webp";
import sass from "../assets/sass.webp";
import redux from "../assets/redux.webp";
import shadcn from "../assets/shadcn.webp";

import neotech from "../assets/neotech.webp";
import jobportal from "../assets/jopPortal.webp";
import mrboxing from "../assets/mrboxing.webp";
import portfolioCSS from "../assets/portfolio.webp";
import nike from "../assets/nike.webp";
import creativeamo from "../assets/creativeamo.webp";
import creativo from "../assets/creativo.webp";
import kudzoko from "../assets/kudzoko.webp";
import myPortfolio from "../assets/anas_portfolio.webp";
import oldPortfolio from "../assets/old_portfolio.webp";
import kashkouly from "../assets/kashkouly.webp";
import collage from "../assets/collage.webp";

export type Collaborator = {
  name: string;
  role: string;
  url?: string;
};

export type Collaboration = {
  isCollaborative: boolean;
  collaborators: Collaborator[];
};

export type ProjectData = {
  started?: boolean;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  tech: { label: string; icon: string; main?: boolean }[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  design: boolean;
  role?: string[];
  duration?: string;
  collaboration: Collaboration;
  figmaUrl?: string;
  videoLinks?: {
    platform: "youtube" | "instagram" | "tiktok" | "facebook";
    url: string;
  }[];
  challenges?: { problem: string; solution: string; link?: string }[];
  classification?: string;
  docs?: string[];
  warning?: string;
};

export const projects: ProjectData[] = [
  {
    started: true,
    title: "NeoTech",
    slug: "neotech",
    subtitle: "E-commerce Website",
    description:
      "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
    tech: [
      { label: "React", icon: react, main: true },
      { label: "TailwindCSS", icon: tailwindcss, main: true },
      { label: "TypeScript", icon: typescript, main: true },
      { label: "Redux Toolkit", icon: redux },
      { label: "TailwindCSS", icon: tailwindcss },
      { label: "ShadCN", icon: shadcn },
    ],
    image: neotech,
    liveUrl: "https://neotech-anas.vercel.app/",
    repoUrl: "https://github.com/anaswail/NeoTech",
    design: true,
    role: ["Front-end", "UI Design"],
    duration: "3 months",
    collaboration: {
      isCollaborative: true,
      collaborators: [
        {
          name: "Hagar Gamal",
          role: "Back-end",
          url: "https://github.com/Hagar-Elessawy0",
        },
      ],
    },
    figmaUrl:
      "https://www.figma.com/design/E5IUThTn3bIc6bdMG9rwuZ/Full-E-Commerce-Website-UI-UX-Design--Community---Community---Community-?node-id=1-3&t=oZ7sWDg4ay2jXNtH-1",
    videoLinks: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/YuEC0e6n0uI?si=XJBSp9kJf4_BE400",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DXwakgytCxt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@anaswae11/video/7634536105332706581?is_from_webapp=1&sender_device=pc",
      },
    ],
    challenges: [
      {
        problem:
          "Managing dependent dropdowns for hierarchical category selection where each level depends on the previous one.",
        solution:
          "Implemented a cascading dropdown pattern that resets child selections when a parent changes, fetches new options dynamically, and disables dependent fields until valid selections are available.",
      },

      {
        problem:
          "Handling dynamic collections of user-generated inputs such as product variations, images, and configurable form sections.",
        solution:
          "Built reusable state management patterns that support adding, editing, and removing items dynamically while keeping the UI synchronized with application state.",
      },

      {
        problem:
          "Displaying uploaded images instantly while preserving original files for backend submission.",
        solution:
          "Separated file storage and preview generation into independent states, using File objects for FormData requests and generated preview URLs for immediate user feedback.",
      },

      {
        problem:
          "Updating multiple profile resources simultaneously while allowing partial success and detailed feedback.",
        solution:
          "Used Promise.allSettled() to execute independent API requests in parallel, improving performance and enabling granular success and failure handling.",
      },

      {
        problem:
          "Maintaining user sessions without interrupting the user experience when access tokens expire.",
        solution:
          "Implemented Axios interceptors with automatic JWT refresh logic using secure cookie-based refresh tokens and retry mechanisms for failed requests.",
      },

      {
        problem:
          "Protecting administrative resources from unauthorized access.",
        solution:
          "Created role-based route guards and permission checks to restrict dashboard functionality based on user roles such as User, Admin, and Super Admin.",
      },
    ],
    classification: "Training Project",
    docs: [
      "Built a complete e-commerce platform featuring authentication, product browsing, cart management, wishlist functionality, order tracking, and Paymob payment integration.",

      "Implemented a role-based access system with protected routes for users, admins, and super admins, ensuring secure access control across the application.",

      "Developed a full admin dashboard with analytics charts, product management, order monitoring, customer management, and administrative controls.",

      "Created a scalable front-end architecture using React, TypeScript, Redux Toolkit, custom hooks, and Axios interceptors, with automatic JWT token refresh using secure cookie-based authentication.",

      "Designed reusable UI components and structured state management patterns to improve maintainability, scalability, and collaboration with the backend team.",

      "Gained hands-on experience integrating complex backend APIs, handling asynchronous data flows, managing authentication lifecycles, and building production-like user experiences.",
    ],
    warning:
      "This project is a training project then the back-end not deployment because it's coast is high but you can see the github repo or contact with me and open server locally",
  },
  {
    started: true,

    title: "MR.Boxing",
    slug: "mr-boxing",
    subtitle: "Boxing Academy",
    description:
      "A boxing academy website built with React, TypeScript, and TailwindCSS v4, animated with TailwindCSS. Features a custom dark editorial design system using Bebas Neue typography, a red/black color palette, and reusable chamfered clip-path components throughout.",
    tech: [
      { label: "React", icon: react, main: true },
      { label: "TailwindCSS", icon: tailwindcss, main: true },
      { label: "Framer ", icon: framer, main: true },
      { label: "HTML", icon: html },
      { label: "CSS", icon: css },
    ],
    image: mrboxing,
    liveUrl: "https://mr-boxing.vercel.app/",
    repoUrl: "https://github.com/anaswail/MR.Boxing",
    design: true,
    role: ["Front-end", "UI Design"],
    duration: "2 days",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "https://figma.com/file/...",
    videoLinks: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/wjdYYmUrHPU?si=n45MgjcuqvPDW5O6",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DYhzcVZtnP7/",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@anaswae11/video/7641651075648474375?is_from_webapp=1&sender_device=pc",
      },
    ],
    challenges: [],
    classification: "Customer Project",
    docs: [
      "A boxing academy website built with React, TypeScript, and TailwindCSS v4, animated with TailwindCSS. Features a custom dark editorial design system using Bebas Neue typography, a red/black color palette, and reusable chamfered clip-path components throughout.",
    ],
  },
  {
    started: true,

    title: "Job Portal",
    slug: "job-portal",
    subtitle: "Job site",
    description:
      "Job Portal is a modern React + Vite web app for easy job search and recruitment. Features include job browsing and filtering, applications management, employer dashboard, secure authentication, responsive design, and mock data ready for backend integration.",
    tech: [
      { label: "React", icon: react, main: true },
      { label: "Bootstrap", icon: bootstrap, main: true },
      { label: "Supabase", icon: supabase, main: true },
      { label: "Clerk", icon: clerk },
      { label: "Sass", icon: sass },
      { label: "HTML", icon: html },
      { label: "CSS", icon: css },
    ],
    image: jobportal,
    liveUrl: "https://job-portal-sepia-iota.vercel.app/",
    repoUrl: "https://github.com/anaswail/Job-Portal",
    design: false,
    role: ["Front-end"],
    duration: "1 weak",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "",
    videoLinks: [],
    challenges: [
      {
        problem: "I was having trouble linking Clerk with Supabase",
        solution:
          "I kept reading the documentation for supabse, clerek until I figured out the problem because this project was a YouTube tutorial and almost everything had changed from what he was saying, and I also wanted to add some things.",
      },
    ],
    classification: "Personal Project",
    docs: [
      "Built a recruitment platform that connects job seekers and employers through a complete job discovery and application workflow powered by React, Supabase, and Clerk.",

      "Implemented secure authentication and protected routes using Clerk, enabling role-aware experiences for candidates and recruiters while maintaining session persistence across the application.",

      "Developed advanced job filtering and search capabilities, allowing users to browse opportunities efficiently based on role, company, and location criteria.",

      "Integrated Supabase as the backend solution for database operations, file storage, and real-time data management, creating a scalable full-stack architecture without a traditional backend server.",

      "Created reusable UI components and modular page structures to improve maintainability, accelerate development, and support future feature expansion.",

      "Designed employer workflows for posting, editing, and managing job listings, alongside candidate dashboards for tracking applications and recruitment progress.",

      "Strengthened practical experience with authentication systems, backend-as-a-service architecture, database-driven applications, and real-world CRUD operations using Supabase.",

      "Applied responsive design principles to ensure a consistent user experience across desktop, tablet, and mobile devices.",
    ],
    warning:
      "This is a training project, so login isn't working because it uses paid libraries; it's only active in development.",
  },
  {
    title: "My Portfolio",
    slug: "my-portfolio",
    subtitle: "Personal Portfolio",
    description:
      "A modern space-inspired portfolio website showcasing my projects, skills, and experience. Built with React, TypeScript, TailwindCSS, and GSAP for smooth animations and interactive user experiences. I designed the complete UI/UX and developed the entire front-end architecture.",
    tech: [
      { label: "React", icon: react, main: true },
      { label: "TailwindCSS", icon: tailwindcss, main: true },
      { label: "GSAP", icon: gsapLogo, main: true },
      { label: "HTML", icon: html },
      { label: "CSS", icon: css },
      { label: "TypeScript", icon: typescript },
    ],
    image: myPortfolio,
    liveUrl: "https://anas-wael.vercel.app",
    repoUrl: "https://github.com/anaswail/Anas-Portfolio",
    design: true,
    role: ["Front-end", "UI Design"],
    duration: "3 days",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "https://figma.com/file/...",
    videoLinks: [],
    challenges: [
      {
        problem:
          "My challenge was to make the website have professional animations while also being smooth and responsive across all devices.",
        solution:
          "I did this by paying attention to the performance, images, and their size, and I made sure to separate everything as much as possible for easier editing. I also reduced the animation and made sure it wasn't excessive.",
      },
    ],
    classification: "Personal Project",
    docs: [
      "I created this portfolio to showcase all my work, content, experiences, information about me, and contact details. I designed it in a space-themed style and kept the UI simple for easy on the eyes.",
    ],
  },
  {
    title: "CreativeAMO",
    slug: "creative-amo",
    subtitle: "Educational Platform",
    description:
      "An educational platform that organizes YouTube courses into structured learning paths. Features student and admin dashboards, roadmap management, playlist integration, and a questions section. Built with React, JavaScript, and CSS. I developed both the front-end and back-end architecture, though the project is currently inactive due to unresolved issues.",
    tech: [
      { label: "React", icon: react, main: true },
      { label: "JavaScript", icon: javascript, main: true },
      { label: "CSS", icon: css, main: true },
    ],
    image: creativeamo,
    liveUrl: "https://creative-amo.vercel.app",
    repoUrl: "https://github.com/anaswail/Creative-AMO",
    design: false,
    role: ["Front-end"],
    duration: "1.5 months",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "https://figma.com/file/...",
    videoLinks: [],
    challenges: [],
    classification: "competation Project",
    docs: [
      "This project was a competition project and I turned out to be a scam in the end, but the important thing is that this project was at the beginning of my learning React and I was weak in JavaScript.",
      "It was a collaboration with Tim, and I was handling the front end alone. I had no experience working on a project of this size on my own, and the idea for this project came to me from wanting to address the distraction people were experiencing with free courses on YouTube.",
      "The project is only working on the front end, the back end is down, but this project is important to me because it shows how much I've improved from not knowing how to connect a single endpoint to now being able to create any project from A to Z.",
    ],
    warning:
      "The front-end part that I'm responsible for is the only one that's working; the back-end is down.",
  },
  {
    title: "Nike Air Jordan",
    slug: "nike-landing",
    subtitle: "Product Landing Page",
    description:
      "A responsive landing page created for Nike Air Jordan sneakers. Features product highlights, interactive design elements, and direct WhatsApp ordering functionality. Built using HTML, CSS, and JavaScript with a focus on modern product presentation.",
    tech: [
      { label: "HTML", icon: html, main: true },
      { label: "CSS", icon: css, main: true },
      { label: "JavaScript", icon: javascript, main: true },
    ],
    image: nike,
    liveUrl: "nike-store-e-commerce-flax.vercel.app",
    repoUrl: "https://github.com/anaswail/Nike-Store-e-commerce",
    design: false,
    role: ["Front-end"],
    duration: "1 day",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "",
    videoLinks: [],
    challenges: [],
    classification: "Training Project",
  },
  {
    title: "Portfolio CSS",
    slug: "portfolio template",
    subtitle: "Learning Portfolio",
    description:
      "A personal portfolio project built during my early learning journey by following one of Elzero Web School's practical applications. Developed using only HTML and CSS to strengthen my understanding of layouts, responsive design, and modern styling techniques.",
    tech: [
      { label: "HTML", icon: html, main: true },
      { label: "CSS", icon: css, main: true },
      { label: "JavaScript", icon: javascript, main: true },
    ],
    image: portfolioCSS,
    liveUrl: "https://portofolio-templet.vercel.app/",
    repoUrl: "https://github.com/anaswail/Criativitio-portofolio",
    design: false,
    role: ["Front-end"],
    duration: "1 day",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "",
    videoLinks: [],
    challenges: [],
    classification: "Training Project",
  },
  {
    title: "Kudzoka",
    slug: "kudzoka",
    subtitle: "Landing Page",
    description:
      "A clean and responsive landing page built with HTML and CSS. Focused on creating an attractive layout, responsive sections, and a professional presentation while practicing modern front-end development fundamentals.",
    tech: [
      { label: "HTML", icon: html, main: true },
      { label: "CSS", icon: css, main: true },
      { label: "JavaScript", icon: javascript, main: true },
    ],
    image: kudzoko,
    liveUrl: "https://dilevary-website-anas.vercel.app/",
    repoUrl: "https://github.com/anaswail/Dilevary-website",
    design: false,
    role: ["Front-end"],
    duration: "1 day",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "",
    videoLinks: [],
    challenges: [],
    classification: "training Project",
  },
  {
    title: "Creativo",
    slug: "creativo",
    subtitle: "Landing Page",
    description:
      "A responsive landing page developed with HTML and CSS, featuring a modern layout and clean user interface. Built to practice responsive design principles and improve front-end development skills.",
    tech: [
      { label: "HTML", icon: html, main: true },
      { label: "CSS", icon: css, main: true },
      { label: "JavaScript", icon: javascript, main: true },
    ],
    image: creativo,
    liveUrl: "https://criativitio-portofolio.vercel.app/",
    repoUrl: "https://github.com/anaswail/AVATAR-landing-page",
    design: false,
    role: ["Front-end"],
    duration: "1 day",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "https://figma.com/file/...",
    videoLinks: [],
    challenges: [],
    classification: "Personal Project",
  },
  {
    title: "Factuly of Media",
    slug: "media-collage",
    subtitle: "UnOfi collage website design",
    description:
      "Unofficial (voluntary) design for the Faculty of Media, Al-Azhar University",
    tech: [{ label: "Figma", icon: figma, main: true }],
    image: collage,
    liveUrl: "",
    repoUrl: "",
    design: true,
    role: ["UI Design"],
    duration: "2 days",
    collaboration: {
      isCollaborative: true,
      collaborators: [
        {
          name: "Reem Alaa",
          role: "UI/UX Design",
          url: "",
        },
      ],
    },
    figmaUrl:
      "https://www.figma.com/design/iHSfsX3Pe2i8svCpbsQ44q/Faculty-of-Media-website?node-id=0-1&t=r2zCeRarDTGvDbqU-1",
    videoLinks: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/EEi3gYVa6DE?si=FjK44qH1lCFvbwsM",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@anaswae11/video/7636892139309239559?is_from_webapp=1&sender_device=pc",
      },
    ],
    challenges: [],
    classification: "Personal Project",
    docs: [
      "Unofficial (voluntary) design for the Faculty of Media, Al-Azhar University",
    ],
  },
  // {
  //   title: "kashkouly",
  //   slug: "kashkouly",
  //   subtitle: "SMS Learning website design",
  //   description:
  //     "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
  //   tech: [{ label: "Figma", icon: figma, main: true }],
  //   image: kashkouly,
  //   liveUrl: "",
  //   repoUrl: "",
  //   design: true,
  //   role: ["UI Design"],
  //   duration: "2 days",
  //   collaboration: {
  //     isCollaborative: true,
  //     collaborators: [
  //       {
  //         name: "Youssef Sameh",
  //         role: "UI/UX Design",
  //         url: "https://instagram.com",
  //       },
  //     ],
  //   },
  //   figmaUrl: "https://figma.com/file/...",
  //   videoLinks: [
  //     {
  //       platform: "youtube",
  //       url: "youtube.com",
  //     },
  //   ],
  //   challenges: [
  //     {
  //       problem: "asdfasd",
  //       solution: "asdfasdfdsf",
  //       link: "https://instagram.com",
  //     },
  //   ],
  //   classification: "Personal Project",
  //   docs: [
  //     "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
  //     "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
  //     "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
  //     "A full-stack application with an admin dashboard for managing users and orders, authentication flows, user profiles, wishlist and cart features, and integrated payment and order-tracking systems.",
  //   ],
  //   warning:
  //     "This project is a training project then the back-end not deployment because it's coast is high but you can see the github repo or contact with me and open server locally",
  // },
  {
    title: "My old portfolio",
    slug: "old-portfolio",
    subtitle: "landing page",
    description:
      "I created my old portfolio when I had just finished the basics of JavaScript.",
    tech: [
      { label: "HTML", icon: html, main: true },
      { label: "CSS", icon: css, main: true },
      { label: "Javascript", icon: javascript, main: true },
    ],
    image: oldPortfolio,
    liveUrl: "https://anas-portofolio.vercel.app/",
    repoUrl: "https://github.com/anaswail/Anas-Portofolio",
    design: true,
    role: ["Front-end", "UI Design"],
    duration: "7 days",
    collaboration: {
      isCollaborative: false,
      collaborators: [],
    },
    figmaUrl: "",
    videoLinks: [],
    challenges: [],
    classification: "Personal Project",
  },
];
