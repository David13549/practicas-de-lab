//Definicion de la clase articulo
class  Articulo{
    constructor (nombre, precio, stock){
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    };

    //Metodo para gestionar la compra de un producto
    comprar(cantidad){
        if(cantidad > 0 && this._stock > 0 && this._stock - cantidad >= 0){
            this._stock -= cantidad;
            let total = cantidad * this._precio;

            if(cantidad >1) {
                console.log(`Usted a comprado ${cantidad} unidades del producto ${this._nombre} - Total: $${total}.`);
            }else{
                console.log(`Usted a comprado ${cantidad} unidad del producto ${this._nombre} - Total: $${total}.`);
            };
        }
        else if (this._stock <= 0){
            console.log(`El producto ${this._nombre} actualmente está agotado.`);

        }
        else if (this._stock - cantidad < 0){
            console.log(`La cantidad que quiere comprar es demasiada, actualmente solo hay ${this._stock} Unidades del producto ${this._nombre}`);

        }
        else{
            console.log(`La cantidad que quiere comprar debe ser mayor a 0.`);
        };
    };

    reabastecer(cantidad){
        if (cantidad > 0) {
            this._stock += cantidad;
            console.log(`Reabastecimiento el stock - Cantidad disponible del producto ${this._nombre} - ${this._stock}.`);
        }else {
            console.log("La cantidad que desea reabastecer debe ser mayor a 0.");
        };
    };
};

const ART = new Articulo("Jabón", 20, 10);

ART.comprar(11);
ART.comprar(1);

ART.reabastecer(20);

ART.comprar(15);