"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Layers, ArrowUpRight, Star, GitFork, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Dashboard",
    slug: "ecommerce-dashboard",
    description: "A full-stack dashboard with real-time analytics, inventory management, and customer insights. Features include sales tracking, product management, and comprehensive reporting.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Prisma"],
    image: "/docs/ecco.png",
    color: "from-blue-600 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
    link: "https://eccommercebychal.netlify.app",
    github: "https://github.com/CHAL7777",
    stars: 45,
    forks: 12,
    category: "Full Stack",
  },
  {
    title: "Omnifood Landing Page",
    slug: "omnifood",
    description: "A premium food delivery landing page featuring optimized UX, responsive design, and smooth animations. Built with performance in mind.",
    tags: ["HTML", "Sass", "JavaScript"],
    image: "/docs/food.png",
    color: "from-purple-600 to-rose-400",
    glow: "group-hover:shadow-purple-500/20",
    link: "https://omnifoodchaldev.netlify.app/",
    github: "https://github.com/CHAL7777",
    stars: 32,
    forks: 8,
    category: "Frontend",
  },
  {
    title: "SaaS Landing Page",
    slug: "saas-landing",
    description: "A high-performance landing page focused on conversion rate optimization and fluid UI. Includes dark mode and multiple section variants.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/docs/saas.png",
    color: "from-emerald-600 to-teal-400",
    glow: "group-hover:shadow-emerald-500/20",
    link: "https://saasbychal.netlify.app/",
    github: "https://github.com/CHAL7777",
    stars: 28,
    forks: 5,
    category: "Frontend",
  },
  {
    title: "Coffee Shop Classic",
    slug: "coffee-shop",
    description: "A retro-inspired coffee shop website showcasing fundamental web development skills with clean HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/docs/coffe.png",
    color: "from-orange-500 to-amber-400",
    glow: "group-hover:shadow-orange-500/20",
    link: "https://coffebychaldev.netlify.app/",
    github: "https://github.com/CHAL7777",
    stars: 22,
    forks: 6,
    category: "Frontend",
  },
  {
    title: "AI Fundamentals Course",
    slug: "ai-course",
    description: "Comprehensive AI fundamentals course completion certificate showcasing expertise in machine learning concepts and applications.",
    tags: ["AI/ML", "Udacity", "Certification"],
    image: "/docs/ai.png",
    color: "from-violet-600 to-purple-400",
    glow: "group-hover:shadow-violet-500/20",
    link: "#",
    github: "#",
    stars: 15,
    forks: 3,
    category: "Certification",
  },
  {
    title: "Web Programming",
    slug: "web-programming",
    description: "Academic certification in web programming demonstrating proficiency in modern web technologies and best practices.",
    tags: ["Web Dev", "Hucisa", "Certification"],
    image: "/docs/web-h.jpg",
    color: "from-rose-500 to-pink-400",
    glow: "group-hover:shadow-rose-500/20",
    link: "#",
    github: "#",
    stars: 10,
    forks: 2,
    category: "Certification",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Certification"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6"
            >
              <Star size={16} className="fill-current" />
              Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">Works</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A collection of projects where I blend technical expertise with creative design. Each project represents a unique challenge and learning experience.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:border-blue-500/30 ${project.glow}`}
            >
              {/* Image Section */}
              <div className="p-4">
                <div className="relative h-64 w-full overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800">
                  {/* Backdrop Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
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
                      className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo" 
                      className="p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* GitHub Stats */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500">
                    <Star size={14} className="fill-current" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500">
                    <GitFork size={14} />
                    <span className="text-sm font-medium">{project.forks}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={project.link}
                    className="inline-flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group/link transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    View Case Study
                    <ArrowUpRight size={18} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </Link>

                  {/* View Project Button */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
                  >
                    <Eye size={16} />
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/CHAL7777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-slate-900/20 dark:shadow-white/20"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}