# Vinext + HeroUI Popover reproduction

This app combines a HeroUI `Dropdown` in the client navigation with a HeroUI `Popover`, `Button`, and `Tooltip` on the page. A cold server render can fail with a React Aria `Provider` error.

```sh
npm install
npm run dev
```

In another terminal, request `http://localhost:3002/` once:

```sh
curl -i http://localhost:3002/
```

To reproduce again, stop the dev server, clear only the repro's Vite/Vinext caches, then restart:

```sh
rm -rf node_modules/.vite .vinext/dev/cache
npm run dev
```

Request the page once after the server is ready. In the latest macOS test matrix (2026-11-18), the first request returned HTTP 500 with `Cannot read properties of undefined (reading 'Provider')` in 2/2 cold starts for each combination:

| Node | Cloudflare Vite plugin | Cold starts failing |
| --- | --- | ---: |
| 24.22.0 | Enabled | 2/2 |
| 24.22.0 | Disabled | 2/2 |
| 26.13.0 | Enabled | 2/2 |
| 26.13.0 | Disabled | 2/2 |

With the plugin disabled, the test retained `cloudflare.config.ts` and used a Vite config containing only `vinext()`. A subsequent request may return HTTP 200; results have varied across earlier runs.

The Cloudflare Vite plugin and `cloudflare.config.ts` Worker entrypoint are included; no Cloudflare credentials or remote bindings are needed.
