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

const posts = [
  {
    title: "Getting Started with Next.js 15: A Comprehensive Guide",
    category: "techTutorials",
    excerpt: "Learn how to build modern web applications with Next.js 15, the latest version of the React framework.",
    date: "June 10, 2026",
    image: "📘",
    author: "Habib Rahman Yonocy",
  },
  {
    title: "The Future of AI in Business: Trends to Watch in 2026",
    category: "industryNews",
    excerpt: "Explore how artificial intelligence is transforming industries and what trends will dominate in 2026.",
    date: "June 5, 2026",
    image: "🤖",
    author: "YonocyTech Team",
  },
  {
    title: "YonocyTech Launches New Mobile Development Service",
    category: "companyUpdates",
    excerpt: "We're excited to announce our expanded mobile development services for iOS and Android platforms.",
    date: "May 28, 2026",
    image: "📱",
    author: "YonocyTech Team",
  },
  {
    title: "Building Responsive UIs with TailwindCSS v4",
    category: "techTutorials",
    excerpt: "Master the latest features of TailwindCSS v4 to create beautiful, responsive user interfaces.",
    date: "May 20, 2026",
    image: "🎨",
    author: "Habib Rahman Yonocy",
  },
  {
    title: "Cybersecurity Best Practices for Small Businesses",
    category: "industryNews",
    excerpt: "Protect your business with these essential cybersecurity practices that every small business should implement.",
    date: "May 15, 2026",
    image: "🛡️",
    author: "YonocyTech Team",
  },
  {
    title: "YonocyTech Achieves 50+ Successful Projects Milestone",
    category: "companyUpdates",
    excerpt: "A look back at our journey as we celebrate delivering over 50 successful projects for our clients.",
    date: "May 10, 2026",
    image: "🎉",
    author: "Habib Rahman Yonocy",
  },
];

const categories = ["techTutorials", "industryNews", "companyUpdates"] as const;

export default function BlogPage() {
  const t = useTranslations("blog");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

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

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === null
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              }`}
            >
              {t("categories")}
            </button>
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

      {/* Blog Grid */}
      <motion.section {...fadeInUp} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-[2/1] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                      {t(post.category)}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-text-dark mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.author}</span>
                    <span className="text-primary text-sm font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1">
                      {t("readMore")} →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}