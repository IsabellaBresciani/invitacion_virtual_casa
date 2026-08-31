# 🏡 Invitación Virtual - Inauguración de Casa

Una página vintage y elegante para invitar a tus amigos y familia a la inauguración de tu casa. Incluye información destacada, mapa, y un hermoso collage de fotos.

## 🌟 Características

✨ **Diseño Vintage Elegante**
- Paleta de colores cálidos (tierra y oro)
- Tipografía clásica y sofisticada
- Márgenes y bordes inspirados en la década de 1970
- Completamente responsive

📸 **Collage de Fotos**
- Todas tus 12 fotos en un collage artístico
- Cada foto rotada ligeramente para efecto vintage
- Bordes blancos como marcos antiguos
- Hover interactivo con zoom suave

📍 **Mapa Incrustado**
- Google Maps integrado
- Muestra la ubicación exacta: Barrio Privado Nuevo Quilmes, Lote 1I07, Don Bosco

ℹ️ **Información Destacada**
- Hora del evento: 12:00 del mediodía (Almuerzo)
- Ubicación clara y elegante
- Diseño limpio y fácil de leer

## 📸 Estructura de la Página

```
┌──────────────────────────────────────────┐
│   ¡Inauguración de Nuestra Casa!         │
│  (Diseño vintage dorado/tierra)          │
├──────────────────────────────────────────┤
│  🕐 12:00 mediodía  |  🍽️ Almuerzo      │
│  📍 Nuevo Quilmes   |  🏘️ Lote 1I07     │
├──────────────────────────────────────────┤
│    Ubícanos en el Mapa                   │
│    [Google Maps Incrustado]              │
├──────────────────────────────────────────┤
│         Nuestro Proyecto                 │
│    [Collage de 12 fotos rotadas]         │
├──────────────────────────────────────────┤
│  ¡Te esperamos para celebrar!            │
└──────────────────────────────────────────┘
```

## 🚀 Inicio Rápido

### Opción 1: GitHub Pages (Recomendado)

1. Sube este repositorio a GitHub
2. Ve a Settings → Pages
3. Activa GitHub Pages en rama `main`
4. Tu página estará en: `https://tuusuario.github.io/invitacion-virtual/`

### Opción 2: Abrir Localmente

Simplemente abre `index.html` en tu navegador.

## 📁 Estructura de Archivos

```
invitacion-virtual/
├── index.html                    # Página principal
├── README.md                     # Este archivo
├── INSTRUCCIONES.md             # Guía de publicación
├── Fotos/
│   ├── FB_IMG_1451882882262.jpg
│   ├── FB_IMG_1451882906975.jpg
│   ├── ... (12 fotos)
```

## 🎨 Personalización

### Cambiar Colores Principales

En `index.html`, busca la sección `<style>` y reemplaza:
- `#d4a574` → Tu color principal (actualmente dorado)
- `#c9915f` → Variante más oscura
- `#8b6f47` → Acentos (texto)
- `#f5e6d3` → Fondo claro

Ejemplo: Si quieres azul vintage, usa:
```css
#d4a574 → #6b8fb5
#c9915f → #556b8c
#8b6f47 → #3d4f6b
#f5e6d3 → #e8eff5
```

### Cambiar Textos

Busca y reemplaza:
- "¡Inauguración de Nuestra Casa!" → Tu título
- "12:00 del mediodía" → Tu horario
- "Almuerzo en familia" → Tu tipo de evento
- "Nuevo Quilmes, Don Bosco" → Tu ubicación
- "Lote 1I07" → Tu dirección

### Cambiar Fotos

Reemplaza las imágenes JPG con tus propias fotos (mismo nombre de archivo).

### Ajustar Rotaciones de Fotos

En el CSS, puedes cambiar los valores `--rotation` en cada `.photo-item:nth-child(n)` para variar la rotación de cada foto.

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet
- GitHub (para publicar con GitHub Pages - opcional)

## 🎯 Casos de Uso

✅ Invitación a inauguración de casa
✅ Celebración de aniversario
✅ Evento familiar elegante
✅ Cumpleaños especial
✅ Cualquier celebración que requiera un toque vintage

## 🐛 Solución de Problemas

### Las fotos no se cargan
→ Verifica que todas las imágenes estén en la misma carpeta que index.html

### El mapa no aparece
→ Revisa que tengas conexión a Internet

### La página no carga desde GitHub Pages
→ Espera 5-10 minutos después de habilitar Pages

## 📝 Licencia

Libre para usar y personalizar. ¡Disfruta tu celebración! 🎉

---

¿Preguntas? Abre la consola del navegador (F12) para ver errores.
