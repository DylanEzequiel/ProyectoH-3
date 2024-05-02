import React, { useState } from "react";
import style from "./login.module.css"
import validateLogin from "../../helpers/validateLogin";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { succesfulLogin } from "../../redux/slices";
import { useNavigate } from "react-router-dom";

export default function LoginForm (){

    

    const [loginForm, setLoginForm] = useState({
        username:"",
        password:""
    })

    const [errors,setErrors] = useState({
        username:"Todos los campos son obligatorios"
    })

    const handleChange =(event)=>{
        setLoginForm({...loginForm,
            [event.target.name]:event.target.value})
       setErrors(validateLogin({...loginForm,
            [event.target.name]:event.target.value}))
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit= (event)=>{
        event.preventDefault()
        alert("info enviada")

        axios.post("http://localhost:3000/users/login",loginForm)
        .then(res =>res.data)
        .then(userLogged => dispatch(succesfulLogin(userLogged)))
        .then(alert("usuario Logueado"))
        .then(navigate("/appointments"))
        .catch(error => {alert(error.message)})
    }
    return(
        <div className={style.container}>
            <h2 className={style.title}> Inicia Sesión </h2>
            <form className={ style.card }
                 onSubmit={handleSubmit} >
                <div className={style.card_header}>
                     <h1 className={style.form_heading}>Sign in</h1>
                </div>
                
                
                <div className={style.field}>
                     <label htmlFor="username">Username</label>
                     <input className={style.input} 
                     name="username" 
                     type="text" 
                     required
                     value={loginForm.username}
                     onChange={handleChange}
                     placeholder="Username" 
                     id="username"/>
                     <b className={style.error}>{errors.username? errors.username : null}</b>
                </div>
                
                <div className={style.field}>
                    <label htmlFor="password">Password</label>
                    <input className={style.input} 
                    name="password"
                    type="password" 
                    value={loginForm.password}
                    onChange={handleChange}
                    required
                    placeholder="Password" 
                    id="password"/>
                    <b className={style.error}>{errors.password? errors.password : null}</b>
                </div>
                
                
                <div className={style.field}>
                    <input 
                    type="submit" 
                   placeholder="Login"
                   disabled={Object.keys(errors).length >0}
                    className={style.button} value="Login"></input>
                </div>
                <div className={style.imgCont}>
                    <img 
                    className={style.image}
                    src="https://thumbs.dreamstime.com/b/apoyo-emocional-y-psicol%C3%B3gico-hombre-hablando-con-un-psic%C3%B3logo-sentado-en-el-sof%C3%A1-ilustraci%C3%B3n-vectorial-272186345.jpg" alt="" />

                </div>
            </form>
        </div>)
}