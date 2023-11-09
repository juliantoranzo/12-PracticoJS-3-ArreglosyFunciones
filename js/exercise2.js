// 2. 2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones: ● Mostrar la longitud del arreglo. ● Mostrar en el documento web los ítems de las posiciones primera, tercera y última. ● Añade en última posición la ciudad de París. ● Escribe por pantalla el elemento que ocupa la segunda posición. ● Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let ciudades = [];
while (true) {
  let ciudad = prompt("Ingrese el nombre de una ciudad (o presione Cancelar para finalizar):");
  if (ciudad === null) {
    break;
  } else {
    ciudades.push(ciudad);
  }
}
document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos`);
document.write("<ul>");
document.write("<li> Elementos de la primer posición: " + ciudades[0] + "</li>");
document.write("<li> Elementos de la tercer posición: " + ciudades[2] + "</li>");
document.write("<li> Elementos de la última posición: " + ciudades[ciudades.length - 1] + "</li>");
document.write("<li> Elementos de la última posición: Paris </li>");
document.write("</ul>");
document.write("<ul>");
document.write("<li> Elemento de la segunda posición: " + ciudades[1] + "</li>");
ciudades[1] = "Barcelona";
document.write("</ul>");
document.write("<h1>Arreglo de ciudades</h1>");
document.write("<ul>");
for (var i = 0; i < ciudades.length; i++) {
  document.write("<li> Elemento: " + ciudades[i] + "</li>");
}
document.write("<li> Elementos de la última posición: Paris </li>");
document.write("</ul>");