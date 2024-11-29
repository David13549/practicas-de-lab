class Coche {
    constructor(marca, modelo, velocidad = 0) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidad = velocidad
    }

    get velocidad(){
        return this._velocidad;
    }

    acelerar(incremento){
        if(incremento > 0){
            this._velocidad += incremento;
            console.log(`El coche ha acelerado. Nueva velocidad: ${this._velocidad} km/h.`);
        }else{
            console.log("El incremento de velocidad debe ser mayor a 0.");
        }
    }

    frenar(decremento){
        if(decremento > 0 && this._velocidad - decremento >= 0){
            this._velocidad -= decremento;
            console.log(`El coche ha frenado. Nueva velocidad: ${this._velocidad} km/h`);
        }else if(this._velocidad - decremento < 0){
            console.log("El decremento de velocidad es demasiado alto. El coche se detendra.");
        }else{
            console.log("El decremento de velocidad debe ser mayor a 0.");
        }
    }

    mostrarInformacion(){
        console.log(`Coche: ${this._marca}, ${this._modelo}, Velocidad actual: ${this._velocidad} km/h.`)
    }
};

const miCoche = new Coche("Toyota", "Corolla");

miCoche.mostrarInformacion();

miCoche.acelerar(20);

miCoche.frenar(10);

miCoche.frenar(15);

miCoche.mostrarInformacion();