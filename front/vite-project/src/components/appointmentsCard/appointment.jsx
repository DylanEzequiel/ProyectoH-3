import React from "react"
import style from "./appointmentCard.module.css"
import axios from "axios"
import {getTomorrow} from "../../helpers/validateCancell"

export default function Appointment ({id,date,time,status,handleCancel}){
   
    const handleClick=()=>{
        if(window.confirm("quieres cancelar?")){
            console.log(date)
            console.log(getTomorrow())
            if(date===getTomorrow()){window.alert("no se puede cancelar con un dia de anticipación")}
            else{handleCancel(id)}
        }
    }
       
        

   
    return(
        <div className={style.appointmentCard}>
            <h4>Turno dia: {date}</h4>
            <h4>Hora: {time}</h4>
            {status=== "active" 
            ? <label>Estado :Activo</label>
            : <label>Estado: Cancelado</label>}
            
            
            
            {status === "cancelled" ? null 
            : <button className={style.btn} onClick={handleClick} > Cancelar </button>}
        </div>
    )

}
