import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rajesh M | AI/ML Engineer & Data Scientist",
  description:
    "Official portfolio of Rajesh M — Final-year B.Tech AI & ML student, Data Analyst, and AI/ML Engineer.",
  keywords: [
    "Rajesh M",
    "AI/ML Engineer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "Sri Shakthi Institute of Engineering and Technology",
    "Generative AI",
    "Python",
    "Coimbatore",
  ],
  authors: [{ name: "Rajesh M" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111111] min-h-screen flex flex-col antialiased selection:bg-[#111111] selection:text-white relative">
        {/* Background Visual Effects for White Background */}
        <BackgroundEffects />
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 pt-20 sm:pt-24 pb-16 relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
