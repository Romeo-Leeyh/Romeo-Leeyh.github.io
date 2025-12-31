# Design Philosophy: Academic Swiss Modernism

## Design Movement
**Swiss Style (International Typographic Style)** adapted for digital academic presence.
Emphasis on cleanliness, readability, and objectivity, combined with subtle generative art elements reflecting the "AI + Architecture" research direction.

## Core Principles
1.  **Content-First Hierarchy**: Research content takes precedence. Typography guides the eye.
2.  **Grid-Based Precision**: Strict alignment and spacing to convey academic rigor.
3.  **Dynamic Neutrality**: The interface is a neutral vessel for content, but "comes alive" through interaction and theme switching.
4.  **Digital Materiality**: Subtle use of noise and blur to give depth without skeuomorphism.

## Color Philosophy
-   **Intent**: Professional, intellectual, calm.
-   **Light Mode**: "Paper & Ink". High contrast, crisp.
    -   Background: `oklch(0.99 0 0)` (Near White)
    -   Foreground: `oklch(0.2 0 0)` (Near Black)
    -   Accent: `oklch(0.45 0.18 290)` (Deep Purple - referencing Tsinghua but modernized)
-   **Dark Mode**: "Screen & Light". Immersive, focused.
    -   Background: `oklch(0.12 0 0)` (Deep Grey/Black)
    -   Foreground: `oklch(0.9 0 0)` (Soft White)
    -   Accent: `oklch(0.7 0.15 290)` (Luminous Purple)

## Layout Paradigm
-   **Asymmetric Split**: Fixed left sidebar (25-30% width) for identity and navigation. Scrollable right area for content.
-   **Responsive**: Collapses to top bar + single column on mobile.
-   **Whitespace**: Generous margins between sections.

## Signature Elements
1.  **The "Monolith" Sidebar**: A strong vertical anchor containing the photo, name, and contact info.
2.  **Glassmorphism Cards**: Project and publication cards with subtle borders and background blur.
3.  **Generative Background**: A very subtle, static noise texture or abstract geometric SVG pattern in the background to hint at "computational design".

## Interaction Philosophy
-   **Micro-interactions**: Links underline expands from center. Buttons scale down slightly on click.
-   **Theme Transition**: Smooth fade (300ms) for all colors.
-   **Scroll Spy**: Sidebar navigation highlights current section.

## Animation
-   **Entrance**: Staggered fade-in + slide-up for content blocks.
-   **Hover**: Cards lift (translateY -4px) and shadow intensifies.

## Typography System
-   **Headings**: `Inter` (or system sans-serif), Bold/ExtraBold. Tight tracking.
-   **Body**: `Inter`, Regular. Relaxed line-height (1.6).
-   **Monospace**: `JetBrains Mono` or `Fira Code` for code snippets and tags.
