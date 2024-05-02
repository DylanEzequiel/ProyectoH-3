import React, { useEffect, useState } from 'react'
import style from "../loginForm/login.module.css"
import validator from '../../helpers/validateSchedule'
import axios from "axios"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const POSTLINK = "http://localhost:3000/appointment/schedule"

export default function ScheduleAppoint() {
    const userID = useSelector(state =>state.loggedUser?.user?.user?.id)
    const navigate = useNavigate()
    
    useEffect(()=>{  console.log(userID);
        if(userID === undefined){ navigate("/")}},[])
  

    const [timeValue,setTimeValue]= useState({
        date:"",time:""
    })
    const [errors,setErrors] = useState({
        date:"No se obtivo fecha",
        time:"No se obtivo hora"
    })


    const ChangeHandler = (event)=>{
        setErrors(validator({...timeValue,[event.target.name]:event.target.value}))
        setTimeValue({...timeValue,[event.target.name]:event.target.value})
    };

    let req = {...timeValue, userID, status:"active"}
    console.log(req)
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        window.confirm
        axios.post(POSTLINK,req)
            .then(res =>{console.log(res.data);}, navigate("/appointments"))
            .catch(error =>{console.log(error.message);})
    }


  return (
    <div className={style.container}>
        <h2 className={style.title}>Guarda Tu Turno:</h2>
        <form className={ style.card } onSubmit={handleSubmit}> 
                <div className={style.card_header}>
                     <h1 className={style.form_heading}>Save Appointment</h1>
                </div>
                
                
                <div className={style.field}>
                     <label htmlFor="date">Date</label>
                     <input className={style.input} 
                     name="date" 
                     type="date" 
                     required
                    value={timeValue.date}
                     onChange={ChangeHandler}
                     id="date"/>
                     <b className={style.error}>{errors.date? errors.date : null}</b>
                </div>
    
                <div className={style.field}>
                    <label htmlFor="time">Time</label>
                    <select name="time" 
                    id="time"
                    className={style.input} 
                    type="time" 
                    value={timeValue.time}
                    onChange={ChangeHandler}
                    placeholder="HH:HH" 
                    >
                        <option value="8:00">8:00</option>
                        <option value="8:30">8:30</option>
                        <option value="9:00">9:00</option>
                        <option value="9:30">9:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                    </select>   
                    <b className={style.error}>{errors.time? errors.time : null}</b>
                </div>
                
                
                <div className={style.field}>
                    <input 
                    type="submit" 
                    disabled={errors.time || errors.date}
                    className={style.button} value="Save Appointment "></input>
                </div>
                <div className={style.imgCont}>
                    <img  
                    className={style.image}
                    src="https://thumbs.dreamstime.com/b/apoyo-emocional-y-psicol%C3%B3gico-hombre-hablando-con-un-psic%C3%B3logo-sentado-en-el-sof%C3%A1-ilustraci%C3%B3n-vectorial-272186345.jpg" alt="" />
                </div>
            </form>
    </div>
  )
}
