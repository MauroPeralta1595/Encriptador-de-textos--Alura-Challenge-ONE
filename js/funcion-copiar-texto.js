function copiarAlPortapapeles(elemento) {
      
    let oculto = document.createElement("textarea");

    oculto.innerHTML = elemento.innerHTML;

    document.body.appendChild(oculto);
  
    oculto.select();

    document.execCommand("copy");
  
    document.body.removeChild(oculto);
  
  }