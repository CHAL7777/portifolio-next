"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A full-stack dashboard with real-time analytics, inventory management, and customer insights.",
    tags: ["React.js", "Tailwind", "TypeScript"],
    image: "/docs/ecco.png", 
    color: "from-blue-600 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
    link: "https://eccommercebychal.netlify.app",
    github: "https://github.com/CHAL7777"
  },
  {
    title: "Omnifood simple landing page",
    description: "Natural language processing interface integrated with OpenAI, featuring persistent chat history.",
    tags: ["HTML", "css/sass", "JS"],
    image: "/docs/food.png", 
    color: "from-purple-600 to-rose-400",
    glow: "group-hover:shadow-purple-500/20",
    link: "https://omnifoodchaldev.netlify.app/",
    github: "https://github.com/CHAL7777"
  },
  {
    title: "SaaS Landing Page",
    description: "A high-performance landing page focused on conversion rate optimization and fluid UI.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/docs/saas.png", 
    color: "from-emerald-600 to-teal-400",
    glow: "group-hover:shadow-emerald-500/20",
    link: "https://saasbychal.netlify.app/",
    github: "https://github.com/CHAL7777"
  },
  {
    title: "my first website coffee shop",
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
            >
              Selected <span className="text-blue-600">Works</span>
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
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ${project.glow}`}
            >
              {/* Image Section */}
              <div className="p-4">
                <div className="relative h-72 w-full overflow-hidden rounded-[2rem] bg-slate-200 dark:bg-slate-800">
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
                  {/* ACCESSIBILITY UPDATE:
                     1. Added `focus:opacity-100 focus:translate-y-0` so keyboard users can see the buttons when tabbing.
                     2. Added `aria-label` to provide context to screen readers.
                  */}
                  <div className="absolute top-6 right-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 delay-100 z-10">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black focus:bg-white focus:text-black transition-colors outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live demo`} 
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black focus:bg-white focus:text-black transition-colors outline-none focus:ring-2 focus:ring-blue-500"
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
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-400/10 px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group/link focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 -ml-1"
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study
                  <span className="h-px w-6 bg-slate-900 dark:bg-white transition-all group-hover/link:w-12" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}