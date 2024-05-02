import ICredentials from "../Interfaces/ICredentials";
import ICredentialsDTO from "../Interfaces/ICredentialsDTO";
import { IUserFrontDTO } from "../Interfaces/IUserDTO";

import IUser from "../Interfaces/IUsers";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/users";
import { userRepo } from "../repositorys/usersRepo";
import {checkLogin, createCredentials} from "./crendentialServices"



// Implementar una función que pueda retornar el arreglo completo de usuarios.

async function getUsers(){
    const allusers = await userRepo.find({
        relations: {
            appointments: true,
            
        },
    })
    if(allusers){return allusers}
    else{throw Error("Hay problemas")}
}

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

async function getUserById (id:number){
    const userFound = await userRepo.findOne({
        where: {id},
        relations: {appointments: true},
    })
    if(userFound){return userFound}
    throw Error("No se encontro changoo")
}

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

async function createUser (infoCreateUser:IUserFrontDTO){
    const credentials:ICredentialsDTO={username:infoCreateUser.username,password:infoCreateUser.password}
    const userCred= await createCredentials(credentials)
    if (userCred){
        const newUser = new User()
        newUser.name=infoCreateUser.name
        newUser.email=infoCreateUser.email
        newUser.birthdate=infoCreateUser.birthdate
        newUser.nDni=infoCreateUser.nDni
        newUser.credentials=userCred
        const savedUser= await userRepo.save(newUser)
        return savedUser}
    throw Error("fallo credenciales")
}

//funcion para recibir el Id de las credenciales y verificar el logIn
async function LogIn (infoUser:ICredentialsDTO){
    const cred = await checkLogin(infoUser)
    const user = await userRepo.findOneBy({credentials:{id:cred}})
    if (user) {return user}
    throw Error ("fallo en userservice")
}


export {getUsers, getUserById, createUser, LogIn}
 