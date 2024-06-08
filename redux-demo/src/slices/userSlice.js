import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        value:"Saurabh"
    },
    reducers:{

        changeName:(state,action)=>{
           state.value = action.payload
        }

    }

}) 

export const {changeName} = userSlice.actions

export default userSlice.reducer