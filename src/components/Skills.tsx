"use client";

import { Card, Flex, Progress } from "antd";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: "6",
    title: "Javascript",
    category: "Programming",
    image:
      "https://res.cloudinary.com/degzi4jma/image/upload/v1753594477/javascript_r5nxkr.svg",
    progress: 85,
    color: "#1890ff",
  },
  {
    id: "8",
    title: "Typescript",
    category: "Programming",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829859/ts_u8kbw9.svg",
    progress: 70,
    color: "#13c2c2",
  },
  {
    id: "1",
    title: "React",
    category: "Web",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829856/react_ckih8r.svg",
    progress: 80,
    color: "#2f54eb",
  },
  {
    id: "2",
    title: "Next.JS",
    category: "Web",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1751467552/nextjs-icon_edawj9.svg",
    progress: 60,
    color: "#722ed1",
  },
  {
    id: "3",
    title: "TailwindCSS",
    category: "Web",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1751467197/tailwind_ourtab.svg",
    progress: 95,
    color: "#52c41a",
  },
  {
    id: "4",
    title: "Shadcn",
    category: "Web",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829858/shadcn_io37js.svg",
    progress: 90,
    color: "#fa541c",
  },
  {
    id: "5",
    title: "React Query",
    category: "Others",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829857/react-query_jazocj.svg",
    progress: 80,
    color: "#faad14",
  },
  {
    id: "7",
    title: "Git",
    category: "Tools",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829854/git_nfoihn.svg",
    progress: 70,
    color: "#fa8c16",
  },
];

function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      // ✅ Heading + Subheading Animation
      gsap.from(q(".skills-heading"), {
        x: 40,
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(q(".skills-subheading"), {
        x: -40,
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        ease: "expo.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      // ✅ Cards Animation
      gsap.from(q(".skill-card"), {
        y: 50,
        autoAlpha: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // ✅ Progress Bar Fill Animation
      const progressBars = q(".custom-progress .ant-progress-bg");
      (progressBars as HTMLElement[]).forEach((bar) => {
        const finalWidth = bar.style.width;
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: finalWidth,
            duration: 0.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 98%",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto text-white py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="skills-heading text-3xl md:text-4xl mb-4 font-semibold text-cyan-400">
          Skills & Expertise
        </h1>
        <p className="skills-subheading text-center text-gray-200 mt-2">
          Specialized in creating modern digital experiences with cutting-edge
          technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {skills.map((skill) => (
          <Card
            variant="borderless"
            className="!bg-transparent !border !border-[#031919] skill-card"
            styles={{
              body: { borderRadius: 12 },
              header: {
                borderBottom: "none",
                marginBottom: "10px",
                paddingTop: "15px",
              },
            }}
            size="small"
            extra={
              <Image
                src={skill.image}
                alt={skill.title}
                width={36}
                height={32}
                className="rounded-full bg-white p-1"
              />
            }
            key={skill.id}
            hoverable
            title={
              <span className="text-lg font-semibold !text-white">
                {skill.title}
              </span>
            }
          >
            <Flex>
              <Progress
                className="custom-progress w-full"
                percent={skill.progress}
                status="active"
                strokeColor={"#13c2c2"}
                trailColor="#333333"
              />
            </Flex>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Skills;
