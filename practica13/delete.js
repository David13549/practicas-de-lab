const fs = require ('fs');
const fileName = 'archivo.json';

fs.readFile(fileName, 'utf8', (err, content)=>{
    if(err){
        console.log("Error al leer el archivo JSON", err);
        return;
    }
    try {
        const objectJSON = JSON.parse(content)
        delete objectJSON.activo;
        const newContent = JSON.stringify(objectJSON, null, 2);
        fs.writeFile(fileName, newContent, (err)=>{
            if(err){
                console.log("Error al escrbir el archivo JSON", err);
                return;
            }
            console.log("Valoe eliminado del archivo JSON extosamente")
        })
    }

    catch (error){
        console.error("Error al parsear el JSON", error)
    }
});

