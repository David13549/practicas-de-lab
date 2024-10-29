const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const preguntarNumero = () => {
  rl.question("Adivina el número entre 1 y 100: ", (respuesta) => {
    const numeroUsuario = parseInt(respuesta, 10);
    intentos++;

    if (numeroUsuario === numeroAleatorio) {
      console.log(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
      rl.close();
    } else if (numeroUsuario > numeroAleatorio) {
      console.log("El número es menor. Intenta de nuevo.");
      preguntarNumero();
    } else {
      console.log("El número es mayor. Intenta de nuevo.");
      preguntarNumero();
    }
  });
};

preguntarNumero();