"use client";

import { Tabs, Card, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectData } from "@/data/projectData";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); 

const categories = ["All", "EdTech", "Branding", "E-commerce", "Management"];
const projects = projectData();

const getFilteredProjects = (category: string) => {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
};

const animeTexts = [" My Work", "Creations", "Inovations"];

export default function Projects() {
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

      // ✅ Tabs Animation
      gsap.from(q(".ant-tabs"), {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // ✅ Project Cards Animation
      gsap.from(q(".project-card"), {
        y: 50,
        autoAlpha: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // ✅ Hover Interaction
      const projectCards = q(".project-card") as unknown as HTMLDivElement[];
      projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.03,
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
            duration: 0.3,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 mt-12 scroll-mt-12 overflow-hidden"
    >
      <h1 className="text-3xl md:text-4xl mb-4 font-bold text-gray-200 h-12 relative text-center">
        {animeTexts.map((text, index) => (
          <span key={index} className="text-cyan-400 fade-text anime-text">
            {text}
          </span>
        ))} 
      </h1>

      <Tabs
        rootClassName="custom-tabs"
        centered
        size="large"
        defaultActiveKey="All"
        className="overflow-hidden"
        items={categories.map((category) => ({
          key: category,
          label: category,
          children: (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 overflow-hidden">
              {getFilteredProjects(category).map((project) => (
                <Card
                  key={project.id}
                  hoverable
                  className="!bg-transparent !border-b !border-[#031919] project-card w-full"
                  styles={{
                    body: { padding: "0", borderRadius: 12 },
                    header: { borderBottom: "none" },
                  }}
                  title={
                    <span className="text-lg font-semibold !text-white">
                      {project.title}
                    </span>
                  }
                  cover={
                    <div className="w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                  }
                >
                  <div className="p-4">
                    <div className="mr-1 text-lg text-gray-100 font-semibold">
                      Technology:
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex} color="geekblue">
                          {tech}
                        </Tag>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between items-center gap-4">
                      <Link
                        href={`/project/${project.id}`}
                        className="!text-cyan-400 hover:!text-white py-1 rounded transition-all duration-150 !no-underline"
                      >
                        View Case Study →
                      </Link>

                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="!text-cyan-400 hover:!text-white py-1 rounded transition-all duration-150 !no-underline flex items-center gap-2"
                        >
                          Visit Live Site <FaExternalLinkAlt />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ),
        }))}
      />
    </section>
  );
}
