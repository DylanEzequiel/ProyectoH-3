import { useEffect, useState } from "react"
import React from "react"
import Appointment from "../../components/appointmentsCard/appointment" 
import style from "../../components/appointmentsCard/appointmentCard.module.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {setUserAppointments} from "../../redux/slices"
import { useNavigate } from "react-router-dom"

export default  function MisTurnos(){

     
     let userId = useSelector(state =>state.loggedUser?.user?.user?.id)
     Number(userId)
     
     const userID = useSelector(state =>state.loggedUser?.user?.user?.id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //verifica que si el usuario esta logueado, si no lo esta redirige a home
    useEffect(()=>{  console.log(userID);if(userID === undefined){ navigate("/")}},[])
  


    const userAppointments = useSelector(state => state.loggedUser.userAppointments)
   
    //no se como hacer para que solo se actualice al ejecutar 
    useEffect(()=>{
     axios.get(`http://localhost:3000/users/${userID}`)
     .then(res=>res.data)
     .then(user =>user.appointments)
     .then(appointments => dispatch(setUserAppointments(appointments)))
     .catch(error => console.log(error.message))
     },[dispatch]);
    
     const sortedAppointments = [...userAppointments].sort((a,b)=>{
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
          
     });
     
     const handleCancel = (id) =>{
          axios.put(`http://localhost:3000/appointment/cancel/${id}`)
          .then((res)=>{res.data})
          .then((res)=>{axios.get(`http://localhost:3000/users/${userID}`)
                .then(res=>res.data)
                .then(user =>user.appointments)
                .then(appointments => dispatch(setUserAppointments(appointments)))
                .catch(error => console.log(error.message))})
          .catch(error => console.log(error.message))}

    return(
       <div>
            <h3>mis turnos:</h3>
            <div className={style.appointmentsContainer}>
              { sortedAppointments.length?
                   sortedAppointments.map((appointment)=>{
                        return( <Appointment key={appointment.id} {...appointment}
                        handleCancel={handleCancel}/>)
                   }) 
                   : <b style={{textAlign:"center"}}>No hay turnos aun</b>
              }
            </div>
       </div>
    )
}

