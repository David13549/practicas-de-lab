const fs = require ('fs');
const fileName = 'biblioteca.json';

fs.readFile(fileName, 'utf8', (err, data)=>{
    if(err){
        console.log("Error al leer el archivo JSON", err)
        return;
    }
    try{
        const libros = JSON.parse(data);

        libros.splice(0, 1);

        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
            if(err){
                console.log("Error al escribir el archivo JSON", err);
                return;
            }else{
                console.log("Libro eliminado del archivo JSON exitosamente");
            }
        })
    }
    catch(error){
        console.log("Error al parsear el archivo JSON.", error);
    }
})