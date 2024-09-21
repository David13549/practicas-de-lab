function procesarComida(comida) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando pedido de: ${comida}...`)
        setTimeout(()=> {
            if (comida){
                resolve(`Pedido de ${comida} se realizo.`)
            }else{
                reject(`Error: no se pudo procesar el pedido.`)
            }
        },2000)
    })
}

procesarComida("pizza")
.then(res=>{
    console.log(`Mensaje: ` + res)
})
.catch(error=>{
    console.log(`Error: ` + error)
})