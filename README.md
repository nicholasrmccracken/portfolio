# Nicholas McCracken — Portfolio

A single-page Next.js / TypeScript portfolio with Tailwind CSS, Framer Motion, Lucide icons, and a procedural Three.js astrolabe using React Three Fiber and Drei.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production validation: `npm run build` and `npm run lint`.

## Edit content

All profile links, experience, project descriptions, skills, and degrees live in `lib/portfolio.ts`.

- Add the resume PDF at `public/resume.pdf`; the Resume button already links to `/resume.pdf`.
- Replace each project's empty `github` string with its repository URL to enable its repository link.
- Visual styles: `app/globals.css`.
- Procedural 3D components: `components/HeroArtifact.tsx`.
- Site metadata: `app/layout.tsx`.

## Deploy to Vercel

Import this repository and use the Next.js preset with `npm run build`. The site uses static export (`out/`) and needs no environment variables or backend services.

## Rendering and accessibility

The Three.js scene is dynamically loaded, uses lightweight geometry, caps pixel ratio at 1.5, and stops continuous rendering when offscreen or the browser tab is hidden. Reduced-motion preferences disable continuous scene animation and CSS transitions. A CSS artifact remains available if WebGL is unsupported or the scene fails. Navigation, skip link, focus states, and a mobile menu support keyboard access. No external models, textures, or fonts are required.
