# Autonomic Coaching

Next.js (App Router) site and client portal for Autonomic Coaching.

```bash
npm install
npm run dev        # http://localhost:5192
npm run lint && npm run typecheck && npm run build
```

## Structure

- `src/app/(site)`: marketing pages (Home, Responsive Living, How It Works, About, Results, Blog, FAQ, Contact, Privacy, Terms)
- `src/app/(app)`: account flow `/login` → `/onboarding/profile` → `/onboarding/fit-check` → `/assessment`, plus `/account`
- `src/components/{ui,patterns,sections,layout,account,assessment}`, copy in `src/content`, logic in `src/lib`
- `src/styles/globals.css`: design tokens (Tailwind v4 theme); `site.css` and `pages/*.css`: marketing section styles; `assessment.css`: the questionnaire
- `public/design-system/`: the static design system reference

## Prototype notes

- Sign-in with Zoho is mocked in `src/lib/account/auth.ts`. Account, fit check and assessment progress are saved in the browser (`src/lib/account/store.ts`, `src/lib/assessment/model.ts`). Swap these modules for Zoho OAuth and an API when the backend exists.
- Form submissions (Request Coaching, first chapter) validate on the client and are not sent anywhere yet.
