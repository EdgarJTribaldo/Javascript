//Escuchar click en el boton
const boton = document.getElementById("boton");
boton.addEventListener("click", preguntarNombre);
console.log(boton);

//Guardar referencia Headings
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

//Preguntas y guardar el nombre del usuario
function preguntarNombre(){
    const nombre = prompt("Introduce tu nombre")
    mostrarNombre(nombre)
}

//Insertar nombre en los (...)
function mostrarNombre(nombre){
    h2.textContent = "Hola Amigo"
    h1.textContent = nombre
}