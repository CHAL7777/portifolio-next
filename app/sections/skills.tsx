"use client";

import { motion } from "framer-motion";

// Grouping skills for better readability
const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "Sass", "HTML", "CSS", "JS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "PostgreSQL", "Prisma", "MySQL", "MongoDB", "Python", "PHP", "Java", "C++"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Canva", "Git/Github", "Vercel"],
    color: "from-orange-500 to-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 text-slate-900 dark:text-white"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Arsenal</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of the technologies I use to bring digital products to life.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              {/* Category Gradient Header */}
              <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${category.color} mb-6`} />
              
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-transparent hover:border-purple-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative background glow on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom "Always Learning" Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Currently learning: WebGL & AI Integration
          </div>
        </motion.div>
      </div>
    </section>
  );
}