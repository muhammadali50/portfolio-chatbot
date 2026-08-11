import "./globals.css";

export const metadata = {
  title: "Muhammad Ali | Portfolio",
  description:
    "Muhammad Ali — AI Developer, Full-Stack Developer, and Automation Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
