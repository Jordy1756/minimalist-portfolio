// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		fallback: {
			en: "es"
		},
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
			fallbackType: "rewrite"
		}
	},
	vite: {
		plugins: [tailwindcss()]
	}
});
