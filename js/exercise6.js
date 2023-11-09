// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
function calcularPerimetroRectangulo(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}
let ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
let ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));
if (!isNaN(ladoA) && !isNaN(ladoB)) {
  let perimetro = calcularPerimetroRectangulo(ladoA, ladoB);
  document.write("<p>El perímetro del rectángulo es: " + perimetro + "</p>");
} else {
  document.write("<p>Por favor, ingrese valores numéricos válidos.</p>");
}
