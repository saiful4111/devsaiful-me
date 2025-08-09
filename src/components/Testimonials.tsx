"use client";

import React, { useRef, useEffect } from "react";
import { Avatar } from "antd";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    name: "Md Arif Hasan",
    role: "Operator, MEST School",
    feedback:
      "Extremely professional, unique and enjoyable. The effort taken to ensure relevance to our requirements ensured the optimum outcome.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752058560/MEST_School_Logo_xvvvem.svg",
  },
  {
    name: "Shah Jamal",
    role: "Owner, Dhaka Marine Dockyard",
    feedback:
      "Working with him was a fantastic experience. His communication was clear, deadlines were met, and the quality of work was top-notch.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752058757/favicon_wiu5mt.svg",
  },
  {
    name: "Hiron Mollah",
    role: "Owner, Padma Fishing Net",
    feedback:
      "His attention to detail and dedication to delivering high-quality work truly stood out. Highly recommended.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752058912/logo-padma-fishing-net_j2nlbu.png",
  },
];

export default function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const items = marquee.querySelectorAll(".marquee-item");

    // ✅ মোট প্রস্থ বের করা
    const totalWidth = Array.from(items).reduce(
      (sum, item) => sum + (item as HTMLElement).offsetWidth + 16, // gap সহ
      0
    );

    gsap.set(marquee, { x: 0 });

    // ✅ Marquee Animation + tween save
    const tween = gsap.to(marquee, {
      x: -totalWidth / 2,
      duration: 40,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -(totalWidth / 2)),
      },
    });

    // ✅ Pause on Hover
    marquee.addEventListener("mouseenter", () => tween.pause());
    marquee.addEventListener("mouseleave", () => tween.resume());
  }, []);

  return (
    <div className="max-w-6xl mx-auto text-white py-20 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8"
      style={{
            backgroundImage:
              "linear-gradient(to bottom,#052E16 1%,#18FFFF 55%,#052E16 99%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}>
        Client Testimonials
      </h1>

      <div className="relative overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-4 whitespace-nowrap cursor-pointer"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="marquee-item testimonial-card w-[80vw] sm:w-[720px] flex-shrink-0 p-4 rounded-md border border-[#031919] text-center whitespace-normal break-words"
            >
              <Avatar
                size={36}
                src={<Image src={t.image} alt={t.name} width={36} height={36} />}
                className="!mb-4"
              />
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                {t.feedback}
              </p>
              <p className="text-teal-400 mt-4 font-semibold">{t.name}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
