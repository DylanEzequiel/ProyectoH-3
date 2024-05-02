import React, { useState } from "react";
import style from "../loginForm/login.module.css"
import validateRegister from "../../helpers/validateRegister";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function RegisterForm (){
    const [input, setInput]= useState({
        name:"",
        email:"",
        birthdate:"",
        nDni:"",
        username:"",
        password:"",
        passwordConf:""
    })

    const navigate = useNavigate()

    const [errors, setErrors]= useState({
        name:"Todos los campos son obligatorios"
    })

    const handleChange =(event) =>{
        setInput({
            ...input,
            [event.target.name]:event.target.value})
        setErrors(validateRegister({...input,
        [event.target.name]:event.target.value}))
    }

    const handleSubmit= (event)=>{
        
        event.preventDefault()
        
        const newUser={name:input.name,
            email:input.email,
            birthdate:input.birthdate,
            nDni:input.nDni,
            username:input.username,
            password:input.password}
        axios.post("http://localhost:3000/users/register",newUser)
        .then(res =>{console.log(res.data);})
        .then(alert("logueate con la nueva info"))
        .then(navigate("/login"))
        .catch(error =>{console.log(error.message);})
        
        setInput({name:"",email:"",birthdate:"",nDni:"",username:"",password:"",passwordConf:""})
       
    }
    console.log()
    return(
        <div className={style.container}>
            <h1 className={style.title}>Formulario de registro</h1>
            <div>
             <form className={ style.card }
                 onSubmit={handleSubmit}>
                <div className={style.card_header}>
                     <h1 className={style.form_heading}>Register</h1>
                </div>
                
                <div className={style.field}>
                     <label htmlFor="name">Name</label>
                     <input className={style.input} 
                     name="name" 
                     onChange={handleChange}
                     type="text" 
                     placeholder="Name" 
                     value={input.name}
                     id="name"/>
                     <b className={style.error}> {errors.name? errors.name :null} </b>
                </div>

                <div className={style.field}>
                     <label htmlFor="email">Email</label>
                     <input className={style.input} 
                     name="email"
                     onChange={handleChange}
                     type="text" 
                     placeholder="Email" 
                     value={input.email}
                     id="email"/>
                     <b className={style.error}> {errors.email? errors.email :null} </b>
                </div>
                
                <div className={style.field}>
                     <label htmlFor="birthdate">Birthdate</label>
                     <input className={style.input} 
                     name="birthdate" 
                     onChange={handleChange}
                     type="date" 
                     value={input.birthdate}
                     placeholder="Birthdate" 
                     id="birthdate"/>
                     <b className={style.error}> {errors.birthdate? errors.birthdate :null} </b>
                </div>
                
                <div className={style.field}>
                     <label htmlFor="dni">Dni number:</label>
                     <input className={style.input} 
                     name="nDni" 
                     onChange={handleChange}
                     type="number" 
                     value={input.nDni}
                     placeholder="Dni" 
                     id="dni"/>
                     <b className={style.error}> {errors.nDni? errors.nDni :null} </b>
                </div>

                <div className={style.field}>
                     <label htmlFor="username">Username</label>
                     <input className={style.input} 
                     name="username" 
                     onChange={handleChange}
                     type="text" 
                     placeholder="Username" 
                     value={input.username}
                     id="username"/>
                     <b> {errors.username? errors.username :null} </b>
                </div>

                <div className={style.field}>
                    <label htmlFor="password">Password</label>
                    <input className={style.input} 
                    onChange={handleChange}
                    name="password" 
                    type="password" 
                    value={input.password}
                    placeholder="Password" 
                    id="password"/>
                    <b className={style.error}> {errors.password? errors.password :null} </b>
                </div>
                <div className={style.field}>
                    <label htmlFor="passwordConf">Confirm Password</label>
                    <input className={style.input} 
                    onChange={handleChange}
                    name="passwordConf" 
                    type="password" 
                    value={input.passwordConf}
                    placeholder="Confirm Password" 
                    id="passwordConf"/>
                    <b className={style.error}> {errors.passwordConf? errors.passwordConf :null} </b>
                </div>
                
                <div className={style.field}>
                    <input type="submit" 
                    disabled={Object.keys(errors).length >0}
                    className={style.button} 
                    value="Register"/>
                </div>
                <div className={style.imgCont}>
                    <img 
                    className={style.image}
                    src='https://i.pinimg.com/564x/1a/25/1e/1a251eb756efc915032bdb42ff2b8322.jpg' alt="" />

                </div>
            </form>
        </div>

        </div>

    )
}