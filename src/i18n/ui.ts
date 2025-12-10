export const defaultLang = "en";

export const ui = {
	es: {
		"home.head.title": (name: string) => `Portafolio de ${name}`,
		"hero.email.aria": (name: string, email: string) =>
			`Enviar un correo electrónico a ${name} al correo ${email}`,
		"hero.profile.aria": (name: string, network: string) =>
			`Visitar el perfil de ${name} en ${network}`,
		"hero.resume.aria": (name: string) => `Ver el currículum de ${name} en PDF`,
		"aboutMe.title": "Sobre mí",
		"experience.title": "Experiencia",
		"projects.title": "Proyectos",
		"projects.card.project.aria": (name: string) => `Ver el proyecto ${name} en una nueva pestaña`,
		"projects.card.github.aria": (name: string) =>
			`Ver el repositorio de GitHub del proyecto ${name} en una nueva pestaña`,
		"education.title": "Educación",
		"certificates.title": "Certificados",
		"certificates.card.aria": (name: string, issuer: string) =>
			`Ver el certificado ${name} emitido por ${issuer} en una nueva pestaña`,
		"skills.title": "Habilidades",
		"404.head.title": "404 - Página no encontrada",
		"404.subtitle": "Página no encontrada",
		"404.description": "La página que buscas no existe o ha sido movida.",
		"404.homeButton": "Ir a Inicio"
	},
	en: {
		"home.head.title": (name: string) => `${name}'s Portfolio`,
		"hero.email.aria": (name: string, email: string) => `Send an email to ${name} at ${email}`,
		"hero.profile.aria": (name: string, network: string) => `Visit ${name}'s profile on ${network}`,
		"hero.resume.aria": (name: string) => `View ${name}'s resume in PDF`,
		"aboutMe.title": "About Me",
		"experience.title": "Experience",
		"projects.title": "Projects",
		"projects.card.project.aria": (name: string) => `View the project ${name} in a new tab`,
		"projects.card.github.aria": (name: string) =>
			`View the GitHub repository of the project ${name} in a new tab`,
		"education.title": "Education",
		"certificates.title": "Certificates",
		"certificates.card.aria": (name: string, issuer: string) =>
			`View the ${name} certificate issued by ${issuer} in a new tab`,
		"skills.title": "Skills",
		"404.head.title": "404 - Page not found",
		"404.subtitle": "Page Not Found",
		"404.description": "The page you are looking for does not exist or has been moved.",
		"404.homeButton": "Go to Home"
	}
} as const;
