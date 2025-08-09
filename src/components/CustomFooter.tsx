"use client";

import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaSquareWhatsapp,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

import { FaLinkedin, FaRegUser } from "react-icons/fa";

import { MdAddTask } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function CustomFooter() {
  return (
    <div className=" max-w-6xl py-4 mt-12 mx-auto">
      <Card variant="borderless" className="shadow-none !bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 py-8">
          {/* Logo */}
          <div className="place-self-center">
            <Image
              src="https://res.cloudinary.com/degzi4jma/image/upload/v1753594432/dev-saiful_wqrkfk.jpg"
              width={200}
              height={200}
              alt="Brand Logo"
              className="rounded-full w-28 h-28 sm:w-40 sm:h-40"
            />
          </div>
          <div className="mt-12 flex flex-col sm:flex-row sm:justify-between items-start gap-6 sm:px-12">
            {/* Navigation */}
            <div>
              <h4 className="text-xl !text-white pb-3 d tracking-wide uppercase !font-[var(--font-fira-code)]">
                Navigation
              </h4>
              <div className="flex flex-col gap-4">
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
                    className={`focus-visible:text-blue-600 transition-all duration-100 rounded text-teal-300 hover:text-blue-600 hover:bg-blue-100  `}
                  >
                    <Link
                      href={item.href}
                      className=" flex items-center space-x-2 px-2 py-1 !text-current !no-underline "
                    >
                      <span>{item.icon}</span>
                      <span> {item.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xl pb-3 !text-white tracking-wide uppercase !font-[var(--font-fira-code)]">
                Connect
              </h4>
              <div className="flex flex-col  gap-4">
                {[
                  {
                    icon: <FaSquareWhatsapp className="text-2xl" />,
                    label: "WhatsApp",
                    href: "https://wa.me/8801712597963",
                  },
                  {
                    icon: <FaDiscord className="text-2xl" />,
                    label: "Discord",
                    href: "https://discordapp.com/users/saifulislam4111",
                  },
                  {
                    icon: <FaLinkedin className="text-2xl" />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/saiful4111",
                  },
                  {
                    icon: <FaXTwitter className="text-2xl" />,
                    label: "Twitter / X",
                    href: "",
                  },
                  {
                    icon: <FaFacebook className="text-2xl" />,
                    label: "Facebook",
                    href: "https://www.facebook.com/saifulislamrabbi01/",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`focus-visible:text-blue-600 transition-all duration-100 rounded text-teal-300 hover:text-blue-600 hover:bg-blue-100  `}
                  >
                    <Link
                      href={item.href}
                      className=" flex items-center space-x-2 px-2 py-1 !text-current !no-underline "
                    >
                      <span>{item.icon}</span>
                      <span> {item.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className=" flex justify-center text-sm items-center py-8 text-white tracking-wide">
        <p className="text-center ">
          কপিরাইট &copy; 2025
          <Link
            href={"/"}
            target="_blank"
            className="font-medium ml-1"
             style={{
            backgroundImage:
              "linear-gradient(to bottom,#052E16 1%,#18FFFF 55%,#052E16 99%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          >
            DevSaiful
          </Link>{" "}
          সর্বস্বত্ব সংরক্ষিত
        </p>
      </div>
    </div>
  );
}
