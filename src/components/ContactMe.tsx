"use client";

import { useRef, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface SendEmailValues {
  clientName: string;
  email: string;
  subject: string;
  description: string;
}

function ContactMe() {
  const sectionRef = useRef<HTMLElement>(null);

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<SendEmailValues>();
  const [api, contextHolder] = notification.useNotification();

  const handleSubmit = async (values: SendEmailValues) => {
    setLoading(true);
    const payload = {
      clientName: values.clientName,
      email: values.email,
      subject: values.subject,
      description: values.description,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        api.success({
          message: "Message sent successfully!",
          description: "Thanks for reaching out. I’ll get back to you soon.",
          placement: "topRight",
          duration: 4,
          showProgress: true,
          className: "custom-notification",
        });
        form.resetFields();
      } else {
        api.error({
          message: "Failed to send message",
          description:
            result.error?.message ||
            "Sorry, something went wrong. Please try again later.",
          placement: "topRight",
          duration: 4,
          showProgress: true,
          className: "custom-notification",
        });
      }
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Unknown error occurred";
      api.error({
        message: "Error",
        description: errMsg,
        placement: "topRight",
        duration: 4,
        showProgress: true,
        className: "custom-notification",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ GSAP Animations
  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      // Heading + Subheading
      gsap.from(q(".contact-heading"), {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(q(".contact-subheading"), {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "expo.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      // Left Side Texts (staggered)
      gsap.from(q(".left-text > *"), {
        x: -40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Right Side Form
      gsap.from(q(".form-wrapper"), {
        y: 50,
        autoAlpha: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      // Hover Interaction (Premium Feel)
      const cards = q(".hover-card") as unknown as HTMLDivElement[];
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.03,
            boxShadow: "0 6px 18px rgba(0,255,255,0.2)",
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
      id="contact"
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 py-4 md:py-12 rounded-lg mt-16 md:mt-12 overflow-x-hidden"
    >
      {contextHolder}
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="contact-heading text-3xl md:text-4xl mb-4 font-bold  text-[#13c2c2]">
          Contact Me
        </h1>
        <p className="contact-subheading text-center text-gray-200 mt-2">
          Whether you have an idea, a project, or just want to say hi — I’m
          always open to connect.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Left Side Text */}
        <div className="text-white space-y-4 left-text">
          <h2 className="text-xl sm:text-2xl font-bold leading-snug text-center md:text-left">
            LET&apos;S TALK ABOUT <br />
            YOUR PROJECT
          </h2>

          <p className="text-gray-300 text-sm sm:text-base text-center md:text-left">
            Let’s embark on creative journey together by shaping a visual
            narrative of your brand in the crowded digital space.
          </p>

          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-12">
            {/* Call */}
            <div className="hover-card flex items-center gap-3 sm:gap-4 border border-dashed border-cyan-400/30 rounded-md p-3 sm:p-4 backdrop-blur-md shadow-md">
              <Image
                src="https://res.cloudinary.com/degzi4jma/image/upload/v1753594432/saiful_ak2d4f.svg"
                width={44}
                height={44}
                alt="Avatar"
                className="rounded-full"
              />
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-400">BOOK A CALL</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  +880 1712 597963
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="hover-card w-full flex items-center gap-3 sm:gap-4 border border-dashed border-cyan-400/30 rounded-md p-3 sm:p-4 backdrop-blur-md shadow-md">
              <MailOutlined className="text-lg sm:text-xl text-white" />
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-400">
                  PREFER EMAIL COMMUNICATION
                </p>
                <p className="text-white font-semibold text-sm sm:text-base break-words break-all">
                  saifuleslamrabbi@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="form-wrapper w-full backdrop-blur-md border-dashed border border-cyan-400/30 rounded-md shadow-md p-4 sm:p-6">
          <Form
            form={form}
            layout="vertical"
            className="text-white !mt-4"
            onFinish={handleSubmit}
          >
            <Form.Item name="clientName" className="form-field">
              <Input
                placeholder="Enter Your Name"
                prefix={<UserOutlined className="text-gray-400 mr-2" />}
                className="!bg-transparent !text-white !p-2"
              />
            </Form.Item>

            <Form.Item name="email" className="form-field">
              <Input
                placeholder="Enter Your Email"
                prefix={<MailOutlined className="text-gray-400 mr-2" />}
                className="!bg-transparent !text-white  !p-2"
              />
            </Form.Item>

            <Form.Item name="subject" className="form-field">
              <Input
                placeholder="Enter a subject"
                className="!bg-transparent !text-white  !p-2"
              />
            </Form.Item>

            <Form.Item name="description" className="form-field">
              <Input.TextArea
                placeholder="Message in brief..."
                rows={5}
                className="!bg-transparent !text-white"
              />
            </Form.Item>

            <Form.Item className="text-center pt-6 form-field">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
