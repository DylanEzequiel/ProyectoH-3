import {Request,Response} from "express"
import { getUserById } from "../../services/userServices"

export default async (req:Request <{id:number}>,res:Response) => {
    try {
        const userid:number = req.params.id
        const user= await getUserById(userid) 
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error)
    } 
}