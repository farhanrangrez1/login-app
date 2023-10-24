import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../features/user/authSlice"

const Login=()=>{
  const disptch=useDispatch()
  const [fromData,setFormData]=useState({
  email:"",
    password:"",
   })
  const {email,password,}=fromData
  const handleChange=(e)=>{
    setFormData(
      {
        ...fromData,
        [e.target.name]:e.target.value
      }
    )
  }
  const handelSubmite=(e)=>{
     e.preventDefault()
   disptch(loginUser(fromData))
    }

  return (
   <>
     <section class='heading'>
            <h1>
            </h1>
            <p>Please log in to get support</p>
          </section>
    
          <section class='form'>
            <form onSubmit={handelSubmite}>
              <div class='form-group'>
                <input
                  type='email'
                  class='form-control'
                  id='email'
                  name='email'
                  onChange={handleChange}
                  value={email}
                  // onChange={handleChange}
                  // value={email}
                  placeholder='Enter your email'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  name='password'
                  onChange={handleChange}
                  value={password} 
                  placeholder='Enter password'
                  required
                />
              </div>
              <div class='form-group'>
                <button class='btn btn-block'>Submit</button>
              </div>
            </form>
          </section></>
  )
}

export default Login