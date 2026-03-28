# LottoGen Pro | Smart Lottery Number Generator

## Overview
LottoGen Pro is a modern, high-performance web application designed to generate random lottery numbers with a premium user experience. Built using framework-less web standards (Baseline), it leverages modern CSS features like `oklch` color spaces, glassmorphism, and responsive design.

## Features
- **Vibrant UI:** Uses `oklch` color palette for perceptually uniform and vibrant colors.
- **Glassmorphism:** Elegant frosted-glass containers with backdrop filters.
- **Theme Support:** Native Dark and Light modes with persistent storage.
- **Interactive Animations:** Sequential "rolling" animation for number generation.
- **Responsive Design:** Optimized for mobile and desktop using modern CSS (Container Queries).
- **Modern Typography:** Clean and readable 'Inter' and 'Space Grotesk' fonts.

## Design Details
- **Background:** Dynamic radial gradients that shift based on the active theme.
- **Interactive Elements:** Buttons feature glow effects and hover transitions.
- **Number Spheres:** Dynamic state changes (active/inactive) with smooth transitions.

## Current State
- `index.html`: Refined structure with theme toggle and Google Fonts.
- `style.css`: Comprehensive design system with `@layer` organization and dual-theme support.
- `main.js`: Optimized generation logic with theme management and animations.

## Future Plans
- [ ] Add sound effects for number "locking".
- [ ] Allow users to choose between different lottery types (e.g., Powerball, Mega Millions).
- [ ] Implement local storage to keep track of previous generations.
