const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")


function mostrarModal() {
    mascara.style.visibility = "visible"
    modal.style.left = "50%"
}

function esconderModal() {
    mascara.style.visibility = "hidden"
    modal.style.left = "-30%"
}