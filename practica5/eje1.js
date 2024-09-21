//Ejercicio 1: Evaluar letra de calificación
let letraCalificacion = 'B'; //Cambiamos la letra para que nos muestre el mensaje por cada una

switch (letraCalificacion) {
    case 'A':
        console.log("Excelente trabajo.");
        break;
    case 'B':
        console.log("Buen trabajo.");
        break;
    case 'C':
        console.log("Es suficiente.");
        break;
    case 'D':
        console.log("Necesitas mejorar.");
         break;
    case 'F':
        console.log("Reprobado")
    default:
        console.log("Calificación no válida")
}