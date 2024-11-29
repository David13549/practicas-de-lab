const fs = require('fs');

const filename = 'archivo.json';
const content = {
    nombre: 'Marta Guzmán',
    edad: 22,
    materias: ['Lógica de Programación', ' Realidad Nacional', 'Expresión Oral y escrita'],
    activo: true
};

fs.writeFile(filename, JSON.stringify(content, null, 2), (err)=>{
    if (err){
        console.log('Error al crear archivo JSON', err);
    }else{
        console.log('El archivo fue creado exitosamente');
    };
});