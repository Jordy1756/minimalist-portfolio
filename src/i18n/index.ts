import type { Locale } from "@definitions/i18n";
import es from "@locales/es.json";
import en from "@locales/en.json";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@constants/locale";

const translations = { es, en };

let currentLocale = DEFAULT_LOCALE;

export const setLocale = (locale: Locale) =>
	(currentLocale = locale && isValidLocale(locale) ? locale : DEFAULT_LOCALE);

export const getTranslations = () => translations[currentLocale] || translations[DEFAULT_LOCALE];

export const isValidLocale = (locale: Locale): locale is Locale =>
	SUPPORTED_LOCALES.includes(locale);

export const getCurrentLocale = () => currentLocale;
