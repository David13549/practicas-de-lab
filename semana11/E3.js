class Clima{
    constructor(celcius){
        this._celcius = celcius;
    }

    //get para obtener la temperatura en fahrenheit
    get fahrenheit(){
        return (this._celcius * 9/5) + 32;
    }

    //set para asignar la temperatura en fahrenheit
    set fahrenheit(fahrenheit){
        this._celcius = ((fahrenheit - 32) *  5/9);
    }

    //get y set para la temperatura en celcius
    get  celcius(){
        return this._celcius;
    }

    set celcius(celcius){
        this._celcius = this.celcius;
    }
}

const clima = new Clima (25);
console.log(`Clima en grados Fahrenheit: ${clima.fahrenheit}°F`);

clima.fahrenheit = 77;
console.log(`CLima en grados Celcius ${clima.celcius}°C`)