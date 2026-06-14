import neotech from "../assets/neotech.webp";
import collage from "../assets/collage.webp";
import boxing from "../assets/mrboxing.webp";
import hwc from "../assets/how_websites_created.webp";

export type Platform = "youtube" | "instagram" | "tiktok" | "facebook";
export interface VideoLink {
  platform: Platform;
  url: string;
}
export interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  links: VideoLink[];
  date: string;
}
export const videos: Video[] = [
  {
    id: "v1",
    title: "NeoTech Website - Part 1",
    description:
      "Showcasing the first part of the NeoTech e-commerce website design and development process.",
    thumbnail: neotech,
    date: "2026-04",
    links: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/YuEC0e6n0uI?si=mYltAtn3ZZUvav9p",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DXwakgytCxt/?igsh=MWtjNW0zMm91dWs4eg==",
      },
      { platform: "tiktok", url: "https://vt.tiktok.com/ZSQx95fmu/" },
    ],
  },

  {
    id: "v2",
    title: "NeoTech Website - Part 2",
    description: "A closer look at the NeoTech website with advanced dashboard",
    thumbnail: neotech,
    date: "2026-04",
    links: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/zLRsBYQc9I0?si=unDmqQN1G_vChyXg",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DX15QBSNVn-/?igsh=MWF2OTZ1dTV1eWpvdg==",
      },
      { platform: "tiktok", url: "https://vt.tiktok.com/ZSQx9HaxC/" },
    ],
  },

  {
    id: "v3",
    title: "Faculty of media Website design",
    description:
      "A modern and basic design for a collage built with a focus on user experience and accessibility.",
    thumbnail: collage,
    date: "2026-04",
    links: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/EEi3gYVa6DE?si=1TyL9Z4nEMcP5lbG",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DYAxHFnNHs_/?igsh=em84eWI2eW05amVn",
      },
      { platform: "tiktok", url: "https://vt.tiktok.com/ZSQx9D6Pv/" },
    ],
  },

  {
    id: "v4",
    title: "How Websites Are Built",
    description:
      "A quick behind-the-scenes look at the process of designing and developing modern websites.",
    thumbnail: hwc,
    date: "2026-05",
    links: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/rP-spaoXZ6s?si=0NXe1X3yXDNH_lk_",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DYG5djLIgyj/?igsh=MW1kOHllMzNvY2hvZg==",
      },
      { platform: "tiktok", url: "https://vt.tiktok.com/ZSQx9LEEH/" },
    ],
  },

  {
    id: "v5",
    title: "Mr Boxing Website",
    description:
      "Presenting a boxing gym website featuring a bold design, smooth animations, and responsive layouts.",
    thumbnail: boxing,
    date: "2026-05",
    links: [
      {
        platform: "youtube",
        url: "https://youtube.com/shorts/wjdYYmUrHPU?si=ZxGkzwgZ6m7UdRt3",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/reel/DYhzcVZtnP7/?igsh=MW50ZjJpbzd2Yzk0Nw==",
      },
      { platform: "tiktok", url: "https://vt.tiktok.com/ZSQx9jLPK/" },
    ],
  },
];
