class Persona{
    constructor(nombre, apellido){
        //propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //método get para obtener el nombre completo
    get  nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }

    //método set para modificar el nombre completo
    set nombreCompleto(nombreCompleto){
        [this._nombre,  this._apellido] = nombreCompleto.split(" ");
    }
}

const persona = new  Persona("Carlos", "Granados");
persona.nombreCompleto = "Alberto Amaya";
console.log(`Nombre completo:  ${persona.nombreCompleto}`);

