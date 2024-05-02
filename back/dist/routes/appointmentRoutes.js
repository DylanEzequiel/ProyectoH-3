"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appointmentsControllers_1 = require("../controllers/appointmentsControllers");
var Router = require("express").Router;
var appointmentRoutes = Router();
appointmentRoutes.get("/", appointmentsControllers_1.getApp);
appointmentRoutes.post("/schedule", appointmentsControllers_1.postAppSche);
appointmentRoutes.put("/cancel", appointmentsControllers_1.putAppCnl);
exports.default = appointmentRoutes;
