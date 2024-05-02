import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    user:{},
    userAppointments:[],
}

export const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
         succesfulLogin: (state, action) => {
            state.user = action.payload},
    
         setUserAppointments:(state,action)=>{
            state.userAppointments = action.payload
         }    
        }

})

export const {succesfulLogin, setUserAppointments} = loginSlice.actions
export default loginSlice.reducer