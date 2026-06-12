"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const servicesData = [
  {
    key: "webDev",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    features: ["React / Next.js", "Vue.js / Nuxt", "Responsive Design", "SEO Optimized", "CMS Integration"],
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
  },
  {
    key: "mobileDev",
    icon: "📱",
    color: "from-purple-500 to-pink-500",
    features: ["iOS & Android", "React Native", "Flutter", "UI/UX Design", "App Store Deployment"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    key: "aiSolutions",
    icon: "🤖",
    color: "from-green-500 to-teal-500",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots"],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    key: "itConsulting",
    icon: "🛡️",
    color: "from-orange-500 to-red-500",
    features: ["Digital Transformation", "Cloud Strategy", "Security Audit", "Infrastructure", "Technology Roadmap"],
    tech: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    key: "digitalMarketing",
    icon: "📈",
    color: "from-pink-500 to-rose-500",
    features: ["SEO / SEM", "Social Media", "Content Strategy", "Email Marketing", "Analytics"],
    tech: ["Google Analytics", "SEO Tools", "CRM", "Marketing Automation", "Ads"],
  },
  {
    key: "customSoftware",
    icon: "⚙️",
    color: "from-indigo-500 to-blue-500",
    features: ["Enterprise Software", "SaaS Platforms", "API Development", "Database Design", "Integration"],
    tech: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Docker"],
  },
];

const pricingPlans = ["basic", "standard", "premium"];

export default function ServicesPage() {
  const t = useTranslations("services");

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

      {/* Service Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.key}
              {...fadeInUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Info */}
                <div className="p-8 lg:p-12">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-text-dark mb-4">{t(service.key)}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{t(`${service.key}Desc`)}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all"
                  >
                    {t("contactUs")}
                  </Link>
                </div>
                {/* Right: Features + Tech */}
                <div className="p-8 lg:p-12 bg-gray-50/50">
                  <div className="mb-8">
                    <h3 className="font-semibold text-text-dark mb-4">{t("features")}</h3>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-4">{t("techStack")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white rounded-lg text-xs font-medium text-gray-600 border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <motion.section {...fadeInUp} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={plan}
                className={`rounded-2xl p-8 border ${
                  idx === 1 ? "bg-primary text-white border-primary scale-105 shadow-xl" : "bg-white border-gray-200"
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${idx === 1 ? "text-white" : "text-text-dark"}`}>{t(plan)}</h3>
                <div className={`text-3xl font-bold mb-4 ${idx === 1 ? "text-white" : "text-text-dark"}`}>
                  ${idx === 0 ? "999" : idx === 1 ? "2,499" : "4,999"}
                  <span className={`text-sm font-normal ${idx === 1 ? "text-white/70" : "text-gray-400"}`}> / project</span>
                </div>
                <ul className={`space-y-3 mb-8 ${idx === 1 ? "text-white/80" : "text-gray-600"}`}>
                  {[
                    idx === 0 ? "Up to 5 pages" : idx === 1 ? "Up to 15 pages" : "Unlimited pages",
                    idx === 0 ? "Basic UI/UX" : idx === 1 ? "Advanced UI/UX" : "Premium UI/UX",
                    idx === 0 ? "1 Revision" : idx === 1 ? "3 Revisions" : "Unlimited Revisions",
                    idx === 0 ? "Basic SEO" : idx === 1 ? "Advanced SEO" : "Full SEO Package",
                    idx === 0 ? "1 Month Support" : idx === 1 ? "3 Months Support" : "12 Months Support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <svg className={`w-4 h-4 flex-shrink-0 ${idx === 1 ? "text-white" : "text-secondary"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                    idx === 1
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  {t("contactUs")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-16 bg-text-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("contactUs")}</h2>
          <a
            href="tel:+93784258414"
            className="inline-flex items-center px-8 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg"
          >
            0784258414
          </a>
        </div>
      </section>
    </div>
  );
}
</write_to_file>