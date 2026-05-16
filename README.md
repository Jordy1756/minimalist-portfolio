# Minimalist Portfolio

Este repositorio contiene el código fuente de mi portafolio personal y currículum web. Es un proyecto diseñado bajo una filosofía minimalista, enfocado en el rendimiento, la accesibilidad y una arquitectura de código limpia.

🔗 **Demo:** [jordy756-minimalist-portfolio.vercel.app](https://jordy756-minimalist-portfolio.vercel.app/)

## 🚀 Tecnologías

Este proyecto ha sido construido utilizando tecnologías web modernas para asegurar la máxima velocidad y optimización SEO:

- **[Astro](https://astro.build/):** Framework principal para generar un sitio estático (SSG) de alto rendimiento.
- **[TypeScript](https://www.typescriptlang.org/):** Para garantizar la seguridad de tipos y la escalabilidad del código.
- **[Tailwind CSS](https://tailwindcss.com/):** Para un estilizado rápido, responsivo y mantenible.
- **[Vercel](https://vercel.com/):** Plataforma de despliegue y hosting.

## ✨ Características

- **Diseño Minimalista:** Interfaz limpia y libre de distracciones.
- **Internacionalización (i18n):** Soporte completo para Español e Inglés.
- **Responsive Design:** Totalmente adaptado a dispositivos móviles, tablets y escritorio.
- **Print Friendly:** Estilos optimizados para imprimir la página como un CV tradicional (Ctrl + P).
- **Alto Rendimiento:** Puntuaciones perfectas en Google Lighthouse.
- **Modo Oscuro/Claro:** Adaptable a las preferencias del sistema.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y organizada:

```bash
src/
├── components/     # Componentes UI reutilizables (Cards, Sections)
├── data/           # Datos del CV (JSON) separados por idioma
├── i18n/           # Configuración y diccionarios de traducción
├── layouts/        # Plantillas principales de página
├── pages/          # Rutas de la aplicación (basadas en archivos)
├── scripts/        # Scripts JavaScript
└── styles/         # Estilos globales y configuraciones de Tailwind
```

## 🛠️ Instalación y Ejecución Local

Si deseas clonar este repositorio para ver cómo está construido o ejecutarlo localmente:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Jordy1756/minimalist-portfolio.git
   cd minimalist-portfolio
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:4321`.

4. **Construir para producción:**

   ```bash
   npm run build
   ```

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE). Eres libre de usar este código como inspiración o base para tu propio portafolio, manteniendo la atribución correspondiente.

---

Desarrollado con ❤️ por [Jordy Castro](https://github.com/Jordy1756)
