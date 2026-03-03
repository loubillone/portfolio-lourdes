// Variables globales
let currentFilter = "all";

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Cargar año actual
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  // Cargar habilidades
  loadSkills();

  // Cargar proyectos
  loadProjects();
  loadFilterButtons();

  // Configurar header scroll
  setupHeaderScroll();

  // Configurar smooth scroll para enlaces
  setupSmoothScroll();
}

// Cargar habilidades
function loadSkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) return;

  skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";
    skillCard.innerHTML = `
            <div class="skill-icon" style="color: ${skill.color}">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
        `;
    skillsContainer.appendChild(skillCard);
  });
}

// Cargar proyectos
function loadProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  const noProjects = document.getElementById("noProjects");

  if (!projectsGrid) return;

  // Limpiar grid
  projectsGrid.innerHTML = "";

  // Filtrar proyectos
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  if (filteredProjects.length === 0) {
    if (noProjects) noProjects.style.display = "block";
    return;
  }

  if (noProjects) noProjects.style.display = "none";

  // Crear cards de proyectos
  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-buttons">
                    <a href="${project.netlifyUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="project-link"
                       title="Ver en Netlify">
                        <i class="fas fa-external-link-alt"></i>
                        Ver Proyecto
                    </a>
                    ${
                      project.githubUrl
                        ? `
                    <a href="${project.githubUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="project-link github"
                       title="Ver código en GitHub">
                        <i class="fab fa-github"></i>
                        Código
                    </a>
                    `
                        : ""
                    }
                </div>
            </div>
        `;
    projectsGrid.appendChild(projectCard);
  });
}

// Cargar botones de filtro
function loadFilterButtons() {
  const filterButtons = document.getElementById("filterButtons");
  if (!filterButtons) return;

  const technologies = ["all", "React", "JavaScript", "CSS", "HTML"];

  technologies.forEach((tech) => {
    const button = document.createElement("button");
    button.className = `filter-btn ${tech === "all" ? "active" : ""}`;
    button.textContent = tech === "all" ? "Todos" : tech;
    button.onclick = () => filterProjects(tech);
    filterButtons.appendChild(button);
  });
}

// Filtrar proyectos
function filterProjects(filter) {
  currentFilter = filter;

  // Actualizar botones activos
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    if (btn.textContent === (filter === "all" ? "Todos" : filter)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Recargar proyectos
  loadProjects(filter);
}

// Configurar scroll del header
function setupHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Configurar smooth scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

// Función para scroll a sección (usada desde HTML)
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Toggle menú móvil
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburger");

  if (navMenu) {
    navMenu.classList.toggle("active");
  }
  if (hamburger) {
    hamburger.classList.toggle("active");
  }
}

// Manejar envío del formulario con EmailJS
async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  // Deshabilitar botón durante el envío
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    // Verificar que EmailJS esté configurado
    if (
      typeof EMAILJS_CONFIG === "undefined" ||
      EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      throw new Error(
        "EmailJS no está configurado correctamente. Por favor, configura tus credenciales en js/config.js",
      );
    }

    // Verificar que EmailJS esté cargado
    if (typeof emailjs === "undefined") {
      throw new Error(
        "EmailJS no está cargado. Verifica que el script esté incluido correctamente.",
      );
    }

    // Obtener los valores del formulario
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    // Preparar los parámetros del template con los valores del formulario
    const templateParams = {
      name: name,
      email: email,
      message: message,
      to_name: "Lourdes Billone",
    };

    // Debug: verificar que los datos estén correctos
    console.log("Enviando email con parámetros:", templateParams);

    // Validar que los campos no estén vacíos
    if (!name || !email || !message) {
      throw new Error("Por favor completa todos los campos del formulario.");
    }

    // Enviar el email usando EmailJS
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
    );

    // Éxito
    alert("¡Mensaje enviado con éxito! Te responderé pronto.");
    form.reset();
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    console.error("Detalles del error:", {
      message: error.message,
      text: error.text,
      status: error.status,
    });
    alert(
      "Hubo un error al enviar el mensaje: " +
        (error.text || error.message || "Error desconocido") +
        ". Por favor, intenta nuevamente o contáctame directamente por email.",
    );
  } finally {
    // Rehabilitar botón
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
}

// Cerrar menú móvil al hacer clic en un enlace
document.addEventListener("click", function (e) {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburger");

  if (
    e.target.closest(".nav-menu a") &&
    navMenu &&
    navMenu.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    if (hamburger) hamburger.classList.remove("active");
  }
});
