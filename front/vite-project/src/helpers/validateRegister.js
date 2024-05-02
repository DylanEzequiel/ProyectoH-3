export default function validateRegister({name,email,birthdate,nDni,username,password,passwordConf}){
    const errors={}
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passRegEx = /^(?=.*[A-Z])(?=.*\d).+/
   
    if(!name || !email || !birthdate || !nDni || !username || !password || !passwordConf){ errors.name="Todos los datos son obligatorios"}
    
    //validaciones nombre
    if(name.length<4){errors.name="El nombre es muy corto"}
    else{
        if(name.length > 20){errors.name="El nombre es muy largo"}
    }
    if(!emailRegEx.test(email)){errors.email="ingresa el formato correspondiente"}
    
    
    //validaciones dni
    if(isNaN(nDni)){errors.nDni="Solo se permiten numeros"}
    else{
        if(nDni.length < 4){errors.nDni="el numero es muy corto"}
    }
    //validaciones username:
    if(username.length < 4){ errors.username="Username muy corto"}
    else{ if(username.length > 25){errors.username="Username muy largo"}}
    
    //validaciones password
    if( !passRegEx.test(password)){ errors.password="Le Faltam los minimos requeridos (una mayuscula y un numero)"}
    else{
        if(password.length < 4){errors.password="La contraseña es muy corta"}
        if(password !== passwordConf){errors.password="Las contraseñas no coinciden"}
    }

    return errors
}