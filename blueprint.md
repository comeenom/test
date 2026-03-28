# LottoGen Pro | Smart Lottery Number Generator

## Overview
LottoGen Pro is a modern, high-performance web application designed to generate random lottery numbers with a premium user experience. Built using framework-less web standards (Baseline), it leverages modern CSS features like `oklch` color spaces, glassmorphism, and responsive design.

## Features
- **Official Historical Engine:** Driven by verified results from Draw 1 to 1217 (latest as of March 28, 2026).
- **Smart Recommendation Algorithm:** Uses a weighted selection logic based on official historical frequency (Hot/Cold/Neutral balance).
- **Static Statistics:** Frequency grid is locked to official historical data; generated numbers are not accumulated, ensuring pure data-driven suggestions.
- **Last Official Result:** Displays the winning numbers from Draw 1217 for quick reference.
- **Vibrant UI:** Uses `oklch` color palette for perceptually uniform and vibrant colors.
- **Theme Support:** Native Dark and Light modes with persistent storage.
- **Interactive Animations:** Sequential "rolling" animation for number generation.
- **Responsive Design:** Optimized for mobile and desktop using modern CSS.

## Design Details
- **Stats Grid:** A 45-number matrix showing official cumulative frequency counts.
- **Visual Cues:** "Hot" (top 10) and "Cold" (bottom 10) numbers are visually distinct in the frequency grid.
- **Interactive Elements:** Buttons feature glow effects and hover transitions.

## Current State
- `index.html`: Optimized for historical data display.
- `style.css`: Refined layouts for frequency analytics and theme switching.
- `main.js`: Integrated hardcoded official stats (1-1217) and locked recommendation logic.

## Future Plans
- [ ] Add sound effects for number "locking".
- [ ] Allow users to toggle between different lottery types (e.g., Powerball, Mega Millions).
- [ ] Implement real-time API fetching for future draws.
