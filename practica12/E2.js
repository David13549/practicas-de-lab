class Ciclista {
    constructor(distanciaRecorrida){
        this._distanciaRecorrida = distanciaRecorrida;
    };

    get distanciaRecorrida(){
        if(this._distanciaRecorrida > 0){
            console.log("El ciclista esta parado.");
        }else if(this._distanciaRecorrida == 0){
            console.log("El ciclista está en movimiento");
        }
    }

    //setter para establecer un nuevo valor a la distancia recorrida
    set distanciaRecorrida(new_distance){
        if(new_distance > -1){
            this._distanciaRecorrida = new_distance;
            console.log(`Nuevo valor asignado a la distancia del recorrido = ${new_distance}`);
        }else{
            console.log("El valor de la distancia recorrida debe ser mayor a -1.");
        }
    };
} 



const Ciclista1 = new Ciclista(1);

Ciclista1.distanciaRecorrida = 0;
Ciclista1.distanciaRecorrida;

Ciclista1.distanciaRecorrida = 10;

Ciclista1._distanciaRecorrida = -1;

Ciclista1.distanciaRecorrida;
