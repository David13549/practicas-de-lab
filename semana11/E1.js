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

}

const persona = new  Persona("Carlos", "Granados");
console.log(`Nombre completo:  ${persona.nombreCompleto}`);

