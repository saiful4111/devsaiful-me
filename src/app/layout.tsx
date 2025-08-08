import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import Navbar from "@/components/Navbar";
import CustomFooter from "@/components/CustomFooter";
import LottieBackground from "../components/LottieBackground";
import SplineBg from "@/components/SplineBg";

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
        url: "/devSaiful.png", // এখন এটা absolute হবে
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
    images: ["/devSaiful.png"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/devSaiful.png",
    shortcut: "/devSaiful.png",
    apple: "/devSaiful.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-black`}
      >
        {/* Lottie background animation */}
        {/* <LottieBackground /> */}
        <SplineBg/>
        <AntdRegistry>
          <Navbar />

          {children}

          <CustomFooter />
        </AntdRegistry>
      </body>
    </html>
  );
}
