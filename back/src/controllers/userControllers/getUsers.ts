import {Request,Response} from "express"
import {getUsers} from "../../services/userServices";

export default async (req:Request,res:Response)=>{
   try {
    const users = await getUsers()
    res.json(users);
   } catch (error:any){
        res.json(error)
   }
    
}