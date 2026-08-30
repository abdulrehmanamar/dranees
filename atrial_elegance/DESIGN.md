---
name: Atrial Elegance
colors:
  surface: '#fcf8f7'
  surface-dim: '#ddd9d8'
  surface-bright: '#fcf8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f1'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e0'
  on-surface: '#1c1b1b'
  on-surface-variant: '#464742'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#777871'
  outline-variant: '#c7c7bf'
  surface-tint: '#5e5e5b'
  primary: '#5e5e5b'
  on-primary: '#ffffff'
  primary-container: '#f9f7f2'
  on-primary-container: '#71716d'
  inverse-primary: '#c8c6c2'
  secondary: '#515f78'
  on-secondary: '#ffffff'
  secondary-container: '#d2e0fe'
  on-secondary-container: '#55637d'
  tertiary: '#595f67'
  on-tertiary: '#ffffff'
  tertiary-container: '#f4f7ff'
  on-tertiary-container: '#6c717a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2dd'
  primary-fixed-dim: '#c8c6c2'
  on-primary-fixed: '#1b1c19'
  on-primary-fixed-variant: '#474744'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b9c7e4'
  on-secondary-fixed: '#0d1c32'
  on-secondary-fixed-variant: '#39475f'
  tertiary-fixed: '#dee3ed'
  tertiary-fixed-dim: '#c1c7d0'
  on-tertiary-fixed: '#161c23'
  on-tertiary-fixed-variant: '#42474f'
  background: '#fcf8f7'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-padding: 120px
  section-padding-mobile: 64px
  grid-gutter: 32px
  container-max-width: 1280px
---

## Brand & Style
The design system embodies a "Premium Medical Editorial" aesthetic, specifically tailored for high-end cardiac surgery. It shifts away from the sterile, industrial feel of traditional healthcare toward a bespoke, private-practice atmosphere. 

The style is a blend of **Minimalism** and **Modern Corporate**, utilizing expansive whitespace to signify clarity and calm—essential for cardiac care. The emotional response is one of absolute trust, quiet authority, and sophisticated care. Visuals should feel curated, like a high-end journal or a luxury concierge service, rather than a generic medical portal.

## Colors
The palette is rooted in a warm, ivory-based neutrality to differentiate from cold clinical whites. 

- **Primary (#F9F7F2):** Used for large surface areas and background canvases to create a soft, inviting environment.
- **Secondary (#0A192F):** Deep Navy serves as the core anchor for high-authority typography, primary buttons, and navigational elements.
- **Tertiary (#E6EBF5):** A pale lavender-blue used exclusively for subtle section backgrounds and container fills to provide soft visual breaks.
- **Accent (#4A707A):** A muted, restrained teal used sparingly for highlights, icons, or secondary call-to-actions to maintain a professional medical lineage without being cliché.

## Typography
The typographic hierarchy relies on the tension between the classicism of **Playfair Display** and the functional precision of **Inter**.

- **Headlines:** Use Playfair Display for all major headings. It provides the "Editorial" feel and conveys the surgeon's prestige. Maintain tight letter-spacing on larger sizes to keep it feeling modern.
- **Body & Data:** Use Inter for all functional text, navigation, and long-form medical descriptions. Its neutral character ensures legibility and reinforces the technological precision of cardiac surgery.
- **Micro-copy:** Use `label-caps` for eyebrows and small metadata to add a layer of structured sophistication.

## Layout & Spacing
The layout follows a **Fixed Grid** system to maintain editorial control over line lengths and image placement. 

- **Grid:** 12-column desktop grid with wide 32px gutters to prevent content crowding.
- **Rhythm:** Use generous vertical padding (`section-padding`) to allow the user's eye to rest between complex medical topics.
- **Adaptation:** On mobile, margins reduce to 20px, and section spacing compresses to 64px. Content should reflow into a single column, prioritizing the surgical expertise (headlines) and immediate contact actions.

## Elevation & Depth
This design system avoids heavy shadows, opting instead for **Tonal Layers** and **Low-contrast outlines**.

- **Surfaces:** Depth is created by placing Ivory cards on Lavender backgrounds or vice versa.
- **Outlines:** Use 1px borders in a slightly darker shade than the background (e.g., a 10% darken of the primary color) for input fields and card boundaries.
- **Transitions:** Hover states should involve "Active Depth"—a subtle 4px lift using a very soft, high-diffusion shadow (Color: Secondary, Alpha: 0.05) to signal interactivity without breaking the flat editorial aesthetic.

## Shapes
The shape language is "Soft" yet structured. 

- **Standard Elements:** Buttons and input fields use a 0.25rem (4px) radius to maintain a professional, sharp-suited feel.
- **Large Elements:** Cards and containers use `rounded-lg` (8px).
- **Imagery:** Portraits of Dr. Shah or surgical facilities should utilize an "Organic Masking" technique—essentially a very large asymmetric radius (e.g., 100px on one corner) to create a custom, high-end branded feel that deviates from standard medical rectangles.

## Components
- **Navigation:** A sticky header with a transparent-to-ivory transition. The brand mark (Dr. Syed Anees ur Rehman Shah) should be on the left, with the 'Book a Consultation' button on the right in the Secondary color.
- **Buttons:** Primary buttons are Deep Navy with white text and an inline arrow icon `→` that shifts 4px to the right on hover. Secondary buttons use a simple underline or a ghost-style outline.
- **Editorial Cards:** Used for 'Specializations' or 'Procedures'. These should feature a large serif number (e.g., 01, 02) in the corner, a Playfair Display title, and a subtle upward float on hover.
- **Input Fields:** Minimalist with only a bottom border that thickens to 2px on focus using the Accent Teal.
- **Chips:** For medical certifications or tags, use a Pale Blue background with Deep Navy text, featuring a `rounded-xl` shape for high contrast against the sharper buttons.