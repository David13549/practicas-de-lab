const fs = require ('fs');

const fileName = 'vehiculos.json';

function read(){
    fs.readFile(fileName, 'utf8', (err, content)=>{
        if(err){
            console.log("Error al leer el archivo JSON.", err);
            return;
        }
        try{
            const objectJSON = JSON.parse(content);
            console.log("Flota de vehiculos: ", objectJSON)
        }
        catch (error){
            console.log("Error al parsear el archivo JSON.")
        }
    })
};

module.exports = read;