# Configuración de EmailJS

Este proyecto utiliza EmailJS para enviar emails desde el formulario de contacto.

## Pasos para configurar EmailJS

### 1. Crear una cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita o inicia sesión

### 2. Configurar un Email Service
1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Elige tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. **Copia el Service ID** (lo necesitarás después)

### 3. Crear un Email Template
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura tu template con las siguientes variables:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{message}}` - Mensaje del formulario
   - `{{to_name}}` - Tu nombre (Lourdes Billone)

   Ejemplo de template:
   ```
   De: {{from_name}} ({{from_email}})
   
   Mensaje:
   {{message}}
   ```

4. **Copia el Template ID** (lo necesitarás después)

### 4. Obtener tu Public Key (User ID)
1. Ve a **Account** → **General**
2. Encuentra tu **Public Key** (también llamado User ID)
3. **Copia el Public Key**

### 5. Configurar el proyecto
1. Abre el archivo `js/config.js`
2. Reemplaza los valores:
   - `YOUR_SERVICE_ID` → Tu Service ID
   - `YOUR_TEMPLATE_ID` → Tu Template ID
   - `YOUR_PUBLIC_KEY` → Tu Public Key

Ejemplo:
```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',
  TEMPLATE_ID: 'template_xyz789',
  PUBLIC_KEY: 'abcdefghijklmnop'
};
```

### 6. Verificar que funciona
1. Abre tu sitio web
2. Completa el formulario de contacto
3. Envía un mensaje de prueba
4. Verifica que recibas el email

## Notas importantes

- El plan gratuito de EmailJS permite 200 emails por mes
- Asegúrate de que las variables en tu template coincidan con las que se envían desde el código
- El formulario mostrará mensajes de error si EmailJS no está configurado correctamente

## Solución de problemas

**Error: "EmailJS no está configurado correctamente"**
- Verifica que hayas reemplazado todos los valores en `js/config.js`
- Asegúrate de que no haya espacios extra en las credenciales

**Error: "EmailJS no está cargado"**
- Verifica que el script de EmailJS esté cargando correctamente
- Revisa la consola del navegador para ver errores de red

**No recibo los emails**
- Verifica que tu Email Service esté conectado correctamente
- Revisa la carpeta de spam
- Verifica que el template tenga las variables correctas

