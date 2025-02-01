
function textosDePaginas (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto
};

function intentoDeUsuario () {
    alert ('Click desde el boton')
};

textosDePaginas('h1', 'Juego de Cesitar');
textosDePaginas('p','Indica un numero del 1 al 100');