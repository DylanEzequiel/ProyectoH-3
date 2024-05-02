import { getUsers, getUsersID, postUserLogin, postUserRegister, } from "../controllers/userControllers/index";
const {Router} = require("express");
const userRoute = Router(); 

userRoute.get("/", getUsers)

userRoute.get("/:id",getUsersID)

userRoute.post("/login", postUserLogin)

userRoute.post("/register", postUserRegister)

export default userRoute;