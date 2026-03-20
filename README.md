# Rhanny Portfolio — GitHub Pages Ready

This is a Next.js static-export portfolio using Tailwind and shadcn/ui-style components.

## Routes

- `/`
- `/about`
- `/ai-ml-projects`
- `/articles`

## Run locally

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm install
npm run build
```

This exports a static site. Deploy the generated output from `out/`.

## Recommended repo setup

For the cleanest GitHub Pages URL, publish this from a repository named:

```text
<your-github-username>.github.io
```

If you instead publish from a project repo like `portfolio`, add `basePath` and `assetPrefix` to `next.config.ts`.
