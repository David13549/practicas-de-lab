const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let num;

function pedirNumero() {
    rl.question("INtroduce un número mayor a 5: ", (input)=>{
        num =  parseInt(input);
        if (num > 5) {
            console.log(`número valido:  ${num}`);
            rl.close()
        } else {
            console.log("el número debe ser mayor a 5");  
            rl.close()  
        }

    })
}

pedirNumero()