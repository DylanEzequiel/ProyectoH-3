import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";

export const credentialsRepo = AppDataSource.getRepository(Credential)