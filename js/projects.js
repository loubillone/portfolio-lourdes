// Datos de proyectos
// Puedes agregar, editar o eliminar proyectos aquí
// Los links de Netlify deben ser las URLs completas de tus proyectos desplegados

const projects = [
  {
    id: 1,
    title: "Sitio Web Profesional - Arquitecto",
    description:
      " Diseño moderno y responsive que muestra portfolio de proyectos arquitectónicos, servicios y contacto.",
    technologies: ["HTML", "CSS", "JavaScript"],
    netlifyUrl: "https://modelo-arq.netlify.app/",
    githubUrl: "https://github.com/loubillone/proyecto-arquitecto",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 2,
    title: "Dashboard de Analytics",
    description:
      "Panel de control interactivo para visualización de datos con gráficos dinámicos y reportes en tiempo real.",
    technologies: ["React", "JavaScript", "CSS"],
    netlifyUrl: "https://tu-proyecto-2.netlify.app",
    githubUrl: "https://github.com/tu-usuario/proyecto-2",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 3,
    title: "App de Tareas",
    description:
      "Aplicación de gestión de tareas con funcionalidades de crear, editar, eliminar y marcar como completadas.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    netlifyUrl: "https://tu-proyecto-3.netlify.app",
    githubUrl: "https://github.com/tu-usuario/proyecto-3",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 4,
    title: "Portfolio Personal",
    description:
      "Sitio web personal responsive desarrollado con HTML, CSS y JavaScript, mostrando proyectos y habilidades de manera elegante.",
    technologies: ["HTML", "CSS", "JavaScript"],
    netlifyUrl: "https://tu-proyecto-4.netlify.app",
    githubUrl: "https://github.com/loubillone/portfolio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 5,
    title: "Sistema de Reservas",
    description:
      "Sistema completo de reservas online con calendario interactivo, gestión de disponibilidad y notificaciones.",
    technologies: ["React", "JavaScript", "CSS"],
    netlifyUrl: "https://tu-proyecto-5.netlify.app",
    githubUrl: "https://github.com/tu-usuario/proyecto-5",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 6,
    title: "Blog Interactivo",
    description:
      "Plataforma de blog con sistema de comentarios, categorías, búsqueda y panel de administración.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    netlifyUrl: "https://tu-proyecto-6.netlify.app",
    githubUrl: "https://github.com/tu-usuario/proyecto-6",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

// Habilidades
const skills = [
  { name: "HTML5", icon: "fab fa-html5", color: "#e34c26" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#264de4" },
  { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
  { name: "React", icon: "fab fa-react", color: "#61dafb" },
  { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
];

// Exportar para uso en main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects, skills };
}
