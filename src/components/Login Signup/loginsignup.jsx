import React, { useState } from "react";
import './loginsingup.css';
import userlogo from '../assets/user.png';
import emaillogo from '../assets/email.png';
import passwordlogo from '../assets/padlock.png';

const LoginSignup = () => { 
        const [action,setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={userlogo} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                <div className="input">
                    <img src={emaillogo} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={passwordlogo} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup


