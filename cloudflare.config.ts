import { defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "vinext-heroui-popover-repro",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-18",
  }),
});
