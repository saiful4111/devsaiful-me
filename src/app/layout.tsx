import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import CustomFooter from "@/components/CustomFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Saiful Islam | Frontend Developer",
  description:
    "Saiful Islam is a passionate Frontend Developer specializing in React, Next.js, and TailwindCSS. Explore modern, responsive, and performance-optimized web solutions.",
  keywords: [
    "Saiful Islam",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TailwindCSS Expert",
    "Web Developer Bangladesh",
    "PWA Developer",
    "Responsive Web Design",
  ],
  authors: [{ name: "Saiful Islam" }],
  creator: "Saiful Islam",
  publisher: "Saiful Islam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Saiful Islam | Frontend Developer",
    description:
      "Explore Saiful Islam's portfolio featuring cutting-edge frontend projects, responsive designs, and performance-focused web apps built with React & Next.js.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    siteName: "Saiful Islam Portfolio",
    images: [
      {
        url: "/dev-rabbi-logo.svg", // এখন এটা absolute হবে
        width: 1200,
        height: 630,
        alt: "Saiful Islam Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saiful Islam | Frontend Developer Enthusiast",
    description:
      "Check out Saiful Islam's portfolio showcasing modern React & Next.js projects with a focus on clean UI/UX.",
    images: [
      "/dev-rabbi-logo.svg",
    ],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/dev-rabbi-logo.svg",
    shortcut:
      "/dev-rabbi-logo.svg",
    apple:
      "/dev-rabbi-logo.svg",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full  h-full object-cover -z-10"
        >
          <source
            src="https://res.cloudinary.com/degzi4jma/video/upload/v1753594455/space-bg_ey8biq.mp4"
            type="video/mp4"
          />
        </video>

        <AntdRegistry>
          <Navbar />

          {children}

          <CustomFooter />
        </AntdRegistry>
      </body>
    </html>
  );
}
