
import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import authService from "./authService";


const userExist = localStorage.getItem('user')
const initialState={
    user:userExist ? userExist : null,
    isLoading:false,
    isuccess:false,
    isError:false,
    message:"",
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=> {
builder
.addCase(registerUser.pending,(state)=>{
state.isLoading=true;
})
.addCase(registerUser.fulfilled,(state,action)=>{
state.isLoading=false;
state.isError=false;
state.isuccess=true;
state.user=action.payload;
})
.addCase(registerUser.rejected,(state,action)=>{
    state.isLoading=false;
    state.isError=true;
    state.isuccess=false;
    state.user=null;
    state.message=action.payload;
})
.addCase(logOutUser.fulfilled,(state)=>{
    state.user=null;
})
    },
})

export const  registerUser=createAsyncThunk("register/user",async(userData)=>{
try {
    return authService.register(userData)
    
} catch (error) {
    const message=error;
    console.log(message);
}
})

export const loginUser=createAsyncThunk("user/login",async(userData)=>{
try {
    return authService.login(userData)
} catch (error) {
console.log(error);
 
}
});
export const logOutUser=createAsyncThunk("atuh/logout",async()=>{
  localStorage.removeItem("user")  
})

export default authSlice.reducer