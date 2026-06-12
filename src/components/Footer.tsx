import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const quickLinks = [
    { href: "/", label: nav("home") },
    { href: "/about", label: nav("about") },
    { href: "/services", label: nav("services") },
    { href: "/portfolio", label: nav("portfolio") },
    { href: "/blog", label: nav("blog") },
    { href: "/contact", label: nav("contact") },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Facebook", href: "#", icon: "fb" },
    { name: "Instagram", href: "#", icon: "ig" },
    { name: "Twitter", href: "#", icon: "tw" },
    { name: "GitHub", href: "#", icon: "gh" },
  ];

  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                Y
              </div>
              <span className="text-xl font-bold">
                Yonocy<span className="text-secondary">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold text-gray-300 hover:bg-primary hover:text-white transition-all"
                  aria-label={social.name}
                >
                  {social.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300 text-sm">{t("serviceWeb")}</span></li>
              <li><span className="text-gray-300 text-sm">{t("serviceMobile")}</span></li>
              <li><span className="text-gray-300 text-sm">{t("serviceAI")}</span></li>
              <li><span className="text-gray-300 text-sm">{t("serviceIT")}</span></li>
              <li><span className="text-gray-300 text-sm">{t("serviceMarketing")}</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+93784258414"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors"
                >
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0784258414
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/93784258414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-colors"
                >
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@yonocytech.com
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kabul, Afghanistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{t("copyright")}</p>
          <div className="flex gap-6">
            <a href="tel:+93784258414" className="text-gray-500 hover:text-secondary text-sm transition-colors">
              0784258414
            </a>
            <a href="https://wa.me/93784258414" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary text-sm transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}