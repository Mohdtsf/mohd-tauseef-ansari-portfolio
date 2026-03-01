import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohd-tauseef-ansari-portfolio.vercel.app"),
  title: "Mohd Tauseef Ansari | Full-Stack Developer",
  description: "Portfolio of Mohd Tauseef Ansari, a Full-Stack Developer, Cyber Security Researcher, and AI/ML Enthusiast based in New Delhi, India.",
  keywords: ["Full-Stack Developer", "Next.js", "Cyber Security", "AI Developer India", "Mohd Tauseef Ansari", "React", "Node.js"],
  authors: [{ name: "Mohd Tauseef Ansari" }],
  creator: "Mohd Tauseef Ansari",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mohd-tauseef-ansari-portfolio.vercel.app",
    siteName: "Mohd Tauseef Ansari Portfolio",
    title: "Mohd Tauseef Ansari | Full-Stack Developer",
    description: "Full-Stack Engineer with AI-Security Specialization.",
    images: [
      {
        url: "/mohd-tauseefansari.png",
        width: 640,
        height: 640,
        alt: "Mohd Tauseef Ansari - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased selection:bg-neon-blue selection:text-black min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
