# Kilimo Next.js rewrite

This project now recreates the Kilimo homepage as a structured Next.js app instead of a raw mirrored HTML page.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Run with Docker Compose

```bash
docker compose up --build
```

Open `http://localhost:3000`.

To stop containers:

```bash
docker compose down
```

## Production check

```bash
npm run build
```

## Notes

- The original mirrored site is still available in `site/` for reference.
- The reusable app content is centralized in `lib/site-data.js`.
- Mirrored media used by the Next.js app is served from `public/uploads/`.
- `mirror-site.mjs` is still available if you want to pull the upstream site again.
