# Guía de estilo — Aproximaciones ≈ Subacuática

---

## Tipografía

**Fuente única:** IBM Plex Mono — Google Fonts  
Monoespaciada, carácter técnico y limpio. Se usa en todos los niveles de jerarquía.

| Nivel | Tamaño | Peso       | Uso |
|-------|--------|------------|-----|
| H1    | 35 pt  | Regular    | Títulos principales, nombre del proyecto |
| H2    | 30 pt  | Regular    | Subtítulos de sección |
| H3    | 20 pt  | Regular    | Encabezados de contenido |
| P     | 14 pt  | Light / Regular | Cuerpo de texto. Light para lectura extensa, Regular para énfasis |

> Importar desde Google Fonts:  
> `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap`

---

## Paleta de colores

Solo tres colores. El sistema está diseñado para funcionar principalmente sobre fondo oscuro.

| Nombre          | Hex       | Uso principal |
|-----------------|-----------|---------------|
| Azul subacuático | `#8fcff3` | Acentos, color de marca, textos destacados sobre fondo oscuro |
| Negro profundo  | `#0E161B` | Fondo principal, botones primarios |
| Blanco          | `#FFFFFF` | Textos sobre fondo oscuro, fondos secundarios |

---

## Botones

### 1. Botón circular — contacto flotante

Aparece como elemento flotante en la esquina inferior derecha de la pantalla.  
Forma circular, sin relleno de color fuerte. Texto centrado en dos líneas.

```css
.btn-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #0E161B;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
```

**Ejemplo de uso:** `Escríbenos`

---

### 2. Botón de texto — acción en contenido

Aparece inline dentro del contenido de página (ejemplo: sección Publicación).  
Sin borde ni fondo. Funciona como enlace de acción tipográfico.

```css
.btn-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  display: inline-block;
}

.btn-text:hover {
  color: #8fcff3;
}
```

**Ejemplo de uso:** `Descargar publicación`

---

## Layout de imágenes — mosaico sin bordes

Las imágenes se organizan en una grilla de columnas iguales, a sangre, sin bordes ni separaciones visibles entre ellas. El conjunto funciona como una sola superficie visual.

```css
.mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* ajustar según cantidad */
  gap: 0;
  width: 100%;
}

.mosaic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

**Variantes según cantidad de imágenes:**

| Imágenes | Columnas sugeridas |
|----------|--------------------|
| 2        | `repeat(2, 1fr)` |
| 3        | `repeat(3, 1fr)` |
| 4        | `repeat(4, 1fr)` |
| 5        | `repeat(3, 1fr)` con última imagen a ancho completo |

> Las imágenes no llevan bordes, sombras ni separadores. El corte directo entre piezas es parte de la estética.

---

## Variables CSS sugeridas

```css
:root {
  --color-accent:      #8fcff3;
  --color-background:  #0E161B;
  --color-surface:     #FFFFFF;

  --font-primary:      'IBM Plex Mono', monospace;

  --font-size-h1:      35px;
  --font-size-h2:      30px;
  --font-size-h3:      20px;
  --font-size-body:    14px;

  --font-weight-light:   300;
  --font-weight-regular: 400;
}
```

---

## Notas generales

- La identidad visual se basa en **círculos concéntricos** y formas orgánicas. El botón circular refuerza este lenguaje.
- El símbolo `≈` (aproximación) es parte del nombre de marca y puede usarse como elemento decorativo.
- La navegación principal usa `H3` en peso regular, sobre fondo oscuro, con separadores horizontales de línea fina.
- El layout de página divide la pantalla en dos zonas: una columna izquierda para navegación (~23% del ancho) y el área de contenido a la derecha.
