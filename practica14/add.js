const fs = require ('fs');

const fileName = 'vehiculos.json';

function AddVehicle(){
    fs.readFile(fileName, 'utf8', (err, content)=>{
        if(err){
            console.log("Error al leer el archivo JSON.", err);
            return;
        }
    
        const vehiculos = JSON.parse(content);
        const nuevoVehiculo = {id: 4, marca: 'Ford', modelo: 'Focus', año: 2020};
        vehiculos.push(nuevoVehiculo);
    
        fs.writeFile(fileName, JSON.stringify(vehiculos, null, 2), (err)=>{
            if(err){
                console.log("Error al crear el archivo JSON.", err);
            }
            console.log("Nuevo vehiculo agregado al archivo JSON.")
        })
    })
};

module.exports = AddVehicle;