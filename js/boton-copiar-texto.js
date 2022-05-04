let botonCopiar = document.querySelector('.boton-copiar-invisible'); 
let avisoTextoCopiado = document.querySelector('.aviso-texto-copiado-invisible'); 
let clase1 = 'aviso-texto-copiado-invisible'; 
let clase2 = 'aviso-texto-copiado-visible'; 

botonCopiar.addEventListener('click', function (event) {
    event.preventDefault();
    let codigoACopiar = document.querySelector('.texto-salida');
    copiarAlPortapapeles(codigoACopiar); //ejecuto mi función para copiar
    aparecerDesaparecerAviso(clase1, clase2); //ejecuto mi funcion para que aparezca el aviso de texto copiado
    setTimeout(function () { // con esta función, el aviso de texto copiado desaparece lentamente
        avisoTextoCopiado.classList.replace(clase2, clase1);
    }, 1300);
    
});

function aparecerDesaparecerAviso(clase1, clase2) { //función para visibilizar u ocultar el aviso de texto copiado
  avisoTextoCopiado.classList.replace(clase1, clase2);
}
