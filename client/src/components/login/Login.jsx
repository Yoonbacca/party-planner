import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
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
                    
                </div>    
            </div>
        </div>
    )
}

export default Login;