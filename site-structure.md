# YonocyTech Website — Complete File & Folder Structure

```
yonocytech-website/
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml                  # GitHub Actions → Vercel auto-deploy
│
├── 📁 public/                          # Static assets (served at /)
│   ├── favicon.svg                     # Custom SVG favicon (blue gradient + Y)
│   ├── favicon.ico                     # Fallback favicon
│   ├── robots.txt                      # SEO: search engine crawl rules
│   ├── sitemap.xml                     # SEO: all 12 bilingual URLs
│   ├── file.svg                        # Default Next.js asset
│   ├── globe.svg                       # Default Next.js asset
│   ├── next.svg                        # Default Next.js asset
│   ├── vercel.svg                      # Default Next.js asset
│   ├── window.svg                      # Default Next.js asset
│   └── 📁 images/                      # Custom images directory
│
├── 📁 src/                             # Source code
│   │
│   ├── 📁 app/                         # Next.js App Router
│   │   ├── globals.css                 # Tailwind CSS v4 + custom theme + RTL
│   │   ├── layout.tsx                  # Root layout (passes children through)
│   │   ├── page.tsx                    # Root page → redirects to /en
│   │   ├── favicon.ico                 # Root favicon
│   │   │
│   │   └── 📁 [locale]/                # Localized routes
│   │       ├── layout.tsx              # Locale layout: Header + Footer + RTL
│   │       ├── page.tsx                # Home page (hero, services, testimonials)
│   │       │
│   │       ├── 📁 about/
│   │       │   └── page.tsx            # About page (story, mission, founder)
│   │       │
│   │       ├── 📁 blog/
│   │       │   └── page.tsx            # Blog page (filterable articles)
│   │       │
│   │       ├── 📁 contact/
│   │       │   └── page.tsx            # Contact page (form + Web3Forms API)
│   │       │
│   │       ├── 📁 portfolio/
│   │       │   └── page.tsx            # Portfolio page (filterable gallery)
│   │       │
│   │       └── 📁 services/
│   │           └── page.tsx            # Services page (6 services + pricing)
│   │
│   ├── 📁 components/
│   │   ├── Header.tsx                  # Nav: logo, links, lang switch, mobile
│   │   └── Footer.tsx                  # Footer: links, contact, social, copyright
│   │
│   ├── 📁 i18n/                        # Internationalization
│   │   ├── routing.ts                  # Route config: en, fa, as-needed prefix
│   │   └── request.ts                  # Locale detection & message loader
│   │
│   ├── 📁 messages/
│   │   ├── 📁 en/
│   │   │   └── common.json             # English translations (153 keys)
│   │   └── 📁 fa/
│   │       └── common.json             # Persian/Farsi translations (153 keys)
│   │
│   └── proxy.ts                        # next-intl middleware (i18n routing)
│
├── .gitignore                          # Git ignore rules
├── AGENTS.md                           # AI agent instructions (Next.js 16 notes)
├── CLAUDE.md                           # Claude-specific instructions
├── README.md                           # Project readme
├── eslint.config.mjs                   # ESLint flat config
├── next.config.ts                      # Next.js 16 config + next-intl plugin
├── next-env.d.ts                       # Next.js TypeScript declarations
├── package.json                        # Dependencies & scripts
├── postcss.config.mjs                  # PostCSS config (TailwindCSS v4)
├── project-structure.md                # Previous structure doc (legacy)
├── site-structure.md                   # This file
├── tsconfig.json                       # TypeScript config
└── development-suggestions.md          # Future improvement recommendations
```

---

## 🔑 Key Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 16 (App Router) | SSR, SEO, file-based routing |
| Styling | Tailwind CSS v4 | Utility-first, responsive |
| i18n | next-intl v4 | RTL support, async messages |
| Animations | Framer Motion | Smooth page transitions |
| Forms | Web3Forms API | Free (250 submissions/mo), no backend |
| Hosting | Vercel (free tier) | Auto-deploy from GitHub |
| Locale strategy | `as-needed` prefix | `/` = English, `/fa` = Persian |

---

## 📦 Dependencies

```json
{
  "next": "^16.2.9",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "next-intl": "^4.13.0",
  "framer-motion": "^12.40.0"
}
```

## 🚀 Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

*Last updated: June 12, 2026*
