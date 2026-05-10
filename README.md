# Portfolio — Full Stack Developer Landing

A modern, dark-mode portfolio landing page styled like a premium SaaS startup site: glassmorphism, gradient accents, smooth motion, and a fully responsive layout.

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server (Turbopack)   |
| `npm run build`| Production build        |
| `npm run start`| Run production server    |
| `npm run lint` | ESLint                   |

## Project structure

- `src/app/` — App Router entry (`layout.tsx`, `page.tsx`, global styles)
- `src/components/layout/` — Navbar and layout-level UI
- `src/components/sections/` — Page sections (Hero, Services, Projects, etc.)
- `src/components/ui/` — Reusable primitives (glass cards, headings, background)
- `src/lib/constants.ts` — Editable content (services, projects, links, FAQ)

## Customize

1. Update copy and lists in `src/lib/constants.ts`.
2. Adjust branding and SEO in `src/app/layout.tsx` (`metadata`, `metadataBase`, Open Graph URLs).
3. Replace contact email and social URLs in `constants.ts` / `Contact`.
4. Add a real resume: put `resume.pdf` in `public/` or replace `src/app/resume/route.ts`.

## Resume download

The footer links to **`/resume`**, implemented as a route handler for a placeholder PDF. Swap this for your real asset when ready.

## Publish to GitHub

This project’s Git remote is set to **`https://github.com/sid-deve/portfolio.git`**.

1. Create an empty repository named **`portfolio`** under **[sid-deve](https://github.com/sid-deve)** (no README/license/gitignore templates—this repo already has them).
2. Sign in with the GitHub CLI once (recommended):

   ```bash
   "C:\Program Files\GitHub CLI\gh.exe" auth login
   ```

   Or authenticate HTTPS pushes via Git Credential Manager when Git prompts you.
3. Push the `main` branch:

   ```bash
   git push -u origin main
   ```

**Alternative (CLI-only):** from this folder, after `gh auth login`, you can run:

```bash
"C:\Program Files\GitHub CLI\gh.exe" repo create portfolio --public --source=. --remote=origin --push
```

If `origin` already exists (as it does here), either push after creating the empty repo on GitHub as above, or remove `origin` first (`git remote remove origin`) and rerun `repo create` with `--remote=origin`.

## Author

Repository intended for **[github.com/sid-deve](https://github.com/sid-deve)** (`portfolio`).

## License

This project is provided as-is for personal portfolio use. Add a license file if you intend to open-source it under specific terms.
