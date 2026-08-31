# 🏡 Invitación Virtual - Inauguración de Casa

Una página interactiva y divertida para invitar a tus amigos y familia a la inauguración de tu casa. Incluye fotos, mapa, y un formulario para confirmar asistencia.

## 🌟 Características

✨ **Diseño Moderno y Atractivo**
- Gradientes de colores llamativos
- Animaciones suaves y confetti de celebración
- Completamente responsive (funciona en móvil y desktop)

📸 **Carrusel de Fotos**
- Pasa automáticamente cada 5 segundos
- Controles manuales con flechas
- Indicadores de posición (dots)
- 12 fotos de tu proyecto

📍 **Mapa Incrustado**
- Google Maps integrado
- Muestra la ubicación exacta: Barrio Privado Nuevo Quilmes, Lote 1I07, Don Bosco

📋 **Formulario Interactivo**
- Captura nombre, email, teléfono
- Opciones de asistencia (Sí/No/Aún no sé)
- Espacio para comentarios
- **Se conecta directamente a Google Sheets** ✅

## 📸 Vista Previa

```
┌─────────────────────────────────┐
│  ¡Inauguración de Nuestra Casa! │
│     🎉 🏡 Te invitamos...        │
├─────────────────────────────────┤
│          [Carrusel Fotos]        │
│      ←  [Imagen rotando]  →      │
├─────────────────────────────────┤
│  ⏰ 12:00 del mediodía          │
│  📍 Nuevo Quilmes, Don Bosco    │
│  [Google Maps Incrustado]       │
├─────────────────────────────────┤
│  📋 Confirma tu Asistencia      │
│  [Formulario con campos]        │
│  [Botón Confirmar]              │
└─────────────────────────────────┘
```

## 🚀 Inicio Rápido

### Opción 1: GitHub Pages (Recomendado)

1. Sube este repositorio a GitHub
2. Ve a Settings → Pages
3. Activa GitHub Pages en rama `main`
4. Tu página estará en: `https://tuusuario.github.io/invitacion-virtual/`

### Opción 2: Abrir Localmente

Simplemente abre `index.html` en tu navegador.

## ⚙️ Configuración del Formulario

El formulario se conecta a una **Google Sheet** usando **Google Apps Script**.

### Pasos de Configuración:

1. **Copia el script** (`google_apps_script.gs`)
2. **Abre tu Google Sheet**
3. Ve a Herramientas → Editor de Secuencias de Comandos
4. Pega el código y guarda
5. Haz click en "Desplegar" → "Nueva Implementación"
6. Elige "Aplicación Web" → Desplegar
7. **Copia la URL generada**
8. En `index.html`, busca esta línea:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercontent';
   ```
9. Reemplaza `YOUR_SCRIPT_ID/usercontent` con tu URL

**⚠️ Lee INSTRUCCIONES.md para pasos detallados con imágenes y solución de problemas**

## 📁 Estructura de Archivos

```
invitacion-virtual/
├── index.html                    # Página principal (abre esto)
├── google_apps_script.gs        # Script para Google Sheets
├── README.md                     # Este archivo
├── INSTRUCCIONES.md             # Pasos detallados
├── .gitignore                   # Configuración de git
├── Fotos/
│   ├── FB_IMG_1451882882262.jpg
│   ├── FB_IMG_1451882906975.jpg
│   ├── ... (12 fotos)
```

## 🎨 Personalización

### Cambiar Colores

En `index.html`, busca la sección `<style>` (línea ~25) y cambia:
- `#667eea` → Tu color principal
- `#764ba2` → Tu color secundario

### Cambiar Textos

Busca y reemplaza:
- "¡Inauguración de Nuestra Casa!" → Tu título
- "12:00 del mediodía" → Tu horario
- "Nuevo Quilmes, Don Bosco" → Tu ubicación
- Los emojis que quieras

### Cambiar Fotos

Reemplaza las imágenes JPG con tus propias fotos (mismo nombre de archivo).

### Cambiar Google Sheet

En `google_apps_script.gs`, puedes modificar qué columnas se guardan y qué información se captura.

## 🔧 Requisitos

- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Conexión a Internet**
- **Google Account** (para Google Sheets y Apps Script)
- **GitHub** (para publicar con GitHub Pages - opcional)

## 📊 Datos Capturados

El formulario guarda en Google Sheets:
- Fecha y hora de confirmación
- Nombre completo
- Email
- Teléfono
- Respuesta de asistencia (Sí/No/Aún no sé)
- Comentarios adicionales

## 🎯 Casos de Uso

✅ Invitación a inauguración de casa
✅ Celebración de aniversario
✅ Evento familiar importante
✅ Cumpleaños especial
✅ Cualquier celebración que requiera confirmación

## 🐛 Solución de Problemas

### El formulario no envía datos
→ Verifica que copiaste la URL completa del Google Apps Script

### No aparecen datos en la Google Sheet
→ Asegúrate de desplegar el script como "Aplicación Web"

### La página no carga desde GitHub Pages
→ Espera 5-10 minutos y verifica que subiste todos los archivos

**Lee INSTRUCCIONES.md para más detalles**

## 📝 Licencia

Libre para usar y personalizar. Disfruta tu celebración! 🎉

## 👤 Autor

Creado con ❤️ para hacer tu celebración especial

---

¿Preguntas? Revisa INSTRUCCIONES.md o consulta la consola del navegador (F12) para errores.
