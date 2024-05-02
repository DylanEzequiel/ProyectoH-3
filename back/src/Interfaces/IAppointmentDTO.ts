import { status } from "./IAppointments";

export default interface IAppointmentDTO{
    date:string,
    time:string,
    userID:number,
    status: status
}