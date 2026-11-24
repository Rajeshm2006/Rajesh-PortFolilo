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
  title: "Rajesh M — AI/ML Engineer & Data Scientist",
  description:
    "Official portfolio of Rajesh M — AI/ML Engineer and Data Scientist specializing in Machine Learning, Generative AI, and Data Analytics at Sri Shakthi Institute of Engineering and Technology.",
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
    <html lang="en" className="dark">
      <body className="bg-[#0A0D14] text-white min-h-screen flex flex-col antialiased selection:bg-[#E55B44] selection:text-white relative">
        {/* Background Visual Effects */}
        <BackgroundEffects />
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
