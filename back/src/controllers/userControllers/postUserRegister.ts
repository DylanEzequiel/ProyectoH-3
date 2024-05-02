import {Request,Response} from "express"
import { createUser } from "../../services/userServices"

export default async (req:Request, res:Response)=>{
    const infoUser= req.body
    try {
        const newuser=await  createUser(infoUser)
         res.status(201).json(newuser)
    } catch (error) {
        res.status(400).json(error)
    }
    
    
}