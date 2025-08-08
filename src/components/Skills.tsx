"use client";

import { Card, Flex, Progress } from "antd";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SiShadcnui } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: "6",
    title: "Javascript",
    category: "Programming",
    image:
      "https://res.cloudinary.com/degzi4jma/image/upload/v1753594477/javascript_r5nxkr.svg",

    color: "#1890ff",
  },
  {
    id: "8",
    title: "Typescript",
    category: "Programming",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829859/ts_u8kbw9.svg",

    color: "#13c2c2",
  },
  {
    id: "1",
    title: "React",
    category: "Web",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829856/react_ckih8r.svg",

    color: "#2f54eb",
  },
  {
    id: "2",
    title: "Next.js",
    category: "Web",
    image:
      "https://res.cloudinary.com/degzi4jma/image/upload/v1754668807/nextJSlogo_pizodk.svg",

    color: "#722ed1",
  },
  {
    id: "3",
    title: "TailwindCSS",
    category: "Web",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1751467197/tailwind_ourtab.svg",

    color: "#52c41a",
  },
  {
    id: "4",
    title: "Shadcn",
    category: "Web",
    image:
      "https://res.cloudinary.com/degzi4jma/image/upload/v1754668595/shadCN_logo_i0aea8.svg",

    color: "#fa541c",
  },
  {
    id: "5",
    title: "React Query",
    category: "Others",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829857/react-query_jazocj.svg",

    color: "#faad14",
  },
  {
    id: "7",
    title: "Redux",
    category: "Tools",
    image:
      "https://res.cloudinary.com/degzi4jma/image/upload/v1753594602/redux_geq93t.svg",

    color: "#fa8c16",
  },
];

function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     const q = gsap.utils.selector(sectionRef);

  //     // ✅ Heading + Subheading Animation
  //     gsap.from(q(".skills-heading"), {
  //       x: 40,
  //       y: 40,
  //       autoAlpha: 0,
  //       duration: 0.8,
  //       ease: "expo.out",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //       },
  //     });

  //     gsap.from(q(".skills-subheading"), {
  //       x: -40,
  //       y: 30,
  //       autoAlpha: 0,
  //       duration: 0.7,
  //       ease: "expo.out",
  //       delay: 0.2,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 78%",
  //       },
  //     });

  //     // ✅ Cards Animation
  //     gsap.from(q(".skill-card"), {
  //       y: 50,
  //       autoAlpha: 0,
  //       scale: 0.95,
  //       duration: 0.6,
  //       stagger: 0.15,
  //       ease: "expo.out",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 75%",
  //       },
  //     });

  //     // ✅ Progress Bar Fill Animation
  //     const progressBars = q(".custom-progress .ant-progress-bg");
  //     (progressBars as HTMLElement[]).forEach((bar) => {
  //       const finalWidth = bar.style.width;
  //       gsap.fromTo(
  //         bar,
  //         { width: 0 },
  //         {
  //           width: finalWidth,
  //           duration: 0.5,
  //           ease: "expo.out",
  //           scrollTrigger: {
  //             trigger: bar,
  //             start: "top 98%",
  //           },
  //         }
  //       );
  //     });
  //   },
  //   { scope: sectionRef }
  // );

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto text-white py-20 px-4">
      <div className="text-center mb-16">
        <h1
          className="text-3xl md:text-4xl mb-4 font-semibold "
          style={{
            backgroundImage:
              "linear-gradient(to bottom,#052E16 1%,#18FFFF 55%,#052E16 99%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Skills & Expertise
        </h1>

        <p className="skills-subheading text-center text-gray-200 mt-2">
          Specialized in creating modern digital experiences with cutting-edge
          technologies
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="!bg-transparent !border !border-[#031919] rounded-xl p-5 flex justify-center space-x-3"
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={36}
              height={32}
              className=""
            />

            <span className="text-2xl font-light !text-white">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
