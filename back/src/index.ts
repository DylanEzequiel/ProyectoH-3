import app from "./server"
import {PORT} from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"

AppDataSource.initialize()
.then(res =>{
  console.log("conexion bien lograda");
  app.listen(PORT || 3000,()=>{
    console.log(`server listening on  https://localhost:${PORT || 3000}`)})
})


