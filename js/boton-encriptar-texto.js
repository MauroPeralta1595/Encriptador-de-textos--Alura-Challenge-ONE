let botonEncriptar = document.querySelector('.boton-encriptar');
let validacionBotonCopiar = 0;

botonEncriptar.addEventListener('click', function (event) { 
    event.preventDefault();

    let capturarTexto = document.querySelector('.ingresar-texto');
    //Uso este if para evitar que se ingrese texto vacío
    if (capturarTexto.value.length === 0 || capturarTexto.value.trim().length === 0) {
        return;

    } else {
        let vocales = ['e', 'i', 'a', 'o', 'u']; //defino las vocales a usar en su orden.
        let reemplazo = ['enter', 'imes', 'ai', 'ober', 'ufat']; // defino los reemplazos de cada vocal (también en orden).
        let textoEncriptado = encriptarDesencriptarTexto(capturarTexto.value, vocales, reemplazo); // paso la función para encriptar/desencriptar.
        let cuadroTexto = document.querySelector('.reemplazar-cuadro'); // elijo el cuadro donde se escribira el texto transcripto.
        cuadroTexto.innerHTML = '<textarea readonly class="texto-salida">'; //creo el elemento con la clase ya agregada.
        let textoSalida = document.querySelector('.texto-salida'); //creo un selector con esa clase.
        textoSalida.innerText = textoEncriptado; //al elemento le paso como parametro el texto encriptado.
        capturarTexto.value = ''; //reinicio el textarea para que este libre para escribir algo nuevo.

        let botonCopiar = document.querySelector('.boton-copiar-invisible'); //genero un selector para el botón oculto.
        if (validacionBotonCopiar === 0) { // a tráves de este if valido si está oculto, si esta oculto, lo muestro con un cambio de clase.
            botonCopiar.classList.replace('boton-copiar-invisible', 'boton-copiar-visible');
            validacionBotonCopiar++;
        }
    }
})
