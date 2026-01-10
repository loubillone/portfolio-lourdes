// Datos de proyectos
// Puedes agregar, editar o eliminar proyectos aquí
// Los links de Netlify deben ser las URLs completas de tus proyectos desplegados

const projects = [
  {
    id: 1,
    title: "Sitio Web Profesional - Arquitecto",
    description:
      "Diseño moderno y responsive que muestra portfolio de proyectos arquitectónicos, servicios y contacto.",
    technologies: ["HTML", "CSS", "JavaScript"],
    netlifyUrl: "https://modelo-arq.netlify.app/",
    githubUrl: "https://github.com/loubillone/modelo-arq/tree/develop",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 2,
    title: "Sitio Web Empresarial - Petroservi",
    description:
      "El proyecto organiza de forma clara su catálogo de productos y servicios, priorizando la usabilidad y la estructura de la información.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    netlifyUrl: "https://petroservi.netlify.app/",
    githubUrl: "https://github.com/loubillone/pretoservi",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 3,
    title: "Sitio Web de Pedidos - Tito Pizzas y Pastas",
    description:
      "Sitio sobre pedidos de comida congelada, opciones de pedido y proceso de compra sencillo.",
    technologies: ["HTML", "CSS", "JavaScript"],
    netlifyUrl: "https://titopizzas.netlify.app/",
    githubUrl: "https://github.com/loubillone/titopizzas/tree/develop",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  },
  // {
  //   id: 4,
  //   title: "Portfolio Personal",
  //   description:
  //     "Sitio web personal responsive desarrollado con HTML, CSS y JavaScript, mostrando proyectos y habilidades de manera elegante.",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   netlifyUrl: "https://tu-proyecto-4.netlify.app",
  //   githubUrl: "https://github.com/loubillone/portfolio",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  // },
  // {
  //   id: 5,
  //   title: "Sistema de Reservas",
  //   description:
  //     "Sistema completo de reservas online con calendario interactivo, gestión de disponibilidad y notificaciones.",
  //   technologies: ["React", "JavaScript", "CSS"],
  //   netlifyUrl: "https://tu-proyecto-5.netlify.app",
  //   githubUrl: "https://github.com/tu-usuario/proyecto-5",
  //   image:
  //     "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  // },
  // {
  //   id: 6,
  //   title: "Blog Interactivo",
  //   description:
  //     "Plataforma de blog con sistema de comentarios, categorías, búsqueda y panel de administración.",
  //   technologies: ["React", "JavaScript", "HTML", "CSS"],
  //   netlifyUrl: "https://tu-proyecto-6.netlify.app",
  //   githubUrl: "https://github.com/tu-usuario/proyecto-6",
  //   image:
  //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  // },
];

// Habilidades
const skills = [
  { name: "HTML5", icon: "fab fa-html5", color: "#e34c26" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "#264de4" },
  { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
  { name: "React", icon: "fab fa-react", color: "#61dafb" },
  { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
  { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
];

// Exportar para uso en main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects, skills };
}
