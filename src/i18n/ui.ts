/**
 * UI strings for the portfolio, separated by locale.
 *
 * Each top-level group is a concern:
 *   - sections: titles/labels rendered as <h2>/<h1> in each section.
 *   - meta:     <head> tags (og:* , twitter:*, site description).
 *   - ui:       short UI strings (button labels, generic words).
 *   - aria:     aria-label templates with {var} placeholders.
 *
 * Use `format()` (from utils.ts) to interpolate aria templates at render time.
 */
const sections = {
  en: {
    hero: {
      title: 'Yordi Castro Rojas',
      subtitle: 'Full Stack Developer | Clean Architecture, Microservices, React, Astro, .NET, Node.js',
    },
    aboutMe: { title: 'About me' },
    experience: { title: 'Experience' },
    projects: { title: 'Projects' },
    education: { title: 'Education' },
    certificates: { title: 'Certificates' },
    skills: { title: 'Skills' },
  },
  es: {
    hero: {
      title: 'Yordi Castro Rojas',
      subtitle: 'Desarrollador Full Stack | Clean Architecture, Microservicios, React, Astro, .NET y Node.js',
    },
    aboutMe: { title: 'Sobre mí' },
    experience: { title: 'Experiencia' },
    projects: { title: 'Proyectos' },
    education: { title: 'Educación' },
    certificates: { title: 'Certificados' },
    skills: { title: 'Habilidades' },
  },
} as const;

const meta = {
  en: {
    siteName: 'Jordy Castro | Portfolio',
    ogImage:
      'https://res.cloudinary.com/dygwpgeq9/image/upload/v1772054096/minimalist_portfolio_en_og_img_ow7ugd.webp',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    description: 'Full Stack Developer portfolio showcasing experience, projects, and certifications.',
  },
  es: {
    siteName: 'Jordy Castro | Portafolio',
    ogImage:
      'https://res.cloudinary.com/dygwpgeq9/image/upload/v1772054097/minimalist_portfolio_es_og_img_epye2p.webp',
    ogLocale: 'es_ES',
    twitterCard: 'summary_large_image',
    description: 'Portafolio de Desarrollador Full Stack con experiencia, proyectos y certificaciones.',
  },
} as const;

const ui = {
  en: {
    'notFound.title': '404 — Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
    'notFound.back': 'Go back',
    'actions.viewProject': 'View project',
    'actions.viewRepo': 'View repository',
    'actions.viewCertificate': 'View certificate',
    'actions.downloadResume': 'Download resume',
    'actions.back': 'Go back',
    'labels.issuer': 'Issuer',
    'labels.present': 'Present',
  },
  es: {
    'notFound.title': '404 — No Encontrado',
    'notFound.description': 'La página que estás buscando no existe.',
    'notFound.back': 'Volver',
    'actions.viewProject': 'Ver proyecto',
    'actions.viewRepo': 'Ver repositorio',
    'actions.viewCertificate': 'Ver certificado',
    'actions.downloadResume': 'Descargar CV',
    'actions.back': 'Volver',
    'labels.issuer': 'Emisor',
    'labels.present': 'Actualidad',
  },
} as const;

const aria = {
  en: {
    heroEmail: 'Send an email to {name}',
    heroProfile: 'View my {network} profile',
    heroResume: "Download {name}'s resume in PDF",
    projectLive: 'View {name} live demo in a new tab',
    projectRepo: 'View {name} repository on GitHub in a new tab',
    certificate: 'View {name} certificate issued by {issuer}',
    socialProfile: 'Visit my {network} profile',
    home: "Go to {name}'s portfolio home",
    notFound: 'Page not found',
  },
  es: {
    heroEmail: 'Enviar un correo electrónico a {name}',
    heroProfile: 'Ver mi perfil de {network}',
    heroResume: 'Descargar el currículum de {name} en PDF',
    projectLive: 'Ver demo en vivo del proyecto {name} en una nueva pestaña',
    projectRepo: 'Ver repositorio de {name} en GitHub en una nueva pestaña',
    certificate: 'Ver el certificado de {name} emitido por {issuer}',
    socialProfile: 'Visitar mi perfil de {network}',
    home: 'Ir al inicio del portafolio de {name}',
    notFound: 'Página no encontrada',
  },
} as const;

export const translations = {
  en: { sections: sections.en, meta: meta.en, ui: ui.en, aria: aria.en },
  es: { sections: sections.es, meta: meta.es, ui: ui.es, aria: aria.es },
} as const;
