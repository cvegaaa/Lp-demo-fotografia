# Estudio de Fotografía — Landing demo del sector

Plantilla de landing page **genérica del sector fotografía profesional**, lista
para clonar y personalizar para un negocio real del mismo rubro. Todo el sitio
está redactado en español y no contiene datos de ningún negocio real: todos los
textos, servicios y testimonios son representativos del sector.

## Qué incluye

- Hero a pantalla completa con galería rotativa de imágenes en crossfade y
  efecto de zoom sutil (Ken Burns).
- Sección de enfoque (problema/oportunidad) en lenguaje cercano.
- Servicios en tarjetas con revelado de imagen al pasar el cursor.
- Galería editorial con recortes variados.
- Testimonios de ejemplo, claramente marcados como reemplazables.
- Llamado a la acción final con datos de contacto y formulario que redirige a
  WhatsApp con el mensaje prellenado.
- Footer con mención de autoría de la demo.

## Cómo personalizarla para un cliente real

Toda la información del sitio está centralizada en un único archivo:

```
src/data/sitio.ts
```

Edita ese archivo para reemplazar:

1. `nombreGenerico` por el nombre comercial del cliente.
2. `eslogan` y `propuestaValor` con el mensaje de la marca.
3. `servicios` con los servicios reales y sus imágenes.
4. `testimonios` con reseñas reales del negocio.
5. `imagenesHero` con fotografías propias del cliente.
6. `datosContacto` (teléfono, WhatsApp, dirección, horario, email) y `redes`.

No es necesario tocar el resto del código a menos que quieras ajustar la
estructura o el diseño.

## Paleta y tipografía

- Paleta editorial cálida: espresso/charcoal como base oscura, ivory/arena para
  secciones claras y arcilla cálida como acento. La fotografía es la
  protagonista; el soporte visual es sobrio y cálido.
- Tipografía: Fraunces (serif editorial) para titulares e Inter (sans limpia)
  para cuerpo. Cargadas desde Google Fonts en `index.html`.

## Despliegue

Este proyecto usa Vite + React + TypeScript. Pasos habituales:

1. Instalar dependencias: `npm install`
2. Desarrollo local: `npm run dev`
3. Generar la versión de producción: `npm run build` (los archivos quedan en
   `dist/`).
4. Previsualizar la build: `npm run preview`.

Para desplegar, sube la carpeta `dist/` a cualquier hosting estático (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, etc.). No requiere backend ni base de
datos para funcionar como landing.

## Licencia de las imágenes

Las imágenes de muestra son de Pexels (licencia libre para uso comercial, sin
atribución obligatoria). Reemplázalas por las fotografías reales del cliente
antes de publicar.
