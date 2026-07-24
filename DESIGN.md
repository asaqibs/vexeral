---
name: Vexeral
description: Shariah-Compliant Growth Systems
colors:
  primary: "#8b5cf6"
  secondary: "#6d28d9"
  tertiary: "#a78bfa"
  neutral-bg: "#000000"
  neutral-ink: "#fcfdff"
  neutral-mute: "#8b9096"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  sm: "8px"
  md: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
  icon-badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
---

# Design System: Vexeral

## 1. Overview

**Creative North Star: "The Growth Architect"**

Vexeral's design system is a blueprint for scalable, intelligent, and ethical growth. It moves away from the ephemeral "SaaS-cream" aesthetic toward a structured, high-precision visual language that commands authority and trust. The system rejects decorative clutter and deceptive visual hierarchies, favoring clarity and purposeful depth.

**Key Characteristics:**
- **Structural Precision:** Grid-aligned, purposeful spacing.
- **Technological Depth:** Use of dark modes, subtle glows, and refined motion.
- **Ethical Authority:** A calm, sophisticated aesthetic that reflects Shariah-compliant values.

## 2. Colors

A high-contrast, dark-themed palette centered around a rich, mystical violet spectrum.

### Primary
- **Deep Mystical Violet** (#6d28d9): The foundational anchor for brand depth and powerful accents.
- **Mid Violet** (#8b5cf6): The primary action and identity color.

### Secondary
- **Ethereal Lavender** (#a78bfa): Used for secondary accents, highlights, and interaction states.

### Tertiary
- **Core Violet** (#c4b5fd): A bright, high-visibility tone for critical focus points and small ornaments.

### Neutral
- **Canvas Black** (#000000): The primary background, providing infinite depth.
- **Ink White** (#fcfdff): High-contrast text for maximum readability.
- **Muted Slate** (#8b9096): Used for secondary information and non-critical text.

## 3. Typography

**Display Font:** Newsreader (with Georgia, serif)
**Body Font:** Inter (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono

**Character:** A sophisticated pairing of a classic, authoritative serif for headlines and a precise, modern sans-serif for utility.

### Hierarchy
- **Display** (400, clamp(2.5rem, 7vw, 4.5rem), 1.1): For hero sections and major thematic shifts.
- **Headline** (600, 2.25rem, 1.2): For section titles.
- **Body** (400, 1rem, 1.5): For all long-form prose; optimized for 65–75ch line length.
- **Label** (500, 0.875rem, 0.05em, uppercase): For technical details, navigation, and metadata.

## 4. Elevation

The system uses a hybrid approach, combining deep tonal layering with subtle, purposeful shadows to create a sense of physical presence and "tactile" depth.

### Shadow Vocabulary
- **Primary Glow** (`box-shadow: 0 10px 34px -10px rgba(139, 92, 246, 0.65)`): Used on primary CTAs to provide a sense of light emanating from the element.

**The Tactile Presence Rule.** Surfaces are flat at rest but respond to interaction with immediate, confident elevation and glow.

## 5. Components

Components are designed to feel solid, responsive, and highly functional.

### Buttons
- **Shape:** Rectangular with subtle rounding (8px radius).
- **Primary:** Mid Violet background with Ink White text; tactile press effect on `:active`.
- **Hover / Focus:** Transitions to Deep Mystical Violet with a soft violet glow.

### Icon Badges
- **Style:** Square frame with subtle violet tint; inverts color/border on hover to signal interaction.

### Cards / Containers
- **Corner Style:** 8px radius.
- **Background:** Card Black (#0a0a0c) or Elevated (#101014) to create hierarchy against the Canvas.
- **Shadow Strategy:** Subtle tonal separation, reinforced by glow on interaction.

## 6. Do's and Don'ts

### Do:
- **Do** use high contrast for all body text.
- **Do** prioritize clarity and whitespace to reflect "The Growth Architect" philosophy.
- **Do** ensure all motion is purposeful and respects reduced motion preferences.

### Don't:
- **Don't** use deceptive or "clickbaity" visual patterns.
- **Don't** use "SaaS-cream" (near-white, soft-blue) color palettes.
- **Don't** use overly complex or distracting animations.
