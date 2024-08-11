const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-form")



function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-310px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}