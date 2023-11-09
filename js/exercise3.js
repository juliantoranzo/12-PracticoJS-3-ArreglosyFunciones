// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
let aparicionesSumas = Array(11).fill(0);
for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  aparicionesSumas[suma - 2]++;
}
document.write("<h1>Resultados de las apariciones de las sumas:</h1>");
document.write("<table border='1'>");
document.write("<tr><th>Suma</th><th>Apariciones</th></tr>");
for (let j = 0; j < aparicionesSumas.length; j++) {
  document.write("<tr>");
  document.write("<td>" + (j + 2) + "</td>");
  document.write("<td>" + aparicionesSumas[j] + "</td>");
  document.write("</tr>");
}
document.write("</table>");