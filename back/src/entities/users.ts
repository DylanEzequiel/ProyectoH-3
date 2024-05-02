import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import { Credential} from "./Credentials";
import { Appointment } from "./Appointments";

@Entity ({
    name:"USERS" 
})

export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    birthdate:string;
    @Column()
    nDni:number
    @OneToOne(()=> Credential)
    @JoinColumn()
    credentials:Credential
    @OneToMany(()=>Appointment, (appointment)=>appointment.user)
    @JoinColumn()
    appointments:Appointment[]
}
