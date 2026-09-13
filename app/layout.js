import "./globals.css";

export const metadata = {
  title: "Digithum Consultancy Services | Real Estate Advisory",
  description:
    "Digithum Consultancy Services provides curated residential, commercial and industrial real estate advisory across Delhi NCR, Dehradun and Dubai.",
  icons: {
    icon: "/digithum-logo.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
