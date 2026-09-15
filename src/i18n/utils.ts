import { ui, content } from '@i18n/ui.ts';

export const defaultLocale = 'en';
export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const getCurrentLocale = (locale: string | undefined): Locale => {
  return (locale ?? defaultLocale) as Locale;
};

export const useTranslations = (locale: keyof typeof ui) => {
  const localizedUI: Record<string, string> = ui[locale];

  return function t(key: keyof (typeof ui)[typeof defaultLocale]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLocale][key];
  };
};

export const useContentTranslations = (locale: Locale) => content[locale];
