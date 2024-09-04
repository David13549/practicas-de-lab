const fecha_nacimiento = new Date('2004-09-23');

const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"];

const diaSemana = dias[fecha_nacimiento.getDay()];
const diaMes = fecha_nacimiento.getDate();
const mes = meses[fecha_nacimiento.getMonth()];

console.log(`Naci un ${diaSemana} ${diaMes} de ${mes}`);