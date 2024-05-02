"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appointmentsControllers_1 = require("./controllers/appointmentsControllers");
var appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var express = require("express");
var app = express();
app.use((0, cors_1.default)());
app.use(express.json());
app.use((0, morgan_1.default)("dev"));
app.use("/users", userRoutes_1.default);
app.use("/appointment", appointmentRoutes_1.default);
app.get("/appointments", appointmentsControllers_1.getApps);
exports.default = app;
