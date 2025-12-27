"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Better for Next.js routing

const projects = [
  {
    title: "E-Commerce Dashboard",
    slug: "ecommerce-dashboard", // Added for internal routing
    description: "A full-stack dashboard with real-time analytics, inventory management, and customer insights.",
    tags: ["React.js", "Tailwind", "TypeScript"],
    image: "/docs/ecco.png", 
    color: "from-blue-600 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
    link: "https://eccommercebychal.netlify.app",
    github: "https://github.com/CHAL7777"
  },
  {
    title: "Omnifood Landing Page",
    slug: "omnifood",
    description: "A premium food delivery landing page featuring optimized UX and responsive design.",
    tags: ["HTML", "Sass", "JS"],
    image: "/docs/food.png", 
    color: "from-purple-600 to-rose-400",
    glow: "group-hover:shadow-purple-500/20",
    link: "https://omnifoodchaldev.netlify.app/",
    github: "https://github.com/CHAL7777"
  },
  {
    title: "SaaS Landing Page",
    slug: "saas-landing",
    description: "A high-performance landing page focused on conversion rate optimization and fluid UI.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/docs/saas.png", 
    color: "from-emerald-600 to-teal-400",
    glow: "group-hover:shadow-emerald-500/20",
    link: "https://saasbychal.netlify.app/",
    github: "https://github.com/CHAL7777"
  },
  {
    title: "Coffee Shop Classic",
    slug: "coffee-shop",
    description: "A retrospective look at my journey in web development, built using fundamental technologies.",
    tags: ["HTML", "CSS", "JS"],
    image: "/docs/coffe.png", 
    color: "from-orange-500 to-amber-400",
    glow: "group-hover:shadow-orange-500/20",
    link: "https://coffebychaldev.netlify.app/",
    github: "https://github.com/CHAL7777"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
            >
              Selected <span className="text-blue-600 italic">Works</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A collection of projects where I blend technical logic with aesthetic design.
            </p>
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="hidden md:block pb-2"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Scroll to explore</span>
            <div className="h-px w-24 bg-slate-200 dark:bg-slate-800 mt-2" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:border-blue-500/30 ${project.glow}`}
            >
              {/* Image Section */}
              <div className="p-4">
                <div className="relative h-72 w-full overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800">
                  {/* Backdrop Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {!project.image ? (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}>
                      <Layers size={64} className="text-white/20" />
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-20">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      aria-label="GitHub Repo"
                      className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo" 
                      className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-10 pt-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={project.link}
                    className="inline-flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group/link transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    View Case Study
                    <ArrowUpRight size={18} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </Link>

                  {/* Optional: Simple hover indicator */}
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}