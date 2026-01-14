"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowUpRight, 
  Star, 
  GitFork, 
  FolderOpen
} from "lucide-react";
import Image from "next/image";

// --- Types & Data ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  stars: number;
  forks: number;
  category: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-stack analytics platform processing 10k+ daily events. Features real-time inventory tracking, heatmaps, and AI-driven sales forecasting.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "Recharts"],
    image: "/docs/ecco.png",
    link: "https://eccommercebychal.netlify.app",
    github: "https://github.com/CHAL7777",
    stars: 6,
    forks: 6,
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Omnifood Delivery",
    description: "Conversion-optimized landing page with 98/100 Lighthouse score. Implements intersection observers for scroll-triggered animations.",
    tags: ["HTML5", "Sass", "Vanilla JS"],
    image: "/docs/food.png",
    link: "https://omnifoodchaldev.netlify.app/",
    github: "https://github.com/CHAL7777",
    stars: 45,
    forks: 6,
    category: "Frontend",
    featured: false
  },
  {
    id: 3,
    title: "SaaS Starter Kit",
    description: "Production-ready boilerplate for SaaS apps. Includes authentication, Stripe integration, and dark mode theming out of the box.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    image: "/docs/saas.png",
    link: "https://saasbychal.netlify.app/",
    github: "https://github.com/CHAL7777",
    stars: 89,
    forks: 2,
    category: "Full Stack",
    featured: false
  },
  {
    id: 4,
    title: "Coffee Shop Classic",
    description: "A retrospective on fundamental web design principles. Built without frameworks to demonstrate mastery of the DOM and CSS Grid.",
    tags: ["CSS Grid", "HTML", "DOM API"],
    image: "/docs/coffe.png",
    link: "https://coffebychaldev.netlify.app/",
    github: "https://github.com/CHAL7777",
    stars: 9,
    forks: 6,
    category: "Frontend",
    featured: false
  }
];

// Removed "Certification" from here
const categories = ["All", "Full Stack", "Frontend"];

export default function ProjectsPro() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-[#0B0F19] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase mb-6"
            >
              <FolderOpen size={16} />
              <span>Selected Works</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6"
            >
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Experiences</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg"
            >
              A curated collection of projects pushing the boundaries of performance, design, and user interaction.
            </motion.p>
          </div>

          {/* Filter Pills */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-lg"
                    : "bg-white dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <a 
            href="https://github.com/CHAL7777"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white font-bold hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
            <span>View Full Archive</span>
            <ArrowUpRight size={18} className="text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group relative rounded-[2rem] bg-white dark:bg-[#111625] border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white shadow-lg border border-white/20">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <a href={project.github} target="_blank" rel="noreferrer" className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors">
              <Github size={18} />
           </a>
           <a href={project.link} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
              <ExternalLink size={18} />
           </a>
        </div>
        {!project.image ? (
           <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-300">
              <Layers size={48} />
           </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
           <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1"><Star size={14} className="text-amber-400 fill-amber-400"/> {project.stars}</span>
              <span className="flex items-center gap-1"><GitFork size={14}/> {project.forks}</span>
           </div>
           <a href={project.link} className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
             Case Study <ArrowUpRight size={16} />
           </a>
        </div>
      </div>
    </motion.div>
  );
}