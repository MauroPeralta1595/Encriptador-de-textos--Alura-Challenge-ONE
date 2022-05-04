function visibilizarError (elemento,textoEscrito,clase){
    if(validarEntrada(textoEscrito)){
        elemento.classList.add(clase);
    }else{
        elemento.classList.remove(clase);
    }
}

let capturarTexto = document.querySelector('.ingresar-texto');
let avisoEnRojo = document.querySelector('.aviso-minusculas');

  capturarTexto.addEventListener('input', function(){
    if(this.value.length >= 0){
      visibilizarError(this, this.value , 'error');
      visibilizarError(avisoEnRojo,this.value,'error-aviso');
    }
  });
  
