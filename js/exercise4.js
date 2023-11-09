// Función que determina si un número es par o impar.
function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
  // Solicitar al usuario que ingrese un número.
  let numeroIngresado = prompt("Ingrese un número:");
  
  // Convertir el input a un número.
  let numero = parseInt(numeroIngresado);
  
  // Verificar si se ingresó un número válido.
  if (!isNaN(numero)) {
    // Llamar a la función y obtener el resultado.
    let resultado = determinarParOImpar(numero);
  
    // Mostrar el resultado en la página web.
    document.write("<p>" + resultado + "</p>");
  } else {
    document.write("<p>Por favor, ingrese un número válido.</p>");
  }