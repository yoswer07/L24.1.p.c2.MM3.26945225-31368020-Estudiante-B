// El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
// Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
// Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
// notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
// promedio mínimo de 12 (1=beisbol - 2=fútbol).
// Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
// estudiante y reporte si es admitido en el equipo que solicita.

import Cl_deportista from "./Cl_deportista.js";

let estudiante1 = new Cl_deportista("Juan", 132, 8, 1, 21);
let estudiante2 = new Cl_deportista("Felix", 110, 10, 2, 20);

let salida = document.getElementById("Salida");
salida.innerHTML = `
    <span>Nombre del estudiante: ${estudiante1.nombre}</span><br>
    <span>Acumulado de notas: ${estudiante1.notas}</span><br>
    <span>Cantidad de materias: ${estudiante1.materias}</span><br>
    <span>Deporte (1=beisbol - 2=futbol): ${estudiante1.deporte}</span><br>
    <span>Edad: ${estudiante1.edad}</span><br>
    <span>Nota promedio: ${estudiante1.promedioNotas()}</span><br>
    <span>${estudiante1.esAdmitido()}</span><br>
    <br>
    <span>Nombre del estudiante: ${estudiante2.nombre}</span><br>
    <span>Acumulado de notas: ${estudiante2.notas}</span><br>
    <span>Cantidad de materias: ${estudiante2.materias}</span><br>
    <span>Deporte (1=beisbol - 2=futbol): ${estudiante2.deporte}</span><br>
    <span>Edad: ${estudiante2.edad}</span><br>
    <span>Nota promedio: ${estudiante2.promedioNotas()}</span><br>
    <span>${estudiante2.esAdmitido()}</span><br>
`;