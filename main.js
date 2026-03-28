const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.number');
const themeToggle = document.getElementById('theme-toggle');

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

themeToggle.addEventListener('click', toggleTheme);

/**
 * Lotto Logic
 */
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

async function animateNumbers() {
    generateBtn.disabled = true;
    const finalNumbers = generateLottoNumbers();
    
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

    generateBtn.disabled = false;
}

generateBtn.addEventListener('click', animateNumbers);

// Initialize
initTheme();
