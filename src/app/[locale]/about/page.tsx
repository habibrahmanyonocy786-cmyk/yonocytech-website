"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  const t = useTranslations("about");

  const whyUsItems = [
    { key: "Expertise", icon: "🎯" },
    { key: "Quality", icon: "⭐" },
    { key: "Support", icon: "🤝" },
    { key: "Innovation", icon: "💡" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text-dark mb-6"
          >
            {t("title")}
          </motion.h1>
        </div>
      </section>

      {/* Company Story */}
      <motion.section {...fadeInUp} className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed text-center">{t("companyStory")}</p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-text-dark mb-3">{t("mission")}</h3>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-text-dark mb-3">{t("vision")}</h3>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <motion.section {...fadeInUp} className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-6xl flex-shrink-0">
              HR
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-1">{t("founderName")}</h2>
              <p className="text-primary font-medium mb-4">{t("founderRole")}</p>
              <p className="text-gray-600 leading-relaxed">{t("founderBio")}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Us */}
      <motion.section {...fadeInUp} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">{t("whyUsTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item) => (
              <div key={item.key} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">{t(`whyUs${item.key}`)}</h3>
                <p className="text-gray-500 text-sm">{t(`whyUs${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}