const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una cadena de texto: ', (cadena)=>{
    rl.question('Introduce la letra a contar: ', (letraAbuscar)=>{
        let contadorLetras = 0;
        let posicion = 0;

        do {
            if (cadena[posicion].toLowerCase() === letraAbuscar.toLowerCase()) {
                contadorLetras++;
            }
            posicion++;
        } while (posicion < cadena.length);

        console.log(`La letra ${letraAbuscar}, aparece ${contadorLetras} veces en la cadena`);

        rl.close();
    });
});