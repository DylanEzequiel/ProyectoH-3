// POST /appointment/schedule => Agendar un nuevo turno.
import {Request,Response} from "express"
import { createAppointment } from "../../services/appointmentsServices"

export default async (req:Request, res:Response)=>{
    try {
        const infoAppoint = req.body
        const createdAppoint = await createAppointment(infoAppoint)
        res.status(201).json(createdAppoint)

    } catch (error) {
        res.status(400).json(error)
    }
}