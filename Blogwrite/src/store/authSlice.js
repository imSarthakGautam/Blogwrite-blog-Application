import { createSlice } from "@reduxjs/toolkit";

//starting point, initially no idea about user and it's data
const initialState = {
    status: false,
    userData :null
}


//container-esque where app's state change is defined
const authSlice = createSlice({
    name:"auth",//label for better organization
    initialState,

    reducers : {
        //individual functions of reducers :

        //functions that change the state.
        login : (state, action)=> {
            console.log('storing login data after signup')
            state.status =true;
            state.userData = action.payload.userData;
    
        },

        logout : (state)=>{
            state.status= false;
            state.userData= null;
        }
     }

})

//exporting functions so that other parts of your app can use them
export const {login, logout} = authSlice.actions

//exporting for store to handle updates 
export default authSlice.reducer;
