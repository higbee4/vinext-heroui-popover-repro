# Vinext + HeroUI Popover reproduction

The first request after a cold dev start reproduces the React Aria `Provider` error.
The layout's HeroUI Dropdown and the page's Popover are both needed; a Popover alone did not reproduce it.

```sh
npm install
npm run dev
```

In another terminal, request `http://localhost:3002/` once:

```sh
curl -i http://localhost:3002/
```

Expected: HTTP 500 and `Cannot read properties of undefined (reading 'Provider')` in the response and dev-server output. A later request may return HTTP 200 after Vite finishes optimizing dependencies.

To reproduce again, stop the dev server, clear only the repro's Vite/Vinext caches, then restart:

```sh
rm -rf node_modules/.vite .vinext/dev/cache
npm run dev
```

The Cloudflare Vite plugin and `cloudflare.config.ts` Worker entrypoint are included; no Cloudflare credentials or remote bindings are needed.
