import axios from 'axios';
const API_url = '/api/user';

const register=async(userData)=>{
const response=await axios.post(API_url + "/register",userData)
localStorage.setItem("user",JSON.stringify(response.data))
return response.data;
}
const login=(userData)=>{
console.log(userData);
}
const authService=({
    register,
    login,
})
export default authService