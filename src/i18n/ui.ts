import en from '@data/en.json';
import es from '@data/es.json';

const sections = {
  en: {
    'sections.hero.imageAlt':
      'Black and white portrait of Yordi Castro Rojas posing in a dark overcoat against a wall with geometric shadows from natural light.',
    'sections.aboutMe.title': 'About me',
    'sections.experience.title': 'Experience',
    'sections.projects.title': 'Projects',
    'sections.education.title': 'Education',
    'sections.certificates.title': 'Certificates',
    'sections.skills.title': 'Skills',
  },
  es: {
    'sections.hero.imageAlt':
      'Retrato en blanco y negro de Yordi Castro Rojas posando con un abrigo oscuro frente a una pared con sombras geométricas de luz natural.',
    'sections.aboutMe.title': 'Sobre mí',
    'sections.experience.title': 'Experiencia',
    'sections.projects.title': 'Proyectos',
    'sections.education.title': 'Educación',
    'sections.certificates.title': 'Certificados',
    'sections.skills.title': 'Habilidades',
  },
} as const;

const home = {
  en: {
    'home.meta.title': 'Yordi Castro Rojas | Full Stack Developer Portfolio',
    'home.meta.description': 'Full Stack Developer Portfolio by Yordi Castro Rojas',
  },
  es: {
    'home.meta.title': 'Yordi Castro Rojas | Portafolio de Desarrollador Full Stack',
    'home.meta.description': 'Portafolio de Desarrollador Full Stack de Yordi Castro Rojas',
  },
} as const;

const actions = {
  en: {
    'actions.viewProject': 'View project',
    'actions.viewRepo': 'View repository',
    'actions.viewCertificate': 'View certificate',
    'actions.downloadResume': 'Download resume',
    'actions.back': 'Go back',
  },
  es: {
    'actions.viewProject': 'Ver proyecto',
    'actions.viewRepo': 'Ver repositorio',
    'actions.viewCertificate': 'Ver certificado',
    'actions.downloadResume': 'Descargar CV',
    'actions.back': 'Volver',
  },
} as const;

const labels = {
  en: {
    'labels.issuer': 'Issuer',
    'labels.present': 'Present',
  },
  es: {
    'labels.issuer': 'Emisor',
    'labels.present': 'Actualidad',
  },
} as const;

const notFound = {
  en: {
    'notFound.title': '404 — Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
    'notFound.back': 'Go back',
    'notFound.meta.title': '404 — Page Not Found | Yordi Castro',
    'notFound.meta.description':
      "The page you're looking for doesn't exist. Return home to see experience, projects, and certifications.",
  },
  es: {
    'notFound.title': '404 — No Encontrado',
    'notFound.description': 'La página que estás buscando no existe.',
    'notFound.back': 'Volver',
    'notFound.meta.title': '404 — Página No Encontrada | Yordi Castro',
    'notFound.meta.description':
      'La página que buscas no existe. Vuelve al inicio para ver experiencia, proyectos y certificaciones.',
  },
} as const;

const aria = {
  en: {
    'aria.hero.email': 'Send an email to {{name}}',
    'aria.hero.network': "View {{name}}'s {{network}} profile",
    'aria.hero.resume': "Download {{name}}'s resume in PDF",
    'aria.project.demo': 'View {{name}} live demo in a new tab',
    'aria.project.repo': 'View {{name}} repository on GitHub in a new tab',
    'aria.certificate': 'View {{name}} certificate issued by {{issuer}}',
    'aria.home': "Go to {{name}}'s portfolio home",
  },
  es: {
    'aria.hero.email': 'Enviar un correo electrónico a {{name}}',
    'aria.hero.network': 'Ver el perfil de {{name}} en {{network}}',
    'aria.hero.resume': 'Descargar el currículum de {{name}} en PDF',
    'aria.project.demo': 'Ver demo en vivo del proyecto {{name}} en una nueva pestaña',
    'aria.project.repo': 'Ver repositorio de {{name}} en GitHub en una nueva pestaña',
    'aria.certificate': 'Ver el certificado de {{name}} emitido por {{issuer}}',
    'aria.socialProfile': 'Visitar mi perfil de {{network}}',
    'aria.home': 'Ir al inicio del portafolio de {{name}}',
    'aria.notFound': 'Página no encontrada',
  },
} as const;

export const ui = {
  en: {
    ...sections.en,
    ...home.en,
    ...actions.en,
    ...labels.en,
    ...notFound.en,
    ...aria.en,
  },
  es: {
    ...sections.es,
    ...home.es,
    ...actions.es,
    ...labels.es,
    ...notFound.es,
    ...aria.es,
  },
} as const;

export const content = { en, es } as const;
