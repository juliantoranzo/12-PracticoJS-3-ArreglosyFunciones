function analizarCadena(cadena) {
    // Verificar si la cadena está formada solo por mayúsculas.
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    }
    // Verificar si la cadena está formada solo por minúsculas.
    else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    }
    // La cadena tiene una mezcla de mayúsculas y minúsculas.
    else {
      return "La cadena tiene una mezcla de mayúsculas y minúsculas.";
    }
  }
  
  // Solicitar al usuario que ingrese una cadena de texto.
  let cadenaIngresada = prompt("Ingrese una cadena de texto:");
  
  // Llamar a la función y obtener el resultado.
  let resultado = analizarCadena(cadenaIngresada);
  
  // Mostrar el resultado en la página web.
  document.write("<p>" + resultado + "</p>");