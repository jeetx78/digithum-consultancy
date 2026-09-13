import { projects } from "./data";

const BASE_URL = "https://digithum-consultancy.vercel.app";

export default function sitemap() {
  const projectUrls = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...projectUrls,
  ];
}