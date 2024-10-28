class Usuario{
    constructor(username){
        this._username = username;
    }

    //obtener el username
    get username(){
        return this._username;
    }

    //set para validar la longitud del username
    set username(username){
        if(username.length >= 3){
            this._username = username;
        }else{
            console.log(`El nombre de ususario '${username}' debe tener al menos 3 caracteres`)
        }
    }
}

const usuario = new Usuario('Luz')
console.log(`Nombre valido: ${usuario.username}`)
usuario.username = 'Lu'

usuario.username = 'Lupe'
console.log(`Nombre valido: ${usuario.username}`)