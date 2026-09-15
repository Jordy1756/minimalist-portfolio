import { translations } from './ui';
import en from '@data/en.json';
import es from '@data/es.json';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries = { en, es } as const;

export const format = (template: string, vars: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));

export const getCurrentLocale = (locale: string | undefined): Locale =>
  (locales as readonly string[]).includes(locale ?? '') ? (locale as Locale) : defaultLocale;

export const useTranslations = (locale: Locale) => {
  const tr = translations[locale] ?? translations[defaultLocale];
  const fallback = translations[defaultLocale];

  return {
    t: <K extends keyof typeof tr.ui & string>(key: K): string => tr.ui[key] ?? fallback.ui[key] ?? key,

    aria: <K extends keyof typeof tr.aria & string>(key: K, vars: Record<string, string | number> = {}): string =>
      format(tr.aria[key] ?? fallback.aria[key] ?? key, vars),

    sections: tr.sections,
    meta: tr.meta,
  };
};

export const useContent = (locale: Locale) => dictionaries[locale];
