// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel(),
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		fallback: {
			en: "es"
		},
		routing: {
			prefixDefaultLocale: true,
			fallbackType: "rewrite"
		}
	},
	vite: {
		plugins: [tailwindcss()]
	}
});
