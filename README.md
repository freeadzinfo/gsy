# GSY International Group – Website Demo

An interactive, responsive corporate demonstration website built strictly from **GSY International Group – Website Developer Brief v4 (October 2026)** and the official GSY International Group logo.

This demo is designed for internal design and management review to inspect the complete sitemap, page architecture, bilingual English/Arabic (`LTR`/`RTL`) support, CMS-oriented data modeling, and interactive user journeys prior to headless CMS integration (e.g., Sanity or Strapi).

---

## Tech Stack

- **Next.js 15 (App Router)** with TypeScript
- **Tailwind CSS** (Light/Dark theme support + logical RTL/LTR styling)
- **Lucide React** corporate iconography
- **Structured CMS-ready Data Layer** in `src/data/` and `src/types/cms.ts`

---

## Quick Start (Local Development)

1. Navigate to the project folder:
   ```bash
   cd c:\xampp\htdocs\gsy
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open in your browser:
   - English (LTR): `http://localhost:3000/en`
   - Arabic (RTL): `http://localhost:3000/ar`

To verify production build locally:
```bash
npm run build
npm run start
```

---

## Key Structure & Implemented Features

### 1. Exact 9-Item Main Navigation & Mega Menus
Configured in `src/data/site-settings.ts` and `src/components/layout/SiteHeader.tsx`:
1. **About** (`/about`, `/about/our-story`, `/about/chairmans-message`, `/about/leadership`, `/about/vision-2030`, `/about/governance`, `/about/gsy-family`)
2. **Businesses** (`/businesses`, `/businesses/commodity-trading`, `/businesses/shipping-chartering`, `/businesses/noor-al-arab`, `/businesses/government-tenders`, `/businesses/distribution`, `/businesses/logistics`)
3. **Supermarkets** (`/supermarkets`, `/supermarkets/[brand]`, `/supermarkets/stores`, `/supermarkets/offers`, `/supermarkets/suppliers`, `/supermarkets/partners`)
4. **Global Presence** (`/presence`, `/presence/africa`, `/presence/[country]`)
5. **Products** (`/products`)
6. **Investors** (`/investors`, `/investors/halal-investment`, `/investors/partner-with-gsy`, `/investors/company-profile`)
7. **Careers** (`/careers`, `/careers/[job]`)
8. **News** (`/news`, `/news/[slug]`)
9. **Contact** (`/contact`)

### 2. Legacy 301 Redirects (`next.config.ts`)
- `/branches` → `/en/presence`
- `/product` → `/en/products`
- `/halal-investment` → `/en/investors/halal-investment`

### 3. Management Guardrails Honored
- **13 Homepage sections** implemented in exact management brief order (`src/app/[locale]/page.tsx`).
- **Asset-light Shipping & Chartering rule:** Never claims an owned fleet; clearly positioned around voyage/container chartering (`"we charter the right vessel for every cargo"`).
- **Confidentiality rules:** EBITDA, profit, IRR, SPV/store-investor funding terms, internal country tiers (`A/B/C`), and country P&Ls are strictly omitted from public views.
- **Demo Placeholders:** Placeholder contacts, street addresses, portrait slots, partner logo slots, and unconfirmed entity details (e.g., Hong Kong and Portugal roles) are clearly tagged as demo placeholders.

---

## Headless CMS Extension Path (Sanity / Strapi)

All dynamic records live cleanly under `src/data/` matching the TypeScript interfaces in `src/types/cms.ts`:
- `SITE_SETTINGS` (`src/data/site-settings.ts`) — single-source 2030 group goal (`US$2.5B`), counts, and headquarters details
- `GSY_FAMILY_MEMBERS` & `GSY_FAMILY_FLOWS` (`src/data/family.ts`) — interactive family network nodes and supply flows
- `COUNTRIES_DATA` (`src/data/countries.ts`) — 28 market entries with `show_on_site`, `status`, `ports`, `products`, and bilingual names
- `STORES_DATA` & `WEEKLY_OFFERS` (`src/data/supermarkets.ts`) — exact store JSON structure from Page 10 of the brief
- `PRODUCTS_DATA`, `CAREERS_DATA`, `NEWS_DATA` — filterable collections ready for API fetching

