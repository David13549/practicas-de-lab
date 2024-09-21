//  Ejercicio de DESAFÍO: Aplicar descuento según categoría de cliente y total de compra

let descuento = 0; //descuento de compra
let categoriaCliente = "VIP"; // Categoría del cliente (categorias: 'Básica', 'Estándar' y 'VIP')
let compra = 200 //compra del cliente

switch (categoriaCliente) {
    case "Básico":
        if (compra > 100) {
            descuento = 0.05; //descuento del 5% 
        } else{
            descuento = 0; //no hay desuento
        }
        break;
    case "Estándar":
        if (compra > 100) {
            descuento = 0.1; //descuento del 10% 
        } else{
            descuento = 0.05; //descuento del 5%
        }
        break;
    case "VIP":
        descuento = 0.2; //para clientes vip el desuento es del 20% siempre
        break;
    default:
        console.log("categoria no válida. No hay ningun descuento.")
}

//se calcula el total del descuento al cliente por la compra
let totalDescuento = compra * descuento;
let totalConDescuento = compra - totalDescuento;

//se muestran los detalles de la compra y el descuento al cliente
console.log(`categoria del cliente: ${categoriaCliente}`);
console.log(`Total de compra: ${compra}`)
console.log(`Descuento aplicado: ${(descuento *  100)}% `)
console.log(`Descuento de la compra: ${totalDescuento}`)
console.log(`Total a pagar: ${totalConDescuento}`)