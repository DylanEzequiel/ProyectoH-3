import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import style from "./user.module.css"
import { succesfulLogin } from '../../redux/slices'

function User() {
  
  const user = useSelector(state =>state.loggedUser?.user?.user)
  console.log(user)
  
  const navigate = useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{  console.log(user);if(user === undefined){ navigate("/")}},[])

  const handleLogout= (event)=>{
    if(window.confirm("Quieres salir?")){dispatch(succesfulLogin({
      user:{},
      userAppointments:[],
  }));
    navigate("/")}
  }

    return (
    <div className={style.container}>
        <div className={style.card}>
          <div>
            <img src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png" alt="profile picture" className={style.profile} />
            <hr/>
          </div>
          <div>
            <h3 className={style.title}>Name</h3>
            <b>{user?.name}</b>
            <h3 className={style.title}>DNI Number</h3>
            <b>{user?.nDni}</b>
            <h3 className={style.title}>Birthdate</h3>
            <b>{user?.birthdate}</b>
            <h3 className={style.title}>Email</h3>
            <b>{user?.email}</b>
          </div>
          <button className={style.button}
          onClick={handleLogout}>
            LogOut
          </button>
        </div>
        
    </div>
  )
}

export default User