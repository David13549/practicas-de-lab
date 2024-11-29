const readline = require('readline');

const create = require('./create');
const AddVehicle = require('./add');
const read = require('./read');
const modify = require('./modify');
const deleteVehicle = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

function showMenu(){
    console.log('\n--- Menú ---');
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar vehículo');
    console.log('4. Modificar archivo JSON');
    console.log('5. Eliminar archivo');
    console.log('6. Salir');
}

function handleMenuOption(option){
    switch (option) {
        case '1':
            create();
            break;
        case '2':
            read();
            break;
        case '3':
            AddVehicle();
            break;
        case '4':
            modify();
            break;
        case '5':
            deleteVehicle();
            break;
        case '6':
            console.log("Saliendo del programa");
            rl.close();
            return;
        default:
            console.log('Opción no válida. Intente de nuevo');
            break;
    }

    setTimeout(promptMenu, 1000);
}

function promtMenu(){
    showMenu();
    rl.question('Seleccione una opción: ', handleMenuOption);
};

promtMenu();