# LHG · FMT · Masoterapia & Bienestar
### Landing Page · Estático · Listo para Vercel

---

## Estructura del proyecto

```
fmt-wellness/
├── index.html      ← Estructura y contenido
├── style.css       ← Estilos y diseño visual
├── script.js       ← Interacciones (scroll, nav, reveals)
└── README.md
```

---

## Subir a GitHub

1. Crea un repositorio nuevo en [github.com](https://github.com) (sin README)
2. En tu terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "feat: landing FMT inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

---

## Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) y entra con tu cuenta GitHub
2. Haz clic en **"Add New Project"**
3. Selecciona el repositorio `fmt-wellness`
4. Vercel detecta automáticamente que es un proyecto estático
5. Deja todos los ajustes por defecto y haz clic en **"Deploy"**
6. En segundos tendrás una URL pública, por ejemplo: `https://fmt-wellness.vercel.app`

---

## Personalización rápida (sin frameworks)

| Qué cambiar | Dónde |
|---|---|
| Número de WhatsApp | Busca `56923953959` en `index.html` y reemplaza |
| Colores | Variables CSS en `:root {}` en `style.css` |
| Tipografías | Importación de Google Fonts en `<head>` |
| Textos y contenido | Directamente en `index.html` |
| Horarios | Sección `<ul class="schedule__times">` |

---

## Mejoras futuras recomendadas

- Agregar una sección de fotos del espacio (carpeta `/images/`)
- Integrar Calendly o similar con un `<iframe>` para reservas en línea
- Añadir Google Analytics con una etiqueta `<script>` en el `<head>`
- Agregar un favicon personalizado con `<link rel="icon">`
- Incluir Open Graph tags para mejor visualización al compartir en redes

---

**Luis Hernán González · FMT · Bienestar · Masoterapia · Santiago, Chile**
