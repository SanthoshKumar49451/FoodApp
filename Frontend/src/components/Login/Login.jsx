import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext'
import axios  from 'axios'

const Login = ({setShowLogin}) => {
  const {url,setToken,token}=useContext(Storecontext)
    const[currentState,setCuurentstate]=useState("Sign Up")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const onchangeHandler=(e)=>{
      const name=e.target.name
      const value=e.target.value
      setData(prev=>({...prev,[name]:value}))
    }
   const onLogin=async(e)=>{

    e.preventDefault();
     let newUrl=url;
     if (currentState==="Login") {
      newUrl+="/api/user/login"
      
     }
     else{
      newUrl+="/api/user/register"
     }
    
     const response= await axios.post(newUrl,data);
     console.log(response);
     
     if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
      
      
     }
     else{
      alert(response.data.message)
     }

   }
  return (
    <div className='login'>
        <form onSubmit={onLogin} className='login-container'>
            <div className="login-title">
                <h2>
                    {currentState}
                </h2>
                <img src={assets.cross_icon} alt=""  onClick={()=>setShowLogin(false)}/>
            </div>
            <div className="login-input">
                {currentState==="Login"?<></>:    <input  name='name' onChange={onchangeHandler} value={data.name} type="text" placeholder='Enter you name' required />}
            
                <input name='email' value={data.email} onChange={onchangeHandler} type="email" placeholder='Enter you Email' required />
                <input name='password' value={data.password} onChange={onchangeHandler} type="password" placeholder='Enter you password' required />
            </div>
            <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By Continiung,i agree to the terms of use&privacy policy</p>
            </div>
          {currentState==="Login"?  <p>Create a new account?<span onClick={()=>setCuurentstate("Sign Up")}>Click Here</span></p>: <p>Already have an account?<span onClick={()=>setCuurentstate("Login")}>Login Here</span></p>}
           
        </form>

    </div>
  )
}

export default Login