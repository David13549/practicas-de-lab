let hoy = new Date();
let dia = hoy.getDate();

//Sumamos 1 porque los meses empiezan en 0
let mes = hoy.getMonth() +1;
let año = hoy.getFullYear();

console.log('Hoy es' + dia + '/' + mes + '/' + año);