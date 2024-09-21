const esperarTresSegundos = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Tiempo completado despues de 3 segundos")
    },3000)
})

esperarTresSegundos
    .then((mensaje )=>{
        console.log(mensaje)
    })
    .catch((error)=>{
        console.error(error)
    })