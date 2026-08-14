import "./globals.css";
import Script from "next/script";

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : systemTheme;

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
`;

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://portfolio-chatbot-wheat.vercel.app/"),
  title:
    "Muhammad Ali | AI Developer, Full-Stack Developer & Automation Enthusiast",
  description:
    "Portfolio of Muhammad Ali, an Artificial Intelligence student and developer working with Machine Learning, Deep Learning, Full-Stack Web Development, Computer Vision, NLP, and n8n Automation.",
  keywords: [
    "Muhammad Ali",
    "AI Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Full-Stack Developer",
    "Next.js",
    "Computer Vision",
    "Natural Language Processing",
    "NLP",
    "n8n Automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhammad Ali Portfolio",
    title:
      "Muhammad Ali | AI Developer, Full-Stack Developer & Automation Enthusiast",
    description:
      "Portfolio of Muhammad Ali, an Artificial Intelligence student and developer working with Machine Learning, Deep Learning, Full-Stack Web Development, Computer Vision, NLP, and n8n Automation.",
    images: [
      {
        url: "/images/muhammad_ali_open_graph_1200x630.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ali — AI Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Ali | AI Developer, Full-Stack Developer & Automation Enthusiast",
    description:
      "Portfolio of Muhammad Ali, an Artificial Intelligence student and developer working with Machine Learning, Deep Learning, Full-Stack Web Development, Computer Vision, NLP, and n8n Automation.",
    images: ["/images/muhammad_ali_open_graph_1200x630.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Script
          id="portfolio-theme-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        {children}
      </body>
    </html>
  );
}
