# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run lint     # ESLint across the entire codebase
npm run start    # Start production server (after build)
```

There is no test runner configured.

## Architecture

**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Three.js

### Content and config separation

All site copy lives in `lib/site-content.ts` (services, projects, FAQs, process steps, engagement plans). Site-level metadata (company name, contact email, etc.) is in `lib/site-config.ts`. These are the first places to look when changing text or adding new items — no need to hunt through components.

### Component layers

- `components/layout/` — shell, navbar, footer, page transitions, intro overlay
- `components/sections/` — full-width page sections; most pages are a composition of these
- `components/ui/` — small, reusable primitives (Button, SectionHeading, MatrixText)
- `components/visuals/` — WebGL/Three.js shader backgrounds, scroll-reveal wrapper

### Contact form

The contact form has two modes controlled by `CONTACT_API_ENABLED` in `.env.local`:
- **Default (`false`):** client-side `mailto:` link built in `lib/contact.ts` — no server involved
- **Enabled (`true`):** POST to `/app/api/contact/route.ts`, which validates input, applies rate limiting (Upstash Redis), and sends email via Resend

When `CONTACT_API_ENABLED` is false, the Resend and Upstash env vars are not required. See `README.md` for the full setup walkthrough including DNS/domain verification steps.

### Theming

Dark/light mode uses a `dark` class on `<html>`, toggled via `components/layout/theme-toggle.tsx` and persisted to localStorage. All colors are CSS custom properties defined in `globals.css`; Tailwind consumes them via `tailwind.config.ts`. Custom fonts are `--font-display` and `--font-body`.

### Path alias

`@/*` resolves to the project root (e.g. `@/lib/site-content`).
