// Datos de proyectos
// Puedes agregar, editar o eliminar proyectos aquí
// Los links de Netlify deben ser las URLs completas de tus proyectos desplegados

const projects = [
  {
    id: 1,
    title: 'Proyecto E-commerce',
    description: 'Aplicación de comercio electrónico desarrollada con React. Incluye carrito de compras, autenticación de usuarios y panel de administración.',
    technologies: ['React', 'CSS', 'JavaScript'],
    netlifyUrl: 'https://tu-proyecto-1.netlify.app',
    githubUrl: 'https://github.com/tu-usuario/proyecto-1',
    image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=E-commerce'
  },
  {
    id: 2,
    title: 'Dashboard de Analytics',
    description: 'Panel de control interactivo para visualización de datos con gráficos dinámicos y reportes en tiempo real.',
    technologies: ['React', 'JavaScript', 'CSS'],
    netlifyUrl: 'https://tu-proyecto-2.netlify.app',
    githubUrl: 'https://github.com/tu-usuario/proyecto-2',
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Dashboard'
  },
  {
    id: 3,
    title: 'App de Tareas',
    description: 'Aplicación de gestión de tareas con funcionalidades de crear, editar, eliminar y marcar como completadas.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    netlifyUrl: 'https://tu-proyecto-3.netlify.app',
    githubUrl: 'https://github.com/tu-usuario/proyecto-3',
    image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Todo+App'
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    description: 'Sitio web personal responsive desarrollado con React, mostrando proyectos y habilidades de manera elegante.',
    technologies: ['React', 'CSS', 'JavaScript'],
    netlifyUrl: 'https://tu-proyecto-4.netlify.app',
    githubUrl: 'https://github.com/tu-usuario/proyecto-4',
    image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Portfolio'
  },
  {
    id: 5,
    title: 'Sistema de Reservas',
    description: 'Sistema completo de reservas online con calendario interactivo, gestión de disponibilidad y notificaciones.',
    technologies: ['React', 'JavaScript', 'CSS'],
    netlifyUrl: 'https://tu-proyecto-5.netlify.app',
    githubUrl: 'https://github.com/tu-usuario/proyecto-5',
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Reservas'
  },
  {
    id: 6,
    title: 'Blog Interactivo',
    description: 'Plataforma de blog con sistema de comentarios, categorías, búsqueda y panel de administración.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    netlifyUrl: 'https://tu-proyecto-6.netlify.app',
    githubUrl: 'https://github.com/tu-usuario/proyecto-6',
    image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Blog'
  }
];

// Habilidades
const skills = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#264de4' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
  { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
];

// Exportar para uso en main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projects, skills };
}

