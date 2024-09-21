const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, //Define la entrada que será el teclado
    output: process.stdout//define la salida que será por consola
})

rl.question('Ingresa un número entre 1 y 12: ', (numero) =>{
    const numeroEntero = parseInt(numero);

    let nombreMes;
    switch (numeroEntero) {
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
        case 6:
            nombreMes = "Junio";
            break;                                  
        case 7:
            nombreMes = "Julio";
            break;                                  
        case 8:
            nombreMes = "Agosto";
            break;                                  
        case 9:
            nombreMes = "Septiembre";
            break;                                  
        case 10:
            nombreMes = "Octubre";
            break;                                  
        case 11:
            nombreMes = "Noviembre";
            break;                                  
        case 12:
            nombreMes = "Diciembre";
            break;                                                                   
        default:
            nombreMes = "número no válido."
            break;
    }
    
    console.log(`El nombre del mes es: ${nombreMes}`)
    rl.close()
})