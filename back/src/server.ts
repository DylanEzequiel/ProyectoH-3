import indexRouter from "./routes/indexRoutes";
import cors from "cors"
import morgan from "morgan"
import express from "express";


const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json());
app.use(indexRouter)


export default app