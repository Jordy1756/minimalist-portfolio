import es from "@locales/es.json";
import en from "@locales/en.json";

const translations = { es, en };

export const getTranslations = (locale: string) =>
	translations[locale as keyof typeof translations] || translations.en;
