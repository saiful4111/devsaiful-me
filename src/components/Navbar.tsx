"use client";

import { useState } from "react";

import { Button, Drawer } from "antd";
import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";

import { FaRegUser } from "react-icons/fa";

import { MdAddTask } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { FiSend } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/", icon: <TiHomeOutline /> },

  { label: "Projects", href: "/projects", icon: <MdAddTask /> },
];

const navItems2 = [
  { label: "About", href: "/about", icon: <FaRegUser /> },
  { label: "Contact", href: "/contact", icon: <FiSend /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          clipPath: `polygon(
         0 0,
          99.9% 0,
          
          99.9% 50%,
          94% 50%,
          92% 75%,
          77% 75%,
          
 
          79% 50%,
          65% 50%,
          62% 95%,
          38% 95%,
          35% 50%,
          22% 50%,
          
          24% 75%,
          8% 75%,
          6% 50%,
          0 50%
    )`,
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 48%, #18FFFF 100%)",
        }}
        className="fixed top-[2px] left-1/2 -translate-x-1/2  w-[1340px] h-[80px] z-40  backdrop-blur-md shadow-lg"
      ></div>
      <nav
        style={{
          background: `radial-gradient(
  circle at center,
  rgba(0, 0, 0, 0.9),         
  rgba(0, 0, 0, 0.9)      
)`,
          clipPath: `polygon(
          0 0,
          100% 0,

          100% 50%,
          94% 50%,
          92% 75%,
          77% 75%,
          
          
          79% 50%,
          65% 50%,
          62% 95%,
          38% 95%,
          35% 50%,
          22% 50%,
          
          24% 75%,
          8% 75%,
          6% 50%,
          0 50%
    )`,
        }}
        className="fixed top-0 left-1/2 -translate-x-1/2  w-[1340px] h-[80px] z-50  backdrop-blur-md border-b shadow-lg "
      >
        <div className="max-w-[1240px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-12">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-wrap md:flex-nowrap items-center gap-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-3 py-2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-xl"> {item.icon}</span>
                  <span >{item.label}</span>
                </span>

                {/* Underline with glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-950 to-cyan-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>

                {/* Glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left blur-sm opacity-75"></div>

                {/* Extended glow */}
                <div className="absolute bottom-0 left-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out blur-md opacity-50"></div>
              </a>
            ))}
          </div>

          {/* Logo */}
          <Link
            href="/"
            className=" text-xl font-bold text-white flex flex-col items-center"
          >
            <Image
              src={"/devSaiful.png"}
              width={48}
              height={40}
              alt="Dev Saiful Logo"
              className="!rounded-full transform rotate-90"
            />{" "}
            <span className="text-2xl font-cinzel mt-0">DevSaiful</span>
          </Link>

          <div className="hidden md:flex flex-wrap md:flex-nowrap items-center gap-2 hover:gap-2">
            {navItems2.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-3 py-2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-[]"> {item.icon}</span>
                  <span>{item.label}</span>
                </span>

                {/* Underline with glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-950 to-cyan-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>

                {/* Glow effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left blur-sm opacity-75"></div>

                {/* Extended glow */}
                <div className="absolute bottom-0 left-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out blur-md opacity-50"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              icon={<CiMenuFries className="!text-2xl !text-cyan-400" />}
              type="text"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <span className="!font-[var(--font-fira-code)]"> Navigation</span>
          }
          onClose={() => setOpen(false)}
          width={260}
          open={open}
          rootClassName="custom-drawer-bg"
          styles={{
            content: { border: "none", boxShadow: "none" },
            header: { borderBottom: "none" },
          }}
          className="!bg-transparent "
        >
          <div className="  flex  md:flex-nowrap flex-wrap md:flex-nowrap-col gap-4">
            {[
              {
                icon: <MdAddTask className="text-2xl" />,
                label: "Projects",
                href: "/projects",
              },

              {
                icon: <FaRegUser className="text-2xl" />,
                label: "About Me",
                href: "/about",
              },
              {
                icon: <FiSend className="text-2xl" />,
                label: "Contact",
                href: "/contact",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`focus-visible:text-blue-600 transition-all duration-100 rounded text-cyan-400 hover:text-blue-600 hover:bg-blue-100 w-40 `}
              >
                <Link
                  href={item.href}
                  className=" flex flex-wrap md:flex-nowrap items-center space-x-2 px-2 py-1 !text-current !no-underline "
                >
                  <span>{item.icon}</span>
                  <span className="text-lg"> {item.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </Drawer>
      </nav>
    </div>
  );
}
