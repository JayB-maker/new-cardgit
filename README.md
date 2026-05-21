# CardGit Website

Marketing website for CardGit, built with Next.js, React, Tailwind CSS, and shadcn-style UI components.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and update the values as needed.

The `/pricing` page reads pricing from server environment variables. Visitors detected from Nigeria through request country headers see naira prices; all other visitors default to pound sterling.

The demo modal posts to `NEXT_PUBLIC_DEMO_ENDPOINT` when it is configured. Until then, the form shows a local success state so the UI can be tested.

## Useful Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Project Structure

- `app/` contains Next.js routes, metadata, and global styles.
- `components/sections/` contains the page sections, header, footer, pricing UI, and demo modal.
- `components/ui/` contains shared UI primitives.
- `public/assets/` contains CardGit visual assets used across the site.
