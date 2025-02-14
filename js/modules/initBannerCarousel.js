export default function initBannerCarousel() {
    document.addEventListener("DOMContentLoaded", () => {
        const bannerContainer = document.querySelector(".banner-home-container");
        const bannerTitle = document.querySelector(".banner-home-title");
        const bannerDescription = document.querySelector(".banner-home-description"); // Pegamos o <p> agora
        const bannerButton = document.querySelector(".banner-home-btn");
        const nextButton = document.getElementById("next-banner");
        const prevButton = document.getElementById("prev-banner");

        const banners = [
            { 
                image: "/assets/img/banner-home-zero.webp", 
                title: "Whey ZERO LACTOSE", 
                description: "Whey Zero Lactose da Nutrata é um suplemento proteico de alta qualidade, especialmente formulado para pessoas intolerantes à lactose ou que desejam reduzir o consumo desse carboidrato na dieta.",
                textColor: "#1C1C1C", 
                buttonColor: "#1C1C1C"
            },
            { 
                image: "/assets/img/banner-home-grego.webp", 
                title: "Whey GREGO", 
                description: "WHEY GREGO é um produto inovador que traz mais sabor e prazer ao seu dia-a-dia, combinando teor nutricional e cremosidade para você que não abre mão de tudo isso em suas refeições!",
                textColor: "#FFF", 
                buttonColor: "blue"
            },
            { 
                image: "/assets/img/banner-home-havanna.webp", 
                title: "WHEY HAVANNA", 
                description: "Feito com doce de leite, zero glúten e em edição limitada, o WHEY GREGO HAVANNA combina qualidade e sabor irresistível.",
                textColor: "#1C1C1C", 
                buttonColor: "#1C1C1C"
            }
        ];

        let currentIndex = 0;

        // Adiciona transições suaves
        bannerContainer.style.transition = "opacity 0.5s ease-in-out";
        bannerTitle.style.transition = "opacity 0.5s ease-in-out";
        bannerDescription.style.transition = "opacity 0.5s ease-in-out"; // Aplicamos a transição no <p>
        bannerButton.style.transition = "background-color 0.5s ease-in-out, color 0.5s ease-in-out";

        function updateBanner() {
            bannerContainer.style.opacity = "0";
            bannerTitle.style.opacity = "0";
            bannerDescription.style.opacity = "0"; // Aplica fade-out na descrição
            bannerButton.style.opacity = "0";

            setTimeout(() => {
                const currentBanner = banners[currentIndex];
                
                bannerContainer.style.backgroundImage = `url('${currentBanner.image}')`;
                bannerContainer.style.backgroundSize = "cover";
                bannerTitle.textContent = currentBanner.title;
                bannerTitle.style.color = currentBanner.textColor;

                // Atualiza a descrição no <p>
                bannerDescription.textContent = currentBanner.description;
                bannerDescription.style.color = currentBanner.textColor;

                // Atualiza o botão
                bannerButton.style.backgroundColor = currentBanner.buttonColor;
                bannerButton.style.color = "#fff";

                bannerContainer.style.opacity = "1";
                bannerTitle.style.opacity = "1";
                bannerDescription.style.opacity = "1"; // Aplica fade-in na descrição
                bannerButton.style.opacity = "1";
            }, 500);
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % banners.length;
                updateBanner();
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + banners.length) % banners.length;
                updateBanner();
            });
        }

        // Inicializa com o primeiro banner
        updateBanner();
    });
}

