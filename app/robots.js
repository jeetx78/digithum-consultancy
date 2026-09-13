const BASE_URL = "https://digithum-consultancy.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}