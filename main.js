const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.number');
const themeToggle = document.getElementById('theme-toggle');
const lastNumbersContainer = document.getElementById('last-numbers');
const statsGrid = document.getElementById('stats-grid');

/**
 * Official Historical Data (Draws 1-1217)
 * Frequencies including bonus numbers.
 */
const OFFICIAL_STATS = {
    1: 199, 2: 188, 3: 201, 4: 194, 5: 178, 6: 197, 7: 200, 8: 180, 9: 158, 10: 189,
    11: 190, 12: 204, 13: 202, 14: 193, 15: 191, 16: 194, 17: 202, 18: 191, 19: 189, 20: 197,
    21: 190, 22: 161, 23: 168, 24: 197, 25: 172, 26: 195, 27: 211, 28: 176, 29: 170, 30: 188,
    31: 196, 32: 175, 33: 204, 34: 204, 35: 191, 36: 186, 37: 197, 38: 199, 39: 190, 40: 194,
    41: 165, 42: 178, 43: 197, 44: 185, 45: 193
};

const OFFICIAL_LAST_RESULT = [8, 10, 15, 20, 29, 31];

/**
 * Persistence & Data Loading
 */
function loadData() {
    // We now use static official data for stats.
    // User no longer accumulates their own stats.
    renderStats(OFFICIAL_STATS);
    renderLastResult(OFFICIAL_LAST_RESULT);
}

/**
 * UI Rendering
 */
function renderStats(data) {
    statsGrid.innerHTML = '';
    
    const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
    const hotNumbers = entries.slice(0, 10).map(e => e[0]);
    const coldNumbers = entries.slice(-10).map(e => e[0]);

    for (let i = 1; i <= 45; i++) {
        const item = document.createElement('div');
        item.className = 'stat-item';
        
        const ball = document.createElement('div');
        ball.className = 'stat-ball';
        if (hotNumbers.includes(i.toString())) ball.classList.add('hot');
        if (coldNumbers.includes(i.toString())) ball.classList.add('cold');
        ball.textContent = i;
        
        const count = document.createElement('div');
        count.className = 'stat-count';
        count.textContent = `${data[i]}x`;
        
        item.appendChild(ball);
        item.appendChild(count);
        statsGrid.appendChild(item);
    }
}

function renderLastResult(results) {
    const spans = lastNumbersContainer.querySelectorAll('span');
    results.forEach((num, i) => {
        if (spans[i]) spans[i].textContent = num;
    });
}

/**
 * Smart Recommendation Algorithm (Based on Official Data)
 */
function generateSmartNumbers() {
    const numbers = new Set();
    
    const sortedEntries = Object.entries(OFFICIAL_STATS).sort((a, b) => b[1] - a[1]);
    const hotPool = sortedEntries.slice(0, 15).map(e => parseInt(e[0]));
    const coldPool = sortedEntries.slice(-15).map(e => parseInt(e[0]));
    
    // Weighted Recommendation:
    // 2 numbers from Hot pool (Historical favorites)
    // 2 numbers from Cold pool (Due for a win?)
    // 2 numbers from Neutral (Balance)
    
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

    // Per user request, recommended numbers are NOT accumulated into stats.
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
