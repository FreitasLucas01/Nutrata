// export default function initBannerCarousel() {
//     document.addEventListener("DOMContentLoaded", () => {
//         const bannerContainer = document.querySelector(".banner-home-container");
//         const bannerTitle = document.querySelector(".banner-home-title");
//         const bannerList = document.querySelector(".banner-home-list");
//         const nextButton = document.getElementById("next-banner");
//         const prevButton = document.getElementById("prev-banner");

//         const banners = [
//             { 
//                 image: "/assets/img/banner-home-zero.png", 
//                 title: "Whey ZERO LACTOSE", 
//                 list: ["Adoçado com Stevia", "Não contém a enzima LACTOSE", "ZERO LACTOSE"]
//             },
//             { 
//                 image: "/assets/img/banner-home-grego.png", 
//                 title: "Whey GREGO", 
//                 list: ["Fonte de proteínas", "Sabor incrível", "Textura cremosa"]
//             },
//             { 
//                 image: "/assets/img/banner-home-havanna.png", 
//                 title: "WHEY GREGO HAVANNA", 
//                 list: ["Com doce de leite", "Zero Glúten", "Edição limitada"]
//             }
//         ];

//         let currentIndex = 0;

//         // Adiciona transição suave
//         bannerContainer.style.transition = "opacity 0.5s ease-in-out";
//         bannerTitle.style.transition = "opacity 0.5s ease-in-out";
//         bannerList.style.transition = "opacity 0.5s ease-in-out";

//         function updateBanner() {
//             bannerContainer.style.opacity = "0";
//             bannerTitle.style.opacity = "0";
//             bannerList.style.opacity = "0";
//             setTimeout(() => {
//                 bannerContainer.style.background = `url('${banners[currentIndex].image}') no-repeat center center`;
//                 bannerContainer.style.backgroundSize = "cover";
//                 bannerTitle.textContent = banners[currentIndex].title;
                
//                 // Atualiza a lista
//                 bannerList.innerHTML = "";
//                 banners[currentIndex].list.forEach(item => {
//                     const li = document.createElement("li");
//                     li.textContent = item;
//                     bannerList.appendChild(li);
//                 });
                
//                 bannerContainer.style.opacity = "1";
//                 bannerTitle.style.opacity = "1";
//                 bannerList.style.opacity = "1";
//             }, 500);
//         }

//         if (nextButton) {
//             nextButton.addEventListener("click", () => {
//                 currentIndex = (currentIndex + 1) % banners.length;
//                 updateBanner();
//             });
//         }

//         if (prevButton) {
//             prevButton.addEventListener("click", () => {
//                 currentIndex = (currentIndex - 1 + banners.length) % banners.length;
//                 updateBanner();
//             });
//         }
//     });
// }


export default function initBannerCarousel() {
    document.addEventListener("DOMContentLoaded", () => {
        const bannerContainer = document.querySelector(".banner-home-container");
        const bannerTitle = document.querySelector(".banner-home-title");
        const bannerList = document.querySelector(".banner-home-list");
        const bannerButton = document.querySelector(".banner-home-btn");
        const nextButton = document.getElementById("next-banner");
        const prevButton = document.getElementById("prev-banner");

        const banners = [
            { 
                image: "/assets/img/banner-home-zero.png", 
                title: "Whey ZERO LACTOSE", 
                list: ["Adoçado com Stevia", "Não contém a enzima LACTOSE", "ZERO LACTOSE"],
                textColor: "#1C1C1C", 
                buttonColor: "#1C1C1C"
            },
            { 
                image: "/assets/img/banner-home-grego.png", 
                title: "Whey GREGO", 
                list: ["Fonte de proteínas", "Sabor incrível", "Textura cremosa"],
                textColor: "#FFF", 
                buttonColor: "blue"
            },
            { 
                image: "/assets/img/banner-home-havanna.png", 
                title: "WHEY GREGO HAVANNA", 
                list: ["Com doce de leite", "Zero Glúten", "Edição limitada"],
                textColor: "#1C1C1C", 
                buttonColor: "#1C1C1C"
            }
        ];

        let currentIndex = 0;

        // Adiciona transição suave
        bannerContainer.style.transition = "opacity 0.5s ease-in-out";
        bannerTitle.style.transition = "opacity 0.5s ease-in-out";
        bannerList.style.transition = "opacity 0.5s ease-in-out";
        bannerButton.style.transition = "background-color 0.5s ease-in-out, color 0.5s ease-in-out";

        function updateBanner() {
            bannerContainer.style.opacity = "0";
            bannerTitle.style.opacity = "0";
            bannerList.style.opacity = "0";
            bannerButton.style.opacity = "0";
            setTimeout(() => {
                const currentBanner = banners[currentIndex];
                
                bannerContainer.style.background = `url('${currentBanner.image}') no-repeat center center`;
                bannerContainer.style.backgroundSize = "cover";
                bannerTitle.textContent = currentBanner.title;
                bannerTitle.style.color = currentBanner.textColor;
                
                // Atualiza a lista
                bannerList.innerHTML = "";
                currentBanner.list.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    li.style.color = currentBanner.textColor;
                    bannerList.appendChild(li);
                });
                
                // Atualiza o botão
                bannerButton.style.backgroundColor = currentBanner.buttonColor;
                bannerButton.style.color = "#fff";
                
                bannerContainer.style.opacity = "1";
                bannerTitle.style.opacity = "1";
                bannerList.style.opacity = "1";
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
    });
}
