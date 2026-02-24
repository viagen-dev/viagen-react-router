import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { viagen } from "viagen";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    viagen({
      editable: [
        "./app",
        "./public",
        "react-router.config.ts",
        "vite.config.ts",
        "tsconfig.json",
        "README.md",
      ],
    }),
  ],
});
