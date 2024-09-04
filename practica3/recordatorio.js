//Esta funcion toma dos argumentos: una cadena de texto que representa la fecha y hora del recordario (fechaHoraRecordatorio) y un mensaje (mensaje) que se mostrara cuando llegue el momento
function establecerRecordatorio(fechaHoraRecordatorio, mensaje) {
    const ahora = new Date();
    //Convertir el texto de fecha y hora del recordatorio en un objeto Date
    const horaRecordatorio = new Date(fechaHoraRecordatorio);
    //calcular la diferencia en milisegundos entre la hora actual y la hora del recordatorio
    const diferenciaTiempo = horaRecordatorio.getTime() - ahora.getTime();
    //si la diferencia es positiva significa que el recordatorio es para el futuro
    if (diferenciaTiempo > 0) {
        setTimeout(() => {
            //obtener y mostrar la fecha y hora del recordatorio
            const anio = horaRecordatorio.getFullYear();
            const mes  = horaRecordatorio.getMonth() +1;
            const dia = horaRecordatorio.getDate();
            const hora = horaRecordatorio.getHours();
            const minutos = horaRecordatorio.getMinutes();
            const segundos = horaRecordatorio.getSeconds();

            console.log(`Recordatorio para: ${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}: ${mensaje}`);

        }, diferenciaTiempo)
    } else{
        //si la diferencia es negativa, la hora y fecha ya han pasado
        //mostrar un mensaje al usuario que no se puede configurar el recordatorio
        console.log("La fecha y hora ya han pasado. ");
    }
}
//Ejemplo de uso: Establecer un recordatorio para una fecha y hora especifica
//en este caso se establece un recordatorio para el 30 de agosto de 2024 a las 9:36:00 pm
establecerRecordatorio("2024-08-30T21:36:00", "¡Es hora de programar!");