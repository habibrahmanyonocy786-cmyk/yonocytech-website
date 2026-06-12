"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const projects = [
  {
    title: "E-Commerce Platform",
    category: "web",
    description: "A full-featured online store with payment integration and inventory management.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "🛒",
  },
  {
    title: "Fitness Tracker App",
    category: "mobile",
    description: "Cross-platform mobile app for workout tracking and health monitoring.",
    tech: ["React Native", "Firebase", "Google Fit API"],
    image: "🏋️",
  },
  {
    title: "AI Customer Support Bot",
    category: "ai",
    description: "Intelligent chatbot that handles customer inquiries using NLP and machine learning.",
    tech: ["Python", "GPT-4", "LangChain", "FastAPI"],
    image: "🤖",
  },
  {
    title: "Corporate Website",
    category: "web",
    description: "Modern, bilingual corporate website with CMS integration.",
    tech: ["Next.js", "TailwindCSS", "Sanity CMS"],
    image: "🌐",
  },
  {
    title: "Ride-Sharing App",
    category: "mobile",
    description: "On-demand ride booking app with real-time tracking and payments.",
    tech: ["Flutter", "Google Maps", "Firebase", "Stripe"],
    image: "🚗",
  },
  {
    title: "Predictive Analytics Dashboard",
    category: "ai",
    description: "Data visualization dashboard with ML-powered sales predictions.",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    image: "📊",
  },
];

const categories = ["all", "web", "mobile", "ai"] as const;

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
            {t("title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {t(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <motion.section {...fadeInUp} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(idx)}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-text-dark mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-6 text-center">{filtered[selectedProject].image}</div>
            <h3 className="text-xl font-bold text-text-dark mb-2">{filtered[selectedProject].title}</h3>
            <p className="text-gray-600 mb-4">{filtered[selectedProject].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {filtered[selectedProject].tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-semibold text-text-dark mb-3">{t("caseStudy")}</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong className="text-text-dark">{t("problem")}:</strong> Client needed a modern solution to streamline their operations.</p>
                <p><strong className="text-text-dark">{t("solution")}:</strong> We designed and developed a custom solution using cutting-edge technology.</p>
                <p><strong className="text-text-dark">{t("results")}:</strong> 40% increase in efficiency, 25% cost reduction.</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 w-full py-3 bg-gray-100 rounded-xl text-gray-600 font-medium hover:bg-gray-200 transition-all"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}