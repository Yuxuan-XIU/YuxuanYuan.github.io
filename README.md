# Yuxuan Yuan — Academic Website

Personal academic website for Yuxuan Yuan, an astronomy PhD student at Tsinghua University studying exoplanet atmospheres, detection, and orbital dynamics.

## Content structure

- Site-wide details and research areas: `src/data/site.ts`
- Research project cards and figures: `src/data/projects.ts`
- Long-form notes and blog posts: MDX support is enabled for future additions
- Images and downloadable assets: `public/assets/`

## Local development

```sh
pnpm install
pnpm dev
```

The production site is configured for the `/YuxuanYuan.github.io/` GitHub Pages base path.

Updates pushed to `main` are built and deployed automatically with GitHub Actions.
