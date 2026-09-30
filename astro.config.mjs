import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://yuxuan-xiu.github.io",
  base: "/YuxuanYuan.github.io",
  integrations: [mdx()],
  build: {
    format: "directory"
  }
});
