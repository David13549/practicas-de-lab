let fechaActual = new Date();

//Obtenemos el mes actual
let mesActual = fechaActual.getMonth();

//Creamos un arreglo para mapear los meses
let nombreMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"];

//Obtenemos el nombre del mes correspondiente
let nombreMes = nombreMeses[mesActual];

console.log(`El nombre del mes actual es: ${nombreMes}`);