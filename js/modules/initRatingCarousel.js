export default function initRatingCarousel() {
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector(".evaluation-card-container");
        const nextButton = document.getElementById("next-evaluation");
        const prevButton = document.getElementById("prev-evaluation");
        
        let currentIndex = 0;
        const cards = Array.from(container.children);
        const visibleCards = 3;
        
        function updateCarousel() {
            cards.forEach((card, index) => {
                if (index >= currentIndex && index < currentIndex + visibleCards) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        }
        
        updateCarousel();
        
        nextButton.addEventListener("click", () => {
            if (currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        let isDragging = false;
        let startX = 0;

        container.addEventListener("mousedown", (event) => {
            isDragging = true;
            startX = event.clientX;
        });

        container.addEventListener("mousemove", (event) => {
            if (!isDragging) return;
            const diff = startX - event.clientX;
            if (diff > 50 && currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateCarousel();
                isDragging = false;
            }
            if (diff < -50 && currentIndex > 0) {
                currentIndex--;
                updateCarousel();
                isDragging = false;
            }
        });

        container.addEventListener("mouseup", () => {
            isDragging = false;
        });

        container.addEventListener("mouseleave", () => {
            isDragging = false;
        });

        container.addEventListener("touchstart", (event) => {
            isDragging = true;
            startX = event.touches[0].clientX;
        });

        container.addEventListener("touchmove", (event) => {
            if (!isDragging) return;
            const diff = startX - event.touches[0].clientX;
            if (diff > 50 && currentIndex < cards.length - visibleCards) {
                currentIndex++;
                updateCarousel();
                isDragging = false;
            }
            if (diff < -50 && currentIndex > 0) {
                currentIndex--;
                updateCarousel();
                isDragging = false;
            }
        });

        container.addEventListener("touchend", () => {
            isDragging = false;
        });
    });
}