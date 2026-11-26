# Rajesh M — AI & Machine Learning Engineer Portfolio

Minimal dark developer portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

- **Repository:** [Rajeshm2006/Rajesh-PortFolilo](https://github.com/Rajeshm2006/Rajesh-PortFolilo)
- **Live Site (GitHub Pages):** https://rajeshm2006.github.io/Rajesh-PortFolilo/

## Tech Stack

- **Frontend:** React, TypeScript, Vite, React Router (`HashRouter`)
- **Styling:** Tailwind CSS (`@tailwindcss/vite`)
- **Animations:** Framer Motion (with `prefers-reduced-motion` support)
- **Icons:** Lucide React

## Project Structure

```text
public/
  favicon.svg         # Site favicon
  resume.pdf          # Downloadable resume PDF
src/
  assets/images/      # Profile portrait and custom project SVG visuals
  components/         # Reusable UI sections & motion primitives
    About.tsx
    BrandIcons.tsx
    Certifications.tsx
    Contact.tsx
    Education.tsx
    Footer.tsx
    Github.tsx
    Hero.tsx
    MotionPrimitives.tsx
    Navbar.tsx
    Projects.tsx
    Skills.tsx
  data/               # Editable portfolio content
    certifications.ts
    personal.ts
    projects.ts
    skills.ts
  pages/
    Home.tsx
    ProjectDetails.tsx
  App.tsx
  index.css
  main.tsx
```

## Customization

All personal details, links, skills, projects, and certifications are maintained in `src/data/`:

- `src/data/personal.ts` — Name, title, bio, education, contact info, profile image, resume URL, and optional form endpoint (`contactEndpoint`)
- `src/data/skills.ts` — Categorized technical skills
- `src/data/projects.ts` — Featured projects, metrics, and repository links
- `src/data/certifications.ts` — Verified certifications

## Local Development

```bash
npm install
npm run dev
```

## Type-Check & Production Build

```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository includes `.github/workflows/deploy.yml` and uses relative asset paths (`base: './'`) in `vite.config.ts` with `HashRouter`.

1. Open **Settings → Pages** in `Rajeshm2006/Rajesh-PortFolilo`.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Every push to `main` builds and deploys `./dist` to https://rajeshm2006.github.io/Rajesh-PortFolilo/.
