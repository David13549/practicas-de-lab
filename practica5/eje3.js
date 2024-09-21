//Ejercicio 3: Evaluar el desempeño de un empleado según su puntaje

let puntaje = 85; //Cambia el valor de 'puntaje' para ver otros resultados

//Evaluación de desempeño usando if, else if y else.

if (puntaje >= 90) {
    console.log("Desempeño excelente.");
}else if(puntaje >= 75) {
    console.log("Desempeño bueno.")
}else if(puntaje >= 60) {
    console.log("Desempeño aceptable.")
}else{
    console.log("Desempeño insuficiente.")
}

// Descripción:
// -Si el puntaje es 90 o más, el desempeño es excelente.
// -Si el puntaje esta entre 75 y 89, el desempeño es bueno.
// -Si el puntaje esta entre 60 y 74, el desempeño es aceptable.
// -Si el puntaje es menos de 60, el desempeño es insuficiente.