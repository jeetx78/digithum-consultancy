import "./globals.css";

export const metadata = {
  title: {
    default: "Digithum Consultancy Services | Real Estate Advisory",
    template: "%s | Digithum Consultancy Services",
  },

  description:
    "Digithum Consultancy Services provides curated real estate consultancy and advisory across Delhi NCR, Dehradun and Dubai, covering residential, commercial and industrial opportunities.",

  keywords: [
    "Digithum Consultancy Services",
    "Digithum Realtors",
    "real estate consultancy",
    "real estate advisory",
    "property consultant Delhi NCR",
    "property consultant Dehradun",
    "Dubai real estate consultancy",
    "residential property",
    "commercial property",
    "industrial property",
    "real estate investment",
  ],

  authors: [
    {
      name: "Digithum Consultancy Services",
    },
  ],

  creator: "Digithum Consultancy Services",

  metadataBase: new URL(
    "https://digithum-consultancy.vercel.app"
  ),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Digithum Consultancy Services | Real Estate Advisory",

    description:
      "Curated real estate opportunities across Delhi NCR, Dehradun and Dubai.",

    url: "https://digithum-consultancy.vercel.app",

    siteName: "Digithum Consultancy Services",

    type: "website",

    images: [
      {
        url: "/digithum-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Digithum Consultancy Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digithum Consultancy Services | Real Estate Advisory",

    description:
      "Curated real estate opportunities across Delhi NCR, Dehradun and Dubai.",

    images: ["/digithum-logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/digithum-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}