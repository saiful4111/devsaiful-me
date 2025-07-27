"use client";

import { Card, List, Tag } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import { GiCheckMark, GiAtomCore } from "react-icons/gi";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    key: "experience",
    title: "Experience",
    icon: <ThunderboltOutlined />,
    content: [
      "1+ year in frontend development",
      "Worked on 5+ projects using React, Next.js, and TailwindCSS",
      "Skilled in building responsive, user-friendly web applications",
      "Proven experience collaborating with cross-functional teams",
    ],
  },
  {
    key: "values",
    title: "Core Values",
    icon: <GiAtomCore />,
    content: [
      "Clean, modular, and maintainable code",
      "Passionate about building responsive and user-centric designs",
      "Strong communication and collaboration skills in remote environments",
      "Attention to detail with pixel-perfect UI/UX and timely delivery",
    ],
  },
];

const animeTexts = ["Creative", "Passionate", "Developer"];

const paragraphs = [
  "I'm Saiful, a frontend developer with a passion for creating clean, efficient, and user-driven designs. I specialize in building responsive, interactive websites and apps with React, Next.js, and TailwindCSS.",
  "I focus on turning complex problems into seamless user experiences, always committed to clean, maintainable code.",
  "Beyond coding, I explore motion design, refine product strategies, and push the boundaries of frontend development to create impactful digital experiences.",
]; 

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      // 🔥 animeTexts GSAP Animation

      const animeSpans = q(".anime-text") as HTMLSpanElement[];

      // ✅ প্রথমে সব হাইড থাকবে (এক মুহূর্তও দেখাবে না)
      gsap.set(animeSpans, {
        position: "absolute",
        top: "0",
        left: "50%",
        xPercent: -50,
        autoAlpha: 0,
      });

      const tlAnime = gsap.timeline({ repeat: -1 });

      animeSpans.forEach((span) => {
        tlAnime
          .to(span, {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power2.out",
          })
          .to(
            span,
            {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.in",
            },
            "+=2"
          );
      });

      // বাকি অ্যানিমেশন একই থাকবে

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(q(".about-subtitle"), {
        opacity: 0,
        x: 20,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      q(".about-para").forEach((para) => {
        const words = para.querySelectorAll("span");
        tl.from(
          words,
          {
            opacity: 0,
            x: 50,
            y: 20,
            stagger: 0.04,
            duration: 0.3,
            ease: "power1.out",
          },
          "+=0.1"
        );
      });

      gsap.from(q(".profile-item"), {
        y: 40,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(q(".highlight-card"));
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 rounded-lg mt-12 scroll-mt-12 overflow-hidden"
    >
      {/* ✅ Section Title */}
      <div className="text-center mb-16 relative h-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-200 relative h-12">
          {animeTexts.map((text, index) => (
            <span
              key={index}
              className="anime-text text-cyan-400 text-3xl md:text-4xl font-bold"
            >
              {text}
            </span>
          ))}
        </h1>
        <p className="contact-subheading text-center text-gray-200 mt-2 about-subtitle">
          Have a project in mind? Get in touch and let&apos;s create something
          amazing.
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-12 rounded-lg shadow-lg p-4 sm:p-8 border border-[#031919] overflow-hidden">
        <div className="flex flex-col items-center gap-4">
          <div className="profile-item w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-lg mb-4">
            <Image
              src="https://res.cloudinary.com/degzi4jma/image/upload/v1753594432/saiful_ak2d4f.svg"
              alt="Saiful's Photo"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="profile-item bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl sm:text-2xl px-4 sm:px-6 py-2 rounded-lg font-semibold text-center">
            Md. Saiful Islam
          </span>
          <Tag
            color="geekblue"
            className="profile-item text-white mt-2 sm:mt-4"
          >
            Frontend Developer
          </Tag>
        </div>

        <div className="col-span-2 md:ml-4 sm:ml-8">
          <div className="text-white space-y-4 sm:space-y-6">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className="about-para text-base sm:text-lg leading-relaxed"
              >
                {para.split(" ").map((word, i) => (
                  <span
                    key={i}
                    style={{ display: "inline-block", marginRight: "4px" }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden">
        {highlights.map((item) => (
          <Card
            key={item.key}
            className="highlight-card !text-gray-200 border border-[#031919] h-full flex flex-col w-full"
            styles={{
              header: { borderBottom: "none", marginBottom: 15 },
              body: { paddingTop: 0 },
            }}
            style={{
              background:
                "linear-gradient(to right, rgba(3,25,25,0.8), rgba(0,12,12,0.8))",
            }}
            title={
              <span className="text-cyan-400 text-xl sm:text-2xl font-semibold flex items-center gap-2">
                {item.icon} {item.title}
              </span>
            }
            variant="borderless"
          >
            <List
              size="large"
              dataSource={item.content}
              renderItem={(text) => (
                <List.Item className="!border-0 !p-0">
                  <div className="flex gap-2 items-start py-1">
                    <GiCheckMark className="text-green-600 text-lg min-w-[24px]" />
                    <span className="text-white">{text}</span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
