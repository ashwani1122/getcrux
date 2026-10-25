# getcrux-next

Next.js (App Router, plain JavaScript) port of the static GetCrux clone in `C:\Users\ashwa\getcrux`.
All six pages — home, pricing, case-studies, team, scan, contact — with full visual/behavioral parity.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/globals.css` — the original stylesheet (asset URLs rewritten to `/assets/…`)
- `components/` — Header, Footer, Sprite, Behaviors (all interactive effects from `js/main.js`), ScanForm
- `app/` — one folder per route; page markup converted one-to-one from the static HTML
- `public/assets/` — images + fonts copied verbatim
