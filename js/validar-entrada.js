function validarEntrada(cadena) {
    const caracteresNoPermitidos = /[^a-z ]/;
    return caracteresNoPermitidos.test(cadena);
  };
