# Nicholas McCracken — Portfolio

A single-page Next.js / TypeScript portfolio with Tailwind CSS, Framer Motion, Lucide icons, and a procedural Three.js brass compass using React Three Fiber and Drei.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Next.js (usually http://localhost:3000; it selects another port if that one is occupied). Production validation: `npm run build` and `npm run lint`.

## Edit content

All profile links, experience, project descriptions, skills, and degrees live in `lib/portfolio.ts`.

- The Resume button links to `public/Nicholas_McCracken_resume.pdf` through `/Nicholas_McCracken_resume.pdf`. If you rename the file, update `profile.resume` in `lib/portfolio.ts`.
- Use each project's `github` field only for direct repository links. Do not add GitHub profile links.
- A project's optional `report` URL displays a report link instead of a repository link.
- Project dates are intentionally omitted; experience and education retain their dates.
- Visual styles: `app/globals.css`.
- Procedural 3D components: `components/HeroArtifact.tsx`.
- Site metadata: `app/layout.tsx`.

## Deploy to Vercel

Import this repository and use the Next.js preset with `npm run build`. The site uses static export (`out/`) and needs no environment variables or backend services.

## Rendering and accessibility

The cartographic SVG illustrations are local procedural artwork with coastlines, mountain ranges, forests, routes, and faint contour backgrounds. The Three.js scene is dynamically loaded, uses lightweight geometry, caps pixel ratio at 1.5, and stops continuous rendering when offscreen or the browser tab is hidden. Reduced-motion preferences disable continuous scene animation and CSS transitions. A CSS artifact remains available if WebGL is unsupported or the scene fails. Navigation, skip link, focus states, and a mobile menu support keyboard access. All runtime assets are served locally; no external models or fonts are required.

## Interactive atlas

The five hero-map landmarks are accessible anchor links with cancellable animated scrolling and destination focus. Reduced motion uses an immediate jump. The fine-pointer cursor trail is capped at 12 points, fades after 650 ms, and stops rendering when idle. The compass uses damped pointer input and a paused local animation clock to avoid jumps after scrolling back into view. The map route is continuous and uses a steady hover highlight without looping dash animations. Project banners use aligned SVG workflow diagrams for the capstones and local photographs for the marine classifier and airport robot.

## Project image sources

- Marine classifier: [NOAA Ocean Exploration, 2021 ROV Shakedown](https://oceanexplorer.noaa.gov/multimedia/okeanos-explorations-ex2103-gallery-media-sea-cucumber/). The seafloor image illustrates the project subject; it is not presented as a competition dataset sample.
- Airport robot: photograph from the [project repository](https://github.com/nicholasrmccracken/airport-task-robot).
