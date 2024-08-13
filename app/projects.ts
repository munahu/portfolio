import { StaticImageData } from "next/image";
import blog from "../public/blog.webp";
import news from "../public/news.avif";
import skincare from "../public/skincare.avif";

export interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  links: {
    live: string;
    code: string;
  };
}

export const projects: Project[] = [
  {
    image: skincare,
    title: "Skincare",
    description:
      "Browse through skincare products, search for your favourites and add to cart.",
    links: {
      live: "https://mhskincare.netlify.app",
      code: "https://github.com/munahu/skincare-app",
    },
  },
  {
    image: news,
    title: "News",
    description:
      "Keep up with the latest news with this clean, beautiful interface.",
    links: {
      live: "https://mhnews.netlify.app",
      code: "https://github.com/munahu/news-app",
    },
  },
  {
    image: blog,
    title: "Blog",
    description:
      "Find blog posts, leave comments, and check out the author's profile.",
    links: {
      live: "https://mhblogapp.netlify.app",
      code: "https://github.com/munahu/blog-app",
    },
  },
];
