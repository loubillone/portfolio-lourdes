const PRESUPUESTOS = {
  "plataforma-educativa": {
    password: "educativa2026",

    developerName: "Lourdes Billone",
    role: "Web Developer",
    date: "13/07/2026",

    eyebrow: "Propuesta de desarrollo",
    projectName: "Plataforma Educativa Personalizada",

    about: [
      "En un contexto donde la educación digital continúa creciendo, contar con una plataforma propia permite ofrecer cursos, materiales y recursos especializados de manera organizada, brindando una experiencia de aprendizaje accesible y profesional para docentes, familias y profesionales de la educación.",
      "La plataforma estará orientada a la comercialización de cursos online y materiales educativos, permitiendo además su evolución futura mediante nuevas funcionalidades y contenidos.",
    ],

    objective: [
      "Desarrollar una plataforma educativa moderna, intuitiva y adaptable a distintos dispositivos, que permita la venta de cursos online, la gestión de usuarios y la distribución de contenido educativo de forma segura y escalable.",
    ],

    proposals: [
      {
        tag: "Propuesta 1",
        name: "Plataforma Educativa Inicial",
        description:
          "Desarrollo de una plataforma web con las siguientes funcionalidades:",
        categories: [
          {
            title: "Sitio institucional",
            icon: "fas fa-building",
            items: [
              "Inicio",
              "Sobre la profesional",
              "Cursos",
              "Libro",
              "Contacto",
            ],
          },
          {
            title: "Plataforma de alumnos",
            icon: "fas fa-user-graduate",
            items: [
              "Registro de usuarios",
              "Inicio de sesión",
              "Recuperación de contraseña",
              "Perfil del alumno",
            ],
          },
          {
            title: "Cursos",
            icon: "fas fa-book-open",
            items: [
              "Catálogo de cursos",
              "Organización por categorías",
              "Página individual de cada curso",
              "Video de presentación",
              "Descripción",
              "Temario",
              "Público objetivo",
              "Precio",
            ],
          },
          {
            title: "Compra de cursos",
            icon: "fas fa-cart-shopping",
            items: [
              "Integración con pasarela de pago",
              "Acceso automático luego de la compra",
              "Acceso temporal configurable",
            ],
          },
          {
            title: "Plataforma de aprendizaje",
            icon: "fas fa-graduation-cap",
            items: [
              "Visualización de videos",
              "Organización por módulos",
              "Descarga de material PDF",
            ],
          },
          {
            title: "Panel administrador",
            icon: "fas fa-gauge-high",
            items: [
              "Gestión de cursos",
              "Gestión de usuarios",
              "Gestión de materiales",
            ],
          },
        ],
        includes: [
          "Diseño personalizado",
          "Sitio responsive (adaptado a celular, tablet y PC)",
          "Optimización de rendimiento",
          "Integración con plataforma externa para alojamiento de videos (Vimeo o similar)",
        ],
        deliverables: [
          "Plataforma completamente funcional",
          "Panel de administración",
          "Panel para alumnos",
          "Diseño responsive",
          "Código optimizado",
          "Implementación en producción",
        ],
        time: "8 a 10 semanas",
        priceLabel: "Desarrollo y diseño de la plataforma",
        price: "$2.250.000",
        priceNote: "(dos millones doscientos cincuenta mil pesos argentinos)",
      },
      {
        tag: "Propuesta 2",
        name: "Plataforma Educativa Completa",
        description: "Incluye todo lo anterior, más:",
        categories: [
          {
            title: "Sistema de suscripciones",
            icon: "fas fa-crown",
            items: ["Plan Básico", "Plan Premium", "Plan Institucional"],
          },
          {
            title: "Biblioteca digital",
            icon: "fas fa-book",
            items: ["Organización por categorías", "Material descargable"],
          },
          {
            title: "Adaptaciones curriculares",
            icon: "fas fa-puzzle-piece",
            items: [
              "Organización por condición",
              "Organización por grado",
              "Organización por materia",
            ],
          },
          {
            title: "Beneficios para suscriptores",
            icon: "fas fa-gift",
            items: ["Material exclusivo", "Descuentos en cursos"],
          },
          {
            title: "Consultas",
            icon: "fas fa-envelope-open-text",
            items: [
              "Formulario interno",
              "Envío automático por correo electrónico",
              "Plataforma preparada para futuras ampliaciones",
            ],
          },
        ],
        time: "12 a 16 semanas",
        priceLabel: "Desarrollo completo de la plataforma",
        price: "$4.500.000",
        priceNote: "(cuatro millones quinientos mil pesos argentinos)",
      },
    ],

    payment: [
      "30% al iniciar el proyecto.",
      "40% al presentar la versión funcional para revisión.",
      "30% al finalizar el desarrollo y realizar la entrega.",
    ],

    maintenance: {
      description:
        "Se podrá contratar un servicio de mantenimiento mensual que incluirá:",
      items: [
        "Soporte técnico",
        "Corrección de errores",
        "Actualizaciones menores",
        "Carga de nuevos cursos y materiales",
        "Copias de seguridad",
        "Monitoreo básico de funcionamiento",
      ],
      value: "A definir según las necesidades del proyecto",
    },

    observations: [
      "El presupuesto incluye el desarrollo y diseño de la plataforma.",
      "No incluye costos de dominio, hosting, plataforma de alojamiento de videos (Vimeo o similar), pasarela de pagos, correo electrónico profesional ni otros servicios externos.",
      "El contenido (textos, imágenes, videos y material educativo) deberá ser provisto por la cliente.",
      "La carga inicial de cursos y materiales podrá cotizarse por separado, si fuera necesaria.",
      "Cualquier funcionalidad adicional no contemplada en esta propuesta será presupuestada aparte.",
      "Los tiempos estimados comienzan a contar una vez aprobado el presupuesto y entregado todo el material necesario para el desarrollo.",
    ],

    validity: "7 días a partir de la fecha de envío",

    contact: {
      email: "loubillone.develop@gmail.com",
      web: "https://lourdesbillonedev.netlify.app/",
      whatsapp: "3815187503",
    },
  },

  /* 
  "cliente-ejemplo": {
    password: "cambiar-esta-clave",
    developerName: "Lourdes Billone",
    role: "Web Developer",
    date: "01/01/2026",
    eyebrow: "Propuesta de desarrollo",
    projectName: "Nombre del proyecto",
    about: ["Texto sobre el proyecto..."],
    objective: ["Objetivo del proyecto..."],
    proposals: [
      {
        tag: "Propuesta 1",
        name: "Nombre de la propuesta",
        description: "Descripción...",
        categories: [
          { title: "Categoría", icon: "fas fa-star", items: ["Item 1", "Item 2"] }
        ],
        includes: ["..."],
        deliverables: ["..."],
        time: "X semanas",
        priceLabel: "Desarrollo",
        price: "$0",
        priceNote: "(en letras)"
      }
    ],
    payment: ["..."],
    maintenance: { description: "...", items: ["..."], value: "A definir" },
    observations: ["..."],
    validity: "7 días a partir de la fecha de envío",
    contact: {
      email: "loubillone.develop@gmail.com",
      web: "https://lourdesbillonedev.netlify.app/",
      whatsapp: "3815187503"
    }
  },
  */
};
