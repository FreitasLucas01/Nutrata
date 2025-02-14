export default function initTimmer() {
    function startCountdown() {
        const timerElements = document.querySelectorAll(".sale-timer-bg p");

        if (timerElements.length < 4) return; // Garante que há números suficientes

        let minutes = parseInt(timerElements[0].textContent + timerElements[1].textContent, 10);
        let seconds = parseInt(timerElements[2].textContent + timerElements[3].textContent, 10);

        function updateTimerDisplay(min, sec) {
            const minStr = min.toString().padStart(2, '0');
            const secStr = sec.toString().padStart(2, '0');

            timerElements[0].textContent = minStr[0];
            timerElements[1].textContent = minStr[1];
            timerElements[2].textContent = secStr[0];
            timerElements[3].textContent = secStr[1];
        }

        function countdown() {
            if (minutes === 0 && seconds === 0) {
                minutes = 60; // Reinicia para 60 minutos
                seconds = 0;
            } else {
                if (seconds === 0) {
                    seconds = 59;
                    minutes--;
                } else {
                    seconds--;
                }
            }

            updateTimerDisplay(minutes, seconds);
        }

        setInterval(countdown, 1000);
    }

    startCountdown();
}
