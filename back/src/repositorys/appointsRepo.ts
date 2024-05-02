import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointments";

export const AppointsRepo= AppDataSource.getRepository(Appointment)