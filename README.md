# Portfolio (Astro)

Programmer-style portfolio generated from the Pencil design. Dark theme, JetBrains Mono, orange accent.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Pages

- `/` — Home (hero + page links)
- `/work` — Work experience
- `/education` — Education
- `/projects` — Projects

## Edit content

- **Work:** `src/data/work.ts`
- **Education:** `src/data/education.ts`
- **Projects:** `src/data/projects.ts`
- **Home name/tagline:** `src/pages/index.astro`
- **Footer/social links:** `src/components/Footer.astro`
- **Resume link:** `src/components/Header.astro` (resume.pdf)

## Build

```bash
npm run build
npm run preview
```
