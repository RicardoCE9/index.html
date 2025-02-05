const mario = document.querySelector('.mario');
const turbo = document.querySelector('.turbo');
const scoreDisplay = document.querySelector('.score');

let score = 0;
let isGameOver = false;

// Incrementar pontuação a cada 100 ms   
const scoreInterval = setInterval(() => {
    if (!isGameOver) {
        score++;
        scoreDisplay.textContent = `Pontuação: ${score}`;  // Corrigido com crases
    }
}, 100);

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const turboPosition = turbo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (turboPosition <= 120 && turboPosition > 0 && marioPosition < 80) {
        turbo.style.animation = 'none';
        turbo.style.left = `${turboPosition}px`;  // Corrigido com crases

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;  // Corrigido com crases

        mario.src = './imagens/gameover.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        isGameOver = true;
        clearInterval(loop);
        clearInterval(scoreInterval);

        alert(`Game Over! Sua pontuação foi: ${score}`);  // Corrigido com crases
    }
}, 10);

// Evento de pulo
document.addEventListener('keydown', jump);
