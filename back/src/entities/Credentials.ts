import {Column, Entity,OneToOne,PrimaryGeneratedColumn} from "typeorm"
import { User } from "./users";

@Entity ({
    name:"CREDENTIALS" 
})

export class Credential {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    username:string;
    @Column()
    password:string;
}