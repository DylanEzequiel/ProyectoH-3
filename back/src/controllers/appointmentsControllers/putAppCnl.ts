// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
import {Request,Response} from "express"
import { cancellAppointment } from "../../services/appointmentsServices"

export default async (req:Request<{id:number}>, res:Response) =>{
   const Idapp:number = req.params.id
   try {
      console.log("hola");
      
    const cancelledAppoint = await cancellAppointment(Idapp)
    console.log("se cancelo con exito el appointment");
    res.status(200).json(cancelledAppoint)
   } catch (error:any) {
    res.status(404).json(error.message)
   }
}