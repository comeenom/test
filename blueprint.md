# LottoGen Pro | Smart Lottery Number Generator

## Overview
LottoGen Pro is a modern, high-performance web application designed to generate random lottery numbers with a premium user experience. Built using framework-less web standards (Baseline), it leverages modern CSS features like `oklch` color spaces, glassmorphism, and responsive design.

## Features
- **7-Number Recommendation:** Generates 7 unique numbers (6 main + 1 bonus) to provide a complete set of suggestions.
- **Official Historical Engine:** Driven by verified results from Draw 1 to 1217 (latest as of March 28, 2026), including bonus number frequencies.
- **Smart Recommendation Algorithm:** Uses a weighted selection logic based on official historical frequency (Hot/Cold/Neutral balance).
- **Static Statistics:** Frequency grid is locked to official historical data; generated numbers are not accumulated, ensuring pure data-driven suggestions.
- **Last Official Result:** Displays the winning numbers from Draw 1217 (8, 10, 15, 20, 29, 31) plus the bonus number (41).
- **Vibrant UI:** Uses `oklch` color palette for perceptually uniform and vibrant colors.
- **Theme Support:** Native Dark and Light modes with persistent storage.
- **Interactive Animations:** Sequential "rolling" animation for all 7 generated numbers.
- **Responsive Design:** Optimized layout for mobile and desktop, comfortably fitting 7 numbers.

## Design Details
- **Stats Grid:** A 45-number matrix showing official cumulative frequency counts.
- **Visual Cues:** The 7th (bonus) number is visually distinguished with a dashed border and unique active state glow.
- **Interactive Elements:** Buttons feature glow effects and hover transitions.

## Current State
- `index.html`: Updated to include 7 number slots for both main and historical displays.
- `style.css`: Adjusted sphere sizes and spacing to accommodate 7 numbers; added bonus number styling.
- `main.js`: Updated to generate 7 unique numbers and display the Draw 1217 bonus number.

## Future Plans
- [ ] Add sound effects for number "locking".
- [ ] Allow users to toggle between different lottery types.
- [ ] Implement real-time API fetching for future draws.
