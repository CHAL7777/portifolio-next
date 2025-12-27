"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2023 - Present",
    description: "Building modern web applications using Next.js and Tailwind CSS. Focused on clean code and user-centric design."
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Tech Solutions",
    period: "2022 - 2023",
    description: "Assisted in developing UI components and integrating REST APIs for enterprise dashboards."
  }
];

const education = [
  {
    id: 1,
    degree: "Software Engineering",
    institution: "Haramaya",
    period: "2023 - 2028"
  }
];

const languages = [
  { name: "Afaan Oromoo", level: "Mother Tongue", percent: 100 },
   { name: "Amharic", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 90 },
 
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Education, Experience, and Personal Interests</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 dark:text-white flex items-center gap-2">💼 Experience</h3>
            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 relative">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600" />
                  <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <span className="text-sm font-medium text-blue-600 mb-1 block">{exp.period}</span>
                    <h4 className="text-xl font-bold dark:text-white">{exp.role}</h4>
                    <p className="text-slate-500 text-sm mb-3">{exp.company}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education, Languages & Hobbies */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 dark:text-white flex items-center gap-2">🎓 Education</h3>
              {education.map((edu) => (
                <div key={edu.id} className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold dark:text-white">{edu.degree}</h4>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">{edu.period}</span>
                  </div>
                  <p className="text-slate-500 text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">🌍 Languages</h3>
              <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium dark:text-slate-200">{lang.name}</span>
                      <span className="text-xs text-slate-500">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies / Interests */}
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">🎹 Hobbies</h3>
              <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 24 24" height="24" width="24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">Playing Piano</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Classical & Jazz enthusiast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}