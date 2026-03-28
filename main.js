const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.number');
const themeToggle = document.getElementById('theme-toggle');
const lastNumbersContainer = document.getElementById('last-numbers');
const statsGrid = document.getElementById('stats-grid');

let stats = {};
let lastResult = [];

/**
 * Persistence & Data Loading
 */
function loadData() {
    const savedStats = localStorage.getItem('lotto-stats');
    stats = savedStats ? JSON.parse(savedStats) : {};
    
    // Initialize stats for 1-45 if empty
    for (let i = 1; i <= 45; i++) {
        if (!stats[i]) stats[i] = 0;
    }

    const savedLast = localStorage.getItem('lotto-last-result');
    lastResult = savedLast ? JSON.parse(savedLast) : [];
}

function saveData() {
    localStorage.setItem('lotto-stats', JSON.stringify(stats));
    localStorage.setItem('lotto-last-result', JSON.stringify(lastResult));
}

/**
 * UI Rendering
 */
function renderStats() {
    statsGrid.innerHTML = '';
    
    // Sort numbers by frequency to identify "Hot" and "Cold"
    const entries = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const hotNumbers = entries.slice(0, 10).map(e => e[0]);
    const coldNumbers = entries.slice(-10).map(e => e[0]);

    for (let i = 1; i <= 45; i++) {
        const item = document.createElement('div');
        item.className = 'stat-item';
        
        const ball = document.createElement('div');
        ball.className = 'stat-ball';
        if (hotNumbers.includes(i.toString()) && stats[i] > 0) ball.classList.add('hot');
        if (coldNumbers.includes(i.toString())) ball.classList.add('cold');
        ball.textContent = i;
        
        const count = document.createElement('div');
        count.className = 'stat-count';
        count.textContent = `${stats[i]}x`;
        
        item.appendChild(ball);
        item.appendChild(count);
        statsGrid.appendChild(item);
    }
}

function renderLastResult() {
    const spans = lastNumbersContainer.querySelectorAll('span');
    if (lastResult.length === 0) return;
    
    lastResult.forEach((num, i) => {
        if (spans[i]) spans[i].textContent = num;
    });
}

/**
 * Smart Recommendation Algorithm
 */
function generateSmartNumbers() {
    const numbers = new Set();
    const allNumbers = Array.from({ length: 45 }, (_, i) => i + 1);
    
    // Analyze stats
    const sortedEntries = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const hotPool = sortedEntries.slice(0, 15).map(e => parseInt(e[0]));
    const coldPool = sortedEntries.slice(-15).map(e => parseInt(e[0]));
    
    // Logic:
    // 2 numbers from Hot pool
    // 2 numbers from Cold pool
    // 2 numbers from Random (remaining)
    
    // Fallback if no history
    const totalDraws = Object.values(stats).reduce((a, b) => a + b, 0);
    if (totalDraws < 10) {
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
    } else {
        // Pick 2 Hot
        while (numbers.size < 2) {
            numbers.add(hotPool[Math.floor(Math.random() * hotPool.length)]);
        }
        // Pick 2 Cold
        while (numbers.size < 4) {
            numbers.add(coldPool[Math.floor(Math.random() * coldPool.length)]);
        }
        // Pick 2 Random
        while (numbers.size < 6) {
            const rand = Math.floor(Math.random() * 45) + 1;
            numbers.add(rand);
        }
    }
    
    return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Animations
 */
async function animateNumbers() {
    generateBtn.disabled = true;
    const finalNumbers = generateSmartNumbers();
    
    numberSpans.forEach(span => {
        span.classList.remove('active');
        span.textContent = '?';
    });

    for (let i = 0; i < numberSpans.length; i++) {
        const span = numberSpans[i];
        
        let rolls = 0;
        const maxRolls = 10;
        const rollInterval = setInterval(() => {
            span.textContent = Math.floor(Math.random() * 45) + 1;
            rolls++;
            if (rolls >= maxRolls) {
                clearInterval(rollInterval);
                span.textContent = finalNumbers[i];
                span.classList.add('active');
            }
        }, 50);

        await new Promise(resolve => setTimeout(resolve, 300));
    }

    // Update Data
    lastResult = [...finalNumbers];
    finalNumbers.forEach(n => stats[n]++);
    saveData();
    renderLastResult();
    renderStats();

    generateBtn.disabled = false;
}

/**
 * Theme Management
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

/**
 * Event Listeners
 */
generateBtn.addEventListener('click', animateNumbers);
themeToggle.addEventListener('click', toggleTheme);

// Initialize
initTheme();
loadData();
renderStats();
renderLastResult();
