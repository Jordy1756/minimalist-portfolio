// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	i18n: {
		defaultLocale: "en",
		locales: ["es", "en"],
		fallback: {
			es: "en"
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
