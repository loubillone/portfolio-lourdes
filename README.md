# Portfolio de Lourdes Billone

Portfolio personal desarrollado con HTML, CSS y JavaScript puro, mostrando proyectos, habilidades y experiencia como desarrolladora web Full Stack.

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados y responsivos
- **JavaScript** - Lógica e interactividad

## 📋 Características

- ✨ Diseño moderno y responsivo
- 🎨 Interfaz con gradientes y animaciones
- 📱 Compatible con todos los dispositivos
- 🔗 Enlaces a proyectos desplegados en Netlify
- 🎯 Filtrado de proyectos por tecnología
- 📧 Formulario de contacto
- 🌐 Navegación suave entre secciones

## 🛠️ Uso

1. Abre el archivo `index.html` en tu navegador
2. ¡Listo! No necesitas instalar nada

O si prefieres usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🌐 Despliegue en Netlify

### Opción 1: Arrastrar y Soltar (Más Fácil)

1. Ve a [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta completa del proyecto a la zona de despliegue
3. ¡Listo! Tu sitio estará en línea

### Opción 2: Desde GitHub

1. Sube tu código a un repositorio de GitHub
2. Ve a [Netlify](https://www.netlify.com/)
3. Haz clic en "New site from Git"
4. Conecta tu repositorio de GitHub
5. Configuración de build:
   - **Build command:** (dejar vacío)
   - **Publish directory:** (dejar vacío o poner `/`)
6. Haz clic en "Deploy site"

## 📝 Personalización

### Agregar/Editar Proyectos

Edita el archivo `js/projects.js` para agregar, modificar o eliminar proyectos:

```javascript
{
  id: 1,
  title: 'Nombre del Proyecto',
  description: 'Descripción del proyecto',
  technologies: ['React', 'JavaScript', 'CSS'],
  netlifyUrl: 'https://tu-proyecto.netlify.app',
  githubUrl: 'https://github.com/tu-usuario/proyecto',
  image: 'URL_de_la_imagen'
}
```

### Cambiar Información Personal

1. **Header y Hero:** Edita `index.html` (líneas 20-60)
2. **Sobre Mí:** Edita `index.html` (líneas 62-100)
3. **Habilidades:** Edita `js/projects.js` (array `skills`)
4. **Contacto:** Edita `index.html` (líneas 150-200)

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... más colores */
}
```

## 📧 Configuración del Formulario de Contacto

Actualmente el formulario muestra una alerta. Para conectarlo a un servicio real:

1. **EmailJS:** Integra EmailJS para envío de emails
2. **Backend propio:** Crea un endpoint en tu backend
3. **Netlify Forms:** Agrega `netlify` al atributo del formulario en `index.html`:

```html
<form class="contact-form" id="contactForm" netlify>
  <!-- ... campos del formulario -->
</form>
```

## 🎨 Estructura del Proyecto

```
lourdesbillone/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Todos los estilos
├── js/
│   ├── projects.js     # Datos de proyectos y habilidades
│   └── main.js         # Lógica principal
└── README.md           # Este archivo
```

## 📄 Licencia

Este proyecto es de uso personal.

## 👩‍💻 Autor

**Lourdes Billone** - Desarrolladora Web Full Stack

---

¡Gracias por visitar mi portfolio! 🚀
