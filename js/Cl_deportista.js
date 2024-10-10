import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_deportista extends Cl_estudiante{
    constructor(nombre, notas, materias, deporte, edad) {
        super(nombre, notas, materias)
        this.deporte = deporte;
        this.edad = edad;
    }
    esAdmitido() {
        if (this.deporte === 1) {
            if (this.promedioNotas() > 14 && this.edad >= 21) {
                return this.nombre + " es admitido en el equipo de beisbol"; 
            } else {
                return this.nombre + " no es admitido en beisbol";
            }
        }
        if (this.deporte === 2) {
            if (this.promedioNotas() >= 12 && this.edad >= 19) {
                return this.nombre + " es admitido en el equipo de futbol"; 
            } else {
                return this.nombre + " no es admitido en futbol";
            }
        }
        
    }
}