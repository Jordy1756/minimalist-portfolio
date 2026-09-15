import en from '@data/en.json';
import es from '@data/es.json';

const hero = {
  en: {
    'hero.email.aria': 'Send me an email',
    'hero.linkedIn.aria': 'View my profile',
    'hero.github.aria': 'View my GitHub profile',
    'hero.resume.aria': 'Download my resume',
  },
  es: {
    'hero.email.aria': 'Enviar correo electrónico',
    'hero.linkedIn.aria': 'Ver mi perfil',
    'hero.github.aria': 'Ver mi perfil de GitHub',
    'hero.resume.aria': 'Descargar mi CV',
  },
};

const meta = {
  en: {
    'meta.og.site_name': 'Alura Encryptor',
    'meta.og.image.alt': 'Preview of Alura Encryptor for encrypting and decrypting texts',
    'meta.og.locale': 'en_US',
  },
  es: {
    'meta.og.site_name': 'Alura Encryptor',
    'meta.og.image.alt': 'Vista previa de Alura Encryptor para cifrar y descifrar textos',
    'meta.og.locale': 'es_ES',
  },
};

const home = {
  en: {
    'home.title': 'Jordy Castro | Portfolio',
    'home.description': 'Description',
  },
  es: {
    'home.title': 'Jordy Castro | Portafolio',
    'home.description': 'Descripción',
  },
};

const notFound = {
  en: {
    'notFound.title': '404 — Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
    'notFound.back': 'Go back',
  },
  es: {
    'notFound.title': '404 — No Encontrado',
    'notFound.description': 'La página que estás buscando no existe.',
    'notFound.back': 'Volver',
  },
};

// 'hero.email.aria': (name: string, email: string) => `Enviar un correo electrónico a ${name} al correo ${email}`,
// 'hero.profile.aria': (name: string, network: string) => `Visitar el perfil de ${name} en ${network}`,
// 'hero.resume.aria': (name: string) => `Descargar el currículum de ${name} en PDF`,

export const ui = {
  en: {
    ...hero.en,
    ...meta.en,
    ...home.en,
    ...notFound.en,
  },
  es: {
    ...hero.es,
    ...meta.es,
    ...home.es,
    ...notFound.es,
  },
} as const;

export const content = { en, es } as const;
