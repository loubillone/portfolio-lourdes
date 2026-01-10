// Configuración de EmailJS
// Reemplaza estos valores con tus credenciales de EmailJS
// Puedes obtenerlas en: https://www.emailjs.com/

const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Tu Service ID de EmailJS
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',     // Tu Template ID de EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'        // Tu Public Key (User ID) de EmailJS
};

// Inicializar EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

