/* ==========================================================================
   Presupuesto — login + renderizado.
   Lee ?id= de la URL, valida la contraseña y arma el documento.
   ========================================================================== */

// Escapa texto para insertarlo de forma segura en el HTML.
function ppEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function ppGetId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const id = ppGetId();
  const data = id && typeof PRESUPUESTOS !== "undefined" ? PRESUPUESTOS[id] : null;

  const loginSection = document.getElementById("ppLogin");
  const docSection = document.getElementById("ppDocument");
  const form = document.getElementById("ppLoginForm");
  const errorEl = document.getElementById("ppLoginError");
  const input = document.getElementById("ppPassword");

  // Sin id válido en la URL: no revelamos qué presupuestos existen.
  if (!data) {
    if (input) input.disabled = true;
    if (errorEl) {
      errorEl.textContent =
        "Enlace inválido. Verificá el link que te compartieron.";
    }
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = input.value;

    if (value === data.password) {
      errorEl.textContent = "";
      // Cerrar el teclado del celular antes de cambiar la vista.
      input.blur();
      // Saltar al tope de forma instantánea ANTES de mostrar el
      // presupuesto, para que no se vea ninguna animación de scroll.
      ppScrollToTop();
      loginSection.style.display = "none";
      docSection.style.display = "block";
      renderPresupuesto(data);
      ppScrollToTop();
    } else {
      errorEl.textContent = "Contraseña incorrecta. Intentá nuevamente.";
      input.value = "";
      input.focus();
    }
  });
});

// Salta al tope SIN animación (esquiva el scroll-behavior: smooth global),
// para que el presupuesto se abra directamente desde el principio.
function ppScrollToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  // Restaurar el smooth scroll del sitio después del salto instantáneo.
  requestAnimationFrame(() => {
    html.style.scrollBehavior = previous;
  });
}

function renderList(items, className) {
  return `<ul class="${className}">${items
    .map((i) => `<li>${ppEscape(i)}</li>`)
    .join("")}</ul>`;
}

function renderParagraphs(arr) {
  return arr.map((p) => `<p>${ppEscape(p)}</p>`).join("");
}

function renderCategories(categories) {
  if (!categories || !categories.length) return "";
  return `
    <div class="pp-categories">
      ${categories
        .map(
          (cat) => `
        <div class="pp-category">
          <div class="pp-category-title">
            <span class="pp-cat-icon"><i class="${ppEscape(cat.icon || "fas fa-star")}"></i></span>
            ${ppEscape(cat.title)}
          </div>
          ${renderList(cat.items, "pp-list")}
        </div>`,
        )
        .join("")}
    </div>`;
}

function renderProposal(p) {
  const includes = p.includes
    ? `<div class="pp-subblock"><h4>Incluye</h4>${renderList(p.includes, "pp-list")}</div>`
    : "";
  const deliverables = p.deliverables
    ? `<div class="pp-subblock"><h4>Entregables</h4>${renderList(p.deliverables, "pp-list")}</div>`
    : "";

  return `
    <div class="pp-proposal">
      <div class="pp-card">
        <div class="pp-proposal-head">
          ${p.tag ? `<span class="pp-proposal-tag">${ppEscape(p.tag)}</span>` : ""}
          <h3 class="pp-proposal-name">${ppEscape(p.name)}</h3>
          ${p.description ? `<p class="pp-proposal-desc">${ppEscape(p.description)}</p>` : ""}
        </div>
        ${renderCategories(p.categories)}
        ${includes}
        ${deliverables}
        <div class="pp-meta-grid">
          <div class="pp-time">
            <span class="pp-meta-label">Tiempo estimado</span>
            <span class="pp-meta-value">${ppEscape(p.time)}</span>
          </div>
          <div class="pp-price">
            <span class="pp-meta-label">${ppEscape(p.priceLabel || "Inversión")}</span>
            <div class="pp-price-value">${ppEscape(p.price)}</div>
            ${p.priceNote ? `<div class="pp-price-note">${ppEscape(p.priceNote)}</div>` : ""}
          </div>
        </div>
      </div>
    </div>`;
}

