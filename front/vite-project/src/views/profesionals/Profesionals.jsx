import React, { useState } from 'react'
import PresentationCard from '../../components/presentationCard/PresentationCard'
import profesionalsArray from './profesionalsArray'
import style from "./profesionals.module.css"

export default function Profesionals() {
    console.log(profesionalsArray)
    const [staff,setStaff] = useState(profesionalsArray)
    console.log(staff)
  return (
    <div className={style.father}>
        <h1>Este es nuestro equipo</h1>
        <p>En Salud Integral, nos enorgullecemos de ofrecer una atención médica integral y de calidad que se adapta a tus necesidades individuales. Nuestra clínica cuenta con un equipo de profesionales altamente calificados y comprometidos con tu salud y bienestar.</p>
        <div className={style.container}>
          {staff.map((prof,index) => {
              return(<PresentationCard key={index} {...prof}></PresentationCard>)
          })}

        </div>

    </div>
  )
}
