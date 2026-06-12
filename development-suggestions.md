# YonocyTech Website — Development Suggestions & Roadmap

> Recommendations for future development, prioritized by impact.

---

## 🔴 High Priority

### 1. Web3Forms Access Key (Contact Form)
**File:** `src/app/[locale]/contact/page.tsx:37`
- Replace `YOUR_WEB3FORMS_ACCESS_KEY` with a real key
- Sign up free at [web3forms.com](https://web3forms.com/)
- Paste the key — form emails will arrive in your inbox

### 2. Social Media Links
**File:** `src/components/Footer.tsx:19-25`
- Replace `#` placeholders with real profile URLs:
  - LinkedIn, Facebook, Instagram, Twitter/X, GitHub
- Add the same links to the Contact page

### 3. Custom Domain (Optional)
- Currently using `yonocytech-website.vercel.app` (free)
- To use `yonocytech.com` (paid, ~$10-15/yr): buy domain, add in Vercel dashboard → Domains
- Update `sitemap.xml` and `robots.txt` URLs afterward

### 4. Google Analytics / Privacy
- Add GA4 tracking code for visitor analytics
- Add cookie consent banner if needed (GDPR compliance for EU visitors)

---

## 🟡 Medium Priority

### 5. Blog Backend (Supabase — Free)
**Current:** Blog posts are hardcoded in `src/app/[locale]/blog/page.tsx`

**Suggested setup (Supabase free tier):**
```bash
npm install @supabase/supabase-js
```
- Create a `posts` table with columns: `id, title_en, title_fa, slug, body_en, body_fa, image, category, created_at`
- Replace static array with `await supabase.from("posts").select("*")`
- Add an admin panel or use Supabase Studio to manage posts

### 6. Portfolio CMS
**Current:** Portfolio items are hardcoded in `src/app/[locale]/portfolio/page.tsx`
- Same approach as Blog — store in Supabase
- Add image upload (Supabase Storage has 1GB free)

### 7. Services Page — Dynamic Content
**Current:** Services data is hardcoded in `src/app/[locale]/services/page.tsx`
- Move to Supabase for easy content updates
- Add "Featured" toggle and sorting

### 8. Loading States & Error Boundaries
- Add `loading.tsx` for each route segment (skeleton loaders)
- Add `error.tsx` for graceful error handling
- Add `not-found.tsx` for custom 404 pages

### 9. Performance Optimization
- Add `next/image` for images (currently using emoji placeholders)
- Implement ISR (Incremental Static Regeneration) for blog/portfolio pages
- Add `priority` prop to above-the-fold images

### 10. PWA Support
```bash
npm install next-pwa
```
- Add `manifest.json` for installable app
- Add service worker for offline caching
- Great for mobile users in areas with slow internet

---

## 🟢 Low Priority

### 11. Dark Mode
- Add theme toggle using Tailwind CSS `dark:` variant
- Store preference in localStorage + system preference detection
- Update color scheme in `globals.css`

### 12. Newsletter Signup
- Add email subscription form (Footer or popup)
- Free service: [Buttondown](https://buttondown.com/) or [MailerLite](https://www.mailerlite.com/) (free up to 1,000 subscribers)

### 13. Live Chat Widget
- Add WhatsApp floating button (already have `wa.me/93784258414`)
- Or integrate free live chat: [Tawk.to](https://www.tawk.to/) (forever free)

### 14. Testimonials from Clients
**Current:** 3 hardcoded testimonials in `src/app/[locale]/page.tsx`
- Move to Supabase or a simple JSON file
- Add client photo, company logo

### 15. Case Studies (Portfolio)
**Current:** Case study modal shows generic text
- Add real case studies: problem → solution → results with metrics
- Include before/after screenshots

### 16. Blog Search & Pagination
- Add search bar for blog posts
- Add pagination (load more or page numbers)

### 17. Print-ready Invoice / Proposal Page
- Add a `/proposal` page with pricing summary
- Print-friendly CSS with `@media print`

---

## 🔧 Maintenance Tasks

| Task | Frequency | Notes |
|------|-----------|-------|
| Update copyright year | Yearly | `messages/*/common.json` |
| Update testimonials | As needed | |
| Add real portfolio items | When projects complete | Replace emoji placeholders |
| Check Web3Forms quota | Monthly | Free tier: 250 submissions |
| Update sitemap | When adding pages | |
| npm audit / update deps | Quarterly | `npm outdated && npm update` |

---

## 🚀 Deployment Flow

```
[Code Push to GitHub]
        ↓
[GitHub Actions Triggered]
        ↓
[Vercel Build & Deploy (auto)]
        ↓
[Site updated at yonocytech-website.vercel.app]
```

No manual steps needed — the GitHub Actions workflow (`.github/workflows/deploy.yml`) handles everything.

---

## 📊 Estimated Effort for Suggestions

| Feature | Time | Difficulty |
|---------|------|------------|
| Web3Forms Key | 5 min | Easy |
| Social Links | 10 min | Easy |
| Custom Domain | 30 min | Medium |
| Blog Backend (Supabase) | 2 days | Medium |
| Portfolio CMS | 1 day | Medium |
| PWA Support | 1 day | Medium |
| Dark Mode | 4 hours | Medium |
| Live Chat | 30 min | Easy |

---

*Generated: June 12, 2026 — Contact: 0784258414 (WhatsApp)*
