let parrafoInicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);
// parrafoInicial = 6;

parrafoInicial.onclick = function() {
    cambiaColorAleatorio(); 
}

function cambiaColorAleatorio() {
    const colores =[
        "blue",
        "red",
        "black",
        "cyan",
        "gray",
        "green"
    ];
    
    let randomNumber = Math.floor(Math.random()*colores.length);
    parrafoInicial.style.color = colores[randomNumber];
    alert("hola OwO color "+parrafoInicial.style.color + " numero " + randomNumber);
}

/*
TIPOS DE DATOS
var -> Modificable,m socpe global - NO SE RECOMIENDA
let -> Modificable, scope limitado - RECOMENDADA USAR
const -> CONSTANTE, no modificable - Scope global


CASES

PascalCase - Clases - JAVA

camelCase - Variables, funciones, atributos. - Javascript
    variable -> parrafoInicial =
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case - Python, Javascript
    variables y funciones

CASE - Constantes

*/



