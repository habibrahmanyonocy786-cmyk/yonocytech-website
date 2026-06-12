# YonocyTech Website - Project Structure

## 📁 Root Directory (`yonocytech-website/`)

```
yonocytech-website/
├── .gitignore                  # Git ignore rules
├── AGENTS.md                   # AI agent instructions
├── CLAUDE.md                   # Claude-specific instructions
├── README.md                   # Project readme
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── project-structure.md        # This file - project structure documentation
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets
├── src/                        # Source code
│   ├── proxy.ts                # Next.js Proxy (i18n routing)
│   ├── app/                    # App Router
│   │   ├── favicon.ico         # Site favicon
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Root page (redirect)
│   │   └── [locale]/           # Localized routes (en/fa)
│   │       ├── layout.tsx      # Locale layout
│   │       ├── page.tsx        # Home page
│   │       ├── about/
│   │       │   └── page.tsx    # About page
│   │       ├── blog/
│   │       │   └── page.tsx    # Blog page
│   │       ├── contact/
│   │       │   └── page.tsx    # Contact page
│   │       ├── portfolio/
│   │       │   └── page.tsx    # Portfolio page
│   │       └── services/
│   │           └── page.tsx    # Services page
│   ├── components/
│   │   ├── Footer.tsx          # Footer component
│   │   └── Header.tsx          # Header component
│   ├── i18n/
│   │   ├── request.ts          # i18n request handler
│   │   └── routing.ts          # i18n routing config
│   └── messages/
│       ├── en/                 # English translations
│       └── fa/                 # Persian/Farsi translations
```

---

## 📄 File Descriptions

### Configuration Files
| File | Purpose |
|------|---------|
| `.gitignore` | Specifies intentionally untracked files to ignore |
| `eslint.config.mjs` | Linting rules for code quality |
| `next.config.ts` | Next.js framework configuration |
| `package.json` | NPM dependencies, scripts, and project metadata |
| `postcss.config.mjs` | PostCSS configuration for CSS processing |
| `tsconfig.json` | TypeScript compiler options |
| `public/` | Static assets served directly |

### Source Code (`src/`)
| File | Purpose |
|------|---------|
| `proxy.ts` | Internationalization (i18n) routing proxy (formerly middleware) |
| `app/globals.css` | Global CSS styles (Tailwind CSS) |
| `app/layout.tsx` | Root HTML layout wrapper |
| `app/page.tsx` | Root page (handles redirect to default locale) |
| `app/[locale]/layout.tsx` | Locale-specific layout with navigation |
| `app/[locale]/page.tsx` | Home page |
| `app/[locale]/about/page.tsx` | About us page |
| `app/[locale]/blog/page.tsx` | Blog page |
| `app/[locale]/contact/page.tsx` | Contact page |
| `app/[locale]/portfolio/page.tsx` | Portfolio/Gallery page |
| `app/[locale]/services/page.tsx` | Services page |
| `components/Footer.tsx` | Site-wide footer component |
| `components/Header.tsx` | Site-wide header/navigation component |

### Internationalization (`i18n/`)
| File | Purpose |
|------|---------|
| `request.ts` | i18n request configuration |
| `routing.ts` | Route definitions for i18n |
| `messages/en/` | English locale translation files |
| `messages/fa/` | Persian (Farsi) locale translation files |

---

## 🚀 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Internationalization:** next-intl
- **Animation:** Framer Motion
- **Linting:** ESLint

## 📦 Scripts (`npm run <script>`)
| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start development server |
| `build` | `next build` | Build for production |
| `start` | `next start` | Start production server |
| `lint` | `eslint` | Run linter |

---

*Generated on: 6/12/2026*