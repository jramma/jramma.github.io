import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jramma.github.io/",
  base: "/",
  integrations: [
    starlight({
      title: "JRAMMA",
      social: {
        github: "https://github.com/jramma",
      },
      sidebar: [
        {
          label: "Guía",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Guía de jramma",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    sitemap(),
    tailwind(),
    icon(),
  ],
});
