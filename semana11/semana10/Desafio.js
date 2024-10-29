class Libro{
    constructor(titulo, autor, anio){
        this._titulo = titulo;
        this._autor = autor;
        this._anio = anio;
    };

    resumen(){
        console.log(`'${this._titulo}' de ${this._autor}, Publicado en el año ${this._anio}`);
    };
};

const libro1 = new Libro('El Principito', 'Antoine de Saint-Exupéry', 1943);
libro1.resumen();