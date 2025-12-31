// Variables globales
let currentFilter = 'all';

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Cargar año actual
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
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
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer) return;

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
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
function loadProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    const noProjects = document.getElementById('noProjects');
    
    if (!projectsGrid) return;

    // Limpiar grid
    projectsGrid.innerHTML = '';

    // Filtrar proyectos
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.technologies.includes(filter));

    if (filteredProjects.length === 0) {
        if (noProjects) noProjects.style.display = 'block';
        return;
    }

    if (noProjects) noProjects.style.display = 'none';

    // Crear cards de proyectos
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)';">
                <div class="project-overlay">
                    <a href="${project.netlifyUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="project-link"
                       title="Ver en Netlify">
                        <i class="fas fa-external-link-alt"></i>
                        Ver Proyecto
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-buttons">
                    <a href="${project.netlifyUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="btn-project-netlify"
                       title="Ver proyecto">
                        <i class="fas fa-external-link-alt"></i>
                        Ver Proyecto
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Cargar botones de filtro
function loadFilterButtons() {
    const filterButtons = document.getElementById('filterButtons');
    if (!filterButtons) return;

    const technologies = ['all', 'React', 'JavaScript', 'CSS', 'HTML'];
    
    technologies.forEach(tech => {
        const button = document.createElement('button');
        button.className = `filter-btn ${tech === 'all' ? 'active' : ''}`;
        button.textContent = tech === 'all' ? 'Todos' : tech;
        button.onclick = () => filterProjects(tech);
        filterButtons.appendChild(button);
    });
}

// Filtrar proyectos
function filterProjects(filter) {
    currentFilter = filter;
    
    // Actualizar botones activos
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.textContent === (filter === 'all' ? 'Todos' : filter)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Recargar proyectos
    loadProjects(filter);
}

// Configurar scroll del header
function setupHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Configurar smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Toggle menú móvil
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}

// Manejar envío del formulario
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando un servicio como EmailJS o tu propio backend
    console.log('Formulario enviado:', data);
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    
    // Limpiar formulario
    form.reset();
}

// Cerrar menú móvil al hacer clic en un enlace
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    if (e.target.closest('.nav-menu a') && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

