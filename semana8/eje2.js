const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

let letra = '', veces = 0, cadena = '';

function preguntarLetra() {
    rl.question("¿Qué letra desea, X o Z?", (inputLetra)=>{
        letra = inputLetra.toUpperCase();
        if (letra === 'X' || letra === 'Z') {
            preguntarVeces();
        }else {
            console.log("Debes elegir la letra X o Z");
            preguntarLetra();
        };
    });
};

function preguntarVeces() {
    rl.question("¿Cúantas repeticiones (1-15)?", (inputVeces)=>{
        veces = parseInt(inputVeces);
        if (veces >=1 && veces <=15) {
            generarCadena();
        } else {
            console.log("El número de cadenas debe estar entre 1 y 15");
            preguntarVeces();
        };
    });
};

function generarCadena() {
    while (veces > 0){
        cadena += letra;
        veces--;
    }
    console.log("Resultado: "+ cadena);
    rl.close();
};

preguntarLetra();