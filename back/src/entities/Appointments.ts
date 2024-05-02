import {Column, Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from "typeorm"
import { status } from "../Interfaces/IAppointments";
import { User } from "./users";

@Entity ({
    name:"APPOINTMENTS" 
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    date:string;
    @Column()
    time:string;
    @Column()
    status:status
    @ManyToOne(()=>User ,(user)=> user.appointments)
    user: User
}