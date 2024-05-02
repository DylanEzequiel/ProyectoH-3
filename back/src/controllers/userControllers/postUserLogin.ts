import {Request,Response} from "express"
import { checkLogin } from "../../services/crendentialServices"
import { LogIn } from "../../services/userServices"

export default async (req:Request, res:Response) =>{
    try {
        const infoUser = req.body
        const user = await LogIn(infoUser)
        res.status(200).json({login:true,user})
    } catch (error:any) {
        res.status(404).json(error)
    }
}
