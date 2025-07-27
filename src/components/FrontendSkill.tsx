"use client";

import { useEffect, useRef } from "react";

interface FrontendSkillProps {
  icons: string[]; // Parent থেকে শুধু icons পাঠানো হবে
}

const FrontendSkill = ({ icons }: FrontendSkillProps) => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    orbit.innerHTML = ""; // Clear previous icons if any
    const radius = 120;
    const centerX = 150;
    const centerY = 150; 

    icons.forEach((src, index) => {
      const angle = (index / icons.length) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const img = document.createElement("img");

      // ✅ Hover Tooltip (ফাইল নাম থেকে জেনারেট করা)
      const name = src
        .split("/")
        .pop()! // ফাইল নাম বের করলো (react.svg)
        .split(".")[0] // এক্সটেনশন বাদ
        .replace(/-/g, " ") // যদি Tailwind-এর মতো ড্যাশ থাকে
        .replace(/^\w/, (c) => c.toUpperCase()); // প্রথম অক্ষর বড়

      img.title = name; // Hover এ নাম দেখাবে
      img.src = src;
      img.className = "w-8 h-8 absolute spin-icon rounded-full bg-white";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = `translate(-50%, -50%) `;

      orbit.appendChild(img);
    });
  }, [icons]);

  return (
    <div className="flex items-center justify-center h-[400px] ">
      <div className="relative w-[300px] h-[300px]">
        <div className="absolute inset-0   rounded-full spin-slow">
          <div ref={orbitRef} className="w-full h-full relative"></div>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkill;
