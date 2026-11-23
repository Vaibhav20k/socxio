# Socxio — The Atelier (Portfolio Website)

## Problem Statement
Rebuild the Socxio website (3-person studio: 2 developers, 1 marketing strategist) as an Awwwards-level portfolio in the burgundy + white theme. Landing page must ask the visitor to select Marketing, Tech, or Both, then transition with animation into a story-driven scroll portfolio. Three.js 3D elements, scroll animations, hover interactions, responsive, fictional demo content, empty photo frames (real photos/info to be provided later).

## Architecture
- Pure frontend experience (React + CRA + Tailwind + framer-motion + Lenis + @react-three/fiber/three). No backend data needed.
- View state machine in App.js: `gate → tech | marketing | both`, synced to URL hash, with full-screen accent wipe transition.
- Theme via CSS custom properties swapped per view (`/app/frontend/src/data/content.js` THEMES).
- Components: Gate (3 monolith selector cards w/ hover image preview + 3D tilt), ThreeScene (R3F torus knot + icosahedron + particle dust, mouse-reactive, theme-colored), Header (view switcher pill + commission CTA), Hero (masked line-by-line reveal + parallax image), Marquee (slow editorial ribbon), Story, Works (tilt case-study cards), Team (3 empty wireframe portrait frames), Capabilities (accordion), Footer, CommissionModal (budget slider form + Sonner toast).

## Themes (burgundy family)
- Gate: obsidian-burgundy #140407 / accent #9E1C38
- Tech: deep dark imperial burgundy #0D0204 / accent #B82346
- Marketing: rose-burgundy #220811 / accent #D85375
- Both: alabaster cream #FAF7F2 / wine #5E0D1E

## Done (2026-11-23)
- Gate screen with 3 hover-preview cards, click → cinematic wipe into portfolio
- Three.js WebGL hero (mouse-reactive) + CSS tilt cards + parallax
- Masked line-by-line headline reveals (fixed whileInView-inside-overflow-mask bug via wrapper-level variants)
- 3 full scroll-story portfolios with distinct burgundy shades, marquee, works, team, capabilities, footer
- Commission modal + toasts; Lenis smooth scroll; mobile-verified 390px, no overflow
- Original SVG logo + favicon; fictional demo content; empty photo frames awaiting portraits
- Fixed PostHog snippet corruption in index.html (t.split runtime error)

## Backlog
- P1: Real team photos into the empty frames + real names/roles/links
- P1: Case-study detail pages (currently cards are non-navigating)
- P2: Contact form backend (currently toast-only, MOCKED)
- P2: Journal section, page transitions between case studies
