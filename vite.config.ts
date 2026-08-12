import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // Vercel: use Nitro (TanStack-recommended). Skip Cloudflare Workers bundle.
  cloudflare: false,
  plugins: [nitro({ preset: "vercel" })],
  tanstackStart: {
    server: {
      preset: "vercel",
    },
  },
});
