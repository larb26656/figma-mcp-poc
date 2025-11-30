# figma-mcp-poc

React + TypeScript + Vite proof-of-concept that recreates an Apple Intelligence-style landing page and an Apple Pay button showcase. Built as a lightweight demo for MCP/Figma-driven UI work.

## What’s inside

- React 19 with React Router for two routes (`/` and `/component`)
- Tailored Apple-inspired layout in `src/App.tsx` with hero, OS sections, and footer
- Apple Pay button variants rendered from presets in `src/components/ApplePayButton.tsx`
- Vite toolchain with TypeScript and ESLint 9

## Quick start

1. Install dependencies  
   `npm install`

2. Run the dev server (Vite)  
   `npm run dev`

3. Open the app  
   Visit the URL printed in the terminal (default http://localhost:5173).  
   Routes:

- `/` — Apple Intelligence landing experience
- `/component` — Apple Pay button presets grid

## Scripts

- `npm run dev` — start Vite in dev mode
- `npm run build` — type-check then build to `dist`
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Notes

- Global styles live in `src/App.css` and `src/index.css`; the component showcase adds `src/pages/ComponentShowcase.css`.
