# Guía de estilo — Contenido y disposición
## Aproximaciones ≈ Subacuática

---

## Layout general — dos columnas

La página se divide en dos zonas fijas de ancho definido:

```
|←── sidebar ──→|←──────────── contenido ──────────────→|
     ~23.5%                    ~76.5%
     ~340px                   ~1100px  (base 1440px)
```

```css
.layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  min-height: 100vh;
}
```

---

## Sidebar

### Estructura general

```
┌────────────────────────────────┐
│  APROXIMACIONES                │  ← título (sin separador arriba)
│  SUBACUATICA ≈                 │
│                                │
│                                │  ← espacio vacío (flexible, empuja nav abajo)
│                                │
│                                │
├────────────────────────────────┤  ← línea separadora
│  Proyecto                      │  ← item activo (color acento)
├────────────────────────────────┤
│  Proceso                       │
├────────────────────────────────┤
│  Publicación                   │
├────────────────────────────────┤
│  Nada como metáfora            │
└────────────────────────────────┘
```

### Título del proyecto

```css
.sidebar-title {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #0E161B;            /* negro profundo */
  padding: 2rem 2rem 0 2rem; /* top y lateral, sin padding inferior */
  letter-spacing: 0.02em;
}
```

Ocupa dos líneas:
```
APROXIMACIONES
SUBACUATICA ≈
```

El símbolo `≈` aparece estilizado como tres líneas onduladas horizontales (SVG o unicode `≋`).

### Items de navegación

Cada item ocupa toda la columna sidebar con separador de línea fina arriba y abajo.

```css
.sidebar-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* nav se alinea hacia el fondo */
  flex: 1;
}

.nav-item {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;          /* equivalente H3 */
  font-weight: 400;
  color: #0E161B;
  padding: 1.25rem 2rem;    /* ~20px vertical, ~32px horizontal */
  border-top: 0.5px solid #0E161B;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.nav-item:last-child {
  border-bottom: 0.5px solid #0E161B;
}

.nav-item.active {
  color: #8fcff3;            /* azul subacuático */
}

.nav-item:hover:not(.active) {
  color: #8fcff3;
  transition: color 0.2s ease;
}
```

---

## Área de contenido

### Espaciado del contenedor

```css
.content {
  padding: 4rem 5rem;        /* ~64px top, ~80px lateral */
  max-width: 900px;
}
```

### Encabezado de sección (H3)

```css
.content h3 {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: 400;
  color: #0E161B;
  margin-bottom: 2.5rem;     /* ~40px entre título y primer párrafo */
}
```

### Párrafos de cuerpo

```css
.content p {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 300;          /* light */
  line-height: 1.75;
  color: #0E161B;
  margin-bottom: 1.75rem;    /* separación entre párrafos */
  max-width: 760px;          /* ancho de lectura cómodo */
}
```

---

## Módulo de persona — tarjeta con imagen de fondo

Aparece al final de la sección "Proyecto". Combina una imagen fotográfica con texto superpuesto en overlay semitransparente.

### Estructura

```
┌──────────────────────────────────────────────────────────────┐
│  [imagen de fondo — fotografía]                              │
│                                                              │
│  overlay semitransparente (azul-negro)                       │
│  ┌─────────────────────┐                                     │
│  │ Amparo Saona Ríos   │  ← H3, blanco                      │
│  │                     │                                     │
│  │ Descripción. Rol    │  ← P light, blanco 70%             │
│  │ y contribución.     │                                     │
│  └─────────────────────┘                                     │
└──────────────────────────────────────────────────────────────┘
```

### CSS

```css
.person-card {
  position: relative;
  width: 100%;
  height: 420px;             /* altura fija de la tarjeta */
  overflow: hidden;
}

.person-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.85);
}

.person-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(14, 22, 27, 0.75) 0%,
    rgba(14, 22, 27, 0.0) 100%
  );
  width: 40%;                /* ocupa ~40% del ancho de la tarjeta */
}

.person-overlay h3 {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.person-overlay p {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.70);
  line-height: 1.6;
}
```

---

## Mosaico de imágenes — sin bordes

### Disposición base (3 columnas iguales)

```css
.mosaic {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;
}

.mosaic-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 4;      /* retrato, ajustar según contenido */
}

.mosaic-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
```

### Hover — zoom suave

```css
.mosaic-item:hover img {
  transform: scale(1.04);
}
```

### Hover — overlay con información de persona

Si la imagen lleva texto (tarjeta de persona dentro del mosaico), el overlay aparece en hover:

```css
.mosaic-item .overlay {
  position: absolute;
  inset: 0;
  background: rgba(143, 207, 243, 0.40); /* azul acento, 40% opacidad */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 1;                /* visible por defecto en el primer item */
  transition: opacity 0.3s ease;
}

/* Para items sin overlay visible por defecto: */
.mosaic-item .overlay.hidden-default {
  opacity: 0;
}

.mosaic-item:hover .overlay.hidden-default {
  opacity: 1;
}

.overlay h3 {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}

.overlay p {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
}
```

### Variantes por cantidad de imágenes

| Imágenes | Grid |
|----------|------|
| 2 | `repeat(2, 1fr)` |
| 3 | `repeat(3, 1fr)` ← usado en "Proyecto" |
| 4 | `repeat(4, 1fr)` ← usado en hoja de estilo |
| 5 | `repeat(3, 1fr)` + última imagen `grid-column: span 3` |

---

## Resumen de espaciados

| Elemento | Valor |
|----------|-------|
| Padding sidebar lateral | `2rem` (32px) |
| Padding nav item vertical | `1.25rem` (20px) |
| Padding contenido top | `4rem` (64px) |
| Padding contenido lateral | `5rem` (80px) |
| Gap entre H3 y primer párrafo | `2.5rem` (40px) |
| Gap entre párrafos | `1.75rem` (28px) |
| Separadores nav | `0.5px solid #0E161B` |
| Gap mosaico | `0` |
