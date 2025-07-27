

// src/data/projectData.ts
import { Project } from "@/types/project";

export const projectData = (): Project[] => [
  {
    id: "1",
    title: "MEST School",
    category: "EdTech",
    image: "https://res.cloudinary.com/tanjumart/image/upload/v1750916542/mest-school_srbycc.webp",
    technologies: ["Antd", "GSAP",  "Mongodb", "Next-Auth", ],
    liveUrl: "https://mest.tanjumart.com",
    overview: "An EdTech platform built to organize math content into levels and visualize them beautifully for students.",
    features: [
      "Level-based math categorization",
      "Responsive UI with Ant Design and TailwindCSS",
      "Authentication with NextAuth",
      "Math rendering using KaTeX",
      "Dark/light/auto mode support"
    ],
    whyTech: "Next.js 15 with App Router was chosen for routing flexibility, Ant Design for UI consistency, and GSAP for smooth animations. MongoDB was used for fast, scalable storage.",
    challenges: "Rendering dynamic math content was a major challenge. Using KaTeX with Nextra and Markdown required custom MDX configurations.",
    businessImpact: "Enhanced math learning engagement for students, improved performance, and positioned the school as a modern digital platform.",
    duration: "2 months",
    teamSize: 1,
    role: "Full Stack Developer",
    repoUrl: "https://github.com/arifdev/mest-school",
    client: "MEST Foundation",
    stackExplanation: "Nextra for content structure, GSAP for animation, MongoDB for level/task data.",
    testimonials: [
      {
        name: "Founder, MEST Foundation",
        feedback: "Exactly what we envisioned. Arif nailed the UI/UX and structure."
      }
    ],
    tags: ["education", "auth", "pwa", "darkmode"],
    performanceImpact: "Lighthouse score improved from 74 to 95.",
    seoFeatures: ["meta tags", "OG tags", "robots.txt", "sitemap.xml"]
  },
  {
    id: "2",
    title: "Tanjumart",
    category: "E-commerce",
    image: "https://res.cloudinary.com/tanjumart/image/upload/v1750916542/tanjumart_shqa04.webp",
    technologies: ["Redux", "Next.JS", "Antd", "Mongodb", ],
    liveUrl: "https://www.tanjumart.com",
    overview: "An e-commerce platform supporting product uploads, order processing, and user authentication.",
    features: [
      "User registration and login",
      "Shopping cart and checkout system",
      "Admin dashboard with inventory management",
      "Responsive layout"
    ],
    whyTech: "Next.js provided SSR for faster load times. Redux managed complex cart and user state. MongoDB was perfect for product and order storage.",
    challenges: "Managing cart state and synchronizing it with server-side operations was a core difficulty.",
    businessImpact: "Enabled local sellers to go digital and increased order processing efficiency by 60%.",
    duration: "1.5 months",
    teamSize: 2,
    role: "Frontend Developer",
    repoUrl: "https://github.com/arifdev/tanjumart",
    client: "Tanjumart",
    tags: ["ecommerce", "cart", "dashboard"],
    seoFeatures: ["meta tags", "SEO friendly URLs"]
  },
  {
    id: "3",
    title: "Lopilo",
    category: "Branding",
    image: "https://res.cloudinary.com/tanjumart/image/upload/v1750916542/lopilo_kupjx4.webp",
    technologies: ["Next.JS", "Axios", "sslcommerz"],
    liveUrl: "https://lopilo.vercel.app",
    overview: "A branding and product showcase website with payment integration.",
    features: [
      "Payment integration via SSLCommerz",
      "Product showcase with filter/search",
      "Contact and lead form"
    ],
    whyTech: "Next.js for rapid development, Axios for API calls, and SSLCommerz for local payment processing.",
    challenges: "Integrating SSLCommerz API securely and making payment UX seamless.",
    businessImpact: "Boosted brand visibility and enabled online orders with secure transactions.",
    duration: "3 weeks",
    teamSize: 1,
    role: "Frontend Developer",
    repoUrl: "https://github.com/arifdev/lopilo",
    client: "Lopilo Ventures",
    tags: ["branding", "payment", "showcase"]
  },
  {
    id: "4",
    title: "Padma Fishing Net",
    category: "Management",
    image: "https://res.cloudinary.com/tanjumart/image/upload/v1751522883/padma-fishing-net.vercel.app__1_dqde3g.png",
    technologies: ["Next.JS", "GSAP", "NextAuth", "Mongodb"],
    liveUrl: "https://padma-fishing-net.vercel.app/",
    overview: "An internal inventory and sales management tool for a fishing net manufacturer.",
    features: [
      "Task upload and management by admin",
      "Dynamic price calculations",
      "Role-based login system"
    ],
    whyTech: "Next.js and MongoDB for scalability, GSAP for modern UI animation, and NextAuth for secure login.",
    challenges: "Dynamically calculating prices based on product type and ensuring accuracy.",
    businessImpact: "Streamlined production tracking and reduced manual task allocation errors by 80%.",
    duration: "1 month",
    teamSize: 1,
    role: "Full Stack Developer",
    repoUrl: "https://github.com/arifdev/padma-fishing",
    client: "Padma Net Ltd.",
    performanceImpact: "Reduced task allocation time by 3x.",
    tags: ["management", "inventory", "admin"]
  }
];
