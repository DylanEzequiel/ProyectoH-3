import { AppDataSource } from "../config/data-source";
import { User } from "../entities/users";

export const userRepo = AppDataSource.getRepository(User)