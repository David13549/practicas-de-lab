const nombres = ["Ana", "Luis", "Maria", "Juan", "Carlos", "Elena", "Sofia", "Pedro"];

console.log("Lista de nombres:")

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

let cantidadNombres =  nombres.length;
console.log("\n Cantidad Total de Nombres: " +  cantidadNombres);   

let nombreBuscado = "Maria"
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
        encontrado = true
        console.log("\n Nombre: '"+  nombreBuscado + "' Encontrado en la posición: " + i)
        break
    }
}
if (!encontrado) {
    console.log("\n EL nombre: '"  + nombreBuscado + "' No fue encontrado en el array")
}

let nombreMasLargo =  nombres[0];
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}
console.log("\n el  nombre mas largo es: " + nombreMasLargo);

console.log("\n Nombre en mayúsculas: ")
for  (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase());
}

let nuevoNombre = "Gabriela"
nombres.push(nuevoNombre);
console.log("\n Lista actualizada de nombres  (despues de agregar '" + nuevoNombre + "'):" );
for  (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

nombres.pop()
console.log("\n Lista de nombres despues de eliminar el último:")
for   (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

console.log("\n Nombres en orden inverso: ")
for  (let i = nombres.length - 1; i >= 0; i--) {
    console.log(nombres[i]);
}



