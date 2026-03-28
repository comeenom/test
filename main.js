const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.number');

/**
 * Generates a set of 6 unique random numbers between 1 and 45.
 * @returns {number[]} Array of unique numbers sorted ascending.
 */
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Animates the number generation process.
 */
async function animateNumbers() {
    generateBtn.disabled = true;
    const finalNumbers = generateLottoNumbers();
    
    // Clear previous state
    numberSpans.forEach(span => {
        span.classList.remove('active');
        span.textContent = '?';
    });

    for (let i = 0; i < numberSpans.length; i++) {
        const span = numberSpans[i];
        
        // Rolling effect
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

        // Wait for roll to finish before starting next one
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    generateBtn.disabled = false;
}

generateBtn.addEventListener('click', animateNumbers);
