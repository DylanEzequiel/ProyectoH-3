import React from "react"
import style from "./home.module.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
export const HomeComp = ()=>{
    
    const user = useSelector(state =>state.loggedUser?.user?.user)
  console.log(user)
    return(
       <div className={style.father}> 
             <div className={style.container}>
                <h1>Hola!</h1>
                <p>En Salud Integral, nos enorgullece contar con un equipo multidisciplinario de profesionales altamente calificados y comprometidos con la salud y el cuidado de nuestros pacientes. Desde médicos generales hasta especialistas en diversas ramas de la medicina, nuestro objetivo es proporcionar una atención integral que aborde las necesidades médicas de cada individuo de manera personalizada y efectiva.</p>
                <hr />
                <p  className={style.label}><b>¿Listo/a para Empezar?
¡No esperes más para cuidar de tu salud!  da el primer paso hacia una vida más saludable y plena.</b> </p>        
                <NavLink  to="/register" className={style.link}>
                        <b>register</b>
                </NavLink>
                <hr />
                <p className={style.label}><b>Ya nos conocemos?</b></p >    
                <NavLink  to="/login" className={style.link}>
                        <b>Login</b>
                </NavLink>

            

            </div>
            <img className={style.img} src="https://i.pinimg.com/564x/ad/9f/46/ad9f469343a00877d8340e54879ae689.jpg" alt="img footer" />
       </div>
    )
}