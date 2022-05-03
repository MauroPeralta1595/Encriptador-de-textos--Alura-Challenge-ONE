let botonCopiar = document.querySelector('.boton-copiar-invisible'); 
let avisoTextoCopiado = document.querySelector('.aviso-texto-copiado-invisible'); 
let clase1 = 'aviso-texto-copiado-invisible'; 
let clase2 = 'aviso-texto-copiado-visible'; 

botonCopiar.addEventListener('click', function (event) {
    event.preventDefault();
    let codigoACopiar = document.querySelector('.texto-salida');
    let seleccion = document.createRange(); //creo el rango de selección de mi botón copiar
    seleccion.selectNodeContents(codigoACopiar); //elijo el contenido a copiar
    window.getSelection().removeAllRanges(); //remuevo selecciones anteriores
    window.getSelection().addRange(seleccion); //agrego mi rango de selección
    var res = document.execCommand('copy'); //copio lo que esté en el rango de selección
    window.getSelection().removeRange(seleccion); // limpio el rango de selección de lo que el botón copia
    aparecerDesaparecerAviso(clase1, clase2); //ejecuto mi funcion para que aparezca el aviso de texto copiado
    setTimeout(function () { // con esta función, el aviso de texto copiado desaparece lentamente
        avisoTextoCopiado.classList.replace(clase2, clase1);
    }, 1300);
})

function aparecerDesaparecerAviso(clase1, clase2) { //función para visibilizar u ocultar el aviso de texto copiado
    avisoTextoCopiado.classList.replace(clase1, clase2);
}
