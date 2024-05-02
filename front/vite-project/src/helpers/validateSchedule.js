const validator = ({date,time})=>{
    const day = new Date(date)
    const a = Date.parse(day)
    const today = Date.now()
    console.log(day);
    console.log(a);
    console.log(today.toLocaleString());
    
    let errors ={date:"",time:""}
    if(!date){ errors.date="No se obtuvo fecha"}
    else {
        if(day.getDay()===5 || day.getDay() ===6){errors.date="Solo dias habiles (de lunes a viernes)"}
        if(a === today){errors.date="no se puede reservar para hoy"}
        if(a < today){errors.date="Solo fechas a futuras (no se invento el viaje en el tiempo)"}
            }
    if(!time){ errors.time="No se obtuvo hora"}
    return errors
}
export default validator