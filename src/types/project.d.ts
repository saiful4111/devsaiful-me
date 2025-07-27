export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl: string;

  overview: string;
  features: string[];
  whyTech: string;
  challenges: string;
  businessImpact: string;

  // Optional Extras
  duration?: string;
  teamSize?: number;
  role?: string;
  repoUrl?: string;
  client?: string;
  stackExplanation?: string;
  testimonials?: { name: string; feedback: string }[];
  screenshots?: string[];
  tags?: string[];
  performanceImpact?: string;
  seoFeatures?: string[];
}