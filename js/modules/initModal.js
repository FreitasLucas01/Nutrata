export default function initModal() {
    document.addEventListener("DOMContentLoaded", function() {
        // Seleciona todas as imagens dentro de .products-card
        const images = document.querySelectorAll('.products-card img');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const closeBtn = document.querySelector('.close');
    
        // Adiciona um evento de clique para cada imagem
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        });
    
        // Fecha o modal ao clicar no botão "X"
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    
        // Fecha o modal ao clicar fora da imagem
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}
