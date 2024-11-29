const fs = require ('fs');
const fileName = 'biblioteca.json';

const libros = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Márquez', disponible: true},
    {titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', disponible: false},
    {titulo: 'Orgullo y Prejuicio', autor: 'Jane Austen', disponible: true},

];

fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
    if(err){
        console.log("Error al crear el archivo JSON:", err);
        return;
    }else{
        console.log("Archivo JSON creado exitosamente con tres libros Iniciales");
    }
});