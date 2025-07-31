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
  { label: "About", href: "/about", icon: <FaRegUser /> },
  { label: "Contact", href: "/contact", icon: <FiSend /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: `radial-gradient(circle at center, rgba(0, 0, 0, 0.9), rgba(0, 12, 12, 0.5))`,
      }}
      className="fixed top-0 left-0 w-full z-50 e backdrop-blur-md border-b border-[#031919] shadow-lg"
    >
      <div className="max-w-[1540px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link
          href="/"
          className=" text-xl font-bold text-white flex items-center gap-1"
        >
          <Image
            src={"/devSaiful.png"}
            width={48}
            height={40}
            alt="Dev Saiful Logo"
            className="!rounded-full"
          />{" "}
          <span className="text-2xl font-cinzel mt-4">DevSaiful</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap md:flex-nowrap items-center gap-2 hover:gap-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`focus-visible:text-blue-600  rounded text-gray-300 hover:text-blue-600   hover:bg-blue-100 w-30 transition-all duration-75 transition-timing-function: ease-out;`}
            >
              <Link
                href={item.href}
                className=" flex flex-wrap md:flex-nowrap gap-2 items-center justify-center  px-4 py-1  !no-underline "
              >
                <div className="flex items-center gap-2 px-2">
                  <span className="text-xl"> {item.icon}</span>
                  <span> {item.label}</span>{" "}
                </div>
              </Link>
            </div>
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
  );
}
