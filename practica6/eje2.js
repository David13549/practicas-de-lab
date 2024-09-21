//Ejemplo que muestra el nombre del mes basado en el número del mes
let numeroMes = 4;
let nombreMes = "";

//Usamos la estructura 'switch' para asignar el nombre correspondiente
switch (numeroMes) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    case 5:
        nombreMes = "Mayo";
        break;                                  
    default:
        nombreMes = "Mes no válido."
        break;
}

console.log(`El nombre del mes es: ${nombreMes}`)