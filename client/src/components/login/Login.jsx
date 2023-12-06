import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <div className="icon"><FaUserAlt /></div>
                    <input type="text" placeholder="Name" />
                    <div className="icon"><FaEnvelope /></div>
                    <input type="email" placeholder="Email" />
                    <div className="icon"><FaLock /></div>
                    <input type="password" placeholder="Password" />
                </div>    
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>

            </div>
        </div>
    )
}

export default Login;