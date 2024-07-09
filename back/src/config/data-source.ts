import { DataSource } from "typeorm";
import { User } from "../entities/users";
import { Appointment } from "../entities/Appointments";
import { Credential } from "../entities/Credentials";
import { DT_PORT, HOST, PASSWORD, USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST || "localhost",
    port: DT_PORT || 5432,
    username:  "postgres",
    password: "12345",
    database: "demo",
    // dropSchema:true,
    synchronize: true,
    logging: false,
    entities: [User,Appointment,Credential],
    subscribers: [],
    migrations: [],
})