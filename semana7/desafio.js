const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarEntrada() {
  rl.question('Ingrese una cadena de texto: ', (respuesta) => {
    if (respuesta.trim() === "") {
      console.log("La cadena no debe estar vacía. Inténtalo de nuevo.");
      solicitarEntrada(); // Vuelve a solicitar la entrada
    } else {
      let vocales = 0;
      let digitos = 0;
      const vocalesLista = "aeiouAEIOU";

      for (let i = 0; i < respuesta.length; i++) {
        if (vocalesLista.indexOf(respuesta[i]) !== -1) {
          vocales++;
        }
        if (respuesta[i] >= '0' && respuesta[i] <= '9') {
          digitos++;
        }
      }

      console.log(`Número de vocales: ${vocales}`);
      console.log(`Número de dígitos: ${digitos}`);
      rl.close();
    }
  });
}

solicitarEntrada();
