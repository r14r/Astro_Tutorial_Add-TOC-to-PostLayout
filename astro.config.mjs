import { defineConfig } from "astro/config";

import markdownConfig from './markdown.config'

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sectionize from "@hbsnow/rehype-sectionize";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://via-internet.de/blog",
  integrations: [mdx(), sitemap(), preact()],
  integrations: [
    mdx({
      ...markdownConfig,
      extendPlugins: false,
    }),
  ],
  markdown: {
    markdownConfig,
    rehypePlugins: [sectionize],
  },
  output: "server",
});
