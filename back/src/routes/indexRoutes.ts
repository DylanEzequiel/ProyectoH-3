const {Router} = require("express");
const indexRouter = Router();

import { getApps } from "../controllers/appointmentsControllers";
import appointmentRoutes from "./appointmentRoutes";
import userRoute from "./userRoutes";


indexRouter.use("/users", userRoute);
indexRouter.use("/appointment", appointmentRoutes);
indexRouter.get("/appointments", getApps);

export default indexRouter