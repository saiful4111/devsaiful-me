"use client";

import { Card, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const featurdProjects = [
  {
    id: "1",
    title: "MEST School",
    category: "EduTech",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752675279/mest-light-tumbnail_pyw5py.webp",
    technologies: ["Nextra", "Antd", "GSAP", "Katex", "Mongodb"],
    liveUrl: "https://mest.tanjumart.com",
  },
  {
    id: "2",
    title: "Tanjumart",
    category: "E-commerce",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750916542/tanjumart_shqa04.webp",
    technologies: ["Redux", "Next.JS", "Antd", "Mongodb", "NextAuth"],
    liveUrl: "https://www.tanjumart.com",
  },
  {
    id: "3", 
    title: "Lopilo",
    category: "Branding",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750916542/lopilo_kupjx4.webp",
    technologies: ["Next.JS", "Axios", "sslcommerz"],
    liveUrl: "https://lopilo.vercel.app",
  },
];

function FeaturdProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      // ✅ Heading + Subheading Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "expo.out" },
      });

      tl.from(q(".projects-heading"), {
        x: 40,
        y: 40,
        scale: 0.95,
        autoAlpha: 0,
        duration: 1,
      }).from(
        q(".projects-subheading"),
        {
          x: -40,
          y: 30,
          scale: 0.95,
          autoAlpha: 0,
          duration: 1,
        },
        "-=0.4"
      );

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
          start: "top 75%",
        },
      });

      // ✅ Project Card Hover Effect (premium feel)
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
    <div
      ref={sectionRef}
      id="view-work"
      className="max-w-6xl mx-auto text-white py-20 px-2" 
    >
      <div className="text-center mb-16">
        <h1 className="projects-heading text-3xl md:text-4xl mb-4 font-semibold"
        style={{
            backgroundImage:
              "linear-gradient(to bottom,#052E16 1%,#18FFFF 55%,#052E16 99%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}>
          Featured Projects
        </h1>
        <p className="projects-subheading text-center text-gray-200 mt-2">
          A selection of my recent projects showcasing development expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {featurdProjects.map((featurdProject) => (
          <Card
            key={featurdProject.id}
            hoverable
            className="!bg-transparent !border-b !border-[#031919] project-card"
            styles={{
              body: { padding: "0", borderRadius: 12 },
              header: { borderBottom: "none" },
            }}
            title={
              <span className="text-lg font-semibold !text-white">
                {featurdProject.category}
              </span>
            }
            cover={
              <Image
                src={featurdProject.image}
                alt={featurdProject.title}
                width={600}
                height={400}
                className="object-contain"
              />
            }
          >
            <div className="p-4">
              <div className="mr-1 text-lg text-gray-100 font-semibold">
                Technology:
              </div>
              <div className="mt-2 flex flex-wrap space-y-2">
                {featurdProject.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <Tag color="geekblue">{tech}</Tag>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center gap-4">
                <Link
                  href={`/project/${featurdProject.id}`}
                  className="!text-teal-300 hover:!text-white py-1 rounded transition-all duration-150 !no-underline"
                >
                  View Case Study →
                </Link>

                {featurdProject.liveUrl && (
                  <Link
                    href={featurdProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-teal-300 hover:!text-white py-1 rounded transition-all duration-150 !no-underline flex items-center gap-3"
                  >
                    Visit Live Site <FaExternalLinkAlt />
                  </Link>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FeaturdProjects;
