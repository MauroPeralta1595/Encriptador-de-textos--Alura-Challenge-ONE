let botonDesencriptar = document.querySelector('.boton-desencriptar');

botonDesencriptar.addEventListener('click',function(event){
    event.preventDefault();

    let capturarTexto = document.querySelector('.ingresar-texto');

    if (capturarTexto.value.length === 0 || capturarTexto.value.trim().length === 0 || validarEntrada(capturarTexto.value)){
        return

    }else {
        let vocales = ['e','i','a','o','u'];
        let reemplazo = ['enter','imes','ai','ober','ufat']; 
        let textoDesencriptado = encriptarDesencriptarTexto(capturarTexto.value,reemplazo,vocales); //en esta función invierto los parametros para que decodifique
        //Puede parecer repetitivo y poco eficiente el código, pero de esta manera si alguién tiene un texto ya encriptado
        //va a poder desencriptarlo desde el principio.
        let cuadroTexto = document.querySelector('.reemplazar-cuadro');
        cuadroTexto.innerHTML = '<textarea readonly class="texto-salida">';
        let textoSalida = document.querySelector('.texto-salida');
        textoSalida.innerText = textoDesencriptado;
        capturarTexto.value ='';

        if(validacionBotonCopiar === 0){
            botonCopiar.classList.replace('boton-copiar-invisible','boton-copiar-visible');
            validacionBotonCopiar++;
        }
    }   
});
