// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
function determinarParOImpar(numero) {
  if (numero % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}
let numeroIngresado = prompt("Ingrese un número:");
let numero = parseInt(numeroIngresado);
if (!isNaN(numero)) {
  let resultado = determinarParOImpar(numero);
  document.write("<p>" + resultado + "</p>");
} else {
  document.write("<p>Por favor, ingrese un número válido.</p>");
}