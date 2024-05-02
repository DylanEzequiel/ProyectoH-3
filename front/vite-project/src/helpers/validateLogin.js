export default function validateLogin({username,password}){
    const passRegEx = /^(?=.*[A-Z])(?=.*\d).+/
    const errors={}

    //validaciones password
    if( !passRegEx.test(password)){ errors.password="Le Faltam los minimos requeridos (una mayuscula y un numero)"}
    else{
        if(password.length < 4){errors.password="La contraseña es muy corta"}
    }
    //Validaciones user
    if(username.length < 4){ errors.username="Username muy corto"}
    else{ if(username.length > 25){errors.username="Username muy largo"}}
    return errors
}

