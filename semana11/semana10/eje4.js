class Animal{
    constructor(nombre){
        this._nombre = nombre;
    };

    hacerSonido(){
        console.log(`${this._nombre} hace un sonido.`);
    };
};

class Perro extends Animal{
    hacerSonido(){
        console.log(`${this._nombre} ladra.`);
    };
};

const perro1 = new Perro('Rex');
perro1.hacerSonido();