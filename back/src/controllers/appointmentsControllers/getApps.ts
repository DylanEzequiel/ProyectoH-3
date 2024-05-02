// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
import {Request, Response} from "express"
import { getAllAppointments } from "../../services/appointmentsServices";

export default async (req:Request, res:Response) =>{
    try {
        const appoints = await getAllAppointments()
        res.status(200).json(appoints)
    } catch (error) {
        res.status(404).json(error)
    }
    
    
};
