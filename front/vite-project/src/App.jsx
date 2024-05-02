import React from 'react'
import './App.css'
import { HomeComp } from './views/home/home'
import { NavVar } from './components/navVar/navVar'
import  MisTurnos from "./views/Appointments/MisTurnos"
import Footer from './components/footer/footer'
import RegisterForm from './views/registerForm/Register'
import LoginForm from './views/loginForm/Login'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Profesionals from './views/profesionals/Profesionals'
import ScheduleAppoint from './views/Schedule/ScheduleAppoint'
import User from './views/user/User'


export default function App() {
  return (
    <div style={{minHeight:"100vh"}}>
      <NavVar/>
      <Routes>
        <Route path="/" element={<HomeComp/> }></Route>
        <Route path="/appointments" element={ <MisTurnos/>}></Route>
        <Route path="/profesionals" element={<Profesionals></Profesionals>}></Route>
        <Route path="/register" element={ <RegisterForm/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/schedule" element={<ScheduleAppoint/>}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
      <Footer/>
     
    </div>
  )
}

