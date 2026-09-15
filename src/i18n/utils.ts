import { ui, content } from '@i18n/ui';

export const defaultLocale = 'en';
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const getCurrentLocale = (locale: string | undefined): Locale => (locale ?? defaultLocale) as Locale;

export const useTranslations = (locale: keyof typeof ui) => {
  const localizedUI: Record<string, string> = ui[locale];

  return function t(key: keyof (typeof ui)[typeof defaultLocale], vars: Record<string, string | number> = {}): string {
    const template = key in localizedUI ? localizedUI[key] : ui[defaultLocale][key];
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => String(vars[key] ?? `{{${key}}}`));
  };
};

export const useResume = (locale: Locale) => content[locale];
