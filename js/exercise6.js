// Función para calcular el perímetro de un rectángulo.
function calcularPerimetroRectangulo(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
  }
  
  // Solicitar al usuario ingresar el valor de los lados del rectángulo.
  let ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
  let ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));
  
  // Verificar si los valores ingresados son válidos.
  if (!isNaN(ladoA) && !isNaN(ladoB)) {
    // Calcular el perímetro llamando a la función.
    let perimetro = calcularPerimetroRectangulo(ladoA, ladoB);
  
    // Mostrar el resultado por pantalla.
    document.write("<p>El perímetro del rectángulo es: " + perimetro + "</p>");
  } else {
    document.write("<p>Por favor, ingrese valores numéricos válidos.</p>");
  }