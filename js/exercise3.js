// Función para simular el lanzamiento de un dado.
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1; // Números aleatorios entre 1 y 6.
  }
  
  // Array para almacenar el número de apariciones de cada suma.
  let aparicionesSumas = Array(11).fill(0); // Inicializa el array con ceros para representar las sumas de 2 a 12.
  
  // Simular el lanzamiento de dos dados 50 veces.
  for (let i = 0; i < 50; i++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;
  
    // Incrementar la cuenta de la suma en el array de apariciones.
    aparicionesSumas[suma - 2]++;
  }
  
  // Mostrar el resultado de las apariciones de cada suma en una tabla.
  document.write("<h2>Resultados de las apariciones de las sumas:</h2>");
  document.write("<table border='1'>");
  document.write("<tr><th>Suma</th><th>Apariciones</th></tr>");
  
  for (let j = 0; j < aparicionesSumas.length; j++) {
    document.write("<tr>");
    document.write("<td>" + (j + 2) + "</td>");
    document.write("<td>" + aparicionesSumas[j] + "</td>");
    document.write("</tr>");
  }
  
  document.write("</table>");