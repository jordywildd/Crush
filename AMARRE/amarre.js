function moverPosicionRandom(elm) {
    elm.style.position ='absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidht) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e) {
    alert('SABÍA QUE DIRÍAS QUE SÍ. CASEMONOS YA Y TENGAMOS HIJOS ❤️💕')

    divModoSexo.style.display = 'block';
    const cancion = new Audio('assets\\modo_hot.mp3');
    cancion.play();
})