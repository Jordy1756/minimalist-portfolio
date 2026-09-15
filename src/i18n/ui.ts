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

const meta = {
  en: {
    'meta.description': 'Full Stack Developer portfolio showcasing experience, projects, and certifications.',
    'meta.ogImage':
      'https://res.cloudinary.com/dygwpgeq9/image/upload/v1772054096/minimalist_portfolio_en_og_img_ow7ugd.webp',
  },
  es: {
    'meta.description': 'Portafolio de Desarrollador Full Stack con experiencia, proyectos y certificaciones.',
    'meta.ogImage':
      'https://res.cloudinary.com/dygwpgeq9/image/upload/v1772054097/minimalist_portfolio_es_og_img_epye2p.webp',
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
  },
  es: {
    'notFound.title': '404 — No Encontrado',
    'notFound.description': 'La página que estás buscando no existe.',
    'notFound.back': 'Volver',
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
    'aria.hero.network': "Ver el perfil de {{name}} en {{network}}",
    'aria.hero.resume': 'Descargar el currículum de {{name}} en PDF',
    'aria.project.demo': 'Ver demo en vivo del proyecto {{name}} en una nueva pestaña',
    'aria.project.repo': 'Ver repositorio de {{name}} en GitHub en una nueva pestaña',
    'aria.certificate': 'Ver el certificado de {{name}} emitido por {{issuer}}',
    'aria.home': 'Ir al inicio del portafolio de {{name}}',
  },
} as const;

export const ui = {
  en: {
    ...sections.en,
    ...meta.en,
    ...actions.en,
    ...labels.en,
    ...notFound.en,
    ...aria.en,
  },
  es: {
    ...sections.es,
    ...meta.es,
    ...actions.es,
    ...labels.es,
    ...notFound.es,
    ...aria.es,
  },
} as const;

export const content = { en, es } as const;
