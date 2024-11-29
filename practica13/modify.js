const fs = require('fs');
const fileName = 'archivo.json';

fs.readFile(fileName, 'utf-8', (err, content)=>{
    if(err){
        console.log('Error al leer el archivo JSON', err)
        return;
    }
    try {
        const objectJSON = JSON.parse(content)
        objectJSON.ciclo = 'II-2024';
        objectJSON.edad = 19

        const newContent = JSON.stringify(objectJSON, null, 2)
        fs.writeFile('archivo.json', newContent, (err)=>{
            if (err){
                console.log('Error al escribir archivo JSON', err)
            }
            console.log('Arhivo JSON modificado y guardado exitosamente')
        })
    }
    catch (error){
        console.log('Error al parsear el JSON', error)
    }
});