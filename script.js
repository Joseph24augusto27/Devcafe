const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");
const enderecoLink = document.getElementById("enderecoLink");

enderecoLink.addEventListener("click", function (e) {
    e.preventDefault();  // Previne o comportamento padrão do link
    mostrarModal();
});

function mostrarModal() {
    mascara.style.visibility = "visible";
    mascara.style.opacity = "1";
    modal.style.transform = "translate(-50%, -50%) scale(1)";
}

function esconderModal() {
    mascara.style.visibility = "hidden";
    mascara.style.opacity = "0";
    modal.style.transform = "translate(-50%, -50%) scale(0)";
}

// Fechar o modal ao clicar na máscara
mascara.addEventListener("click", esconderModal);
