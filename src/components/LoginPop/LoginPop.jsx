import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

  return (
    //For sign up from the user
    <div className='login-pop'>
      <form className="login-pop-container">
        <div className="login-pop-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-pop-inputs">
            {currState === "Login"?<></>:<input type="text" placeholder='Given Name' required />}
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign up"?"Create an account":"Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>I agree to the terms and conditions as set out by the user agreement.</p>
        </div>
        {currState === "Login"
        ?<p>No account?  <span onClick={()=>setCurrState("Sign up")}>Create one!</span></p>
        :<p>Already have an account?  <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPop
