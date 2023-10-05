import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const signinToken = createAsyncThunk("signinToken", async(token)=>{
    
   try {
    const response = await axios.post("https://backendminga.onrender.com/auth/signinToken",{},{
        headers: {
            Authorization:"Bearer " + token
        }
    })
    
    return{user: response.data.response.user, token: token}
   } catch (error) {
    console.log(error)
   }
})

export default signinToken