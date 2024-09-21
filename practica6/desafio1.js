const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, //Define la entrada que será el teclado
    output: process.stdout//define la salida que será por consola
})

rl.question('¿Cúal es su edad? ', (edad)=>{
    if (edad>0 && edad<=12) {
        console.log("La persona es un niño.");
    }else if(edad>=13 && edad<=17){
        console.log("La persona es un adolescente.");
    }else if(edad>=18 && edad<=35){
        console.log("La persona es un adulto joven.");
    }else if(edad>=36 && edad<=59){
        console.log("La persona es un adulto.");
    }else{
        console.log("La persona es un adulto mayor")
    }
    rl.close()
})