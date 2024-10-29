class CuentaBancaria{
    constructor(titular, saldo){
        this._titular = titular;
        this._saldo = saldo;
    };

    static tipoDeCuenta(){
        return 'Cuenta de Ahorros';
    };

    imprimirInfo(){
        console.log(`Titular: ${this._titular}, Saldo: $${this._saldo}`);
    };
};

const cuentaBancaria1 = new CuentaBancaria('Carlos Granados', 2500);
cuentaBancaria1.imprimirInfo();
console.log(CuentaBancaria.tipoDeCuenta());