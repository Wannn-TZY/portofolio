---
name: Technical Precision
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  h1:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.7'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 1.5rem
  max-width: 1200px
---

## Brand & Style

This design system is engineered for the modern software professional. It balances extreme technical precision with a sophisticated, high-end aesthetic. The personality is "Architectural Minimalist"—prioritizing clarity, performance, and structural integrity while using subtle glassmorphism to create a sense of depth and modernity.

The UI should evoke a feeling of "The IDE of the Future," moving away from cluttered dashboards toward a refined, focused workspace. We utilize a dark-first philosophy that reduces eye strain and highlights code-centric elements through high-vibrancy accents. The visual language is defined by sharp lines, translucent surfaces, and a strict adherence to a logic-driven grid.

## Colors

The palette is anchored in **Slate-950**, providing a deep, ink-like void that allows content to float. The primary accent is an **Electric Blue**, used sparingly for high-impact calls to action and active states. 

- **Primary Canvas:** Slate-950 (#020617) creates a low-light environment that emphasizes typography.
- **Accents:** Electric Blue (#2563eb) is used for interactivity. A secondary Sky Blue (#38bdf8) is used for data visualization or syntax highlighting to provide tonal range.
- **Glass Surfaces:** Semi-transparent layers use a slightly lighter slate hex with 70% opacity to create a hierarchy over the background.
- **Semantic Colors:** Success, Warning, and Error states should be desaturated to maintain the minimalist feel, only reaching full saturation on hover.

## Typography

The typography system relies on two high-performance typefaces. **Inter** handles all structural information and prose, utilizing its variable weight capabilities to create a clear hierarchy. Headlines should be tight and bold, while body copy maintains generous line height for readability.

**JetBrains Mono** is reserved for the "Technical Layer." This includes code blocks, terminal-style outputs, metadata (like timestamps or file sizes), and labels. This distinction clearly signals to the user when they are looking at "data" versus "narrative."

## Layout & Spacing

This design system uses a **12-column fixed grid** for desktop, centered within a max-width container of 1200px. The spacing rhythm is based on a 4px baseline, ensuring all elements align to a predictable vertical and horizontal cadence.

- **Margins:** Desktop views should maintain a minimum of 40px (xl) side margins.
- **Gutters:** Standardized at 24px (md) to allow for breathing room between dense technical information.
- **Sectioning:** Vertical rhythm is aggressive; sections are separated by large gaps (xl) to maintain the minimalist "clean lines" aesthetic.

## Elevation & Depth

Elevation is achieved through **Glassmorphism and Tonal Layering** rather than traditional shadows. 

1. **The Floor:** Slate-950 (#020617).
2. **The Surface:** Containers use a 1px border of `rgba(255, 255, 255, 0.1)` and a subtle background tint of `rgba(30, 41, 59, 0.5)`.
3. **The Glass (Navigation/Modals):** Elements that sit above the content utilize a `backdrop-filter: blur(12px)`. These elements should have a slightly brighter top border to simulate a light source from above.
4. **Interactive State:** On hover, cards or buttons should increase their border opacity or gain a very soft, Electric Blue outer glow (diffused 20px).

## Shapes

The design system uses **Soft (0.25rem)** roundedness to maintain a professional, architectural feel. Sharp corners feel too aggressive for a portfolio, while high roundedness feels too consumer-facing. 

- **Standard Elements:** 4px (0.25rem) radius for input fields and small buttons.
- **Large Containers:** 8px (0.5rem) radius for cards and modal windows.
- **Technical Elements:** Code blocks should remain strictly at 4px to align with the rigid nature of monospaced fonts.

## Components

### Buttons
- **Primary:** Solid Electric Blue with white text. No gradient. Transition on hover to a slightly brighter blue.
- **Secondary:** Ghost style. Transparent background, 1px border in Electric Blue, text in Electric Blue.
- **Icon Buttons:** Circular or slightly rounded square with no background until hover.

### Navigation
- A floating glass bar centered at the top or bottom of the viewport.
- 12px blur, semi-transparent slate background, and a 1px white border at 10% opacity.

### Cards (Project/Experience)
- Transparent background with a 1px `border-slate-800`.
- On hover: Border color changes to `blue-600` and a subtle 5% blue tint is applied to the background.

### Input Fields
- Darker than the canvas (#010409).
- Bottom-only border for a minimalist "form" feel, or full subtle border for "IDE" feel.
- Focus state: Border-color switches to Electric Blue with a sharp 2px outline.

### Chips/Tags
- Small, JetBrains Mono text.
- Background: `rgba(37, 99, 235, 0.1)` with Electric Blue text.
- Used for tech-stack indicators (e.g., "React", "TypeScript").