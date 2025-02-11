import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm"],
  minify: true,
  tsconfig: "tsconfig.app.json",
  clean: true,
});
