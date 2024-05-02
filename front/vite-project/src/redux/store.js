import {configureStore} from "@reduxjs/toolkit"
import  loginSlice  from "./slices";

const store = configureStore({
    reducer:{
        loggedUser:loginSlice
    }
})

export default store