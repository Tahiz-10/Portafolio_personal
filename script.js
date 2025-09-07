// Menú hamburguesa
let menu = document.getElementById("menu");
let hamburguesa = document.getElementById("hamburguesa");

hamburguesa.addEventListener("click", function() {
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

// Validación básica del formulario
let form = document.getElementById("formulario");
let error = document.getElementById("error");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || email === "" || mensaje === ""){
        error.textContent = "Por favor llena todos los campos.";
        error.style.color = "red";
    } else {
        error.textContent = "¡Formulario enviado correctamente!";
        error.style.color = "green";
    }
});