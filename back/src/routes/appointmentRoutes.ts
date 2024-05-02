import { getApp, getApps, postAppSche, putAppCnl } from "../controllers/appointmentsControllers"

const {Router} = require("express")
const appointmentRoutes= Router()

appointmentRoutes.get("/", getApps);
appointmentRoutes.get("/:id", getApp);
appointmentRoutes.post("/schedule",postAppSche)
appointmentRoutes.put("/cancel/:id",putAppCnl)

export default appointmentRoutes