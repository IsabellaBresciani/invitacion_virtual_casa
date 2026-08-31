# 📋 Instrucciones de Configuración - Invitación Virtual

## ✅ Paso 1: Configurar Google Apps Script

1. **Abre tu Google Sheet**: Ve a https://docs.google.com/spreadsheets/d/1nFXDX5R37jhVWKiSr7CEylMrUaOjPJuboy25g7IHb0Q/edit

2. **Accede al Editor de Scripts**:
   - Click en **Herramientas** (Tools) → **Editor de Secuencias de Comandos** (Script Editor)

3. **Copia el código**:
   - Borra el código existente (si hay)
   - Copia el contenido del archivo `google_apps_script.gs` en este repositorio
   - Pégalo en el editor

4. **Guarda el proyecto**:
   - Click en **Guardar** (Save icon)
   - Dale un nombre como "Confirmaciones Inauguración"

## 📤 Paso 2: Desplegar como Aplicación Web

1. **En el editor de scripts**, click en **Desplegar** (Deploy)
2. Click en **Nueva Implementación** (New deployment)
3. En el menú desplegable **Selecciona el tipo**:
   - Elige **Aplicación Web** (Web app)
4. Completa los campos:
   - **Ejecutar como**: Tu cuenta de Google
   - **Quién tiene acceso**: Cualquiera (Anyone)
5. Click en **Desplegar** (Deploy)
6. **IMPORTANTE**: Copia la URL que aparece en la ventana (similar a):
   ```
   https://script.google.com/macros/d/[ID_LARGO]/usercontent
   ```

## 🔗 Paso 3: Actualizar el HTML

1. Abre el archivo `index.html`
2. Busca esta línea:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercontent';
   ```
3. Reemplaza `YOUR_SCRIPT_ID/usercontent` con la URL que copiaste en el Paso 2
4. Guarda el archivo

## 🚀 Paso 4: Publicar en GitHub Pages

1. **Si aún no tienes un repositorio git**:
   ```bash
   cd /path/a/invitacion-virtual
   git init
   git add .
   git commit -m "Invitación virtual inauguración"
   ```

2. **Crea un repositorio en GitHub** (si no lo tienes)

3. **Conecta y sube los archivos**:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/invitacion-virtual.git
   git branch -M main
   git push -u origin main
   ```

4. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Click en **Settings** (Configuración)
   - En el menú lateral, click en **Pages**
   - En **Source**, selecciona **main** branch y **/ (root)** folder
   - Click en **Save**

5. **Tu página estará en**: 
   ```
   https://TU_USUARIO.github.io/invitacion-virtual/
   ```

## ✨ Personalización

### Cambiar el email de confirmación
En `index.html`, busca:
```javascript
const GOOGLE_APPS_SCRIPT_URL = '...'
```

### Cambiar colores
En `index.html`, busca la sección `<style>` y cambia:
- `#667eea` - Color principal (azul)
- `#764ba2` - Color secundario (púrpura)
- Los gradientes

### Cambiar textos
Busca y reemplaza en el HTML:
- "¡Inauguración de Nuestra Casa!" → Tu título
- "12:00 del mediodía (Almuerzo)" → Tu horario
- "Nuevo Quilmes, Don Bosco" → Tu ubicación
- "Lote 1I07" → Tu dirección específica

## 🧪 Pruebas

1. Abre tu página web
2. Completa el formulario con datos de prueba
3. Haz click en "Confirmar Asistencia"
4. Vuelve a tu Google Sheet y verifica que aparezcan los datos

## 🎨 Estructura de Archivos

```
invitacion-virtual/
├── index.html                    # La invitación (publicada en GitHub Pages)
├── google_apps_script.gs        # Script para Google Sheets
├── INSTRUCCIONES.md             # Este archivo
├── README.md                     # Información general
├── FB_IMG_1451882882262.jpg     # Tus imágenes
├── FB_IMG_1451882906975.jpg
├── ... (todas tus fotos)
└── .git/                        # Carpeta de git
```

## ❓ Solución de Problemas

### "El formulario no envía datos"
- Verifica que hayas copiado la URL completa del Google Apps Script
- Asegúrate de que copiaste todo, incluyendo `/usercontent` al final
- Revisa la consola del navegador (F12 → Console) para ver errores

### "No aparecen datos en mi Google Sheet"
- Verifica que el script esté guardado
- Asegúrate de que el deployment esté marcado como "Aplicación Web"
- Abre nuevamente el script y verifica que el código se copió correctamente

### "La página no se carga desde GitHub Pages"
- Espera 5-10 minutos después de habilitar Pages (toma tiempo propagar)
- Verifica que el archivo se llame exactamente `index.html`
- Asegúrate de que subiste todos los archivos de imagen

## 📧 Contacto

Si tienes problemas, revisa:
1. La consola del navegador (F12)
2. Los logs del Google Apps Script (Ejecutión → Logs)
3. Las configuraciones de permisos en GitHub

¡Que disfrutes tu invitación! 🎉
