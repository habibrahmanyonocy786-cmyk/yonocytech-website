"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-50px" },
};

const servicesData = [
  { key: "webDev", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { key: "mobileDev", icon: "📱", color: "from-purple-500 to-pink-500" },
  { key: "aiSolutions", icon: "🤖", color: "from-green-500 to-teal-500" },
  { key: "itConsulting", icon: "🛡️", color: "from-orange-500 to-red-500" },
  { key: "digitalMarketing", icon: "📈", color: "from-pink-500 to-rose-500" },
  { key: "customSoftware", icon: "⚙️", color: "from-indigo-500 to-blue-500" },
];

const testimonials = [
  { quote: "YonocyTech transformed our online presence. Their team is professional, innovative, and truly cares about client success.", name: "Ahmad R.", role: "CEO, TechStart" },
  { quote: "The AI solution they built for us saved 40% on operational costs. Highly recommended!", name: "Fatima K.", role: "Operations Director" },
  { quote: "From concept to deployment, YonocyTech delivered a flawless mobile app. Great communication throughout.", name: "Mohammad S.", role: "Founder, AppVentures" },
];

export default function HomePage() {
  const t = useTranslations("home");
  const s = useTranslations("services");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Technology Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
                {t("heroTitle")}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                {t("heroSubtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
                >
                  {t("ctaButton")}
                </Link>
                <a
                  href="https://wa.me/93784258414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all active:scale-[0.97]"
                >
                  {t("whatsappLink")}
                </a>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                {["trustYears", "trustProjects", "trustClients"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t(badge)}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[3rem] rotate-6 opacity-10" />
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] -rotate-3" />
                <div className="absolute inset-8 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-white font-bold text-4xl mb-4 animate-float">
                      Y
                    </div>
                    <p className="text-gray-400 text-sm">Innovate with Us</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <motion.section {...fadeInUp} className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">{t("servicesTitle")}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t("servicesSubtitle")}</p>
          </div>
          <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <motion.div
                key={service.key}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">{s(service.key)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s(`${service.key}Desc`)}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5+", label: "Years Experience" },
              { num: "50+", label: "Projects Delivered" },
              { num: "30+", label: "Happy Clients" },
              { num: "24/7", label: "Support" },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.num}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section {...fadeInUp} className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">{t("testimonialTitle")}</h2>
          <div className="relative mt-12 bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="text-5xl text-primary/20 mb-4">"</div>
            <motion.p
              key={activeTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg sm:text-xl text-gray-600 italic mb-6"
            >
              {testimonials[activeTestimonial].quote}
            </motion.p>
            <p className="font-semibold text-text-dark">{testimonials[activeTestimonial].name}</p>
            <p className="text-sm text-gray-400">{testimonials[activeTestimonial].role}</p>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeTestimonial ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <section className="py-16 bg-text-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("contactCta")}</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="tel:+93784258414"
              className="px-8 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              {t("contactCta")}
            </a>
            <a
              href="https://wa.me/93784258414"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              {t("whatsappLink")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
</write_to_file>
<task_progress>
- [x] Analyze requirements from YonocyTech_Website_Plan.md
- [x] Set up Next.js project with TypeScript and TailwindCSS
- [x] Install dependencies (next-intl, framer-motion, etc.)
- [x] Set up project structure and internationalization
- [x] Create design system (colors, fonts, theme)
- [x] Create layout components (Header, Footer)
- [ ] Create Home page
- [ ] Create About Us page
- [ ] Create Services pages
- [ ] Create Portfolio page
- [ ] Create Blog page
- [ ] Create Contact page
- [x] Implement RTL support for Persian
- [x] Add animations and polish
- [ ] Test and verify the build
</task_progress>
</write_to_file>