"use client";

import type { CSSProperties } from "react";
import React, { useRef } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Card, Collapse } from "antd";
import FrontendSkill from "./FrontendSkill";
import { VscTools } from "react-icons/vsc";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const frontendIcons = [
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594477/html_ytjhyh.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594469/css_emdnuv.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594604/tailwind_jcmmkm.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594477/javascript_r5nxkr.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594466/antd_qlqxzl.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594476/gsap_xmkoca.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594604/typescript_gxr9yj.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594487/react_otwqpg.svg",
  "https://res.cloudinary.com/degzi4jma/image/upload/v1753594479/nextjs-icon_iqs7nc.svg",
];

const backendIcons = [
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594480/nodejs_qndr5n.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594470/express_bl1jpv.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594479/mongodb_ta4ar7.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594468/authjs_pjee0d.svg",
];

const tools = [
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594602/redux_geq93t.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594488/react-query_qpzjbh.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594487/react-hook-form_l7lzxt.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594468/axios_jllxzj.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594500/react-router-dom_td87jq.svg",
];

const others = [
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594470/git_j2kvmz.svg",
  "/images/vercel.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594470/canva_egzu9s.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594486/notion_j6fhpe.svg",
  "/imageshttps://res.cloudinary.com/degzi4jma/image/upload/v1753594469/edrawmind_krheju.svg",
];

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: (
      <span className="text-cyan-400 text-xl font-semibold">Frontend</span>
    ),
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={frontendIcons} />
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <span className="text-cyan-400 text-xl font-semibold">Backend</span>,
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={backendIcons} />
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: <span className="text-cyan-400 text-xl font-semibold">Tools</span>,
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={tools} />
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: <span className="text-cyan-400 text-xl font-semibold">Others</span>,
    children: (
      <div className="bg-transparent p-4 text-gray-200">
        <FrontendSkill icons={others} />
      </div>
    ),
    style: panelStyle,
  },
];

const AllSkils: React.FC = () => {
  const panelStyle: CSSProperties = {
    marginBottom: 16,
    background: "transparent",
    border: "0.5px solid #031919",
    borderRadius: "8px",
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 overflow-x-hidden"
    >
      <Card
        styles={{
          header: { borderBottom: "none", marginBottom: 15 },
          body: { paddingTop: 0 },
        }}
        title={
          <span className="text-cyan-400 text-2xl font-semibold flex items-center gap-2">
            <VscTools /> <span>Skills</span>
          </span>
        }
        variant="borderless"
        className="!text-gray-200 border border-[#031919] !bg-transparent"
      >
        <Collapse
          size="large"
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              rotate={isActive ? 90 : 0}
              style={{ color: "#22d3ee" }}
              className="!text-xl pt-2"
            />
          )}
          style={{ background: "transparent" }}
          items={getItems(panelStyle)}
        />
      </Card>
    </div>
  );
};

export default AllSkils;
