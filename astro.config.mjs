// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	site: "https://jordy756-minimalist-portfolio.vercel.app",

	adapter: vercel(),

	i18n: {
		defaultLocale: "en",
		locales: ["es", "en"],
		fallback: { es: "en" },
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
			fallbackType: "rewrite"
		}
	},

	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Nunito Sans",
				cssVariable: "--font-nunito-sans",
				weights: [400, 600, 700, 800],
				styles: ["normal"],
				subsets: ["latin"],
				display: "swap",
				fallbacks: ["system-ui", "sans-serif"],
				unicodeRange: ["U+0020-007F", "U+00A0-017F"]
			}
		]
	},

	vite: {
		plugins: [tailwindcss()]
	}
});
