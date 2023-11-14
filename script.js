// script.js
document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let timeLeft = 30;
    const scoreLabel = document.getElementById('score');
    const timerLabel = document.getElementById('timer');
    const button = document.getElementById('click-button');

    button.addEventListener('click', () => {
        score++;
        scoreLabel.textContent = 'Score: ' + score;
        moveButton();
    });

    function moveButton() {
        button.style.position = 'relative';
        button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
        button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
    }

    const timer = setInterval(() => {
        timeLeft--;
        timerLabel.textContent = 'Time left: ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            button.disabled = true;
            alert('Game Over! Your score is: ' + score);
        }
    }, 1000);
});
