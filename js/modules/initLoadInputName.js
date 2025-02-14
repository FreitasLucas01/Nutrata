export default function initLoadInputName() {
    document.addEventListener("DOMContentLoaded", () => {
        const mainSection = document.querySelector(".promo-section");
        const nameParagraph = document.getElementById("user-name");
        const form = document.querySelector("form");
        
        try {
            const storedData = localStorage.getItem("userData");
            if (storedData) {
                const { firstName, lastName } = JSON.parse(storedData);
                if (firstName && lastName) {
                    animateMainSection();
                    nameParagraph.textContent = `Bem-vindo, ${firstName} ${lastName}!`;
                    nameParagraph.style.display = "block";
                }
            }
        } catch (error) {
            console.error("Erro ao recuperar os dados do localStorage", error);
        }

        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const firstName = document.getElementById("firstName").value.trim();
                const lastName = document.getElementById("lastName").value.trim();
                const email = document.getElementById("email").value.trim();
                const phone = document.getElementById("phone").value.replace(/\D/g, "");
                
                if (firstName && lastName && email && phone.length === 11) {
                    const formData = { firstName, lastName, email, phone };
                    localStorage.setItem("userData", JSON.stringify(formData));
                    
                    animateMainSection();
                    nameParagraph.textContent = `Bem-vindo, ${firstName} ${lastName}!`;
                    nameParagraph.style.display = "block";
                }
            });
        }
    });

    function animateMainSection() {
        const mainSection = document.querySelector(".promo-section");
        mainSection.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
        mainSection.style.transform = "translateY(-100%)";
        mainSection.style.opacity = "0";
        setTimeout(() => {
            mainSection.style.display = "none";
        }, 500);
    }
}
