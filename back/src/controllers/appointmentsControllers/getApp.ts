
// GET /appointment => Obtener el detalle de un turno específico.

import { Request, Response } from "express";
import { getAppointmentById } from "../../services/appointmentsServices";

export default async (req:Request<{id:number}>, res:Response) =>{
    try {
        const id:number = req.params.id
    const appointment= await getAppointmentById(id)
    res.status(200).json(appointment)
    } catch (error) {
        res.status(404).json(error)
    }
    
}