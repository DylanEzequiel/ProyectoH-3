import ICredentials from "../Interfaces/ICredentials";
import ICredentialsDTO from "../Interfaces/ICredentialsDTO";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";
import { credentialsRepo } from "../repositorys/credentialsRepo";
import { userRepo } from "../repositorys/usersRepo";

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.


const createCredentials=async (InfoCreate:ICredentialsDTO) => {
    const newUser = new Credential
    newUser.username=InfoCreate.username,
    newUser.password=InfoCreate.password
    const savedCredentials = await credentialsRepo.save(newUser)
    return savedCredentials
}



// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 

const checkLogin = async (logIn:ICredentialsDTO): Promise<Credential["id"]> => {
    const {username,password}=logIn
    const user = await credentialsRepo.findOneBy({username})
    if(user && user.password === password){return user.id}
    throw Error("Contraseña o usuario incorrecto")
}

export {checkLogin, createCredentials}