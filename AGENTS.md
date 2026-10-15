# AGENTS.md: lauranovoamusic

This project is a React + TypeScript + Vite application. Key commands and conventions:

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Run TypeScript check then Vite build |
| `pnpm lint` | Run ESLint on all `.ts`/`.tsx` files |
| `pnpm preview` | Preview the production build |

## TypeScript

- `verbatimModuleSyntax: true` — imports/exports must be complete statements; partial imports will fail
- `moduleResolution: bundler` with `moduleDetection: force` in `tsconfig.app.json`
- `noUnusedLocals` and `noUnusedParameters` enabled — unused bindings cause errors
- `types: ["vite/client"]` only — do not add other global types into `tsconfig.app.json`
- `module: "esnext"` and `lib: ["ES2023", "DOM"]` — target modern runtimes

## ESLint

- Config in `eslint.config.js`: `js.configs.recommended` + `tseslint.configs.recommended` + `react-hooks` + `react-refresh`
- Runs on `**/*.{ts,tsx}`; ignores `dist/`
- `react-hooks` and `react-refresh` plugins are required for React function components

## Project structure

- `src/App.tsx` — main component with counter state and asset imports
- `src/main.tsx` — React root render entry point
- `src/assets/` — hero.png, react.svg, vite.svg (imported directly in App)
- Build output goes to `dist/` (gitignored)

## Development flow

1. Run `pnpm dev` to start local dev with HMR
2. Edit `.tsx`/`.ts` files — changes hot-reload instantly
3. Run `pnpm build` to produce production artifacts in `dist/`
4. Run `pnpm preview` to locally preview the build

## Business and Product Context

**Product:** Official landing page for Laura Novoa Music — professional violinist and singer specialized in luxury wedding services in Cartagena de Indias, Colombia.

**Positioning:** Exclusive, sophisticated, and formal. The brand conveys elegance and distinction, in line with the high-end segment (luxury weddings).

**Landing structure:**
- Hero — First visual impression with brand value and main call to action
- Biography — Artistic history and trajectory of Laura Novoa
- Repertoire — selection of pieces and musical styles for events
- Testimonials — social validation from previous couples and events
- Contact form — simple and elegant data capture for follow-up

**Primary conversion:** WhatsApp contact — preferred channel for quick and direct inquiries in the Colombian market.

**Agent considerations:**
- Tone must remain exclusive and formal across all texts
- Multimedia assets (images, audio) must reflect luxury and geographical location
- The form should be minimalist, requesting only essential information for WhatsApp contact
- The Hero should clearly feature the WhatsApp number or "Request Quote" CTA

## Common gotchas

- Do not remove `verbatimModuleSyntax` from tsconfig — it enforces explicit import/export syntax that the bundler expects
- Do not add `types` entries other than `vite/client` into `tsconfig.app.json` — they will conflict with the Vite plugin setup
- `pnpm build` must succeed before `pnpm preview`; the two steps are ordered
