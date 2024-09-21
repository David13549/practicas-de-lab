//Ejercicio 5: Clasificar usuario por edad y membresía del gimnacio

let edad = 30; //Edad del usuario
let membresia = "VIP"; // Tipo de membresia elegida (opciones: 'Básica', 'Estándar' y 'VIP')

// Evaluación de edad del usuario
if (edad < 18) {
    console.log("Eres menor de edad, puedes acceder a la membresia Juvenil.");
}else if(edad >=18 && edad <=60){
    console.log("Eres un adulto, puedes acceder a todas las membresias.");
}else{
    console.log("Eres mayor de 60 años, tienes descuentos en las membresias.")
}

// Uso de switch para determinar beneficios según la membresía seleccionada
switch (membresia) {
    case "Básico":
        console.log("Membresía Básica: Acceso a las áreas de entrenamiento estándar.")
        break;
    case "Estándar":
        console.log("Membresía Estándar: Acceso a todas las áreas de entrenamiento y clases grupales.")
        break;
    case "VIP":
        console.log("Membresía Premium: Acceso completo, con beneficios adicionales como spa y entrenadores personalizados.")
        break;
    default:
        console.log("Tipo de membresía no válida.")
}