import { CANCELLED } from "dns";
import IAppointmentDTO from "../Interfaces/IAppointmentDTO";
import {IAppointment, status } from "../Interfaces/IAppointments";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointments";
import { User } from "../entities/users";
import { AppointsRepo } from "../repositorys/appointsRepo";
import { userRepo } from "../repositorys/usersRepo";


// Implementar una función que pueda retornar el arreglo completo de turnos.

async function getAllAppointments (){
    const appointments = await AppointsRepo.find()
    return appointments
}

// Implementar una función que pueda obtener el detalle de un turno por ID.

async function getAppointmentById (id:number){
    
    const appointmentbyID = await AppointsRepo.findOneBy({id})
    if(!appointmentbyID){return "no se encontro"}
    return appointmentbyID
    
}

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
let idApp = 1

async function createAppointment ({date,time,userID,status}:IAppointmentDTO){
    if(!userID){return "no se obtuvo userID"}
    const newAppointment= new Appointment()
    const user = await userRepo.findOneBy({id:userID})
        newAppointment.date=date
        newAppointment.time=time
        newAppointment.status=status
        if (user){newAppointment.user= user}
        const savedAppoint = await AppointsRepo.save(newAppointment)
       return savedAppoint
}

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

async function cancellAppointment (idApp:number ){
    let appointCancelled = await AppointsRepo.findOneBy({id:idApp})
    if(appointCancelled){appointCancelled.status=status.CANCELED
        AppointsRepo.save(appointCancelled)
    return appointCancelled}
    throw Error("no se encontro")
}

export {getAllAppointments,getAppointmentById,createAppointment,cancellAppointment}