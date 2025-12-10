import { defaultLang, ui } from "@i18n/ui";

export const getLangFromUrl = (url: URL) => {
	const [, lang] = url.pathname.split("/");

	return lang in ui ? (lang as keyof typeof ui) : defaultLang;
};

export const useTranslations = (lang: keyof typeof ui) => {
	return function t(key: keyof (typeof ui)[typeof defaultLang], ...args: any[]) {
		const translation = ui[lang][key] || ui[defaultLang][key];

		return typeof translation === "function"
			? (translation as (...args: any[]) => string)(...args)
			: translation;
	};
};
