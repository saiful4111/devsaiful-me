"use client";

import { Button } from "antd";
import { DownloadOutlined, ArrowDownOutlined } from "@ant-design/icons";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

      // Entry Animation
      tl.from(q(".hero-heading"), {
        y: 60,
        scale: 0.95,
        autoAlpha: 0,
        duration: 1,
      })
        .from(
          q(".hero-subtext"),
          {
            y: 35,
            scale: 0.95,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.6"
        )
        .from(
          q(".hero-btns > *"),
          {
            y: 20,
            scale: 0.9,
            autoAlpha: 0,
            duration: 0.4,
            stagger: 0.1,
            clearProps: "all",
          },
          "-=0.9"
        );

      // Scroll Indicator bounce animation
      gsap.to(q(".scroll-indicator"), {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1,
      });

      // Hover Parallax
      const handleMove = (e: MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) * 0.02;
        const y = (e.clientY - window.innerHeight / 2) * 0.02;
        gsap.to(q(".hero-heading"), { x, y, duration: 0.3 });
      };

      sectionRef.current?.addEventListener("mousemove", handleMove);

      // Floating Pills Animation (More Natural Random Floating)
      const pills = sectionRef.current?.querySelectorAll(".pill");
      pills?.forEach((pill) => {
        gsap.to(pill, {
          x: `+=${gsap.utils.random(-60, 60)}`, // ডানে-বামে বেশি random মুভ
          y: `+=${gsap.utils.random(-40, 40)}`, // উপরে-নিচে random মুভ
          rotation: gsap.utils.random(-35, 35), // হালকা ঘুরবে
          scale: gsap.utils.random(0.65, 1.25), // ছোট-বড় হবে
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: gsap.utils.random(4, 7), // ধীর natural মুভমেন্ট
          delay: gsap.utils.random(0, 2),
          opacity: gsap.utils.random(0.5, 1),
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-start justify-center text-left px-80 sm:mt-8"
    >
      {/* Main Heading */}
      <h1 className="hero-heading text-4xl sm:text-2xl md:text-4xl font-bold text-gray-100 leading-tight max-w-full font-cinzel">
        Hi, I&apos;m <span className="text-blue-500">Saiful</span> 
        <br />
        — a frontend developer
        <br />
        crafting <span className="text-[#22d3ee]">modern & interactive</span> web apps.
      </h1>

      {/* Sub Text */}
      <p className="hero-subtext text-gray-300 mt-4 text-base sm:text-lg md:text-xl max-w-2xl">
        I specialize in building fast, responsive, and user-friendly web
        applications with clean, maintainable code and modern UI libraries.
      </p>

      {/* Buttons */}
      <div className="hero-btns flex gap-4 md:gap-8 mt-12 flex-wrap justify-center">
        <Button
          type="primary"
          size="large"
          className="bg-blue-500 text-white hover:!bg-cyan-400 hover:!text-gray-900 rounded-md shadow-md hover:shadow-lg"
          icon={<DownloadOutlined />}
        >
          Download CV
        </Button>
        <Button
          size="large"
          className="hover:!bg-cyan-400 hover:!text-white border hover:!border-cyan-400 rounded-md shadow-md hover:shadow-lg"
          icon={<ArrowDownOutlined />}
        >
          <Link href="#view-work"> View Work</Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator mt-15  flex flex-col items-center text-gray-400 ml-[615px]">
        <span className="text-sm">Scroll</span>
        <ArrowDownOutlined className="text-xl mt-1" />
      </div>

      {/* Tech Stack Floating Pills */}
      <div className="tech-pills absolute w-full h-full pointer-events-none">
        <span className="pill absolute top-20 left-20">React</span>
        <span className="pill absolute top-20 right-20">Next.js</span>
        <span className="pill absolute bottom-40 left-20">TailwindCSS</span>
        <span className="pill absolute bottom-40 right-20">GSAP</span>
      </div>
    </section>
  );
}