function renderPresupuesto(data) {
  const container = document.getElementById("ppContent");

  const proposals = (data.proposals || []).map(renderProposal).join("");

  const payment = data.payment
    ? `
    <section class="pp-section">
      <h2 class="pp-section-title">Forma de pago</h2>
      ${renderList(data.payment, "pp-ordered")}
    </section>`
    : "";

  const maintenance = data.maintenance
    ? `
    <section class="pp-section">
      <h2 class="pp-section-title">Servicio de mantenimiento (opcional)</h2>
      <div class="pp-card">
        ${data.maintenance.description ? `<p class="pp-text">${ppEscape(data.maintenance.description)}</p>` : ""}
        ${renderList(data.maintenance.items, "pp-list")}
        ${
          data.maintenance.value
            ? `<div class="pp-maintenance-value"><strong>Valor:</strong> ${ppEscape(data.maintenance.value)}</div>`
            : ""
        }
      </div>
    </section>`
    : "";

  const observations = data.observations
    ? `
    <section class="pp-section">
      <h2 class="pp-section-title">Observaciones</h2>
      ${renderList(data.observations, "pp-observations")}
      ${
        data.validity
          ? `<div class="pp-validity"><i class="fas fa-clock"></i> Validez del presupuesto: ${ppEscape(data.validity)}</div>`
          : ""
      }
    </section>`
    : "";

  const c = data.contact || {};
  const waLink = ppWhatsappLink(c.whatsapp, `Hola Lourdes, tengo una consulta sobre el presupuesto de "${data.projectName}".`);

  const contact = `
    <section class="pp-section">
      <h2 class="pp-section-title">Contacto</h2>
      <div class="pp-contact">
        ${
          c.email
            ? `<div class="pp-contact-item">
                 <div class="pp-contact-icon"><i class="fas fa-envelope"></i></div>
                 <span>Email</span>
                 <a href="mailto:${ppEscape(c.email)}">${ppEscape(c.email)}</a>
               </div>`
            : ""
        }
        ${
          c.web
            ? `<div class="pp-contact-item">
                 <div class="pp-contact-icon"><i class="fas fa-globe"></i></div>
                 <span>Página web</span>
                 <a href="${ppEscape(c.web)}" target="_blank" rel="noopener noreferrer">${ppEscape(c.web.replace(/^https?:\/\//, ""))}</a>
               </div>`
            : ""
        }
        ${
          c.whatsapp
            ? `<div class="pp-contact-item">
                 <div class="pp-contact-icon"><i class="fab fa-whatsapp"></i></div>
                 <span>WhatsApp</span>
                 <a href="${waLink}" target="_blank" rel="noopener noreferrer">${ppEscape(c.whatsapp)}</a>
               </div>`
            : ""
        }
      </div>
      <div class="pp-actions">
        ${
          c.whatsapp
            ? `<a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                 <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
               </a>`
            : ""
        }
        <button type="button" class="btn-primary" id="ppAcceptBtn">
          <i class="fas fa-check"></i> Aceptar la propuesta
        </button>
      </div>
    </section>`;

  container.innerHTML = `
    <header class="pp-doc-header">
      <div class="pp-brand">${ppEscape(data.developerName)}</div>
      <div class="pp-role">${ppEscape(data.role)}</div>
      ${data.date ? `<div class="pp-date"><i class="fas fa-calendar-day"></i> Fecha: ${ppEscape(data.date)}</div>` : ""}
    </header>

    ${data.eyebrow ? `<p class="pp-eyebrow">${ppEscape(data.eyebrow)}</p>` : ""}
    <h1 class="pp-project-title">${ppEscape(data.projectName)}</h1>

    ${
      data.about
        ? `<section class="pp-section">
             <h2 class="pp-section-title">Sobre el proyecto</h2>
             <div class="pp-text">${renderParagraphs(data.about)}</div>
           </section>`
        : ""
    }

    ${
      data.objective
        ? `<section class="pp-section">
             <h2 class="pp-section-title">Objetivo del proyecto</h2>
             <div class="pp-text">${renderParagraphs(data.objective)}</div>
           </section>`
        : ""
    }

    <section class="pp-section">
      <h2 class="pp-section-title">${(data.proposals || []).length > 1 ? "Propuestas" : "Propuesta"}</h2>
      ${proposals}
    </section>

    ${payment}
    ${maintenance}
    ${observations}
    ${contact}
  `;

  const acceptBtn = document.getElementById("ppAcceptBtn");
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => ppHandleAccept(data));
  }
}

function ppWhatsappLink(number, message) {
  if (!number) return "#";
  // Normaliza a formato internacional para wa.me (Argentina: 54 9 + número).
  let digits = String(number).replace(/\D/g, "");
  if (!digits.startsWith("54")) {
    digits = "549" + digits;
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

// Flujo de aceptación: confirmación + WhatsApp y/o aviso por email (EmailJS).
async function ppHandleAccept(data) {
  const projectName = data.projectName;
  const c = data.contact || {};

  const result = await Swal.fire({
    icon: "question",
    title: "¿Aceptar la propuesta?",
    html: `Vas a confirmar la aceptación del presupuesto de <strong>${ppEscape(projectName)}</strong>.<br>Elegí cómo querés confirmarlo.`,
    showCancelButton: true,
    showDenyButton: true,
    confirmButtonText: '<i class="fab fa-whatsapp"></i> Por WhatsApp',
    denyButtonText: '<i class="fas fa-envelope"></i> Enviar por email',
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#25D366",
    denyButtonColor: "#6366f1",
  });

  if (result.isConfirmed) {
    const msg = `Hola Lourdes, quiero aceptar la propuesta de "${projectName}". ¿Cómo seguimos?`;
    window.open(ppWhatsappLink(c.whatsapp, msg), "_blank", "noopener");
  } else if (result.isDenied) {
    await ppSendAcceptEmail(data);
  }
}

async function ppSendAcceptEmail(data) {
  const projectName = data.projectName;

  // Pedimos datos del cliente para poder responderle.
  const { value: formValues } = await Swal.fire({
    title: "Confirmar por email",
    html:
      '<input id="pp-swal-name" class="swal2-input" placeholder="Tu nombre">' +
      '<input id="pp-swal-email" type="email" class="swal2-input" placeholder="Tu email">',
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Enviar aceptación",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#6366f1",
    preConfirm: () => {
      const name = document.getElementById("pp-swal-name").value.trim();
      const email = document.getElementById("pp-swal-email").value.trim();
      if (!name || !email) {
        Swal.showValidationMessage("Completá tu nombre y tu email.");
        return false;
      }
      return { name, email };
    },
  });

  if (!formValues) return;

  if (
    typeof emailjs === "undefined" ||
    typeof EMAILJS_CONFIG === "undefined"
  ) {
    await Swal.fire({
      icon: "error",
      title: "No se pudo enviar",
      text: "El servicio de email no está disponible. Probá por WhatsApp.",
      confirmButtonColor: "#6366f1",
    });
    return;
  }

  try {
    await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      name: formValues.name,
      email: formValues.email,
      to_name: "Lourdes Billone",
      message: `El cliente ${formValues.name} (${formValues.email}) ACEPTÓ la propuesta del proyecto "${projectName}".`,
    });

    await Swal.fire({
      icon: "success",
      title: "¡Aceptación enviada!",
      text: "Lourdes recibió tu confirmación y se pondrá en contacto pronto.",
      confirmButtonColor: "#6366f1",
    });
  } catch (error) {
    console.error("Error al enviar aceptación:", error);
    await Swal.fire({
      icon: "error",
      title: "Error al enviar",
      text: "Hubo un problema. Intentá nuevamente o confirmá por WhatsApp.",
      confirmButtonColor: "#6366f1",
    });
  }
}
