# LottoGen Pro | Smart Lottery Number Generator

## Overview
LottoGen Pro is a modern, high-performance web application designed to generate random lottery numbers with a premium user experience. Built using framework-less web standards (Baseline), it leverages modern CSS features like `oklch` color spaces, glassmorphism, and responsive design.

## Features
- **Smart Recommendation Engine:** Custom algorithm that weights "Hot" (frequent) and "Cold" (rare) numbers to generate strategic sets.
- **Historical Analytics:** Persistent tracking of all generated numbers with a visual frequency grid.
- **Last Result Display:** Quick reference to the most recently generated set.
- **Vibrant UI:** Uses `oklch` color palette for perceptually uniform and vibrant colors.
- **Theme Support:** Native Dark and Light modes with persistent storage.
- **Interactive Animations:** Sequential "rolling" animation for number generation.
- **Responsive Design:** Optimized for mobile and desktop using modern CSS.

## Design Details
- **Stats Grid:** A 45-number matrix showing individual frequency counts.
- **Visual Cues:** "Hot" numbers are highlighted with a brand-primary glow, while "Cold" numbers are dimmed.
- **Interactive Elements:** Buttons feature glow effects and hover transitions.

## Current State
- `index.html`: Added Statistics and Last Result sections.
- `style.css`: Implemented grid layouts for analytics and refined typography.
- `main.js`: Core logic includes frequency tracking, weighted random selection, and UI persistence.

## Future Plans
- [ ] Add sound effects for number "locking".
- [ ] Allow users to choose between different lottery types (e.g., Powerball, Mega Millions).
- [ ] Export generation history as CSV/PDF.
