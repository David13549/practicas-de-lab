//Ejercicio 1: Ejemplo que determina el nivel de calificación de un estudiante basado en su puntaje
let puntaje = 85;
let calificación = "";

//Verificamos el puntaje y asignamos una calificación
if (puntaje >= 90) {
    calificación = "A";
}else if(puntaje >= 80){
    calificación = "B";
}else if(puntaje >= 70){
    calificación = "C";
}else if(puntaje >= 60){
    calificación = "D";
}else {
    calificación = "F";
}

console.log(`La calificación del estudiante es: ${calificación}`);