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

## Contexto de Negocio y Producto

**Producto:** Landing page oficial de Laura Novoa Music — violinista y cantante profesional especializada en servicios para matrimonios de lujo en Cartagena de Indias, Colombia.

**Posicionamiento:** Exclusivo, sofisticado y formal. La marca transmite elegancia y distinción, acorde con el segmento de alta gama (matrimonios de lujo).

**Estructura de la landing:**
- Hero — Primera impresión visual con valor de marca y llamada a acción principal
- Biografía — Historia y trayectoria artística de Laura Novoa
- Repertorio — selección de piezas y estilos musicales para eventos
- Testimonios — validación social de parejas y eventos anteriores
- Formulario de contacto — captura simple y elegante de datos para seguimiento

**Conversión principal:** Contacto por WhatsApp — canal preferente para consultas rápidas y directas en el mercado colombiano.

**Consideraciones para agentes:**
- El tono en todos los textos debe mantenerse exclusivo y formal
- Los activos multimedia (imágenes, audio) deben reflejar el lujo y la ubicación geográfica
- El formulario debe ser minimalista, solicitando solo información esencial para el contacto en WhatsApp
- El Hero debe destacar claramente el número de WhatsApp o el CTA de "Solicitar cotización"

## Common gotchas

- Do not remove `verbatimModuleSyntax` from tsconfig — it enforces explicit import/export syntax that the bundler expects
- Do not add `types` entries other than `vite/client` into `tsconfig.app.json` — they will conflict with the Vite plugin setup
- `pnpm build` must succeed before `pnpm preview`; the two steps are ordered
