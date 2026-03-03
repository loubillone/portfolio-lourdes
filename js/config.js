const EMAILJS_CONFIG = {
  SERVICE_ID: "service_r302k3h", // Tu Service ID de EmailJS
  TEMPLATE_ID: "template_4ybxpzi", // Tu Template ID de EmailJS
  PUBLIC_KEY: "EnvASnlrL_yQGaSoz", // Tu Public Key (User ID) de EmailJS
};

// Inicializar EmailJS cuando esté disponible
(function initializeEmailJS() {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  } else {
    // Si EmailJS aún no está cargado, esperar un poco y reintentar
    setTimeout(initializeEmailJS, 100);
  }
})();
