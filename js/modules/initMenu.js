export default function initMenuAtivo() {
    const btnMenu = document.getElementById("btnMenu");

    function handleClick(e) {
        if (e.type === "touchstart") e.preventDefault();
        
        const nav = document.querySelector(".header-nav");
        nav.classList.toggle("ativo");
        document.body.classList.toggle("ativo");

        const ativo = nav.classList.contains("ativo");
        e.currentTarget.setAttribute("aria-expanded", ativo);
        e.currentTarget.setAttribute("aria-label", ativo ? "Fechar Menu" : "Abrir Menu");
    }

    btnMenu.addEventListener("click", handleClick);
    btnMenu.addEventListener("touchstart", handleClick);
}
