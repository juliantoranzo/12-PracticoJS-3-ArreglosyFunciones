// Función para mostrar la tabla de multiplicar de un número.
function mostrarTablaMultiplicar(numero) {
  document.write("<h1>Tabla de multiplicar del " + numero + ":</h1>");
  document.write("<ul>");
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write("<li>" + numero + " x " + i + " = " + resultado + "</li>");
  }
  document.write("</ul>");
}
let numeroIngresado = prompt(
  "Ingrese un número del 1 al 10 para mostrar su tabla de multiplicar:"
);
let numero = parseInt(numeroIngresado);
if (!isNaN(numero)) {
  mostrarTablaMultiplicar(numero);
} else {
  document.write("<p>Por favor, ingrese un número válido.</p>");
}
