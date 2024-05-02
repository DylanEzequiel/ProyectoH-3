import React from 'react'
import style from "./presentation.module.css"

export default function PresentationCard({name,img,desc}) {
  console.log(name + img + desc)
  return (
    <div>
        <div className={style.card}>
            <img src={img} alt={name} />
            <div className={style.card__content}>
                <p className={style.card__title}>{name}</p>
                <p className={style.card__description}>{desc}</p>
            </div>
        </div>

    </div>
  )
}
