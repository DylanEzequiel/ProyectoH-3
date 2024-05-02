import { NavLink } from "react-router-dom"
import logoPag from "../../assets/logoPagg.jpg"
import style from "./navVar.module.css"
import {useSelector} from "react-redux"

export const NavVar = ()=>{

    const login = useSelector(state =>state.loggedUser.user.login)

   return( 
   <nav className="navVar">
        
       <img src={logoPag} className={style.logoNav}/>
       
        <ul>
            <li>
                <NavLink className={style.linkNav} to="/">
                    <b>basic</b>
                </NavLink>
            </li>
            <li>
                { login === true? <NavLink className={style.linkNav} to="/Appointments">
                    <b>appointments</b>
                </NavLink> : null}
            </li>
            <li>
                <NavLink className={style.linkNav} to="/Profesionals">
                    <b>Profesinals</b>
                </NavLink>
            </li>
            <li>
            { login === true? <NavLink className={style.linkNav} to="/user">
                    <b>User</b>
                </NavLink> : null}
                
            </li>
            <li>
            { login === true? <NavLink className={style.linkNav} to="/schedule">
                    <b>Save Appoint</b>
                </NavLink> : null}
                
            </li>
        </ul>
    </nav>
    )
}