import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laxmi | Junior Software Developer",
  description: "Professional portfolio of Laxmi - A passionate junior software developer specializing in modern web technologies. Explore my projects, skills, and experience.",
  keywords: ["software developer", "web developer", "portfolio", "React", "Next.js", "TypeScript", "frontend developer"],
  authors: [{ name: "Laxmi" }],
  openGraph: {
    title: "Laxmi | Junior Software Developer",
    description: "Professional portfolio showcasing my projects and skills in modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
